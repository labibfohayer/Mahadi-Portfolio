# Requirements Checklist: Latest Work Multi-Aspect-Ratio Video Frames

- [x] `PLAYLISTS` updated in `src/components/LatestWork.tsx` to group Landscape, Portrait, and Custom videos.
- [x] `CardVideoMedia` updated to accept `aspectRatioClass` prop.
- [x] Slot 1 given `aspect-[16/9]` (Landscape frame).
- [x] Slot 2 given `aspect-[9/16]` (Portrait frame).
- [x] Slot 3 given `aspect-[1/1]` (Custom frame).
- [x] Grid gaps and column widths enlarged and balanced.
- [x] Click navigation to Project Modal verified.
- [x] `npm run build` succeeds with 0 errors.
- [x] Playwright test confirms 3 distinct frame sizes without video clipping.
