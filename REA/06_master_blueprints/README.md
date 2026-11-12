# REA Phase 06: Master Blueprints & AI Reconstruction Engine

## 🎯 Purpose & Scope
The `06_master_blueprints/` folder acts as the bridge between reverse-engineering data and actual code synthesis. It houses:
- Standardized AI master prompts to feed into Antigravity or any AI coder.
- Component-level specification templates.
- Strict anti-hallucination protocols to ensure zero-bug, production-ready TypeScript code.

---

## 📂 File Inventory
| File | Format | Purpose |
| :--- | :--- | :--- |
| `MASTER_RECONSTRUCTION_PROMPT.md` | Markdown | Reusable prompt blueprint that feeds extracted tokens, motion curves, and component schemas to the AI agent. |
| `section-spec-template.md` | Markdown | Technical spec sheet template for individual sections, detailing layout, responsive behavior, accessibility, and QA checks. |
| `README.md` | Markdown | Operational manual for prompt engineering and blueprint execution. |

---

## ⚡ Operational Protocols

### How to Reconstruct Any Component:
1. Complete Folders 01 through 05 for your target site.
2. Fill out `section-spec-template.md` with your specific section requirements.
3. Open `MASTER_RECONSTRUCTION_PROMPT.md`, fill in the section placeholders, and send it to your AI agent.
4. Review the generated code placed in `REA/07_reconstructed_builds/staging/`.
5. Execute Phase 07 QA verification before merging into production `src/components/`.
