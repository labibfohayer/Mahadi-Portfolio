# Feature Specification: Latest Work Card Click to Work Video Lightbox Modal

**Feature Branch/Directory**: `specs/018-latest-work-card-video-modal-navigation`  
**Author**: Antigravity (Strict Watchdog)  
**Status**: In Progress  

---

## 1. Context & User Requirement
The user requested:
- In the `Latest Work` section on the homepage, there are 3 video cards running sequential video playlists.
- Add an interactive click action to each video card:
  - When a user clicks on any of the 3 video cards (or the video currently playing inside it), it should navigate to the **Work page** and immediately open that video inside the **Lightbox Project Modal** (with full HTML5 video controls: play, pause, seek, volume, fullscreen).
  - Just like clicking a video on the Work page opens the video player popup modal.

---

## 2. Invariants & Surgical Scope

### 2.1 File: `src/components/LatestWork.tsx`
- Add `onSelectVideo?: (projectId: number) => void` prop to `LatestWorkProps` and `CardVideoMediaProps`.
- Map the currently playing video in each slot to its corresponding project ID in `userProjects.json`:
  - Slot 1 videos (`slot-1-video-1.mp4`, `slot-1-video-2.mp4`, `slot-1-video-3.mp4`) -> IDs 1, 2, 3
  - Slot 2 videos (`slot-2-video-1.mp4`, `slot-2-video-2.mp4`, `slot-2-video-3.mp4`) -> IDs 4, 5, 6
  - Slot 3 videos (`slot-3-video-1.mp4`, `slot-3-video-2.mp4`, `slot-3-video-3.mp4`) -> IDs 7, 8, 9
- In `CardVideoMedia`:
  - On card click (except sound toggle button which has `e.stopPropagation()`), trigger `onSelectVideo(currentProjectId)`.
- In card container:
  - The anchor / card wrapper triggers `onSelectVideo(currentProjectId)` instead of dead link `#video-showcase-X`.

### 2.2 File: `src/components/WorkPage.tsx`
- Add `initialProjectId?: number | null` prop to `WorkPageProps`.
- When `initialProjectId` is passed, auto-select that project in `activeModalProject` so the lightbox modal opens immediately on mount or when `initialProjectId` changes.

### 2.3 File: `src/App.tsx`
- Add `selectedProjectId` state in `App.tsx`.
- Update `handleNavigate(route, projectId)` to record `selectedProjectId`.
- In hash change listener, parse `#work?project=:id` or `#work`.
- Pass `initialProjectId={selectedProjectId}` to `<WorkPage />`.
- Pass `onSelectVideo={(id) => handleNavigate('work', id)}` to `<LatestWork />`.

---

## 3. Strict Watchdog Quality Gate
1. `npm run build` must succeed with 0 errors.
2. Playwright automated test verifying:
   - On Homepage, clicking Card 1 navigates to `#work` and immediately opens the video lightbox modal for that video.
   - The `<video controls autoPlay>` is present in the modal.
   - Closing the modal leaves the user on the Work page.
   - Screenshots captured and verified.
