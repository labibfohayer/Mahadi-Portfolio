# Requirements Checklist: Latest Work Video Click Modal Navigation

- [x] Add `onSelectVideo` prop to `LatestWorkProps` in `LatestWork.tsx`
- [x] Connect video click in `CardVideoMedia` and card link in `LatestWork.tsx` to project ID
- [x] Add `initialProjectId` prop to `WorkPageProps` in `WorkPage.tsx`
- [x] Auto-open `ProjectModal` in `WorkPage.tsx` when `initialProjectId` is present
- [x] Wire up `selectedProjectId` in `App.tsx` and pass to `WorkPage` and `LatestWork`
- [x] Support URL hash `#work?project=:id` in `App.tsx`
- [x] Verify `npm run build` succeeds with 0 errors
- [x] Run Playwright automated browser test and capture screenshots of click flow and open modal
