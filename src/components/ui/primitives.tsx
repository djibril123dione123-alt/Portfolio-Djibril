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

export function SectionHeading({
  kicker,
  title,
  intro,
  id,
  className,
}: {
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <header id={id} className={cn("max-w-wide", className)}>
      <Kicker>{kicker}</Kicker>
      <h2 className="mt-5 text-display-md text-balance max-w-3xl">{title}</h2>
      {intro ? (
        <p className="mt-5 max-w-prose text-body-lg text-ink-soft text-pretty">{intro}</p>
      ) : null}
    </header>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center border border-line-strong px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink-muted">
      {children}
    </span>
  );
}
