---
name: Secure Lending Assessment tool
description: Non-obvious decisions behind /secure-lending-assessment/ scoring and delivery.
---

## Overall score normalization
The 6 sections' max points sum to **105**, not 100 (S1=15, S2/3/4/5=20 each, S6=10).
Overall is shown as a true `/100` = `round(totalRaw / 105 * 100)`. Category % = `round(raw/max*100)`.

**Why:** The client's spec example wrote the overall as "67 / 100" but 67 is the *raw* point
total (categories 11/15,12/20,18/20,10/20,13/20,3/10 = 67/105 = 64%). We treat "/100" as a
percentage for consistency with the category bars; 67 raw renders as **64/100**, Level 4
Managed Collaboration, Moderate Risk. Don't "fix" it to show raw 67 — that breaks the /100 scale.

**How to apply:** If questions/points change, the 105 max auto-derives from the frontmatter
`SECTIONS` config; keep `totalMax` computed, never hardcode 100/105.

## Email / PDF delivery limitation
The spec asked to email the PDF to the prospect AND a copy + all answers to the owner. The site
is fully static (Cloudflare Pages, no backend), so it cannot send email. Delivered: on-screen
report + `window.print()` PDF. Lead capture reuses the client-side HubSpot pattern but is **gated
behind an empty `HS_FORM` constant** (no dedicated form/properties exist) so submissions don't 400.
Full automation (prospect PDF + owner answers/scores) needs a serverless function + email service
and is a follow-up pending the owner's choice + email address.
