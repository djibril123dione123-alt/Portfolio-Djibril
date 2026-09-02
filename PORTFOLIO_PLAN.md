# Portfolio 2026 — Djibril Dione · Build plan

## Repo state on arrival
- Working dir `C:\Users\DELL\Documents\Portfolio` was **empty** — greenfield build.
- Old explorations found and read, not reused as direction:
  - `Downloads/Portfolio Djibril Dione/portfolio Djibril DIONE` — Replit/Vite portfolio, "Développeur Full-Stack & Expert Digital", Linear/Stripe-clone `design_guidelines.md`, MacBook mockups, "Open to Work" pulse. Explicitly the aesthetic to move away from.
  - `Documents/Perso/projet/portfolio` — earlier HTML portfolio.

## Source of truth
- `Downloads/Master_Profile_2026_Djibril_Dione_v2 (2).docx` — read in full. Status model (VÉRIFIÉ / CONFIRMÉ / PLANIFIÉ / À FIGER) respected. Extract kept at `scratchpad/master_profile.txt`.

## Stack chosen
- **Next.js 14.2 (App Router) · TypeScript · Tailwind CSS 3.4 · framer-motion 11**.
- Custom components only — no shadcn / UI kit.
- Fonts via `next/font`: **Fraunces** (display serif), **Inter** (body), **JetBrains Mono** (labels/metadata).
- Static-friendly: every route is statically rendered; `next/image` for raster, inline `<img>` for our own trusted SVG covers.

## Design direction
- Editorial / Swiss, warm paper (`#F6F3EC`) + ink (`#181611`), single controlled accent **clay `#B34327`**.
- Deliberately unlike Samay Këur's green+gold.
- Typography carries the page; motion is reveal-on-scroll only, `prefers-reduced-motion` respected.
- One dark chapter (Origin story) for narrative weight; everything else on paper.

## Assets found & used
| Project | Source | Into `public/projects/…` |
|---|---|---|
| Samay Këur | `Documents/Samay Keur/samay Keur assets/product/screenshots/{desktop,mobile}` (~70 desktop, 7 mobile) | 20 desktop + 7 mobile `.webp`, selected & downscaled |
| Confort Immo | `Downloads/asset-portfolio/confort immo` | 10 `.webp` |
| Mairie de Ouakam | `Downloads/Portfolio Djibril Dione/…/attached_assets` (Access screenshots) | 4 `.webp`, **sender/subject columns irreversibly pixelated** |
| G5 Traders | no screenshots on disk | custom editorial SVG built from Master snapshot data |
| Al Furqan / Nur | no product screenshots on disk | custom editorial SVG covers |
| Portrait | `attached_assets/IMG-20250806-WA0018…jpg` | `public/djibril-dione.jpg` (B&W, 4:5) |
| Résumé | `Downloads/cv-djibril-dione.pdf` | `public/cv-djibril-dione.pdf` (⚠ old title — see CONTENT_TODO) |
| OG images | generated with Pillow | `public/og/*.png` |

Originals were never modified or moved. Processing scripts in `scratchpad/`.

## Routes
- `/` — Hero · Selected Work (Samay Këur / Mairie / G5) · Origin story · More Work (Al Furqan / Nur) · How I build · Capabilities · About preview · Contact
- `/work/[slug]` → `samay-keur`, `mairie-ouakam`, `g5-traders`, `al-furqan`, `nur-al-bindjib` (static params)
- `/about`
- `sitemap.xml`, `robots.txt`, per-route metadata + OpenGraph/Twitter

## Content architecture
- `src/content/profile.ts` — identity, value prop, capabilities, education, contact
- `src/content/projects.ts` — project index (Selected / More)
- `src/content/caseStudies/*.ts` — block-based case-study bodies (`prose | figure | gallery | metrics | steps | split | statement | devices | keyvalue`)
- Editing a KPI, date, caption or asset = one content file, no component changes.

## Main components
- `site/SiteHeader`, `site/SiteFooter`
- `home/{Hero,SelectedWork,OriginStory,MoreWork,HowIBuild,Capabilities,AboutPreview,ContactBlock}`
- `work/{CaseStudyView,Frames}` + `ui/{Reveal,SmartImage,primitives}`

## Risks / watch-items
- `next@14.2.15` shipped with a security advisory → bump to latest patched 14.2.x before deploy.
- Résumé PDF still carries the old "Expert Digital" positioning — needs the 2026 version.
- G5 / Al Furqan / Nur have no real screenshots yet — SVG placeholders are intentional-looking but should be swapped for real captures.
- No production domain owned yet. Public origin is read from `NEXT_PUBLIC_SITE_URL`
  (`src/lib/site.ts`); no canonical is emitted until it is set. Confirm the domain before deploy.

---

## V2 — visual & narrative refactor (structure unchanged)

- **Typography rebalanced**: sans (Inter) is now the primary voice for all UI, headings,
  body and labels. Fraunces (serif) is a contrast voice only — hero statement, Origin,
  pull-quotes, case-study standfirsts, wordmark.
- **Product evidence dominates the work sections** (`src/components/product/Product.tsx`:
  `Screenshot`, `AnnotatedShot`, `CropWindow`, `DevicePair`, `EvidenceRow`). Each project
  gets a bespoke staging — no repeated "text left / screenshot right" card.
  - Hero: a **System Canvas** — layered real Samay Këur interfaces (desktop + phone + KPI crop).
  - `home/work/FlagshipSamay` — full-width annotated dashboard + supporting shots.
  - `home/work/MairieTransformation` — Manual → Structured DB → Search, as a labelled strip.
  - `home/work/G5Operation` — "business first" narrative + module system + editorial KPI viz.
- **Origin Story**: desktop sticky scroll (evolving visual per beat, "single agency →
  multi-organization" rupture); clean vertical timeline on mobile.
- **Density**: section padding `clamp(3.5rem,7vw,6rem)`; page height ~13.3k (was ~15k+).
- **Section rhythm**: paper → paper → dim → paper → night → dim → cool → paper → dim → night.
- **Depth without glass**: `.panel` (hairline border + soft shadow), project accent color
  fields (`samay` / `mairie` / `commerce` washes), annotations, asymmetry.
- Copy: removed defensive "not tutorial projects" / "I am not a senior engineer" → positive
  framing. Samay date → "Late 2025 / early 2026". Al Furqan / Nur SVGs redrawn as confident
  system diagrams (still clearly diagrams, swap-ready for real captures).
