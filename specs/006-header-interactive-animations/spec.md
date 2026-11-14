# Spec 006: Header Interactive Animations & State Toggles

## Overview
Implement the complete set of authentic interactive animations and state toggles for the site header navigation as extracted from Weichie's production bundle. This includes the signature GSAP random "letterJump" hover effect on navigation links and call-to-action button, the dual-icon vertical rolling animation for Dark/Light mode theme toggle, the vertical sliding label animation for language switching (English/Bangla), and the pill scale/rotation interactions.

## Functional Requirements

### 1. Navigation Links Letter Jump Animation
- **Target Links**: `Work`, `Services`, `About`, `Insights`.
- **Character Splitting**: Each link's text must be split into individual character elements (`.nav-main__char`, `inline-block`).
- **Interaction**: On `mouseenter`, select 1 to 2 random characters from the hovered link and trigger a GSAP jump animation:
  - `yPercent: -40`
  - `rotation: random(-14, 14)`
  - `duration: 0.26s`
  - `ease: "power2.out"`
  - `yoyo: true`
  - `repeat: 1`
  - `overwrite: true`
- **Graceful degradation**: Non-breaking for touch/mobile devices or when `prefers-reduced-motion` is active.

### 2. "Get in touch" Pill Interactive Hover Animation
- **Letter Jump**: Split the "Get in touch" label so characters playfully jump on hover matching the nav items.
- **Badge Scale**: The orange-red round badge (`.pill-contact__icon`) scales up to `scale(1.2)` on hover.
- **Icon Rotation & Scale**: The peace-hand SVG inside the badge scales to `scale(0.92)` and rotates `-12deg`.
- **Surface Transition**: Smooth background color transition between `#f4efea` and `#eae3dc`.

### 3. Dark/Light Theme Toggle with Vertical Rolling Icons
- **Visual Design**: Circular pill button (`44px` x `44px`) matching Weichie's `--theme-toggle` specification.
- **Dual Icon Clip**: Contains both Sun and Moon SVG icons inside an `overflow-hidden` grid container (`.theme-toggle__clip`).
- **Hover Rolling Effect**:
  - In light mode: Sun is visible (`translateY(0)`), Moon is hidden below (`translateY(100%)`). On hover, Sun translates to `translateY(-100%)` and Moon rolls up to `translateY(0)`.
  - In dark mode: Moon is visible (`translateY(0)`), Sun is hidden below (`translateY(100%)`). On hover, Moon translates to `translateY(-100%)` and Sun rolls up to `translateY(0)`.
- **State Toggle**: Clicking the button toggles the `dark` class on `<html>` and updates `data-theme="dark"` / `data-theme="light"` with persistence in `localStorage`.

### 4. Language Switcher (EN / BN) with Vertical Slide Animation
- **Visual Design**: Pill button (`44px` height, `px-4`) matching `--lang-switcher`.
- **Dual Label Clip**: Contains active language label (`EN` or `BN`) and target language label (`BN` or `EN`) inside a clipped container.
- **Hover Slide Effect**:
  - Current label slides up to `translateY(-100%)`.
  - Target label slides into view from `translateY(100%)` to `translateY(0)`.
- **State Toggle**: Clicking toggles between `EN` and `BN` / বাংলা.

## Success Criteria
- [ ] Nav links (`Work`, `Services`, `About`, `Insights`) animate random character jumps on cursor hover without breaking layout.
- [ ] "Get in touch" button badge expands (`scale(1.2)`) and inner hand icon rotates (`-12deg`) on hover.
- [ ] Theme toggle displays authentic rolling icon animation between Sun and Moon on hover and toggles dark mode on click.
- [ ] Language switcher displays sliding animation between EN and BN on hover and toggles active language on click.
- [ ] Clean build (`npm run build`) with 0 errors.
