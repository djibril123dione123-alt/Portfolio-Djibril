import Link from "next/link";
import { Container, Kicker } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

const BEATS = [
  {
    when: "October 2025",
    title: "An internship at the Mairie de Ouakam",
    body: "One month digitising the incoming-mail workflow of a municipal technical-services department: diagnosis, a structured database, deployment and staff training.",
  },
  {
    when: "≈ two weeks in",
    title: "A tool for a family agency",
    body: "Mouhamed Fall, the internship supervisor, sees the work and asks Djibril to build a rental-management application for the agency run by Madame Fall.",
  },
  {
    when: "Late 2025",
    title: "Confort Immo Archi",
    body: "A complete rental-management application, built solo in about a month — owners, buildings, units, tenants, contracts, payments, arrears, commissions, reports, PDF documents. Eight users. Still in use in August 2026.",
  },
  {
    when: "The insight",
    title: "“What if this wasn’t specific to one agency?”",
    body: "The domain was stable across every agency. Only the surface changed — names, commission rules, templates, teams. That is the shape of a product.",
  },
  {
    when: "December 2025 →",
    title: "Samay Këur",
    body: "The specific solution becomes a platform: multi-organization architecture, deeper financial workflows, a real document system, a more mature UX and a commercial SaaS layer. Generalisation and productisation — not a prettier rewrite.",
  },
];

export function OriginStory() {
  return (
    <section id="origin" className="grain scroll-mt-20 bg-night py-section text-paper">
      <Container>
        <Reveal>
          <Kicker>Origin</Kicker>
          <h2 className="mt-5 max-w-4xl text-display-lg font-display text-balance">
            Mairie&nbsp;
            <span className="text-clay-soft">→</span>
            &nbsp;Confort Immo&nbsp;
            <span className="text-clay-soft">→</span>
            &nbsp;Samay Këur
          </h2>
          <p className="mt-5 max-w-prose text-body-lg text-paper/70 text-pretty">
            The spine of the work. One thread runs through all of it: go into a real activity,
            understand how it runs, and build the system that runs it better.
          </p>
        </Reveal>

        <ol className="mt-16 border-t border-night-line">
          {BEATS.map((b, i) => (
            <Reveal as="li" key={i} delay={i * 0.04}>
              <div className="grid grid-cols-1 gap-x-10 gap-y-3 border-b border-night-line py-8 md:grid-cols-[10rem_1fr] md:py-10">
                <div className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-clay-soft">
                  {b.when}
                </div>
                <div className="max-w-2xl">
                  <h3 className="font-display text-[1.4rem] text-paper text-balance">{b.title}</h3>
                  <p className="mt-2.5 text-[1rem] leading-relaxed text-paper/70">{b.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
            <Link href="/work/samay-keur" className="link-underline text-[0.95rem] text-paper">
              Full Samay Këur case study →
            </Link>
            <Link href="/work/mairie-ouakam" className="link-underline text-[0.95rem] text-paper/80">
              The Mairie de Ouakam story →
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
