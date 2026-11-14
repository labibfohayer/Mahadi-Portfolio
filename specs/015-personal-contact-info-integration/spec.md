# Feature Specification: Personal Contact Info Integration (Mahadi Hasan)

**Feature Branch/Directory**: `specs/015-personal-contact-info-integration`  
**Author**: Antigravity (Strict Watchdog)  
**Status**: In Progress  

---

## 1. Context & Motivation
The user has provided their real personal contact information for Mahadi Hasan's personal portfolio:
- **Email**: `mahadihasan20125@gmail.com`
- **Phone / WhatsApp**: `01314632404` (International format: `+880 1314-632404`, clickable `tel:+8801314632404` and `https://wa.me/8801314632404`)
- **Location**: `Jigarthala, Dhanmondi, Dhaka, Bangladesh.`

Previously, the website displayed Weichie's placeholder corporate locations (Brussels & New York) with dummy European and US telephone numbers (`+32 469 129 449`, `+1 (929) 822-5127`) and dummy email (`hello@mahadihasan.com`).

---

## 2. Target Deliverables & Invariants

### 2.1 Contact Page (`ContactPage.tsx`)
- Update direct email link in hero text: `mahadihasan20125@gmail.com`.
- Update compact location cards:
  - Card 1: **Dhaka, Bangladesh** (`Mahadi Hasan Creative Studio`), Address: `Jigarthala, Dhanmondi, Dhaka, Bangladesh`, Phone: `+880 1314-632404` (`tel:+8801314632404`), Email: `mahadihasan20125@gmail.com`.
  - Card 2: **Worldwide & Remote** (`Global Remote Collaboration`), Available for global video editing & motion graphics commissions, WhatsApp/Phone: `+880 1314-632404`, Email: `mahadihasan20125@gmail.com`.

### 2.2 Footer (`Footer.tsx`)
- Update Office Cards:
  - Card 1: **Dhaka, Bangladesh** (`Jigarthala, Dhanmondi, Dhaka`, Phone: `+880 1314-632404`, Status: `Open for projects`).
  - Card 2: **Worldwide & Remote** (`High-speed remote workflows across global timezones`, Phone/WhatsApp: `+880 1314-632404`, Status: `Global Clients`).
- Update Col 5 "Business Inquiries":
  - Direct Phone: `+880 1314-632404`
  - Direct WhatsApp: `+880 1314-632404`
  - Email: `mahadihasan20125@gmail.com`
  - Location: `Dhanmondi, Dhaka, Bangladesh`

### 2.3 HTML Meta (`index.html`)
- Update description meta to reflect Video Editor & Graphic Designer located in `Jigarthala, Dhanmondi, Dhaka, Bangladesh`.

---

## 3. Strict Watchdog Quality Gate
1. `npm run build` must succeed with 0 errors.
2. Automated Playwright browser test verifying:
   - `mahadihasan20125@gmail.com` is present on both Contact Page and Footer.
   - `+880 1314-632404` is present and clickable.
   - `Jigarthala, Dhanmondi, Dhaka, Bangladesh` is rendered.
   - 0 dummy Belgian (`+32`) or US (`+1 929`) numbers remain.
