import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { cv } from "@/content/cv";
import { pageMeta } from "@/lib/seo";
import { hasPublicDomain, absoluteUrl } from "@/lib/site";
import { PortfolioQrBlock } from "@/components/ui/PortfolioQr";
import { PrintButton } from "@/components/cv/PrintButton";

export const metadata: Metadata = pageMeta({
  title: "CV",
  description:
    "CV 2026 de Djibril Dione — Concepteur de produits numériques & Développeur Full-Stack, fondateur de Samay Këur.",
  path: "/cv",
  ogImage: "/og/about.png",
});

const ACCENT_BORDER: Record<string, string> = {
  samay: "border-samay",
  mairie: "border-mairie",
  commerce: "border-commerce",
};

function PageMark({ n }: { n: 1 | 2 }) {
  return (
    <p className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-ink-faint">
      Djibril Dione · CV 2026 · {n}/2
    </p>
  );
}

export default function CvPage() {
  return (
    <>
      <PrintButton />
      <main id="main" className="min-h-screen bg-paper-cool py-10 print:bg-white print:py-0">
        <article className="cv-page mx-auto max-w-[210mm] bg-paper-pure px-[14mm] py-[15mm] text-ink sm:px-[18mm] sm:py-[16mm]">
          {/* ---------------------------------------------------------- Page 1 */}
          <header className="flex flex-col justify-between gap-6 border-b border-line pb-5 sm:flex-row sm:items-end">
            <div>
              <p className="font-display text-[1.9rem] leading-none tracking-tight">{cv.name}</p>
              <p className="mt-2 text-[1.02rem] font-medium text-ink-soft">{cv.title}</p>
              <p className="text-[0.9rem] text-clay-deep">{cv.secondary}</p>
            </div>

            <div className="flex items-end gap-5 sm:flex-col sm:items-end sm:gap-2">
              <ul className="space-y-0.5 text-right text-[0.82rem] text-ink-muted">
                <li>{profile.contact.phone}</li>
                <li>{profile.contact.email}</li>
                <li>linkedin.com/in/djibril-dione-666450382</li>
                {hasPublicDomain ? <li>{absoluteUrl("/").replace(/^https?:\/\//, "")}</li> : null}
              </ul>
              <PortfolioQrBlock className="print:hidden" />
            </div>
          </header>

          {/* Résumé */}
          <p className="mt-6 max-w-[150mm] text-[0.95rem] leading-relaxed text-ink-soft">
            {cv.summary}
          </p>

          {/* Repères */}
          <div className="mt-6 grid grid-cols-4 gap-px overflow-hidden rounded-md border border-line-strong bg-line-strong">
            {cv.reperes.map((r) => (
              <div key={r.label} className="bg-paper-pure px-2.5 py-3 text-center">
                <p className="tnum text-[1.2rem] font-semibold leading-tight text-ink">{r.value}</p>
                <p className="mt-1 text-[0.72rem] leading-tight text-ink-soft">{r.label}</p>
                <p className="mt-0.5 font-mono text-[0.62rem] uppercase tracking-wide text-ink-muted">
                  {r.sub}
                </p>
              </div>
            ))}
          </div>

          {/* Expériences */}
          <section className="mt-7">
            <h2 className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-clay-deep">
              Expériences principales
            </h2>
            <ul className="mt-3 space-y-3">
              {cv.experience.map((e) => (
                <li
                  key={e.org}
                  className={`border-l-2 py-0.5 pl-4 ${ACCENT_BORDER[e.accent] ?? "border-line-strong"}`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                    <p className="text-[0.98rem] font-semibold text-ink">
                      {e.role} <span className="font-normal text-ink-soft">— {e.org}</span>
                    </p>
                    <p className="font-mono text-[0.76rem] text-ink-muted">{e.period}</p>
                  </div>
                  <ul className="mt-1.5 space-y-1">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex gap-2 text-[0.88rem] leading-snug text-ink-soft">
                        <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-clay" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>

          {/* Formation */}
          <section className="mt-7">
            <h2 className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-clay-deep">
              Formation
            </h2>
            <div className="mt-3 border-t border-line pt-3">
              <p className="text-[0.92rem] font-medium text-ink">{cv.education.school}</p>
              <p className="mt-0.5 text-[0.86rem] text-ink-soft">{cv.education.program}</p>
              <p className="text-[0.86rem] text-ink-soft">{cv.education.track}</p>
              <p className="mt-1 text-[0.82rem] text-ink-muted">
                {cv.education.level} · {cv.education.baccalaureate}
              </p>
            </div>
          </section>

          <footer className="mt-10 flex items-center justify-between border-t border-line pt-3">
            <PageMark n={1} />
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-ink-faint">
              Compétences · Langues · Projets →
            </p>
          </footer>

          {/* ------------------------------------------- Page 2 (forced break) */}
          <div className="break-before-page pt-[15mm] sm:pt-[16mm]">
            <p className="mb-6 border-b border-line pb-3 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-muted">
              Djibril Dione — Projets · compétences · formation
            </p>

            {/* Compétences */}
            <section>
              <h2 className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-clay-deep">
                Compétences
              </h2>
              <div className="mt-3 grid gap-x-6 gap-y-4 border-t border-line pt-3 sm:grid-cols-3">
                {cv.capabilities.map((c) => (
                  <div key={c.key}>
                    <p className="text-[0.86rem] font-semibold text-ink">{c.key}</p>
                    <p className="mt-0.5 text-[0.82rem] text-ink-soft">{c.line}</p>
                    <ul className="mt-1.5 space-y-0.5">
                      {c.items.map((it) => (
                        <li key={it} className="text-[0.8rem] text-ink-muted">
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-[0.8rem] text-ink-muted">
                <span className="font-medium text-ink">Outils —</span> {cv.tools}
              </p>
            </section>

            {/* Langues + Projets complémentaires */}
            <div className="mt-7 grid gap-7 border-t border-line pt-3 sm:grid-cols-2">
              <section>
                <h2 className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-clay-deep">
                  Langues
                </h2>
                <ul className="mt-2 space-y-0.5">
                  {cv.languages.map((l) => (
                    <li key={l.label} className="text-[0.86rem] text-ink-soft">
                      <span className="font-medium text-ink">{l.label}</span> — {l.level}
                    </li>
                  ))}
                </ul>

                <h2 className="mt-5 font-mono text-[0.75rem] uppercase tracking-[0.14em] text-clay-deep">
                  En complément
                </h2>
                <p className="mt-2 text-[0.86rem] leading-snug text-ink-soft">
                  <span className="font-medium text-ink">{cv.complement.role}</span> —{" "}
                  {cv.complement.org} ({cv.complement.period}). {cv.complement.line}
                </p>

                <p className="mt-3 text-[0.82rem] leading-snug text-ink-muted">
                  <span className="font-medium text-ink">Intérêts —</span> {cv.interests}
                </p>
              </section>

              <section>
                <h2 className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-clay-deep">
                  Projets complémentaires
                </h2>
                <ul className="mt-2 space-y-1.5">
                  {cv.otherProjects.map((p) => (
                    <li key={p.name} className="text-[0.86rem] leading-snug text-ink-soft">
                      <span className="font-medium text-ink">{p.name}</span> — {p.line}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <footer className="mt-10 border-t border-line pt-3">
              <PageMark n={2} />
            </footer>
          </div>
        </article>
      </main>
    </>
  );
}
