---
name: WordPress → Astro blog migration pipeline
description: Non-obvious traps when scraping fileflex.com WP posts to Astro markdown with cheerio + turndown. Helper script lives at .local/scrape/build.cjs.
---

## Table marker tokens must avoid underscores

Turndown escapes `_` in literal text. A placeholder like `__TABLE_MARKER_table1__` survives turndown but emerges as `\_\_TABLE\_MARKER\_table1\_\_`, breaking the comment-marker injection contract. Use a non-special token instead (e.g. `XXTABLEMARKERXXtable1XXENDXX`) and only convert to `<!-- table:table1 -->` after turndown runs.

**Why:** PostBody splits on `<!-- table:ID -->` comments to interleave tables. Escaped markers never match → tables silently get appended at the end instead of in-place.

## wpDataTables: class-based removal nukes the table

WP's wpDataTables plugin emits a wrapping `<div class="wpdt-c row wpDataTables ...">` *around* the table, but ALSO puts wpdt classes on every `<tr class="wpdt-cell-row">` and `<td class="wpdt-cell">` inside. A `$('[class*="wpdt-"]').remove()` selector wipes the rows along with the wrapper.

**How to apply:** When stripping plugin chrome, either (1) scope removal to specific tag names (`:not(table)` is insufficient — it only excludes the matched element, not its descendants), or (2) iterate matches and skip table-structural tags (`table, thead, tbody, tfoot, tr, th, td, col, colgroup`). For container wrappers that contain a `<table>`, **unwrap** (`$el.replaceWith($el.contents())`), don't remove.

## wpdtSimpleTable has `data-has-header="0"` but the first row IS the header

The simple-table variant has no `<thead>`; styles the first `<tr>` as a header instead. The extractor must treat "no thead" as "use first tr as headers, rest as data rows", and never trust `data-has-header`.

## Images live inside `<picture><source/><img/></picture>` wrapped in `<a href="/wp-content/uploads/...">`

Two unwrap passes needed in order:
1. Flatten `<picture>` → its `<img>` descendant
2. Unwrap `<a>` whose href matches `/wp-content/uploads/` and whose only meaningful content is the image

Without step 1, an `$a.children('img')` check returns 0 (img is a grandchild via picture) and the anchor survives, leaving broken WP upload hrefs in the final markdown.

## Images inside headings must be lifted out BEFORE rendering

WordPress posts often place an inline image inside `<h2>` to float it next to the heading. After turndown this becomes `## [![alt](src)](url)Heading text` — an unrenderable link-wrapped image embedded in a heading. Move each `<img>` (and any wrapping `<a>`) out to a sibling `<p>` BEFORE the heading, then strip any leftover empty `<a>` from the heading.

## Always strip empty headings post-conversion

After image lift-out and TOC/widget removal, a `<h2>` may end up with whitespace-only content. Regex `body.replace(/^#{1,6}\s*$/gm, '')` after the turndown pass removes them.

## Real hero lives OUTSIDE the body wrapper

On fileflex.com, the post's actual hero/cover image sits in `.single-post-content > .content-image` — a **sibling** of `.single-post-content-text`, not a descendant. If you scrape only `.single-post-content-text` as the body, the real hero is invisible to build.cjs and its `#root img` fallback grabs the first in-body image (often an infographic meant to float right) and misuses it as the hero.

**How to apply:** During extraction, read the hero from `.single-post-content > .content-image img` and either (a) prepend it as `<p><img/></p>` at the top of body.html so build.cjs picks it up, or (b) teach build.cjs to read `featured_image` from the sidecar JSON. Today's pipeline does (a).

**Why:** Wrong-hero is visually obvious to the user but builds clean and passes all schema checks — easy to ship and embarrassing to catch in review.

## Hero-image strip must check text nodes, not just element children

When the source places the featured image inline with body text (`<p><picture>…</picture>In today's rapidly evolving…</p>`), the hero-removal logic must NOT remove the parent `<p>` based on `p.children().length === 1` alone — `children()` is element-only and ignores text nodes, so the entire paragraph (including the body copy) gets nuked silently.

**How to apply:** Guard the `p.remove()` branch with `p.text().trim().length === 0`. When text is present, fall back to removing just the `<picture>` wrapper (or the bare `<img>`) so the surrounding copy survives.

**Why:** First paragraph of a section silently vanishing is invisible in the build output — only spotted by reading the rendered post against the source.

## CTA dedup

WP posts already contain inline "Learn More About FileFlex" / "Sign Up for a Free Trial" CTAs. If the script appends its own canonical CTA at the end, filter those existing CTA lines from the body first (line-prefix match on `[Learn More About FileFlex` / `[Sign Up for a Free Trial`) so the final post has exactly one.

## Empty YAML arrays must be `[]`, not omitted

If `headers` or `rows` come out empty, emit `headers: []` / `rows: []` explicitly — `headers:\n` with nothing after is parsed as `null` and fails the Astro content collection's `z.array()` schema. (In this migration, empty arrays only occurred as a symptom of the wpdt row-deletion bug; fixing that bug eliminated the case. But the guardrail is worth keeping.)

## Guardrail: source `<table>` count must equal markdown `<!-- table: -->` count

Easy parity check that would have caught both the marker-escape regression and the wpdt row-deletion regression on first build: for each slug, compare `grep -c '<table' source.html` against `grep -c '<!-- table:' out.md`. Mismatch = silent content loss.
