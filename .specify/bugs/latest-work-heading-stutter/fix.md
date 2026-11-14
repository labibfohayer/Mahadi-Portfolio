# Bug Fix: Heading Animation Stutter and Cursor Re-render Glitch in LatestWork

- **Slug**: `latest-work-heading-stutter`
- **Status**: Verified & Resolved
- **Date**: 2026-11-12

## Changes Applied

### 1. Hardened `src/components/TextReveal.tsx`
- Added `hasRevealedRef = useRef<boolean>(false)` to track completion status.
- Memoized `parsedLines` on a stable serialized string primitive `linesKey = (lines && lines.length > 0 ? lines.join('~|~') : (text || ''))` to prevent recalculation when identical array contents are passed.
- Added animation completion handler: `onComplete: () => { hasRevealedRef.current = true; }`.
- If `hasRevealedRef.current` is true, subsequent effect runs immediately lock word transforms to `yPercent: 0, rotation: 0` without resetting them back down to `yPercent: 110`.
- Added `invalidateOnRefresh: false` to the GSAP ScrollTrigger config to prevent sibling sections or scroll refreshes from re-triggering the text reveal.
- Guarded effect cleanup so it only kills unrevealed timelines and never resets revealed typography.

### 2. Surgical Refactor of `src/components/LatestWork.tsx`
- Extracted static lines constant outside component:
  ```tsx
  const LATEST_WORK_LINES = ['Some of our', 'latest work'] as const;
  ```
- Removed volatile React state (`cursorPos`, `cursorVisible`, `cursorRotate`) that previously forced 60-120 component re-renders per second on mouse movement.
- Implemented direct DOM updates via `gsap.quickTo` on `cursorRef` and `cursorIconRef`:
  ```tsx
  const xTo = gsap.quickTo(cursor, 'x', { duration: 0.18, ease: 'power3' });
  const yTo = gsap.quickTo(cursor, 'y', { duration: 0.18, ease: 'power3' });
  const rTo = gsap.quickTo(icon, 'rotation', { duration: 0.25, ease: 'power3' });
  ```
- Hover enter and leave handlers now trigger direct hardware-accelerated GSAP scale and opacity tweens:
  ```tsx
  gsap.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.2, ease: 'power2.out', overwrite: 'auto' });
  ```
- Passed stable `LATEST_WORK_LINES` reference into `<TextReveal />`.

## Empirical Verification Gate

1. **Build & Bundle Integrity Check**:
   - Command: `npm run build`
   - Result: Exited with code 0 in 2.24s.
   - Bundle output: Clean production bundle without TypeScript errors.

2. **Automated Playwright Simulation**:
   - Navigated to `http://localhost:5173/` and scrolled to `.latest-work__heading`.
   - Verified that words smoothly staggered into view (`power3.out`).
   - Simulated 40 rapid mouse movements across different quadrants of the viewport over 1.5 seconds.
   - Checked word state throughout: **0 reset or glitch events detected**.
   - Verified final state: all words settled stably at `matrix(1, 0, 0, 1, 0, 0)` with `opacity: 1` and `visibility: visible`.
   - Verified cursor card badge on card hover: activates smoothly via `gsap.quickTo` (`scale: 1, opacity: 1`) without re-rendering the heading or child cards.
