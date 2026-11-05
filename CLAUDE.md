# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A personal UX design portfolio (Jacob Hobzek). It's a React 18 + Vite 6 + Tailwind CSS v4 single-page app that started as a Figma Make export (original design: https://www.figma.com/design/vhGm4T9D1qzS0sQi79iXZF/Responsive-portfolio-website). It's deployed to GitHub Pages from `ethosviolet/MyPortfolio`.

## Commands

```bash
npm i                 # install
npm run dev           # dev server, served at /
npm run build         # production build to dist/, base path /
npm run build:pages   # build + copy index.html to 404.html (SPA fallback for GitHub Pages)
npm run preview       # serve the built dist/
```

There are no tests, no linter, and no `tsconfig.json`. Vite strips TypeScript without type-checking it, so type errors won't fail a build. The only check is whether `npm run build` succeeds.

## Deployment

`.github/workflows/deploy-pages.yml` runs `npm ci && npm run build:pages` and deploys `dist/` on every push to `main`. CI uses npm and `package-lock.json`, even though `package.json` lists a yarn `packageManager` and there is a `pnpm-workspace.yaml`. Keep `package-lock.json` in sync when you change dependencies.

`dist/` and `node_modules/` are gitignored. Don't commit them, because CI builds `dist/` itself.

## Architecture

- **Entry:** `index.html` → `src/main.tsx` → `src/app/App.tsx` (a `RouterProvider`) → `src/app/routes.ts`.
- **Routing** uses `react-router` v7 `createBrowserRouter` with `basename: import.meta.env.BASE_URL`. The base path in `vite.config.ts` is `/` for both dev and production, because the site is served from a custom domain root. The old GitHub Pages subpath `/MyPortfolio/` 404s the built assets on that domain. Use router `<Link>` for internal links. `Root.tsx` provides the shared header, nav, footer, and fixed `Background`, and renders pages through `<Outlet>`. Routes: `/` (Introduction), `/about` (AboutMe), `/projects`, and `/projects/:projectId` (ProjectDetail). The old `/projects/elearning-platform` URL redirects to `custom-caliente`.
- **Project content is duplicated in two places.** Card data lives in the `projects` array in `src/app/components/Projects.tsx`. Full case-study data lives in `projectsData` in `src/app/components/ProjectDetail.tsx`, keyed by slug. When you add or rename a project, update both. The slug in `Projects.tsx` must exactly match the `projectsData` key, and matching is case-sensitive (e.g. `Hubsub`).
- **Special cases by slug:** some image styling is chosen by slug in both files (`Hubsub` logo uses `object-contain`; `custom-caliente` artwork sits on a gradient frame; others use `object-cover`). HubSub uses optional `ProjectData` fields (glance, researchFindings, beforeAfter, testing, roadmap, learned) and has no Wireframes section. The other projects still show placeholder boxes and lorem ipsum copy.
- **Prototypes:** if `prototype.link` is a figma.com URL, `ProjectDetail` embeds it in an iframe via `figma.com/embed`.
- **Images** go in `src/imports/` and are imported as ES modules (for example, `import x from '../../imports/foo.png'`). `vite.config.ts` also resolves `figma:asset/<file>` imports to `src/assets/`, which is left over from Figma Make.
- **`src/app/components/ui/`** contains the stock shadcn/ui components from the Figma Make template. The site's pages don't currently use them. The same goes for most of the dependencies in `package.json` (MUI, Radix, recharts, etc.).

## Styling

- `src/styles/index.css` imports `fonts.css`, `tailwind.css` (Tailwind v4 with `@source '../**/*.{js,ts,jsx,tsx}'`), and `theme.css`.
- `theme.css` defines the shadcn-style CSS variables (dark palette on `:root`) and exposes them through `@theme inline`. It also adds custom brand colors: `brand`, `brand-hover`, `brand-light`, and `brand-deep` (lavender, `#c9aeff` family). Use those tokens (`text-brand`, `bg-card`, `text-muted-foreground`, `border-border`) rather than raw colors.
- Tailwind v4 has no `tailwind.config.js`, and `postcss.config.mjs` is intentionally empty.
- `vite.config.ts` says the React and Tailwind plugins are required and must not be removed. Never add `.css`, `.ts`, or `.tsx` to `assetsInclude`.
