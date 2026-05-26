---
name: WP orphan-bullet re-indent in build.cjs
description: Why `build.cjs` re-indents under-indented `-` bullets that follow `N.  ### **Heading:**` items, and how the indent width depends on the marker.
---

## The pattern

WordPress→markdown frequently emits a numbered reason as:

```
N.  ### **Heading:**
   <indented blank, sometimes 4 sometimes 5 spaces>
[ optional EMPTY line ]
-   Body text   ← at col 0 or insufficient indent
```

This closes the `<ol>` and opens a fresh `<ul>` for the body bullet, then the *next* numbered item starts a new `<ol start=N+1>`. Visible symptom: numbering "skips" and the body bullet appears unindented relative to its heading.

## The rule

For a numbered list item to keep its body bullet inside the same `<li>`, the bullet must be indented to **`String(N).length + 3` spaces** (matches the marker width, e.g. `1.  ` = 4, `23.  ` = 5). A plain `-   ` at col 0 — or any indent shorter than that — breaks the list.

**Why:** CommonMark continuation rules treat a content line as belonging to the current list item only if it's indented at least to where the item's *content* started. Single-digit items get this right by accident; double-digit items frequently don't.

## How to apply

The repair is built into `build.cjs` as a body-level regex that runs after FAQ-strip but before final whitespace collapse:

```js
body = body.replace(
  /^(\d+)\.([ ]+)(### [^\n]+)\n([ \t]*\n)+([ ]{0,4})-[ ]+/gm,
  (m, num, gap, heading, _blanks, bulletIndent) => {
    const want = num.length + 3;
    if (bulletIndent.length >= want) return m;
    return `${num}.${gap}${heading}\n${' '.repeat(want)}- `;
  },
);
```

Verify after every batch with: `grep -c '<ol start=' dist/blog/<slug>/index.html`. Zero is the target for any newly-added post.

## Related list-shape bugs (handle separately)

Two other broken shapes are NOT fixed by this transform — they need slug-specific POST_FIXES:

1. **Heading-orphan, body-orphan** — e.g. `N.  ### **Heading:**\n     \n` immediately followed by `N+1.  Plain paragraph text` with no `###`. The heading item has no body; the next "item" is really the missing body of the previous one. Merge them and renumber everything below.
2. **Bare numeric marker** — `N.    \n     \n     ### **Heading:**` (the two-digit code-block trap, already documented in `wp-to-astro-migration.md`).
