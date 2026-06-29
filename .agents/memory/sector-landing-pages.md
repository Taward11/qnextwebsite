---
name: Sector landing page conventions
description: How to build a new industry/sector solution page on the FileFlex Astro site.
---

# Building a new sector / solutions landing page

A sector page = `src/pages/<slug>.astro` importing `Layout`, `Nav`,
`fileflex.css`, `platform.css`, and a dedicated `src/styles/<slug>.css`.
Model structure on `credit-unions.astro`. Reuse `pf-*` primitives from
`platform.css` (`pf-section--dark/light/white`, `pf-eyebrow`, `pf-title`,
`pf-zt__card`, `pf-deep__card`, `pf-btn`, `#pf-cta` + `.pf-cta-buttons`).
Add page-specific pieces under a short prefix (e.g. `bk-` for banking) in
the page CSS. Register the page in the right `Nav.astro` menu (Solutions
for sectors, Use Cases for use cases).

**Why:** consistency across sector pages is a stated user preference, and
`inlineStylesheets:'always'` means each page's CSS is inlined — keeping
page-specific styles in their own file avoids bloating shared CSS.

## Images
- There is **no `@assets` Vite alias.** `attached_assets/` is NOT web-served.
  Copy images into `public/images/<slug>/` and reference by `/images/...` URL.
- The site uses webp everywhere; convert large PNGs with the installed
  `sharp` (`.webp({quality:82})`) before committing — infographics dropped
  from ~1.4MB PNG to ~120KB webp.

## FAQ
- No shared FAQ component. Define faq array in frontmatter, pass to
  `<Layout faq={...}>` (drives FAQPage JSON-LD schema), AND render a visible
  accordion with `<details>/<summary>`. Accordion styling pattern lives in
  `security.css` as `.sec-faq__*` (copy/rename per page).

## Validation
- `npm run build` runs `lint:links` via prebuild; vague CTA link text
  ("Learn More") without a descriptive `aria-label` fails the check.
