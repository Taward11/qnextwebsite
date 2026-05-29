#!/usr/bin/env node
/**
 * Lint check: catch links with vague/generic text that lack a descriptive aria-label.
 *
 * Generic CTA text like "Learn More" / "Read more" / "Click here" hurts SEO and
 * accessibility (Lighthouse: "Links do not have descriptive text"). This script
 * scans .astro and .md/.mdx files and flags any link whose accessible name is only
 * a generic phrase without a contextual aria-label (HTML) or descriptive text (Markdown).
 *
 * It also catches the same SEO/accessibility gap on other controls:
 *   - <button> elements whose accessible name is only a generic phrase and that
 *     lack an aria-label (Lighthouse: "Buttons do not have an accessible name").
 *   - Icon-only <a>/<button> (their only child is an <img>/<svg>) that expose no
 *     accessible name — i.e. no aria-label/aria-labelledby/title on the control,
 *     no non-empty <img alt>, and no labelled <svg>.
 *
 * Usage:
 *   node scripts/check-link-text.mjs            # fail (exit 1) on any violation
 *   node scripts/check-link-text.mjs --warn     # report only, always exit 0
 */

import { readdir, readFile } from "node:fs/promises";
import { join, relative, extname } from "node:path";

const ROOT = process.cwd();
const SCAN_DIR = join(ROOT, "src");
const WARN_ONLY = process.argv.includes("--warn");

// Phrases that are too generic to stand on their own as link text.
const GENERIC_PHRASES = [
  "learn more",
  "read more",
  "find out more",
  "click here",
  "read here",
  "see more",
  "view more",
  "more",
  "here",
  "read",
  "this",
  "this link",
  "link",
  "details",
  "go",
];

const GENERIC_SET = new Set(GENERIC_PHRASES);

// Strip tags/entities/punctuation and normalize whitespace for comparison.
function normalize(text) {
  return text
    .replace(/<[^>]*>/g, " ") // drop nested tags
    .replace(/&[a-z]+;/gi, " ") // drop HTML entities (&rarr;, &nbsp; etc.)
    .replace(/[\u2192\u2190\u00bb\u00ab\u2026]/g, " ") // arrows, ellipsis
    .replace(/[^\w\s]/g, " ") // drop other punctuation
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function isGeneric(text) {
  return GENERIC_SET.has(normalize(text));
}

function lineOf(content, index) {
  return content.slice(0, index).split("\n").length;
}

// Scan HTML/Astro anchors: flag <a ...>generic text</a> without an aria-label.
function checkHtmlAnchors(content) {
  const violations = [];
  const anchorRe = /<a\b([^>]*)>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = anchorRe.exec(content)) !== null) {
    const attrs = m[1];
    const inner = m[2];
    // An aria-label (or aria-labelledby) supplies the accessible name.
    if (/\baria-label(ledby)?\s*=/i.test(attrs)) continue;
    if (isGeneric(inner)) {
      violations.push({
        line: lineOf(content, m.index),
        text: normalize(inner) || inner.trim(),
        kind: "anchor",
      });
    }
  }
  return violations;
}

// Scan HTML/Astro buttons: flag <button ...>generic text</button> without an aria-label.
function checkHtmlButtons(content) {
  const violations = [];
  const buttonRe = /<button\b([^>]*)>([\s\S]*?)<\/button>/gi;
  let m;
  while ((m = buttonRe.exec(content)) !== null) {
    const attrs = m[1];
    const inner = m[2];
    // An aria-label (or aria-labelledby) supplies the accessible name.
    if (/\baria-label(ledby)?\s*=/i.test(attrs)) continue;
    if (isGeneric(inner)) {
      violations.push({
        line: lineOf(content, m.index),
        text: normalize(inner) || inner.trim(),
        kind: "button",
      });
    }
  }
  return violations;
}

// True when `name` is present with a non-empty quoted value or any expression
// value ({...}, e.g. an Astro/JSX binding). Empty strings (alt="") don't count.
function hasNonEmptyAttr(attrs, name) {
  const re = new RegExp(
    `\\b${name}\\s*=\\s*(?:["'][^"']*\\S[^"']*["']|\\{)`,
    "i",
  );
  return re.test(attrs);
}

// True when the control itself carries an accessible name via attributes.
function hasOwnAccessibleName(attrs) {
  return (
    hasNonEmptyAttr(attrs, "aria-label") ||
    hasNonEmptyAttr(attrs, "aria-labelledby") ||
    hasNonEmptyAttr(attrs, "title")
  );
}

