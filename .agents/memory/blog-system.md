---
name: Blog system conventions
description: Non-obvious decisions baked into the Astro blog scaffold under src/content/blog and src/pages/blog.
---

## Marker-based component injection into Markdown body

To interleave custom Astro components (e.g. `<PostTable>`) at arbitrary positions inside rendered Markdown, the post page renders `<Content />` to an HTML string with `experimental_AstroContainer.renderToString(Content)`, then splits on `<!-- table:ID -->` comments and passes the parts to a `PostBody` component that interleaves the table for each marker. A trailing fail-safe appends any declared frontmatter table whose marker is missing from the body.

**Why:** Astro's `<Content components={{...}} />` only swaps named HTML elements; it cannot inject Astro components at arbitrary inline positions inside the rendered Markdown. Rendering to a string + splitting on HTML comment markers is the cleanest pure-Astro approach. HTML comments survive the default Markdown→HTML pipeline.

**How to apply:** Add table data in frontmatter (`tables: [{id, headers, rows, caption?}]`) and drop `<!-- table:summary -->` (or other id) anywhere in the body. If you add more interleavable components later, follow the same marker pattern (`<!-- foo:id -->`) and extend `PostBody`. Note `experimental_AstroContainer` is still experimental in Astro 4.x — re-verify on Astro upgrades.

## Image layout by filename (no per-image markup)

Body images in `.blog-prose` are full column width by default. Images whose `src` contains `quote`, `Quote`, or `infographic` float right at ~42% width with text wrapping. Featured/hero image is a separate `<img class="blog-post__hero">` not subject to these rules.

**Why:** WordPress source posts don't carry useful CSS classes through Markdown conversion, and per-image markup in MD is fragile. Filename conventions in the migrated assets (`*quote*`, `*infographic*`) already classify intent.

**How to apply:** Name new wrapping images with `quote` or `infographic` in the filename. Full-bleed images (like wide diagrams) should use neither keyword. Headings have `clear: both` so they're never pushed by a float.

## Author info lives in a lookup map, not frontmatter

Posts set only `author: "Tom Ward"` in frontmatter. Bio + avatar are resolved by `getAuthor(name)` in `src/lib/authors.ts`.

**Why:** Keeps bios consistent across all posts by the same author and avoids duplicating bio copy in every Markdown file. New authors = one entry in the map.

**How to apply:** To add an author, add a key to the `authors` map with `{name, bio, image}` and drop the avatar in `public/images/blog/authors/`. Unknown author names fall back to a generic avatar with empty bio.

## Slug helper is shared

Both `src/pages/blog/index.astro` (category chips on the listing) and the category route's `getStaticPaths` use the same `slugify()` from `src/lib/blog.ts`. Don't reimplement inline — divergent slug rules silently produce 404 category links for names with `&`, apostrophes, or Unicode punctuation.

## Routing & sidebar scope

Routes: `/blog/`, `/blog/[...slug]/`, `/blog/category/[category]/`, `/blog/tag/[tag]/`. No archive route by design. Sidebar shows Recent Posts, Categories, and Tags (Tags section is conditional on `tags.length > 0`).
