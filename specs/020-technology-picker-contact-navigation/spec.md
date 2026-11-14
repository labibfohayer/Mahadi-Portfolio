# Specification: Technology Picker to Contact Navigation with Pre-filled Needs

## Overview
Connect the "Tell me what you need" section (`TechnologyPicker.tsx`) on the homepage to the "Get in touch" (`ContactPage.tsx`) contact form. When a user selects any need tags under "I need +" and clicks the "Next &rarr;" button:
1. The app smoothly navigates to the Contact ("Get in touch") page (`#contact`).
2. The user's selected services/needs are pre-filled as active selected tags in the Contact inquiry form.
3. The tags are synchronized so the user can easily submit their inquiry with their desired services already indicated.

## Requirements & Acceptance Criteria
- [x] **Requirement 1**: `TechnologyPicker` accepts an `onNavigateContact?: (selectedNeeds: string[]) => void` callback prop.
- [x] **Requirement 2**: When 1 or more items are selected in `TechnologyPicker`, the "Next &rarr;" button is enabled, interactive, and styled with high-visibility hover states.
- [x] **Requirement 3**: Clicking "Next &rarr;" invokes the navigation callback with the array of selected human-readable service labels (e.g., `["YouTube Editing", "Thumbnail Design"]`).
- [x] **Requirement 4**: `App.tsx` routes the user to `contact` (`#contact?needs=...`) and updates contact prefilled services state.
- [x] **Requirement 5**: `ContactPage.tsx` accepts `initialSelectedServices` and includes all video editing & motion graphics services in its available/selectable services list, marking the passed services as selected with red/orange badge pills and `×` remove icons.
- [x] **Requirement 6**: If user refreshes on `#contact?needs=...`, the prefilled needs are restored from the URL hash.
- [x] **Requirement 7**: All existing styling, animations, theme toggles (dark/light), and navigation behaviors remain 100% intact with zero regressions.
