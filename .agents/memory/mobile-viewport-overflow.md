---
name: Mobile viewport overflow
description: Off-screen fixed navigation can be caused by content elsewhere on the page.
---

When mobile navigation appears missing despite a visible computed style, check the entire page for horizontal overflow before changing the navigation.

**Why:** Mobile browsers can expand the layout viewport to accommodate overflowing content, moving a right-aligned fixed-header control beyond the physical screen. Both non-wrapping logo rows and long headings can independently trigger this.

**How to apply:** Compare the emulated device width, innerWidth, document scrollWidth, and button bounds at phone and tablet sizes. Verify after a fresh navigation as well as resizing; test opening and closing the menu.