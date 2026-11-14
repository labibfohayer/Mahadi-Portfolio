# Feature Specification: Hero Intro Headline (Mahadi Hasan Portfolio)

**Feature Branch/Directory**: `specs/017-hero-intro-mahadi-portfolio-copy`  
**Author**: Antigravity (Strict Watchdog)  
**Status**: Completed  

---

## 1. Context & User Decision
The user selected **Option F** for the homepage intro headline:
- **Line 1**: `The official portfolio`
- **Line 2**: `of Mahadi Hasan,`
- **Line 3**: `crafting visual excellence`

This creates a world-class, prestigious, and balanced 3-line statement in Season Mix serif that gracefully floats onto the screen, dwells for comfortable readability, and smoothly transitions into the 3D amphitheater carousel.

---

## 2. Invariants & Surgical Scope

### 2.1 File: `src/components/HeroSection.tsx`
```tsx
<h1 
  ref={titleRef}
  className="hero-homepage__title absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 text-center pointer-events-none whitespace-nowrap flex flex-col items-center select-none"
  style={{
    fontFamily: "'Season Mix', Georgia, serif",
    fontSize: 'clamp(2.5rem, 6.25vw + 1rem, 7.25rem)',
    lineHeight: 1.05,
    letterSpacing: '-0.02em',
    gap: 'clamp(0.75rem, 1.25vw, 1.5rem)',
    color: 'var(--clr-text, #12110b)'
  }}
>
  <span className="hero-homepage__title-line block will-change-transform">The official portfolio</span>
  <span className="hero-homepage__title-line block will-change-transform">of Mahadi Hasan,</span>
  <span className="hero-homepage__title-line block will-change-transform">crafting visual excellence</span>
</h1>
```

---

## 3. Strict Watchdog Quality Gate
1. `npm run build` passes with 0 errors.
2. Playwright automated test validates:
   - Line 1: `The official portfolio`
   - Line 2: `of Mahadi Hasan,`
   - Line 3: `crafting visual excellence`
   - 3D carousel transitions smoothly into view.
   - Screenshot captured and saved.
