# Feature Specification: About "My Story" Text Light Flow

## Overview
Implement an ambient, sequential "Light Flow" (kinetic reading luminescence wave) across the two paragraphs in the "My Story" section of the About page (`src/components/AboutPage.tsx`).

The light flow starts at the beginning of the story ("I am Mahadi Hasan..."), travels progressively and smoothly word-by-word through the sentences of paragraph 1, seamlessly transitions into paragraph 2, and concludes at the very end ("...sound effect, and pixel."). After reaching the end, it pauses gently and loops seamlessly.

## Visual Physics & Flow Mechanics
1. **Sequential Word Progression**:
   - The text is decomposed into individual tokenized word spans with micro-staggered CSS animation delays.
   - A traveling luminescence beam (~6–8 words wide with Gaussian falloff) glides continuously across the text.
   - Overall cycle duration: ~10 seconds (8.5s active sweep across ~98 words, 1.5s elegant pause before looping).
2. **Optical States**:
   - **Resting / Base State**:
     - Light Theme: `#666666`, opacity `0.58`.
     - Dark Theme: `#8a8882`, opacity `0.58`.
   - **Illuminated / Light Flow Beam State**:
     - Light Theme: `#111111`, opacity `1.0`, warm ambient glow (`text-shadow: 0 0 16px rgba(255, 79, 49, 0.4), 0 0 1px #111111`), font-weight `500`.
     - Dark Theme: `#ffffff`, opacity `1.0`, ethereal luminescence (`text-shadow: 0 0 18px rgba(255, 255, 255, 0.75), 0 0 28px rgba(255, 79, 49, 0.35)`), font-weight `500`.
3. **Zero Layout Thrashing & High Performance**:
   - Implemented via GPU-accelerated CSS keyframes (`will-change: opacity, color, text-shadow`).
   - Perfectly preserves semantic HTML paragraph structure, selection, and copy-pasting.
   - Honors `prefers-reduced-motion`.

## Acceptance Criteria
- [ ] Light flow starts at "I am Mahadi Hasan" and finishes at "sound effect, and pixel."
- [ ] Words illuminate progressively in a forward-flowing sequence across both paragraphs.
- [ ] Seamless loop with an elegant dwell before restarting.
- [ ] Verified across Light Mode and Dark Mode.
- [ ] `npm run build` succeeds with 0 errors.
- [ ] Playwright automated test validates animation progression and captures visual screenshots.
