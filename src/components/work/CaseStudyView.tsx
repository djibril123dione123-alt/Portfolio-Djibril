import Link from "next/link";
import type { CaseBlock, CaseStudy } from "@/content/caseStudies/types";
import { getProject, projects } from "@/content/projects";
import { Container, Kicker } from "@/components/ui/primitives";
import { Reveal, RevealMedia } from "@/components/ui/Reveal";
import { CaseFigure, PhoneFrame } from "@/components/work/Frames";
import { rich } from "@/components/work/richText";

function Prose({ block }: { block: Extract<CaseBlock, { kind: "prose" }> }) {
  return (
    <div className="grid gap-x-12 gap-y-4 md:grid-cols-[13rem_1fr]">
      <div>{block.kicker ? <Kicker>{block.kicker}</Kicker> : null}</div>
      <div className="max-w-prose">
        {block.heading ? (
          <h2 className="text-title font-semibold tracking-tight text-balance">{block.heading}</h2>
        ) : null}
        <div className="prose-editorial mt-4">
          {block.body.map((p, i) => (
            <p key={i}>{rich(p)}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function Steps({ block }: { block: Extract<CaseBlock, { kind: "steps" }> }) {
  return (
    <div className="grid gap-x-12 gap-y-8 md:grid-cols-[13rem_1fr]">
      <div>
        {block.kicker ? <Kicker>{block.kicker}</Kicker> : null}
        {block.heading ? (
          <h2 className="mt-4 text-title font-semibold tracking-tight text-balance">
            {block.heading}
          </h2>
        ) : null}
        {block.intro ? (
          <p className="mt-4 max-w-xs text-[0.95rem] leading-relaxed text-ink-muted">{block.intro}</p>
        ) : null}
      </div>
      <ol className="border-t border-line">
        {block.steps.map((s, i) => (
          <li key={i} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line py-5">
            <span className="tabular-nums font-mono text-[0.8rem] text-clay-deep">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-[1.1rem] font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-1.5 max-w-prose text-[0.98rem] leading-relaxed text-ink-soft">
                {rich(s.body)}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Split({ block }: { block: Extract<CaseBlock, { kind: "split" }> }) {
  return (
    <div>
      <div className="max-w-wide">
        {block.kicker ? <Kicker>{block.kicker}</Kicker> : null}
        {block.heading ? (
          <h2 className="mt-4 max-w-2xl text-display-md font-semibold tracking-tight text-balance">
            {block.heading}
          </h2>
        ) : null}
        {block.intro ? (
          <p className="mt-4 max-w-prose text-lede text-ink-soft text-pretty">{block.intro}</p>
        ) : null}
      </div>
      <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-line-strong bg-line-strong md:grid-cols-2">
        {[block.left, block.right].map((col, idx) => (
          <div key={idx} className="bg-paper-pure p-7">
            <h3 className="font-mono text-[0.78rem] uppercase tracking-[0.14em] text-clay-deep">
              {col.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {col.points.map((pt, i) => (
                <li key={i} className="flex gap-3 text-[0.98rem] leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-clay" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function Metrics({ block }: { block: Extract<CaseBlock, { kind: "metrics" }> }) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-line-strong bg-line-strong md:grid-cols-4">
        {block.items.map((m, i) => (
          <div key={i} className="bg-paper-pure p-5">
            <div className="tnum text-[1.5rem] font-semibold leading-tight tracking-tight text-ink">
              {m.value}
            </div>
            <div className="mt-1 text-[0.85rem] text-ink-soft">{m.label}</div>
            {m.sub ? (
              <div className="mt-0.5 font-mono text-[0.68rem] uppercase tracking-wide text-ink-muted">
                {m.sub}
              </div>
            ) : null}
          </div>
        ))}
      </div>
      {block.note ? (
        <p className="mt-4 max-w-2xl font-mono text-[0.75rem] leading-relaxed text-ink-muted">
          {block.note}
        </p>
      ) : null}
    </div>
  );
}

function Statement({ block }: { block: Extract<CaseBlock, { kind: "statement" }> }) {
  return (
    <figure className="mx-auto max-w-4xl border-y border-ink py-12 text-center">
      <blockquote className="font-display text-display-md italic text-balance hang">
        &ldquo;{block.text}&rdquo;
      </blockquote>
      {block.attribution ? (
        <figcaption className="mt-5 font-mono text-[0.75rem] uppercase tracking-[0.14em] text-ink-muted">
          {block.attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}

function Gallery({ block }: { block: Extract<CaseBlock, { kind: "gallery" }> }) {
  const cols = block.columns ?? 2;
  return (
    <div className={cols === 3 ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3" : "grid gap-6 sm:grid-cols-2"}>
      {block.items.map((fig, i) => (
        <RevealMedia key={i} delay={(i % 3) * 0.05}>
          <CaseFigure fig={fig} frame="plain" bleed="full" />
        </RevealMedia>
      ))}
    </div>
  );
}

function Devices({ block }: { block: Extract<CaseBlock, { kind: "devices" }> }) {
  return (
    <div>
      <div className="max-w-wide">
        {block.kicker ? <Kicker>{block.kicker}</Kicker> : null}
        {block.heading ? (
          <h2 className="mt-4 max-w-2xl text-display-md font-semibold tracking-tight text-balance">
            {block.heading}
          </h2>
        ) : null}
        {block.intro ? (
          <p className="mt-4 max-w-prose text-lede text-ink-soft text-pretty">{block.intro}</p>
        ) : null}
      </div>
      <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {block.phones.map((fig, i) => (
          <PhoneFrame key={i} fig={fig} />
        ))}
      </div>
      {block.caption ? (
        <p className="mt-5 text-center font-mono text-[0.75rem] text-ink-muted">{block.caption}</p>
      ) : null}
    </div>
  );
}

function KeyValue({ block }: { block: Extract<CaseBlock, { kind: "keyvalue" }> }) {
  return (
    <div className="max-w-3xl">
      {block.heading ? (
        <h2 className="mb-6 text-title font-semibold tracking-tight">{block.heading}</h2>
      ) : null}
      <dl className="border-t border-line">
        {block.rows.map((r, i) => (
          <div key={i} className="grid grid-cols-[9rem_1fr] gap-4 border-b border-line py-3.5">
            <dt className="font-mono text-[0.75rem] uppercase tracking-wide text-ink-muted">{r.k}</dt>
            <dd className="text-[0.98rem] text-ink-soft">{r.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Block({ block }: { block: CaseBlock }) {
  const inner = (() => {
    switch (block.kind) {
      case "prose":
        return <Prose block={block} />;
      case "steps":
        return <Steps block={block} />;
      case "split":
        return <Split block={block} />;
      case "metrics":
        return <Metrics block={block} />;
      case "statement":
        return <Statement block={block} />;
      case "gallery":
        return <Gallery block={block} />;
      case "devices":
        return <Devices block={block} />;
      case "keyvalue":
        return <KeyValue block={block} />;
      case "figure":
        return <CaseFigure fig={block} frame={block.frame ?? "plain"} bleed={block.bleed ?? "inset"} />;
      default:
        return null;
    }
  })();

  const wide = block.kind === "figure" && (block.bleed === "full" || block.bleed === "wide");

  return (
    <Reveal as="section" className={wide ? "" : "container-wide"}>
      {wide ? <div className="container-wide">{inner}</div> : inner}
    </Reveal>
  );
}

export function CaseStudyView({ study }: { study: CaseStudy }) {
  const project = getProject(study.slug);

  return (
    <article className="pb-[clamp(3.5rem,7vw,6rem)] pt-[clamp(1.75rem,3.5vw,2.75rem)]">
      {/* Header */}
      <Container>
        <Reveal>
          <Link
            href="/#work"
            className="link-underline font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-muted"
          >
            ← Selected work
          </Link>
          <div className="mt-9 flex items-center gap-4">
            <span aria-hidden className="accent-rule" />
            <p className="font-mono text-label uppercase tracking-[0.14em] text-clay-deep">
              {project?.kicker ?? "Case study"}
            </p>
          </div>
          <h1 className="mt-5 max-w-4xl text-display-lg font-semibold tracking-tight text-balance">
            {study.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lede text-ink-soft text-pretty">{study.tagline}</p>
        </Reveal>

        <Reveal delay={0.05}>
          <dl className="mt-12 grid grid-cols-1 border-t border-line pt-8 sm:grid-cols-2 md:grid-cols-3">
            {study.facts.map((f, i) => (
              <div
                key={f.k}
                className={`py-3 md:py-0 md:pl-6 md:pr-6 ${i % 3 !== 0 ? "md:border-l md:border-line" : ""}`}
              >
                <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-muted">
                  {f.k}
                </dt>
                <dd className="tnum mt-1.5 text-[0.95rem] leading-relaxed text-ink">{f.v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap gap-1.5">
            {study.stack.map((s) => (
              <span
                key={s}
                className="rounded-[5px] border border-line-strong bg-paper-pure px-2.5 py-1 font-mono text-[0.66rem] uppercase tracking-[0.08em] text-ink-muted"
              >
                {s}
              </span>
            ))}
          </div>
          {study.links.length ? (
            <div className="mt-6 flex flex-wrap gap-5">
              {study.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline text-[0.95rem]"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          ) : null}
        </Reveal>
      </Container>

      {/* Hero image */}
      <div className="container-wide mt-12">
        <RevealMedia>
          <CaseFigure fig={study.hero} frame="plain" bleed="wide" priority />
        </RevealMedia>
      </div>

      {/* Summary */}
      <Container>
        <Reveal>
          <p className="mx-auto mt-14 max-w-3xl font-display text-[1.2rem] leading-relaxed text-ink text-pretty hang md:text-[1.42rem]">
            {study.summary}
          </p>
        </Reveal>
      </Container>

      {/* Body */}
      <div className="mt-16 space-y-16 md:mt-20 md:space-y-20">
        {study.blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>

      {/* What I learned */}
      <Container>
        <Reveal>
          <div className="mt-20 border-t border-ink pt-10">
            <Kicker>What I learned</Kicker>
            <ul className="mt-8 grid gap-x-12 gap-y-7 md:grid-cols-2">
              {study.learned.map((l, i) => (
                <li key={i} className="flex gap-4">
                  <span className="tabular-nums font-mono text-[0.8rem] text-clay-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="max-w-prose text-[1rem] leading-relaxed text-ink-soft">{rich(l)}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {study.disclaimers?.length ? (
          <div className="mt-14 max-w-3xl border-l-2 border-line-strong pl-5">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-muted">
              Notes on evidence
            </p>
            <ul className="mt-3 space-y-2">
              {study.disclaimers.map((d, i) => (
                <li key={i} className="text-[0.85rem] leading-relaxed text-ink-muted">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>

      <NextProject slug={study.slug} />
    </article>
  );
}

function NextProject({ slug }: { slug: string }) {
  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];
  return (
    <Container>
      <Link
        href={`/work/${next.slug}`}
        className="group mt-20 flex flex-col gap-3 border-t border-ink pt-8 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-muted">
            Next project
          </p>
          <p className="mt-2 text-display-md font-semibold tracking-tight text-balance transition-colors group-hover:text-clay">
            {next.name}
          </p>
        </div>
        <p className="max-w-sm text-[0.95rem] text-ink-soft md:text-right">{next.positioning}</p>
      </Link>
    </Container>
  );
}
