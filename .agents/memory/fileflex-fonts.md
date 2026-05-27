---
name: FileFlex site fonts
description: Which font stack the FileFlex Astro recreation actually uses, and which CSS is/isn't loaded.
---

# Fonts

**Site-wide font is Inter** — defined in `src/styles/fileflex.css` via `--font: 'Inter', system-ui, …`. All FileFlex pages render in Inter.

`src/styles/global.css` defines Syne (`--font-head`) + DM Sans (`--font-body`) but is **NOT imported** anywhere in the recreated FileFlex pages. Don't be misled by `replit.md` mentioning Syne/DM Sans — that's stale relative to the current import graph.

**How to apply:** when adding new CSS rules inside FileFlex page `<style>` blocks, use `font-family: 'Inter', sans-serif;` (or just let it inherit). Never set `Syne` or `DM Sans` on these pages — they aren't loaded and will fall back, looking visibly different from neighbouring text.

**Why:** misstated Syne to the user on the NAS monograms because I trusted `replit.md` over the actual imported stylesheet. Inter is the truth; check the imports, not the README.
