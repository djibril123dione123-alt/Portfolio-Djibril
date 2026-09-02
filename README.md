# Djibril Dione — Portfolio 2026

Editorial portfolio for a product builder & full-stack developer. Built from scratch.

## Stack
Next.js 14 (App Router) · TypeScript · Tailwind CSS 3 · framer-motion · `next/font` (Fraunces / Inter / JetBrains Mono).

## Develop
```bash
npm install
npm run dev        # http://localhost:3000
```

## Checks
```bash
npm run lint
npm run typecheck
npm run build
```

## Structure
- `src/content/` — the single source of truth for copy, projects and case studies.
  Change a KPI, date, caption or image here; components don't need touching.
  - `profile.ts` · `projects.ts` · `caseStudies/*.ts`
- `src/components/` — `site/`, `home/`, `work/`, `ui/`
- `public/projects/<slug>/` — processed screenshots (originals never modified;
  Mairie captures are privacy-pixelated)
- `public/og/` — Open Graph images

## Internal notes (not deployed / gitignored)
- `PORTFOLIO_PLAN.md` — build plan & decisions
- `CONTENT_TODO.md` — missing content, prioritised
- `CONTENT_SOURCES.md` — every public claim mapped to the Master Profile status

## Before launch
Set `NEXT_PUBLIC_SITE_URL` to the confirmed domain (see `.env.example` / `src/lib/site.ts`;
no canonical is emitted until it is set), replace `public/cv-djibril-dione.pdf` with the
2026 résumé, and see `CONTENT_TODO.md`.
