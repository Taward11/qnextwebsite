---
name: WP Visual Composer shortcode leakage
description: Stripping stray Visual Composer shortcodes that survive WP→Astro conversion.
---

Some WordPress posts embed Visual Composer shortcodes (`[vc_column_text]`, `[/vc_row]`, `[vc_column ...]`, etc.). The HTML→Markdown converter passes them through and backslash-escapes the brackets and underscores, producing literal text like `\[/vc\_column\_text\]\[/vc\_column\]\[/vc\_row\]` in the final MD that renders as visible garbage.

**Why:** Source HTML for some posts contains stray closing VC shortcodes after the last paragraph (and occasionally between sections). The conversion preserves them literally — there is no warning or build error; it surfaces only when reading rendered output.

**How to apply:** Add a sanitize regex in the build pipeline near the other body transforms, before whitespace collapse. The pattern must tolerate each of `[`, `/`, `_`, `]` being backslash-escaped independently, and must match the multi-segment names (`vc_column_text`, `vc_row_inner`, etc.) with optional attributes. After future batches, grep for `vc_column\|vc_row` across both the markdown sources and built HTML.
