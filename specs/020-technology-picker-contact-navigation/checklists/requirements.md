# Requirements Checklist: Technology Picker Contact Flow

- [x] `TechnologyPicker.tsx` accepts `onNavigateContact` prop.
- [x] Next button triggers `onNavigateContact` when clicked with selected items.
- [x] `App.tsx` manages `contactNeeds` and parses from hash (`#contact?needs=...`) if present.
- [x] `ContactPage.tsx` handles `initialSelectedServices`, syncing them to `selectedNeeds` state and displaying them as active pills in the form.
- [x] `npm run build` passes with 0 type errors.
- [x] Automated Playwright test verifies selecting tags, clicking Next, landing on `#contact`, and verifying tags are checked across dark and light themes.
