# Spec 005: Footer Giant Logo Cutoff & Bottom Scroll Overflow Fix

## Overview
Resolution of the bottom boundary cutoff issue on the footer's giant "Weichie" logo. In previous versions, the container `.footer__logo` had a fixed height (`142px`) while the rendered SVG was >265px tall (212px when scaled), and `footer` had restricted padding with `overflow-hidden`. This resulted in the bottom curves of the logo being clipped outside the document viewport, preventing users from seeing the complete wordmark even at maximum scroll.

## Key Requirements

1. **Remove Fixed Height on Logo Container**:
   - Change `.footer__logo` height from hardcoded `142px` to `auto` (or remove `style={{ height: '142px' }}`).
   - Allow the SVG wordmark to naturally dictate its container's geometric height matching authentic `weichie.com` behavior (~272px at 1440px viewport).

2. **Restore Authentic Responsive Padding**:
   - Update `footer` styling to use authentic Weichie padding:
     `paddingTop: 'clamp(3.75rem, 2.8125rem + 4.6875vw, 7.5rem)'`
     `paddingBottom: 'clamp(3.75rem, 2.8125rem + 4.6875vw, 7.5rem)'`
   - This ensures 112.5px of bottom breathing room at 1440px viewport and prevents any edge clipping.

3. **Align Transform Origin**:
   - Update `logoSvgRef` `transformOrigin` to `'0px center'` matching Weichie's production stylesheet (`.footer__logo svg { transform-origin: 0px center; }`), ensuring that scaling during ScrollTrigger scrub centers the logo vertically rather than clipping downward.

4. **Preserve Surrounding Layout & Functions**:
   - Keep office cards, badges, 5-column navigation, peace hand icon, and copyright line 100% intact.
   - Zero modifications to other components (`App.tsx`, `HeroSection.tsx`, `LatestWork.tsx`, etc.).

## Verification Checklist
- [ ] TypeScript & build verification: `npm run build` succeeds with exit code 0.
- [ ] Empirical Playwright verification: Scroll to maximum document bottom and confirm `logoSvg.getBoundingClientRect().bottom < window.innerHeight` with full glyphs visible.
- [ ] Visual inspection: Verify before vs after screenshots showing unclipped wordmark serifs and authentic padding.
