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

---

## Final pass — premium polish + CV deliverable (structure unchanged)

- **Palette**: `ink` cooled to a blue-graphite (`#1C2027` family), `night` (Origin's dark
  section) shifted from warm near-black to an institutional blue-black, `clay` accent muted
  to a copper (`#A2472A` family) — no literal printed-black surface anywhere, no reused
  Samay Këur commercial colours. Verified against WCAG contrast manually before committing hex
  values. `tailwind.config.ts`.
- **Typography discipline**: removed the bordered mono-chip pattern site-wide (`MetaRow`, work
  cards, G5 modules, capability lists) in favour of calm sentence-case lines; bumped every
  informational label under 0.7rem; de-serif'd a couple of nested headings that had picked up
  the display font by cascade instead of intent.
- **Hero**: simplified from an animated 3-card proof grid to a static, plainly divided row with
  Samay Këur visually emphasized as the lead proof — deliberately removed scroll-reveal motion
  from all above-the-fold content (`Hero.tsx`) after judging it a real above-the-fold risk, not
  a stylistic nice-to-have.
- **Origin Story rupture**: the "what if this wasn't specific to one agency" beat now reads in
  French — « Et si ce problème ne concernait pas une seule agence ? » — the one deliberate
  code-switch on an English-language site, sized and spaced as a real visual rupture, not a
  sentence among others. Beats condensed 5 → 4.
- **New `/cv` route**: a real, French, print-composed 2-page CV sharing the site's design
  tokens and project accent colours — Repères stat strip, colour-coded experience entries,
  a functional print button, a QR block. Lives outside the marketing chrome via a new `(site)`
  route group (`src/app/(site)/layout.tsx`) so `/cv` renders bare while every other route keeps
  header/footer.
- **QR code**: `src/components/ui/PortfolioQr.tsx` generates a real, server-rendered SVG QR
  (via the `qrcode` package, `errorCorrectionLevel: "H"`) with the circular "D." brand mark
  composited in the centre, gated entirely behind `NEXT_PUBLIC_SITE_URL` being set — renders
  nothing until a real public domain is configured, never points at an invented one.
  Independently verified to still decode correctly with the logo overlay present.
  Domain (`djibrildione.com`) confirmed by decoding the user's own printed QR code first.
- **Brand mark**: refined from a rounded square to a circle ("D" + copper dot), matching the
  user-provided logo direction — favicon, apple-touch-icon, manifest icons and the QR's centre
  mark all regenerated from it.
- **CV PDF**: `public/cv-djibril-dione.pdf` is the user's own final, separately-designed
  document (`CV_Djibril_Dione_2026.pdf`), not a render of `/cv` — the two share core facts but
  are deliberately not pixel-identical (see CONTENT_SOURCES.md / CONTENT_TODO.md).
- **Contact facts**: email settled on `dionedjibril33@gmail.com` (a draft mockup briefly used a
  `djibrildione.com`-domain address; the user's own final CV superseded it), phone
  `+221 76 579 79 12` shown only on `/cv`, LinkedIn unchanged.
- **Bug fix**: homepage `<title>` was duplicating ("… — Djibril Dione — Djibril Dione") because
  the root layout's title template re-applied itself to an already-full page title — fixed with
  an `absoluteTitle` escape hatch in `pageMeta()` (`src/lib/seo.ts`).
- **Open items deliberately left to the user**: a "Licence 3, 2024–aujourd'hui" claim in the
  user's final CV conflicts with the confirmed "Licence 2, 2025–2026" and was not adopted; a
  tutoring role and interests list from that same document were adopted on the user's authority
  but flagged unverified; a generic motivational quote from it was excluded per the standing
  no-pseudo-philosophy rule. See CONTENT_TODO.md "Needs the user's own confirmation".
- Verified: `npx tsc --noEmit` clean, `npx next lint` clean, `npx next build` clean (13 routes,
  home `/` 3.79 kB / 140 kB First Load JS), full route + email `curl` sweep passing.
