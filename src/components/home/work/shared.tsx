import Link from "next/link";
import { cn } from "@/lib/cn";

export function WorkEyebrow({
  index,
  tag,
  name,
  tagline,
  accent = "text-clay-deep",
}: {
  index: string;
  tag: string;
  name: string;
  tagline: string;
  accent?: string;
}) {
  return (
    <header className="max-w-3xl">
      <p
        className={cn(
          "flex items-center gap-3 font-mono text-label uppercase tracking-[0.14em]",
          accent,
        )}
      >
        <span className="tabular-nums">{index}</span>
        <span aria-hidden className="h-px w-7 bg-current opacity-60" />
        <span className="text-ink-muted">{tag}</span>
      </p>
      <h3 className="mt-4 text-display-lg text-balance">{name}</h3>
      <p className="mt-3.5 max-w-2xl text-lede text-ink-soft text-pretty">{tagline}</p>
    </header>
  );
}

/** Meta line — read as a sentence, not a row of badges. One highlighted status. */
export function MetaRow({ items, status }: { items: string[]; status?: string }) {
  return (
    <p className="mt-5 max-w-2xl text-[0.9rem] leading-relaxed text-ink-muted">
      {items.map((it, i) => (
        <span key={i}>
          {i > 0 ? <span className="px-2 text-line-strong" aria-hidden>·</span> : null}
          {it}
        </span>
      ))}
      {status ? (
        <>
          <span className="px-2 text-line-strong" aria-hidden>·</span>
          <span className="font-medium text-clay-deep">{status}</span>
        </>
      ) : null}
    </p>
  );
}

export function WorkCta({ slug, label }: { slug: string; label: string }) {
  return (
    <Link
      href={`/work/${slug}`}
      className="group mt-9 inline-flex items-center gap-2 border-b-2 border-ink pb-1 font-mono text-[0.76rem] uppercase tracking-[0.12em] text-ink transition-colors hover:border-clay hover:text-clay"
    >
      {label}
      <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}
