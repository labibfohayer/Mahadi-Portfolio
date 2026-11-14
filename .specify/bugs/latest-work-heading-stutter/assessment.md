# Bug Assessment: Heading Animation Stutter and Cursor Re-render Glitch in LatestWork

- **Slug**: `latest-work-heading-stutter`
- **Reported**: 2026-11-12
- **Severity**: High (Animation Glitch & CPU/Render Bottleneck)

## Symptom Analysis from User Evidence

User Report:
> 'some of our latest work' এই লেখাটা যে একটা অ্যানিমেশন নিয়ে আসে, অ্যানিমেশনটা অনেক ঝামেলা করতেছে। বারবার বেজে যাচ্ছে, সরাসরি আসতেছে না, ল্যাগ করতেছে। এই ল্যাগটা যেন না করে, স্মুথলি যেন চলে আসে। কার্সরের সাথে এটার কোনো সম্পর্ক নাই, কার্সর নাড়াইলে এটা আবার নতুন করে অ্যানিমেশন করে আসতেছে।

Symptoms:
1. "Some of our latest work" heading stutters, resets, and lags instead of animating smoothly in once on scroll.
2. Moving the mouse/cursor anywhere on the page continuously cancels and restarts the text-reveal animation from scratch.

## Root Causes Identified

1. **Continuous React State Updates on Pointermove in `LatestWork.tsx`**:
   - `LatestWork.tsx` registered a window-level `pointermove` event listener that updated React state (`setCursorPos({ x: e.clientX, y: e.clientY })` and `setCursorRotate(tilt)`) on every mouse movement pixel.
   - This forced `LatestWork` and all of its descendants to re-render 60 to 120 times per second.

2. **Unmemoized Array Literal Passing**:
   - In `LatestWork.tsx`, `<TextReveal lines={["Some of our", "latest work"]} ... />` passed an inline array literal `["Some of our", "latest work"]`, creating a new array reference on every single render.

3. **Missing Animation State Locking in `TextReveal.tsx`**:
   - In `TextReveal.tsx`, `parsedLines` depended directly on the `lines` array reference, causing it to recalculate on every render.
   - `useEffect` had `parsedLines` in its dependency array. Each time it ran, the cleanup killed the GSAP timeline and reset the words to `yPercent: 110` (hidden below clip mask), then created a new ScrollTrigger timeline.
   - Furthermore, `TextReveal.tsx` lacked a `hasRevealedRef` flag, so it could not distinguish between a fresh mount and an unwanted reset during hover or cursor events.

## Proposed Remediation

1. **Refactor Cursor Physics in `LatestWork.tsx`**:
   - Remove `cursorPos` and `cursorRotate` from React state.
   - Use `useRef<HTMLDivElement>(null)` for `.cursor-card` and `useRef<HTMLSpanElement>(null)` for `.cursor-card__icon`.
   - Update cursor position and tilt directly via `gsap.quickTo` with hardware-accelerated transforms (`translate3d`), achieving 120fps fluid cursor movement with **0 component re-renders**.
   - Hover enter/leave will scale the cursor card directly via GSAP (`scale: 1, opacity: 1` / `scale: 0, opacity: 0`) without state re-renders.

2. **Stabilize `LatestWork` Constants**:
   - Declare `LATEST_WORK_LINES` as a static constant outside the component: `const LATEST_WORK_LINES = ['Some of our', 'latest work'] as const;`.

3. **Harden `TextReveal.tsx`**:
   - Memoize `parsedLines` against a primitive string key `linesKey = (lines ? lines.join('|') : text) || ''`.
   - Add `hasRevealedRef = useRef(false)`.
   - Once the words have entered or finished animating (`onComplete`), lock `hasRevealedRef.current = true`.
   - Prevent effect cleanup and re-runs from resetting words to `yPercent: 110` if already revealed.
   - Set `invalidateOnRefresh: false` so document resizes or ScrollTrigger updates from sibling sections cannot restart the heading animation.
