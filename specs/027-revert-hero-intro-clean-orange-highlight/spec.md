# Feature Specification: Revert Hero Intro to Clean Brand Orange Highlight

## Overview
Revert the homepage hero intro headline back to the initial, clean, elegant brand orange highlight design. 
All experimental 3D cards, green badges, purple backgrounds, shape containers, and multi-layer text shadows are completely removed from the name "Mahadi Hasan". 

The headline is restored to pure editorial serif typography (`Season Mix`) with "Mahadi Hasan" highlighted in the signature brand orange (`#ff4f31`):
```tsx
<span className="hero-homepage__title-line block will-change-transform">
  The official portfolio
</span>
<span className="hero-homepage__title-line block will-change-transform">
  of <span className="text-[#ff4f31]">Mahadi Hasan</span>,
</span>
<span className="hero-homepage__title-line block will-change-transform">
  crafting visual excellence
</span>
```

## Requirements & Acceptance Criteria
- [ ] **Requirement 1 (Revert Headline Structure)**: Line 2 of the intro headline in `src/components/HeroSection.tsx` is restored to `of <span className="text-[#ff4f31]">Mahadi Hasan</span>,`.
- [ ] **Requirement 2 (Clean CSS Cleanup)**: Remove unused `.hero-mahadi-3d-card` and `.hero-bevel-alpha-line` rules from `src/index.css`.
- [ ] **Requirement 3 (Theme Invariance)**:
  - In Light Theme: Surrounding text is dark charcoal (`var(--clr-text, #12110b)`), "Mahadi Hasan" is brand orange (`#ff4f31`).
  - In Dark Theme: Surrounding text is white (`#fdf9f9`), "Mahadi Hasan" is brand orange (`#ff4f31`).
- [ ] **Requirement 4 (Zero Regressions)**: All SaaS entrance/exit animations, 3D cylindrical carousel, and responsive clamps remain 100% intact.
- [ ] **Requirement 5 (Empirical Verification)**: `npm run build` succeeds with 0 errors. Playwright test verifies computed styles and captures screenshots in both light and dark themes.
