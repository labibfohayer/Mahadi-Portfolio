# Feature Specification: Hero Intro Orange "Mahadi Hasan" with Bevel Alpha & Bold Typography

## Overview
Apply a **Bevel Alpha** 3D chiseled highlight effect and **Bold** typography (`font-weight: 700`) specifically to the brand orange text **"Mahadi Hasan"** in the homepage hero intro headline ("The official portfolio of Mahadi Hasan, crafting visual excellence").

All surrounding text retains standard font weight and theme colors. No external boxes, shapes, cards, or background slabs are added.

## Requirements & Acceptance Criteria
- [ ] **Requirement 1 (Targeted Scope)**: Only the text "Mahadi Hasan" inside line 2 (`of <span className="hero-mahadi-bevel-orange">Mahadi Hasan</span>,`) receives the styling.
- [ ] **Requirement 2 (Brand Orange Color)**: Color remains brand orange `#ff4f31`.
- [ ] **Requirement 3 (Bold Font Weight)**: Font weight set to `font-weight: 700` (`bold`).
- [ ] **Requirement 4 (Bevel Alpha Effect)**:
  - Top-left specular ridge highlight: `-1px -1px 0px rgba(255, 240, 230, 0.95), -1.5px -1.5px 0.5px rgba(255, 255, 255, 0.7)`.
  - Bottom-right chiseled shadow edge: `1px 1px 0px rgba(160, 30, 10, 0.85), 1.5px 2px 1px rgba(110, 20, 5, 0.65)`.
  - Works seamlessly across Light Mode and Dark Mode.
- [ ] **Requirement 5 (Empirical Verification)**: `npm run build` succeeds with 0 errors. Playwright test verifies `font-weight: 700`, `color: rgb(255, 79, 49)`, text-shadow, and captures screenshots.
