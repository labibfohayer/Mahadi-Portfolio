# Feature Specification: About "My Story" Deep Orange Slow Reading Light Flow

## Overview
Refine the sequential text light flow across the two paragraphs in the "My Story" section of the About page (`src/components/AboutPage.tsx` and `src/index.css`) according to user instructions:
1. **Pacing / Speed**: Dramatically reduce the flow speed to match natural, comfortable human reading cadence (~200 WPM, ~26–28s sweep across ~95 words).
2. **Color**: Switch the illuminated beam color to a rich, vivid **Deep Orange** (`#ea3a1b` / `#ff4f31`).
3. **No Background Shadows**: Remove all background/text shadows (`text-shadow: none !important`). Keep clean, crisp typography without fuzzy halos or glows.

## Requirements & Acceptance Criteria
- [ ] **Requirement 1 (Comfortable Human Reading Speed)**:
  - Increase cycle duration from 9.5s to ~28s (`STORY_SWEEP_DURATION = 25.5s`, `STORY_CYCLE_DURATION = 28.0s`).
  - Stagger delay per word: ~0.27s, matching natural reading cadence.
- [ ] **Requirement 2 (Deep Orange Light Beam)**:
  - When the flow reaches a word, its color transforms into rich Deep Orange (`#ea3a1b` / `#ff4f31`).
  - Subtle font-weight emphasis (`font-weight: 600`) during illumination.
- [ ] **Requirement 3 (Zero Shadows)**:
  - Remove all `text-shadow` in both resting and illuminated keyframe states.
  - No background blur, glow, or drop shadow.
- [ ] **Requirement 4 (Theme Invariance)**:
  - Light Mode: Resting text `#6a6862` (opacity 0.45) $\to$ Illuminated Deep Orange `#ea3a1b` (opacity 1.0).
  - Dark Mode: Resting text `#888680` (opacity 0.45) $\to$ Illuminated Deep Orange `#ff4f31` (opacity 1.0).
- [ ] **Requirement 5 (Empirical Verification)**:
  - `npm run build` succeeds with 0 errors.
  - Playwright test validates slow timing, absence of text-shadow, deep orange color, and captures screenshots.
