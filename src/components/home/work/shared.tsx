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
      <p className={cn("flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.14em]", accent)}>
        <span>{index}</span>
        <span className="h-px w-6 bg-current opacity-50" />
        <span>{tag}</span>
      </p>
      <h3 className="mt-4 text-display-lg font-semibold tracking-tight">{name}</h3>
      <p className="mt-3 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft text-pretty">
        {tagline}
      </p>
    </header>
  );
}

export function MetaRow({ items }: { items: string[] }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-ink-muted">
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-3">
          {i > 0 ? <span className="h-1 w-1 rounded-full bg-line-strong" /> : null}
          {it}
        </span>
      ))}
    </div>
  );
}

export function WorkCta({ slug, label }: { slug: string; label: string }) {
  return (
    <Link
      href={`/work/${slug}`}
      className="group mt-8 inline-flex items-center gap-2 border-b border-ink pb-1 font-mono text-[0.76rem] uppercase tracking-[0.12em] text-ink transition-colors hover:border-clay hover:text-clay"
    >
      {label}
      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
    </Link>
  );
}
