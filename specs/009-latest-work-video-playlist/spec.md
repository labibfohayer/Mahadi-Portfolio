# Feature Specification: Latest Work Multi-Video Continuous Queues

**Feature ID**: `009-latest-work-video-playlist`  
**Target Component**: `src/components/LatestWork.tsx`  
**Status**: `Draft` -> `In Progress`

---

## 1. Overview & Objectives

In the "Latest Work" showcase section (`LatestWork.tsx`), replace the 3 static image project cards with 3 continuous, sequentially looping video player cards.
The user provided 9 video files located in `/home/labib-fohayer/Documents/New folder/`:
1. `3D camera .mp4`
2. `ai.mp4`
3. `coffee.mp4`
4. `Comp 1_11.mp4`
5. `finish.mp4`
6. `kosto.mp4`
7. `mahadi hasan_1.mp4`
8. `Nazmul.mp4`
9. `Sequence 01_1.mp4`

These 9 videos are distributed evenly across the 3 project showcase slots (3 videos per slot):
- **Slot 1 (Card 1 - Left)**: Playlist 1 (Videos 1, 2, 3)
- **Slot 2 (Card 2 - Center)**: Playlist 2 (Videos 4, 5, 6)
- **Slot 3 (Card 3 - Right)**: Playlist 3 (Videos 7, 8, 9)

---

## 2. Requirements & Behavior

### 2.1 Playback Logic
- **Autoplay**: Videos start playing automatically on page load or when entering the viewport without requiring user click.
- **Muted by Default**: Per browser autoplay policies and user instructions, audio is muted initially (`muted`, `playsInline`).
- **Sequential Looping**:
  - When video 1 ends (`onEnded`), it immediately transitions and plays video 2.
  - When video 2 ends, it plays video 3.
  - When video 3 ends, it loops back and plays video 1 seamlessly.
- **Optional Sound Toggle**:
  - Each card provides an elegant, non-intrusive sound toggle button (e.g. Volume / Mute icon badge at the corner of the card).
  - Clicking the toggle unmutes the video so the visitor can listen to the audio track.
  - Clicking again mutes it.
  - Audio state is maintained cleanly without interrupting the video playback stream.

### 2.2 Performance & Optimization
- High-bitrate 4K files (e.g., `finish.mp4` at 208MB) can cause buffer stalls.
- Each video is optimized for fast web streaming with `-movflags +faststart`, H.264 video, AAC audio, and modern progressive loading, saved in `public/videos/latest-work/`.
- Object-fit is set to `cover` with rounded corners matching the Weichie card border-radius (`rounded-[20px]`).

### 2.3 Layout & Zero Regression Guardrails
- Maintain the exact 5-track masonry grid geometry of `LatestWork.tsx`.
- Keep the hover interaction, title, tags, and category labels.
- Preserve airplane icon callout and star icon callout.

---

## 3. Verification Criteria
1. Video files optimized and served from `/public/videos/latest-work/`.
2. TypeScript compilation passes with 0 errors (`npm run build`).
3. Browser verification confirms all 3 video cards play smoothly, advance to the next video when one finishes, and the sound toggle operates properly.
