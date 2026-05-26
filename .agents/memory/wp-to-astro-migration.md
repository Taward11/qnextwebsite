---
name: WP→Astro blog migration pipeline
description: Durable rules and gotchas for `.local/scrape/build.cjs` when migrating fileflex.com WordPress posts into the Astro content collection.
---

## FAQs render twice if inline `### Q?` blocks survive in body

The blog template (`src/pages/blog/[...slug].astro`) renders a dedicated `<section class="blog-post__faq">` from frontmatter `faq:`. WordPress posts also include the same questions inline as `### Question?` headings (because cheerio's `.html()` keeps the schema.org/Question markup). Without intervention, every FAQ appears twice on the page.

**Fix:** `build.cjs` runs a line-based scanner just before the markdown body is written. For each `json.faqs[i].q`, when a body line matches `^### <q>$` exactly, drop that line and every subsequent line until the next heading (`#`–`######`) or a CTA boundary. Scoped to `###` only (never `##` / `####`) so unrelated sections aren't eaten.

**Why a scanner, not a regex:** a `[^\n]+?...(?=heading)` regex over-matches when there's no blank line between the FAQ answer and the next heading (architect verified — it consumed the next `## Section`). A scanner with a `dropping` flag and an exact-question heading match is the only way to be safe across multi-paragraph answers, list answers, and tight heading boundaries.

**How to apply:** add FAQs to `.local/scrape/body2/<slug>.json` `faqs` array (or let extract_batch.cjs do it from the page's schema.org/Question markup). They auto-flow to frontmatter `faq:` → visible FAQ section → JSON-LD `FAQPage` schema in one path. Don't paste FAQ Markdown into the body.

## extract_batch.cjs takes slugs from argv

As of 2026-05-26, `.local/scrape/extract_batch.cjs` reads slugs from `process.argv.slice(2)` instead of a hardcoded array. Invoke per batch like `node .local/scrape/extract_batch.cjs slug1 slug2 …`; no edits needed between batches.

## Two-digit list items render as code blocks

WordPress→markdown frequently emits the 10th/11th/12th… items of a numbered list as `N.    \n     \n     ### **Heading:**\n     \n     -   body` (a bare numeric marker, then blank-indented continuation lines). micromark treats the 4–5 space indent as a code block, so the heading and body land inside `<pre><code>`. Single-digit items in the same list usually come out fine as `N.  ### **Heading:**` (heading inline).

**Fix:** add a POST_FIXES entry that collapses the broken item to the inline form — e.g. replace `'11.    \n     \n     ### **X:**'` with `'11.  ### **X:**'`. Same shape as the earlier "empty `1.  ` then 4-space-indented `###`" trap; both are flavors of "bare marker + indented heading → code block."

**How to apply:** after each migration batch, grep new posts for `^[0-9]{2}\.[[:space:]]*$` followed by blank/indented lines, or just preview any post with >9 numbered items.

## Pipeline order is fixed; legacy files must be re-restored every build

`build.cjs` writes every slug in `META` to `src/content/blog/<slug>.md` unconditionally, overwriting anything already there. A handful of legacy posts contain hand-edited Markdown that does not live in the scrape sources (no entry in `body2/`, or content that pre-dates the scraper). After every `node .local/scrape/build.cjs` run, restore those files with `git show HEAD:<path> > <path>` before running `npm run build`.

**Why:** Several early-migrated posts were tuned by hand for layout/typography fixes that aren't expressible through the build's transforms. They have no `body2/` source, but their slug is still listed in `META`, so the build re-emits a degraded version. Restoring from HEAD is the simplest way to keep them stable until they're either dropped from `META` or back-ported into the scrape pipeline.

**How to apply:** When adding a new post, just append to `META` and drop the `<slug>.body.html` + `<slug>.json` sidecar into `.local/scrape/body2/`. When touching the pipeline at all, run the build, then re-run the restore loop for the hand-edited legacy slugs, then `node .local/scrape/download.cjs`, then `npm run build`. Don't try to "fix" the overwrite — the restore step is the contract.

## Cross-post `/blog/` links: rewrite to fileflex.com when unmigrated

`rewriteLinks` builds a `LOCAL_SLUGS` set (from `src/content/blog/*.md` at script start) ∪ `Object.keys(META)`. Any `/blog/<slug>/` href whose slug is in neither is rewritten to `https://fileflex.com/blog/<slug>/`. Local ones stay relative.

**Why:** Source posts cross-link prolifically. With ~50/150 posts migrated, leaving them all relative produces dozens of dead links per post; turning every WP link absolute would break internal navigation as more posts get migrated. The set-based gate auto-adjusts as `META` grows — no per-batch cleanup needed.

**How to apply:** Don't hand-edit `/blog/...` hrefs in migrated md files; let the next build regenerate them. If a link is still wrong after a build, check whether the target slug is actually listed in `META` (typo / different slug shape on fileflex.com vs the local copy).

## Sidecar JSON shape and the `articleSection: null` problem

Each post in `body2/` has `<slug>.body.html` + `<slug>.json` (sidecar). Sidecar fields used by `build.cjs`:
- `description` / `excerpt` — Yoast meta; passed through `normalizeDesc` (see below) before frontmatter.
- `faqs: [{q,a}]` — extracted from schema.org `Question` itemprops; emitted as the frontmatter key `faq` (singular, not `faqs`).
- `categories` (informational; NOT used by build) — extracted from JSON-LD `articleSection`. Several posts have `articleSection: null` and no inline category links, so categories MUST be specified in the `META[slug].categories` entry.

**Why:** The original WP setup serialized categories inconsistently — some via JSON-LD, some via taxonomy links, some not at all. Authoring `META` per slug is the only reliable source of truth, and the zod schema caps `categories` at 5 entries (Astro build fails otherwise).

**How to apply:** When adding a post to `META`, always set `categories` explicitly using the canonical names already present in the taxonomy (lowercase ones like `data governance`, `higher education`, `smart cities` must stay lowercase; title-case ones like `Regulatory Compliance`, `Zero Trust Data Access`, `CMMC`, `NIST` must stay title-case). Trim to ≤5 if needed.

## Yoast description normalization quirks

`normalizeDesc` cleans three recurring source-data defects in `json.description` / `json.excerpt`:
1. `(.|!|?)([A-Z0-9])` → `$1 $2` — Yoast strips spaces between sentences when meta descriptions get truncated.
2. `\b([A-Z]{3,6})\1\b` → `$1. $1` — duplicated acronyms like `CMMCCMMC`, `NISTNIST` are concatenated source artifacts (originally `CMMC. CMMC...` flattened by a templater).
3. Trailing single uppercase letter at end of string — truncation artifact (e.g. `...environments.T`).

**Why:** These come from fileflex.com's CMS templater, not the markdown body, so they appear only in `description`/`excerpt`. They were caught by post-build review on a 10-post batch and would have leaked into SEO meta tags otherwise.

**How to apply:** If a future batch surfaces a *new* recurring meta-text defect, extend `normalizeDesc` rather than patching individual md files. The function is intentionally conservative (only the three patterns above); avoid generic "clean up text" rules that could damage legitimate content.

## Title-Case helper limitation: `IT` collapses to `It`

The title-caser used during META authoring produces `It Control` from `it-control`. Manually fix to `IT Control` (and similarly any other acronyms that look like English words) in the `META[slug].title` / `seoTitle`.

## List-item + 4-space-indent → accidental code block

When a numbered list item's content is removed (e.g. extracting an image out of `1.  ![img](...)`), do NOT leave the item empty with the heading still indented 4 spaces below — markdown will parse the indented heading as a code block. Either pull the heading inline into the same item (`1.  ### Step 1: ...`), or remove the empty `1.  ` marker entirely. The screenshot symptom is a `###` literal heading rendered inside a dark monospace block.

**Why:** CommonMark / remark treats 4-space indent inside an "open" list item as either continuation paragraph or a code block depending on what precedes it; an empty list line + blank line resets to code-block context.

**How to apply:** When writing a `POST_FIXES` rule that yanks content out of a list item, always include enough of the surrounding lines in the `find` string to capture the full original item AND the next line's indented continuation, then rewrite the replacement with the heading/text on the same logical line as the list marker.

## Inline blog video player mirrors homepage #ff-modal iframe

When a source post embeds a YouTube thumbnail+link, replace it with `<div class="blog-prose__video"><iframe src="https://www.youtube-nocookie.com/embed/<ID>?rel=0&modestbranding=1" ...></iframe></div>` plus a `<p class="blog-prose__caption--center">` caption. `.blog-prose__video` is a 16:9 wrapper defined in `src/styles/blog.css`. Same youtube-nocookie origin and `rel=0&modestbranding=1` query as the homepage `#ff-modal` iframe — keeps tracking and "watch on YouTube" CTAs minimized so the play stays in-page.

## Reading-time + author defaults

Author is consistently `Tom Ward` for the FileFlex blog corpus. Reading time is hand-estimated, typically 5–8 min — there is no reading-time auto-calc and no need for one.
