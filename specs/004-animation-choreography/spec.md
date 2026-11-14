# Spec 004: Comprehensive Section Reveal & Heading Motion Choreography

## Overview
Reverse-engineered and implemented the exact signature GSAP & ScrollTrigger motion choreography from `weichie.com` across all key headings and sections of the portfolio. This transforms static or hardcoded text into authentic, fluid editorial typography with word-level overflow masking and 6-degree tilt entrances, alongside the scrubbed horizontal slide and pop reveals for the footer.

## Core Implementations

### 1. `TextReveal` Component (`src/components/TextReveal.tsx`)
- **Signature Motion Formula**:
  - Initial state: `yPercent: 110`, `rotation: 6deg`, `transformOrigin: "0% 100%"`.
  - Staggered entrance: `yPercent: 0`, `rotation: 0deg`, `ease: "power3.out"`, duration `0.8s`, stagger `0.08s`.
  - Trigger: GSAP `ScrollTrigger` at `start: "top 88%"`, `once: true`.
  - Masking: Each word is wrapped in an inline-block container with `overflow: clip` to ensure crisp, baseline-clipped entrances without layout shifts.
  - Accessibility: Preserves semantic HTML and sets `aria-label` with the full untruncated text.

### 2. Upgraded Section Headings
- **Section 1**: `SimpleText.tsx` - `"Development partner"` (2 lines, staggered words).
- **Section 2**: `LatestWork.tsx` - `"Some of our latest work"` (2 lines, 5 words).
- **Section 3**: `TextSticky.tsx` - `"We build systems your business runs on."`.
- **Section 4**: `PartnersCall.tsx` - `"The partner you call"`.
- **Section 5**: `MeetTheTeam.tsx` - `"Meet the team"`.
- **Section 6**: `TechnologyPicker.tsx` - `"Tell us what you need."`.

### 3. Footer Motion Choreography (`Footer.tsx`)
- **Giant "Weichie" Wordmark**: Scrubbed ScrollTrigger timeline from `scale: 1.05, x: "20%"` to `scale: 0.85, x: "0%"` with `ease: "none"`.
- **Peace Hand Icon**: Spring pop entrance from `scale: 0, autoAlpha: 0` to `scale: 1, autoAlpha: 1` with `ease: "back.out(2)"`.
- **Copyright Text**: Smooth fade-in at the end of the scroll trigger timeline.

## Strict Watchdog Verification Checklist
- [x] Syntax & TypeScript integrity: `npm run build` succeeds in 2.21s with zero errors or warnings.
- [x] Empirical Playwright captures:
  - `anim_latest_work.png`: Verified staggered word reveal on `"Some of our latest work"`.
  - `anim_meet_team.png`: Verified word reveal on `"Meet the team"`.
  - `anim_technology.png`: Verified word reveal on `"Tell us what you need."`.
  - `anim_footer.png`: Verified scrubbed slide and spring pop on `"Weichie"` and peace hand.
- [x] Zero regressions: All interactive components (Hero 3D amphitheater, Latest Work parallax, Meet The Team marquee & centerpiece morph, Technology Picker interactive selection bar) remain 100% operational.
