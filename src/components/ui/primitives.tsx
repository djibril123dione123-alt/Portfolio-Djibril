import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("container-wide", className)}>{children}</div>;
}

export function Kicker({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("kicker", className)}>{children}</p>;
}

export function AccentRule({ className }: { className?: string }) {
  return <span aria-hidden className={cn("accent-rule block", className)} />;
}

/** Chapter opener: accent rule + mono kicker + optional index. */
export function ChapterMark({
  index,
  label,
  className,
  tone = "text-clay-deep",
}: {
  index?: string;
  label: string;
  className?: string;
  tone?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3 font-mono text-label uppercase tracking-[0.14em]", tone, className)}>
      {index ? <span className="tabular-nums">{index}</span> : null}
      <span aria-hidden className="h-px w-8 bg-current opacity-60" />
      <span>{label}</span>
    </div>
  );
}
