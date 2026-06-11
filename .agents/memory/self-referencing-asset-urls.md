---
name: Self-referencing absolute asset URLs break on domain cutover
description: Why fileflex assets must be local, and how to recover the originals if missing
---
The site historically referenced its OWN brand assets via absolute
`https://fileflex.com/wp-content/uploads/...` URLs. While fileflex.com pointed at
the old WordPress site these resolved fine. After cutting fileflex.com over to the
new Astro site on Cloudflare Pages (no /wp-content/), every such URL 404s — nav
logo, footer logo, favicon, hero bg, homepage feature icons, partner logos.

**Rule:** never reference the site's own assets by absolute production-domain URL.
Always copy them into `public/images/` and reference as `/images/<file>` (relative
to site root). Keep the original WP filenames (incl. the double `.png.webp`
extension) so refs map 1:1.

**Recovery trick:** during a Cloudflare cutover, the apex (fileflex.com) serves the
new Pages site, but `www.fileflex.com` may still proxy to the OLD WordPress origin.
Download originals from `https://www.fileflex.com/wp-content/uploads/...` (verify
content-type is image/webp, not text/html — Pages returns the homepage HTML with
200 for unknown paths). Wayback had no snapshots of the .png.webp variants.
