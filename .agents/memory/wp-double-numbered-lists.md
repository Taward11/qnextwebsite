---
name: WP double-numbered list unwrap
description: WordPress sometimes serializes a single ordered list as a doubly-nested one (`1. 1. ### **H**`); build.cjs unwraps it. Also handles the related "orphan numbered heading" tail.
---

WordPress occasionally serializes a "N reasons" article as a doubly-nested
ordered list where the outer markers are spurious group wrappers:

```
1.  1.  ### **Heading 1:**
            -   Body 1
        2.  ### **Heading 2:**
            -   Body 2
2.  3.  ### **Heading 3:**
        ...
```

The intended rendering is a flat 1..N list; the outer `1.` / `2.` numbers are
WP-Gutenberg block-grouping artifacts.

**Why:** without unwrap, markdown renders multiple disjoint `<ol start="N">`
fragments and the visible numbering drifts (4-deep nesting at minimum).

**How to apply (already in `.local/scrape/build.cjs`):**
- Detect block start: any line matching `^\d+\.\s+\d+\.\s+###`.
- Inside the block, strip the wrapper marker on first-of-item lines via
  `^(\d+)\.[ ]+(\d+\.[ ])` → `$2`, and dedent every line by 4 spaces.
- End the block at the next markdown heading (`^#{1,6} `).

**Related tail-case ("orphan numbered heading"):** the same WP export sometimes
emits the last 1–N items as standalone `### N. **Heading:**` headings with the
body bullet at column 0. A second transform in build.cjs converts these back to
list items and re-indents the body bullet by `(digits-in-N + 2)` spaces so it
aligns under the marker. Pattern is narrow (`### \d+. **...**` immediately
followed by `-` bullets) and safe across the corpus.

**Validation:** after build, `grep -c '<ol start=' dist/blog/<slug>/index.html`
should be 0 for posts shaped like "N reasons…" / "Top N…". `<h3>` containing a
leading numbered marker (`<h3...>N.`) is also a red flag.

**Source-truth caveat:** WP titles like "21 Reasons…" sometimes do not match
the actual body item count (e.g. body has 22). Trust the body; update META
title to match, since renumbering body content is fragile.
