import Link from "next/link";
import { moreWork } from "@/content/projects";
import { Container, Kicker } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";

export function MoreWork() {
  return (
    <section className="border-b border-line py-section">
      <Container>
        <Reveal>
          <Kicker>More work</Kicker>
          <h2 className="mt-5 max-w-3xl text-display-md font-display text-balance">
            Two more products, built solo, from a different angle.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {moreWork.map((p, i) => (
            <Reveal key={p.slug} as="div" delay={i * 0.06}>
              <Link href={`/work/${p.slug}`} className="group block">
                <figure className="overflow-hidden border border-line-strong bg-white">
                  <SmartImage
                    src={p.cover.src}
                    alt={p.cover.alt}
                    width={p.cover.width}
                    height={p.cover.height}
                    sizes="(max-width: 768px) 100vw, 38rem"
                    className="block transition-transform duration-700 ease-editorial group-hover:scale-[1.015]"
                  />
                </figure>
                <div className="mt-5 flex items-baseline gap-3">
                  <span className="font-mono text-[0.75rem] text-clay-deep">{p.order}</span>
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink-muted">
                    {p.kicker}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-title transition-colors group-hover:text-clay">
                  {p.name}
                </h3>
                <p className="mt-2 max-w-md text-[0.98rem] leading-relaxed text-ink-soft">
                  {p.positioning}
                </p>
                <span className="mt-4 inline-block font-mono text-[0.74rem] uppercase tracking-[0.12em] text-ink group-hover:text-clay">
                  Read case study →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
