# Requirements Checklist: Navbar Home Button Integration

- [x] Add `Home` NavJumpLink before `Work` in desktop navbar
- [x] Ensure `Home` uses `splitGraphemes` and GSAP `letterJump` hover animation
- [x] Connect `onClick` to navigate to Home route and set hash to `#home`
- [x] Add `Home` link before `Work` in mobile navigation drawer
- [x] Set active state `!text-[#ff4f31]` when `currentRoute === 'home'`
- [x] Verify `npm run build` succeeds with 0 errors
- [x] Run Playwright automated browser test to verify navigation, active styling, and hover behavior
