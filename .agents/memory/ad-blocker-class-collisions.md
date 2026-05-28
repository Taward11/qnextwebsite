---
name: Ad-blocker class-name collisions
description: Browser ad-blockers (uBlock, Brave Shields) auto-hide elements whose class names match common ad/consent patterns. Avoid these prefixes in your own CSS.
---

# Ad-blocker class-name collisions

uBlock Origin (EasyList + Annoyance lists), Brave Shields, AdGuard, and similar cosmetic-filter engines hide HTML elements purely by class/ID name — they don't need the element to be an ad. Build a legitimate UI section with one of these prefixes and your own users will see a blank space where it should be.

## Prefixes to AVOID for non-ad UI

- `gdpr-*`
- `cookie-*`, `cookies-*`
- `consent-*`
- `banner-*`, `top-banner-*`, `bottom-banner-*`
- `popup-*`, `modal-popup-*`
- `newsletter-*`, `signup-*`
- `subscribe-*`
- `ad-*`, `ads-*`, `advert-*`
- `sponsor-*`, `sponsored-*`
- `promo-*`

Also avoid IDs with the same prefixes.

## How to apply

Use short page-specific or feature-specific prefixes that don't intersect with these lists:
- `gdpr-compliance` page → `zp-*` (zero-pattern / generic)
- `partner-form` page → `pf-*`
- `try-fileflex` page → `tf-*`
- consent text inside a form → keep it inside a wrapper like `pf-consent`, not `consent-*`

## Why

Cosmetic filters are CSS selector lists applied via `display: none !important`. They run before your scripts and persist regardless of what your code does — there is no override from inside the page. The fix is always to rename.

## How this was discovered

The /gdpr-compliance/ page rendered fine in regular Chrome but appeared blank in Brave and in Chrome with uBlock. Inspecting showed the page's `<section class="gdpr-hero">` etc. were all `display:none` from an injected stylesheet. Renaming to `zp-*` fixed it without any other change.
