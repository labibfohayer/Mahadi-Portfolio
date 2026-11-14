# Feature Specification: Hero Intro "Mahadi Hasan" Orange Accent Styling

**Feature Branch/Directory**: `specs/019-hero-intro-orange-name-highlight`  
**Author**: Antigravity (Strict Watchdog)  
**Status**: In Progress  

---

## 1. Context & User Requirement
The user requested:
- In the homepage intro headline (`The official portfolio of Mahadi Hasan, crafting visual excellence`), highlight the name **"Mahadi Hasan"** in brand orange (`#ff4f31`).
- The surrounding text (`The official portfolio`, `of `, `,`, `crafting visual excellence`) must follow the global theme (dark text in light theme, white text in dark theme).
- The orange accent (`#ff4f31`) on "Mahadi Hasan" must remain constant across both light and dark themes.

---

## 2. Invariants & Surgical Scope

### 2.1 File: `src/components/HeroSection.tsx`
Change line 133:
```tsx
<span className="hero-homepage__title-line block will-change-transform">
  of <span className="text-[#ff4f31]">Mahadi Hasan</span>,
</span>
```

---

## 3. Strict Watchdog Quality Gate
1. `npm run build` passes with 0 errors.
2. Playwright automated browser test verifying:
   - "Mahadi Hasan" is enclosed in a span with color `#ff4f31` (rgb(255, 79, 49)).
   - Surrounding text inherits theme text color.
   - Captures screenshots in both light theme and dark theme.
