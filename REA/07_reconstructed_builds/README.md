# REA Phase 07: Staging, Clean Output & Visual QA Verification

## 🎯 Purpose & Scope
The `07_reconstructed_builds/` directory is the final quality assurance gate. It holds newly synthesized components in staging, benchmarks their rendering performance, checks TypeScript strictness, and records production deployments into the build registry.

---

## 📂 File Inventory
| File | Format | Purpose |
| :--- | :--- | :--- |
| `qa-verification-checklist.md` | Markdown | Exhaustive QA inspection checklist (TypeScript, 60 FPS, responsiveness, accessibility). |
| `build-registry.json` | JSON | Master tracking registry of all reconstructed components, staging paths, and deployment statuses. |
| `staging/` | Directory | Safe staging area for newly generated components before they touch `src/components/`. |
| `README.md` | Markdown | Operational guide for the QA gate. |

---

## ⚡ Operational Protocols

### Step 1: Stage the Reconstructed Component
Place newly generated code into `staging/[ComponentName].tsx`.

### Step 2: Run Compile & Verification Checks
1. Test TypeScript compilation:
   ```bash
   npx tsc --noEmit
   ```
2. Verify in local dev server (`npm run dev`) that the component renders without errors or hydration mismatches.

### Step 3: Complete QA Checklist
Fill out `qa-verification-checklist.md`. Ensure that:
- Memory is properly released on unmount (especially Three.js scenes).
- Device Pixel Ratio is clamped (`Math.min(window.devicePixelRatio, 2)`).
- Touch interactions on mobile behave cleanly.

### Step 4: Promote to Production
Once approved:
1. Copy the file into the appropriate directory in `src/components/`.
2. Update `build-registry.json` status to `"deployed"`.
