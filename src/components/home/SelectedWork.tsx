import Link from "next/link";
import { selectedWork } from "@/content/projects";
import { Container, Kicker } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-20 border-b border-line py-section">
      <Container>
        <Reveal>
          <Kicker>Selected work</Kicker>
          <h2 className="mt-5 max-w-3xl text-display-lg font-display text-balance">
            Three real operations, turned into systems.
          </h2>
          <p className="mt-5 max-w-prose text-body-lg text-ink-soft text-pretty">
            Not tutorial projects. A property SaaS in field testing, a municipality&rsquo;s mail
            workflow, and the software running a live commerce venture.
          </p>
        </Reveal>
      </Container>

      <div className="mt-16 md:mt-24">
        {selectedWork.map((p, i) => (
          <Reveal key={p.slug} as="div">
            <Link
              href={`/work/${p.slug}`}
              className="group block border-t border-line py-12 transition-colors hover:bg-paper-dim md:py-16"
            >
              <Container>
                <div
                  className={
                    "grid items-center gap-x-12 gap-y-8 md:grid-cols-2 " +
                    (i % 2 === 1 ? "md:[&>figure]:order-first" : "")
                  }
                >
                  <div>
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[0.8rem] text-clay-deep">{p.order}</span>
                      <span className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-muted">
                        {p.kicker}
                      </span>
                    </div>
                    <h3 className="mt-4 text-display-md font-display text-balance transition-colors group-hover:text-clay">
                      {p.name}
                    </h3>
                    <p className="mt-4 max-w-md text-body-lg text-ink-soft text-pretty">
                      {p.positioning}
                    </p>

                    <dl className="mt-7 grid grid-cols-1 gap-3 border-t border-line pt-5 text-[0.85rem] sm:grid-cols-2">
                      <div>
                        <dt className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink-faint">
                          Role
                        </dt>
                        <dd className="mt-1 text-ink-soft">{p.role}</dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink-faint">
                          Status
                        </dt>
                        <dd className="mt-1 text-ink-soft">{p.status}</dd>
                      </div>
                    </dl>

                    <span className="mt-7 inline-flex items-center gap-2 font-mono text-[0.78rem] uppercase tracking-[0.12em] text-ink group-hover:text-clay">
                      Read case study
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>

                  <figure className="overflow-hidden border border-line-strong bg-white shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)]">
                    <SmartImage
                      src={p.cover.src}
                      alt={p.cover.alt}
                      width={p.cover.width}
                      height={p.cover.height}
                      sizes="(max-width: 768px) 100vw, 42rem"
                      priority={i === 0}
                      className="block transition-transform duration-700 ease-editorial group-hover:scale-[1.015]"
                    />
                  </figure>
                </div>
              </Container>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
