# Feature Specification: About "My Story" Zero-Jitter 120fps Deep Orange Light Wave

## Overview
Eliminate all text jumping, jittering, shaking ("ভূমিকম্পের মতো ঝাকানাকা / লাফানো"), and layout thrashing in the "My Story" text light flow. 

Transform the animation into an ultra-smooth, continuous 120fps liquid wave ("ঢেউয়ের মতন ভেসে ভেসে") in Deep Orange (`#ea3a1b` in Light Mode, `#ff4f31` in Dark Mode) using pure inline color interpolation and zero layout modification.

## Root Cause Analysis
- Previous implementation animated `font-weight: 400` to `600` inside keyframes.
- Animating `font-weight` alters letterform metrics and character widths at runtime, continuously pushing downstream words on the line, triggering layout recalculations and causing words to hop lines, creating a visual tremor/earthquake effect.
- Using `display: inline-block` with `mr-[0.28em]` added box-model overhead and margin interference.

## Solution Architecture
1. **Zero Layout Shifts (CLS = 0)**:
   - Change `.story-light-flow-word` from `display: inline-block` to `display: inline`.
   - Remove all `font-weight`, `transform`, and margin mutations from `@keyframes`.
   - Standard semantic word spacing (`{' '}`) preserving native typography and natural line-breaking.
2. **Smooth Continuous 120fps Wave Physics**:
   - Continuous color and opacity gradient wave with `ease-in-out` interpolation.
   - Wave crest spans ~8–10 words smoothly fading in and out (Gaussian curve envelope).
   - `STORY_SWEEP_DURATION`: `22.0s`, `STORY_CYCLE_DURATION`: `24.0s` (~240 WPM comfortable reading cadence).
3. **Deep Orange Color**:
   - Light Mode: Resting `#72706a` (opacity 0.45) $\to$ Peak Deep Orange `#ea3a1b` (opacity 1.0).
   - Dark Mode: Resting `#8c8a82` (opacity 0.45) $\to$ Peak Deep Orange `#ff4f31` (opacity 1.0).
   - Zero text-shadows, zero background blur.

## Acceptance Criteria
- [ ] Absolutely zero layout shift or vertical/horizontal word hopping (words remain 100% stationary).
- [ ] 120fps fluid color wave floating smoothly across the text from "I am Mahadi Hasan" to "sound effect, and pixel."
- [ ] Rich deep orange highlight color without shadows.
- [ ] Verified across Light Mode and Dark Mode.
- [ ] `npm run build` succeeds with 0 errors.
- [ ] Playwright test verifies zero position displacement on word glyphs during animation.
