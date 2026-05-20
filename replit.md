# Qnext Corp Website

Enterprise SEO & AI Search landing page for Qnext Corp, built with Astro.

## Project structure

```
src/
  layouts/Layout.astro   — Base HTML shell (head, meta, fonts)
  pages/index.astro      — Main landing page (all sections)
  styles/global.css      — All global CSS and design tokens
astro.config.mjs         — Astro configuration (port 5000)
package.json
```

## Development

```bash
npm run dev      # Start dev server at port 5000
npm run build    # Production build → dist/
npm run preview  # Preview production build
```

## Tech stack

- [Astro](https://astro.build) v4 — static site generator
- Vanilla CSS with CSS custom properties
- Google Fonts: Syne + DM Sans
- No JS frameworks — plain browser JS for nav/animations

## User preferences

- Keep sections as components when splitting out pages in the future
