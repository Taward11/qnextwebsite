---
name: Zero Trust Maturity Assessment report
description: How the /zero-trust-maturity-assessment/ PDF and on-screen results share content, and the canonical report format.
---

# Two parallel text surfaces, index-aligned

The page has TWO presentations of the same analysis, both fed from the `TEXT`
library in `src/pages/zero-trust-maturity-assessment.astro`:
- **Short** arrays (`TEXT.gaps`, `TEXT.recommendations`) → used by the on-screen
  `render()` results and the email payload to `/api/send-zt-assessment`.
- **Detailed** arrays (`TEXT.gapsDetailed`, `TEXT.recommendationsDetailed`) →
  used only by the downloadable PDF (`buildPdf`). These are threat-rich, multi-
  sentence expansions.

`gapsOf()` / `recsOf()` return **indices** (not strings); `compute()` maps those
indices into both the short and detailed arrays. So the detailed arrays MUST stay
index-aligned 1:1 with the short arrays — if you add/remove/reorder a gap or
recommendation, update both arrays at the same index or the PDF text will mismatch
the on-screen text.

**Why:** keeps the on-screen UI/email concise while the formal PDF reads like a
report, without duplicating selection logic.

# Canonical PDF report format

The user's reference report (from a sibling project) is the source of truth for the
PDF look. It is a multi-page Qnext/FileFlex report:
cover (CONFIDENTIAL eyebrow, title, "Prepared for", Current Maturity Level box with
L1–L5 pips) → Executive Summary + "Your Next Step" box → Zero Trust Maturity
Roadmap with "Your Position" → Score Breakdown by Category → What You're Doing Well
→ Identified Gaps & Opportunities (threat narratives) → numbered Recommendations →
closing "Request a Demo" CTA page. Black text, orange (`[232,89,10]`) highlights,
Qnext Corp copyright + fileflex.com footers.

**The reference DOES show per-category scores** (e.g. "5 / 7") next to each
dimension bar. An earlier pass removed scores based on a verbal "no scores" note;
the actual sample overrode that. Do not strip per-category scores back out.
