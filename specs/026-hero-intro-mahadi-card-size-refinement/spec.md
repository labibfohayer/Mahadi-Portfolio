# Specification: Hero Intro 3D Purple Floating Card Size Refinement

## Overview
Refine and reduce the physical dimensions, font size, padding, and extrusion scale of the 3D purple floating card (`.hero-mahadi-3d-card`) for "MAHADI HASAN" in the homepage hero intro.

Previously, the card inherited 100% of the surrounding heading's large font size (`font-size: clamp(2.5rem, 6.25vw + 1rem, 7.25rem)`), making the card, text, and shape excessively large ("বর্ডারটা, লেখাটা মানে শেপটা অনেক বড় হয়ে গেছে") compared to the surrounding editorial text ("The official portfolio", "of", ",").

This specification scales down the card to an aesthetically pleasing, harmonious proportion that integrates seamlessly into line 2 of the intro headline while preserving all 3D lighting, bevel alpha, and purple gradient characteristics.

## Requirements & Acceptance Criteria
- [ ] **Requirement 1 (Proportional Scaling)**: Set explicit `font-size: 0.68em` (or responsive clamp) on `.hero-mahadi-3d-card` so the cap-height of "MAHADI HASAN" balances elegantly with the capital letters of the surrounding editorial serif text ("The official portfolio").
- [ ] **Requirement 2 (Shape & Padding Refinement)**: Adjust card padding (`padding: 0.08em 0.38em`) and border-radius (`clamp(3px, 0.1em, 6px)`) so the purple border and slab do not overwhelm the line.
- [ ] **Requirement 3 (3D Extrusion & Bevel Tuning)**: Proportionally scale down the 3D box extrusion steps and drop shadows so the 3D effect remains crisp, realistic, and sharp at the refined card size.
- [ ] **Requirement 4 (Baseline & Vertical Centering)**: Ensure the card aligns cleanly with the lowercase word "of" and the trailing comma "," (`vertical-align: 0.06em`).
- [ ] **Requirement 5 (Theme Support)**: Preserve identical refined sizing across Light Theme and Dark Theme.
- [ ] **Requirement 6 (Build & Verification)**: `npm run build` succeeds with 0 errors. Playwright captures automated close-up and full-viewport screenshots confirming visual harmony.
