# Feature Specification: Technology Picker & Requirements Builder

**Feature Directory**: `specs/002-technology-picker`  
**Status**: Completed & Empirically Verified  
**Date**: 2026-11-12

## 1. Feature Description
Reverse-engineer and rebuild the interactive "Tell us what you need." technology selection widget from `weichie.com` to achieve 100% pixel-perfect visual and behavioral parity.

## 2. Requirements & Exact Specifications
1. **Typography & Heading**:
   - Font Family: `'Season Mix', Georgia, serif`
   - Font Size: `clamp(2.75rem, 9.375vw + 0.625rem, 9.5rem)` (`145px` at desktop 1440px)
   - Line Height: `1.0`, Letter Spacing: `-0.02em`
   - Alignment: Centered with full stop (`Tell us what you need.`)
2. **Interactive Form Container (`.technology__form`)**:
   - Background: `#f4efea` (Weichie beige)
   - Border Radius: `24px` (`1.5rem`)
   - Max Width: `47.25rem` (`756px`)
   - Padding: `12px 16px` (`0.75rem 1rem`)
   - Contents:
     - Prefix: `"I need a"` in font-medium `18px`, color `#12110b`
     - Selected Pills: White `#ffffff` background, `12px` border-radius, label + `×` remove icon
     - Add Button (`+`): White `#ffffff`, `54px` x `54px`, `12px` border-radius, SVG plus icon, triggers smooth scroll & pulse wave on unselected rows
     - Next Button: White `#ffffff`, `12px` border-radius, right arrow icon (`→`). Opacity `0.4` and pointer-events disabled when no selection; active and hoverable when selection exists
3. **Technology Grid (`.technology__grid`)**:
   - Layout: 4 columns across at desktop (`repeat(4, minmax(0, 1fr))`)
   - 11 distinct items in exact order:
     - Row 1: Website | Artificial Intelligence | Branding | Applications (web & mobile)
     - Row 2: SEO/GEO | Shopify | API Integration | Website Migration
     - Row 3: Blockchain | Maintenance | Second Opinion
   - Each item row:
     - Left: Orange corner arrow SVG (`↳`) in `#ff4f31`
     - Center: Label in 17px font-medium `#12110b`
     - Right: Plus SVG (`+`), rotates 45 degrees into (`×`) when selected
     - Border Bottom: `1px solid rgba(18, 17, 11, 0.2)`
     - Padding: `32px 0px 8px`
     - State when selected: `opacity: 0.5`
