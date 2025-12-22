# AI Coding Agent Instructions for ryanduan.is-a.dev

## Project Overview
Personal portfolio website built with **React 19 + TypeScript + Vite**. Single-page app with tab-based navigation (Home, Writing). Pages are pre-rendered as TSX—no external API calls. Post metadata and content live in code (see `WritingPage.tsx` template).

## Architecture Decisions

### Tab-Based Routing System
- **File**: [src/App.tsx](src/App.tsx) — Central router using react-router-dom with pathname-driven active tab detection
- **Pattern**: Tab state syncs URL: Home → `/`, Writing → `/writing`, nested paths (e.g., `/writing/foo`) resolve to Writing tab
- **Rationale**: Allows future deep-linking to specific posts; avoids client-only state
- **Types**: [src/types/tabs.ts](src/types/tabs.ts) defines `TabConfig` (lazy render function) and `TabId` union for compile-time safety

### Tabs Component — WCAG Accessibility
- **File**: [src/components/Tabs/Tabs.tsx](src/components/Tabs/Tabs.tsx)
- **Pattern**: Roving-focus tabs (keyboard: Arrow keys navigate, Home/End jump to first/last, Enter/Space activate)
- **Must preserve**: Ref arrays for focus management, ARIA attributes, `ariaLabel` prop for context
- **Extension**: When adding tabs, update `TabId` type in [src/types/tabs.ts](src/types/tabs.ts)

### Writing System — Embedded JSX Content
- **Type**: [src/types/writing.ts](src/types/writing.ts) — `Writing` interface with `content: React.ReactNode`
- **Current state**: Template in [src/pages/WritingPage.tsx](src/pages/WritingPage.tsx) (empty posts array with example)
- **Post format**: Each post is a JS object with `slug` (URL key), `title`, `summary`, `date?`, `content` (JSX element)
- **Rationale**: Avoids external markdown/CMS; content is type-checked and bundled with app
- **Display logic**: Click post → sets `activeSlug` state → renders full content; Back button clears slug

## Build & Development Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server with HMR (localhost:5173 default) |
| `npm run build` | `tsc -b` (type check) + Vite build → dist/ |
| `npm run lint` | ESLint on .ts/.tsx files (no fix flag—manual review) |
| `npm run preview` | Preview built output locally |

**Key detail**: Build chain is **type-check first**—compilation errors block Vite build. Always run `npm run build` before committing.

## Code Patterns & Conventions

### React Hooks Usage
- Prefer `React.useMemo` for derived state (e.g., activeIndex lookup, activePost filtering)
- Use `React.useCallback` for event handlers passed to children (stabilizes references)
- Example in App.tsx: `onTabChange` is memoized to prevent Tabs re-render

### TypeScript
- **Strict mode enabled** (tsconfig.json)
- Import types with `type` keyword: `import type { TabId } from "..."`
- Union types for finite states: `TabId = "home" | "writing"`

### Styling
- CSS Modules not used; global CSS in [src/index.css](src/index.css) and component-level CSS (e.g., [src/App.css](src/App.css))
- Class names follow BEM-lite: `.appRoot`, `.profilePhoto`, `.writingBack`
- **No CSS-in-JS or Tailwind**; maintain plain CSS approach

### Icons
- **Library**: react-icons/fa for Font Awesome icons (see HomePage profile links)
- Example: `import { FaGithub } from "react-icons/fa"` → `<FaGithub />`

## Critical Extension Points

### Adding a New Page
1. Create component in [src/pages/](src/pages/) (e.g., `ProjectsPage.tsx`)
2. Add to `tabs` array in [src/App.tsx](src/App.tsx) with `id`, `label`, `render` function
3. Update `TabId` type in [src/types/tabs.ts](src/types/tabs.ts): `export type TabId = "home" | "writing" | "projects"`
4. Add route logic in `activeId` calculation (App.tsx) if needed

### Adding a Writing Post
1. Create `Writing` object in `posts` array ([src/pages/WritingPage.tsx](src/pages/WritingPage.tsx))
2. Provide `slug`, `title`, `summary`, `date`, `content` (JSX)
3. Post will auto-appear in list; click activates detail view by slug

## Linting & Quality Standards
- **ESLint config**: [eslint.config.js](eslint.config.js) — extends Flat Config (not legacy .eslintrc)
- **Rules enforced**: 
  - React Hooks (exhaustive deps, rules of hooks)
  - React Refresh compatibility
  - TypeScript strict checks
- **No auto-fix in CI**: Review lint output manually before committing

## Future Phase Markers
- Comment in code indicates Phase 3 plans (real 404 page, more tabs)
- Search for `Later:` and `Phase 3` comments in [src/App.tsx](src/App.tsx)

---
**Last Updated**: December 2025 | Contact: ryanduan02+website@gmail.com
