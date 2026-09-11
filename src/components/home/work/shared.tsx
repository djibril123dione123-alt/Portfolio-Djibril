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

/** Meta line — a couple of plain items plus an optional highlighted status pill. */
export function MetaRow({ items, status }: { items: string[]; status?: string }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2.5">
      {items.map((it, i) => (
        <span
          key={i}
          className="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-ink-muted"
        >
          {i > 0 ? <span aria-hidden className="h-1 w-1 rounded-full bg-line-strong" /> : null}
          {it}
        </span>
      ))}
      {status ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-clay/40 bg-clay-wash px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-clay-deep">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-clay" />
          {status}
        </span>
      ) : null}
    </div>
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
