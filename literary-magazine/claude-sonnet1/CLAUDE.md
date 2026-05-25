# Literary Magazine Demo — CLAUDE.md

## Model Identity
- **Model:** Claude Sonnet 4.6 (claude-sonnet-4-6)
- **Subfolder:** literary-magazine/claude-sonnet1/
- **Do not write files outside this subfolder.**

## Project Purpose
Demo website for a student literary magazine. Minimalistic, black-and-white,
no login, no backend, no real content — placeholder cards and bracket labels only.

## Stack
- React 18 + Vite 5
- React Router v6
- Plain CSS (no Tailwind, no UI library)
- Runs on localhost:5173

## Design Rules (NON-NEGOTIABLE)
- Colors: #ffffff background, #000000 text/borders only
- No shadows, no gradients, no color accents
- Fonts: Georgia (headings), Helvetica Neue (body)
- Buttons: black bg, white text, sharp corners (no border-radius)
- All content is placeholder: use [Bracket Labels], never invent real info

## Pages & Routes
| Page             | Route             |
|------------------|-------------------|
| Home             | /                 |
| Submissions      | /submissions      |
| About Us         | /about            |
| Achievements     | /achievements     |
| Artworks         | /artworks         |
| Previous Issues  | /previous-issues  |
| GoFan            | /gofan            |
| Deadlines        | /deadlines        |

## Phase Status (update as you complete each phase)
- [x] Phase 0 — Outline approved
- [x] Phase 1 — Scaffolding complete
- [x] Phase 2 — Core pages complete (Home, About Us, Submissions)
- [x] Phase 3 — Content pages complete (Achievements, Artworks, Deadlines)
- [x] Phase 4 — Media pages complete (Previous Issues, GoFan)
- [x] Phase 5 — Polish complete

## Polish Notes (Phase 5)
- ScrollToTop component resets scroll on every route change
- 404 NotFound page added with back-to-home button
- `scroll-padding-top: 72px` prevents sticky navbar from covering anchor targets
- Hamburger menu auto-closes on viewport resize to desktop width
- `focus-visible` outline added for keyboard accessibility
- Inline styles removed; all styling in CSS files
- `page-heading + section-heading` margin rule prevents double-gap
