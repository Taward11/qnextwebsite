---
name: Use-case landing pages
description: How the "Use Cases" nav landing pages are structured and a CTA-target decision for member portals.
---

## Pattern
Use-case landing pages (secure-lending-collaboration, secure-mortgage-collaboration,
secure-member-portals) all share one creative system: import `platform.css` (pf-*
primitives: pf-section/eyebrow/title/lede/zt__card/btn, #pf-cta) + `lending.css`
(ld-* classes: ld-hero__*, ld-list, ld-chal__card, ld-use__grid/card, ld-adv__grid,
ld-figure) and add only a small page-specific delta stylesheet. The ld-hero__* inner
classes are plain classes (not nested under #ld-hero), so a new hero id (e.g.
#mp-hero) can reuse them while supplying its own background image + gradient.

**How to apply:** new use-case page = clone an existing one, reuse pf-*/ld-*, add a
`<prefix>-*` css only for genuinely new layout, register it in Nav.astro under the
"Use Cases" menu.

## Member-portal CTA targets
The Secure Member Portals outline implied a "Member Portal Assessment" tool and a
"Secure Member Collaboration Guide" download that don't exist as deliverables.
**Decision:** assessment/guide CTAs point to existing /demo-request/ and /contact-us/
rather than build a new interactive assessment or link a nonexistent PDF.
**Why:** the task was "create a webpage," not build another jsPDF assessment tool;
linking a download button to a missing asset would be a broken/misleading link.
**How to apply:** if a real guide PDF or member-portal assessment tool is added
later, repoint those CTAs.

## Card visual-richness pattern (mp-badge)
To make card groups "more creative" without breaking the design system, use
`.mp-badge` (orange rounded-square icon chip, `rgba(232,89,10,0.1)` bg + line SVG)
above the kicker/label. For larger 2-up panels, add a photo header
(`.mp-panel__media` + `.mp-panel__body`, panel becomes a flex column with
`overflow:hidden`). Risk cards put the badge inline with the RISK label via
`.mp-risk-card__head`. Icons are inline aria-hidden line SVGs matching the
existing `.ld-use__icon` style — never icon-only links (the lint flags those).

## New use-case page recipe (cloning the pattern)
To add another use-case landing page, clone an existing one (e.g.
secure-member-portals or zero-trust-file-sharing). Import order:
fileflex.css + platform.css + lending.css + member-portals.css (for the shared
mp-* helpers) + a NEW page-specific stylesheet (prefix its selectors uniquely,
e.g. fs-). Reuse pf-* (sections/buttons/#pf-cta), ld-* (hero inner classes,
ld-list, ld-use__grid=4col, ld-adv__grid=3col, ld-figure), and mp-* (mp-two,
mp-panel/__media/__body, mp-badge, mp-framework). Add the nav item under the
'Use Cases' menu array in src/components/Nav.astro. Use ld-use__grid for 4
cards, ld-adv__grid for 5/6 cards. Mix mp-badge (chip) sections with
ld-use__icon (line-icon) sections for visual variety.

## Assessment-section precedent (IMPORTANT)
The user removed the "Free Assessment" panel from secure-member-portals and
switched its CTAs to "Request a Demo". When new page notes still include an
assessment section + assessment CTAs, default to OMITTING it and using
"Request a Demo" to stay consistent with the sibling pages — but flag the
deviation so the user can opt back in.
**Why:** raw content notes predate that editorial decision.

## Attached image handling
Attached PNG infographics were large (hero 5MB); convert to webp via ImageMagick
(`magick in.png -quality 82 out.webp`) and resize oversized backgrounds (hero to
1920px wide) before committing, to match the site's webp-everywhere performance norm.
Store under public/images/<page>/ (attached_assets/ is NOT web-served).
