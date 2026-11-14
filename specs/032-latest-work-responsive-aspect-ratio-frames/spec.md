# Feature Specification: Latest Work Multi-Aspect-Ratio Video Frames

## Overview
Restructure and resize the 3 video showcase cards in the homepage "Latest Work" section (`src/components/LatestWork.tsx`) so that videos are no longer cropped or cut off. 

Each column is assigned its own tailored aspect-ratio frame, larger geometry, and matched video playlist:
1. **Left Frame (Slot 1 - Landscape Widescreen)**:
   - Houses all 16:9 Landscape videos (`slot-1-video-1.mp4`, `slot-2-video-1.mp4`, `slot-3-video-1.mp4`).
   - Frame aspect ratio: `aspect-[16/9]` (or `aspect-[16/10]`), sized wide and expansive so no widescreen visuals are cropped.
2. **Center Frame (Slot 2 - Portrait / Vertical Reel)**:
   - Houses all Vertical / Portrait videos (`slot-2-video-2.mp4` 9:16, `slot-2-video-3.mp4` 9:16, `slot-1-video-2.mp4` 4:5).
   - Frame aspect ratio: `aspect-[9/16]` (sleek vertical reel format), tall geometry with zero vertical clipping.
3. **Right Frame (Slot 3 - Custom / Square)**:
   - Houses all Custom and 1:1 Square videos (`slot-1-video-3.mp4` 1:1, `slot-3-video-2.mp4` 1:1, `slot-3-video-3.mp4`).
   - Frame aspect ratio: `aspect-[1/1]` (custom square format).

## Requirements & Acceptance Criteria
- [ ] **Requirement 1 (Video Categorization)**: Playlist videos in `src/components/LatestWork.tsx` reorganized strictly by aspect ratio (Landscape in Slot 1, Portrait in Slot 2, Custom/Square in Slot 3).
- [ ] **Requirement 2 (Tailored Frame Aspect Ratios)**:
  - Slot 1 (Left): `aspect-[16/9]` (or `aspect-[16/10]`).
  - Slot 2 (Center): `aspect-[9/16]`.
  - Slot 3 (Right): `aspect-[1/1]`.
- [ ] **Requirement 3 (Enlarged & Balanced Grid)**:
  - Rebalance column widths and gap spacing (`gap-8 xl:gap-12`) so frames are larger, expansive, and visually prominent.
  - Adjust vertical masonry spacers to maintain the staggered editorial rhythm without pushing tall cards off-screen.
- [ ] **Requirement 4 (Zero Video Cropping)**:
  - Videos fit naturally within their respective frames with zero awkward cuts.
  - Subtitle tags, sequential progress bars, and audio toggle buttons align cleanly on each frame size.
- [ ] **Requirement 5 (Interactive Integrity)**:
  - Clicking any video opens the correct Project Modal.
  - Audio mute/unmute and sequential 3-video autoplay loops continue working seamlessly.
- [ ] **Requirement 6 (Empirical Verification)**:
  - `npm run build` passes with 0 errors.
  - Playwright test captures screenshots of the 3 distinct frames in both Light and Dark themes.
