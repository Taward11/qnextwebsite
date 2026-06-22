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

## Email / PDF delivery (Cloudflare Pages Function + Resend)
Email automation IS implemented (the old HubSpot-gated path was removed). A static Astro site on
Cloudflare Pages can still run server code via a **top-level `functions/` dir** (Cloudflare Pages
Functions) — no Astro adapter, no change to the static build. The handler is
`functions/api/send-assessment.js` (`onRequestPost`, route `/api/send-assessment`).

Flow: client lazy-loads jsPDF + jspdf-autotable from cdnjs, builds the report PDF in the browser,
and POSTs it as base64 plus the scores/answers. The Function emails the prospect (PDF attached) and,
if `OWNER_EMAIL` is set, the owner (PDF + full answers table) via Resend.

**Why client-side PDF:** Cloudflare Workers runtime has no Puppeteer / Node PDF libs; generating in
the browser and attaching base64 avoids server-side PDF generation entirely and gives a real attachment.

**Open-endpoint risk:** `/api/send-assessment` is a public, unauthenticated mail-sending surface
(honeypot is trivially bypassable). It's hardened with strict input clamps + size caps, but real
abuse protection (Cloudflare Turnstile and/or rate-limiting rules) needs dashboard setup and is a
recommended follow-up before heavy promotion.

**How to apply / config:** Secrets live in the Cloudflare Pages dashboard env vars, NEVER in the
repo — `RESEND_API_KEY` (required), `OWNER_EMAIL` (owner copy), `FROM_EMAIL` (optional; must be a
Resend-verified sender, defaults to `onboarding@resend.dev` which only delivers to the Resend account
owner). The Astro dev server does NOT run Pages Functions, so `/api/send-assessment` 404s locally —
the client treats a failed POST as non-fatal (report still shows, PDF still downloadable). Note: email
was NOT previously wired anywhere in this repo despite a user belief that a "ZTDA assessment" had it.