// True when nested icon markup supplies an accessible name.
function iconHasAccessibleName(inner) {
  // <img alt="something non-empty"> or <img alt={expression}>
  const imgRe = /<img\b([^>]*)>/gi;
  let img;
  while ((img = imgRe.exec(inner)) !== null) {
    if (hasNonEmptyAttr(img[1], "alt")) return true;
  }
  // <svg aria-label="..."> or <svg ... role="img">...<title>...</title>
  const svgRe = /<svg\b([^>]*)>/gi;
  let svg;
  while ((svg = svgRe.exec(inner)) !== null) {
    if (hasNonEmptyAttr(svg[1], "aria-label")) return true;
  }
  if (/<svg\b[^>]*\brole\s*=\s*["']img["'][\s\S]*?<title>\s*\S[\s\S]*?<\/title>/i.test(inner))
    return true;
  return false;
}

// Scan icon-only <a>/<button>: their only child is an <img>/<svg> and they expose
// no accessible name (no aria-label/title on the control, no img alt, no labelled svg).
function checkIconOnlyControls(content) {
  const violations = [];
  const controlRe = /<(a|button)\b([^>]*)>([\s\S]*?)<\/\1>/gi;
  let m;
  while ((m = controlRe.exec(content)) !== null) {
    const tag = m[1].toLowerCase();
    const attrs = m[2];
    const inner = m[3];
    // Must contain an icon and no visible text to be "icon-only".
    if (!/<img\b|<svg\b/i.test(inner)) continue;
    if (normalize(inner)) continue;
    // Any accessible name (on the control or its icon) clears it.
    if (hasOwnAccessibleName(attrs)) continue;
    if (iconHasAccessibleName(inner)) continue;
    violations.push({
      line: lineOf(content, m.index),
      text: "(icon-only, no accessible name)",
      kind: tag === "a" ? "icon-only anchor" : "icon-only button",
    });
  }
  return violations;
}

// Scan Markdown links: flag [generic text](url).
function checkMarkdownLinks(content) {
  const violations = [];
  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
  let m;
  while ((m = linkRe.exec(content)) !== null) {
    const text = m[1];
    // Skip image links ![alt](src)
    if (content[m.index - 1] === "!") continue;
    if (isGeneric(text)) {
      violations.push({
        line: lineOf(content, m.index),
        text: normalize(text) || text.trim(),
        kind: "markdown link",
      });
    }
  }
  return violations;
}

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else {
      yield full;
    }
  }
}

async function main() {
  const offenders = [];
  for await (const file of walk(SCAN_DIR)) {
    const ext = extname(file).toLowerCase();
    if (![".astro", ".md", ".mdx"].includes(ext)) continue;
    const content = await readFile(file, "utf8");
    const htmlViolations = [
      ...checkHtmlAnchors(content),
      ...checkHtmlButtons(content),
      ...checkIconOnlyControls(content),
    ];
    const violations =
      ext === ".astro"
        ? htmlViolations
        : [...htmlViolations, ...checkMarkdownLinks(content)];
    for (const v of violations) {
      offenders.push({ file: relative(ROOT, file), ...v });
    }
  }

  if (offenders.length === 0) {
    console.log("✓ link-text check passed: no vague link text found.");
    return;
  }

  offenders.sort((a, b) =>
    a.file === b.file ? a.line - b.line : a.file.localeCompare(b.file),
  );

  const label = WARN_ONLY ? "WARNING" : "ERROR";
  console.error(
    `\n${label}: found ${offenders.length} control(s) with no descriptive accessible name:\n`,
  );
  for (const o of offenders) {
    console.error(
      `  ${o.file}:${o.line}  ${o.kind} text "${o.text}"`,
    );
  }
  console.error(
    `\nFix: give the control descriptive visible text, or add an aria-label that` +
      ` describes its purpose/destination, e.g.\n` +
      `  <a href="/platform/" aria-label="Learn more about the FileFlex platform">Learn More</a>\n` +
      `  <button type="button" aria-label="Open search">…</button>   (icon-only)\n` +
      `  [read the zero trust guide](/blog/...)   (Markdown)\n`,
  );

  if (!WARN_ONLY) process.exitCode = 1;
}

main().catch((err) => {
  console.error("check-link-text failed to run:", err);
  process.exitCode = 1;
});
