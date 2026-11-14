# Feature Specification: Navbar Home Button Integration

**Feature Branch/Directory**: `specs/016-navbar-home-button-integration`  
**Author**: Antigravity (Strict Watchdog)  
**Status**: In Progress  

---

## 1. Context & User Requirement
The user requested:
- Add a **"Home"** button to the left of "Work" in the navigation bar (`Home`, `Work`, `Services`, `About`, `Get in touch`).
- When a user enters the portfolio or clicks this button, it navigates to the Home page (the landing view with 3D carousel, video playlist, etc.).
- The hover animation for the "Home" button must match the exact playful letterJump GSAP animation present on "Work", "Services", and "About".
- When on the Home route (`currentRoute === 'home'`), the "Home" button should be active (`!text-[#ff4f31]`).
- On mobile view drawer, "Home" should also be present at the top of the menu before "Work".

---

## 2. Invariants & Surgical Scope

### 2.1 Desktop Navigation in `src/components/Navbar.tsx`
Inside `<nav className="flex items-center gap-[24px]">`:
Add `<NavJumpLink>` for Home before Work:
```tsx
<NavJumpLink 
  href="#home" 
  label="Home" 
  isActive={currentRoute === 'home'}
  onClick={(e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('home');
      window.location.hash = '#home';
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }}
/>
```

### 2.2 Mobile Drawer Navigation in `src/components/Navbar.tsx`
Inside mobile navigation list:
Add `Home` link before `Work`:
```tsx
<a 
  href="#home" 
  onClick={(e) => {
    e.preventDefault();
    setMobileOpen(false);
    if (onNavigate) onNavigate('home');
    window.location.hash = '#home';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }}
  className={currentRoute === 'home' ? '!text-[#ff4f31]' : ''}
>
  Home
</a>
```

### 2.3 `App.tsx` Routing
Ensure `handleNavigate('home')` sets `window.location.hash = '#home'` or handles empty hash appropriately, and updates `currentRoute` to `'home'`.

---

## 3. Strict Watchdog Quality Gate
1. `npm run build` must compile with 0 TypeScript/Vite errors.
2. Automated Playwright test verifying:
   - "Home" link exists immediately to the left of "Work" in desktop navbar.
   - When on Home page, "Home" has the active red/orange color (`#ff4f31`).
   - Clicking "Work" changes route to Work, and "Home" loses active color while "Work" gains it.
   - Clicking "Home" brings the user back to the Home page.
   - Hovering triggers `handleMouseEnter` letterJump animation without error.
   - Screenshots captured and verified.
