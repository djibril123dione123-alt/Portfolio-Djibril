import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { SmartImage } from "@/components/ui/SmartImage";
import type { Figure } from "@/content/caseStudies/types";

export function WindowChrome({
  children,
  label,
  className,
}: {
  children: ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <figure className={cn("overflow-hidden panel", className)}>
      <div className="flex items-center gap-2 border-b border-line bg-paper-dim px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        {label ? (
          <span className="ml-3 truncate font-mono text-[0.7rem] text-ink-faint">{label}</span>
        ) : null}
      </div>
      {children}
    </figure>
  );
}

export function CaseFigure({
  fig,
  frame = "plain",
  bleed = "inset",
  priority,
}: {
  fig: Figure;
  frame?: "window" | "plain";
  bleed?: "full" | "wide" | "inset";
  priority?: boolean;
}) {
  const widthClass =
    bleed === "full"
      ? "w-full"
      : bleed === "wide"
        ? "mx-auto w-full max-w-wide"
        : "mx-auto w-full max-w-4xl";

  const img = (
    <SmartImage
      src={fig.src}
      alt={fig.alt}
      width={fig.width}
      height={fig.height}
      priority={priority}
      sizes={bleed === "inset" ? "(max-width: 768px) 100vw, 56rem" : "(max-width: 768px) 100vw, 78rem"}
      className="block"
    />
  );

  return (
    <figure className={widthClass}>
      {frame === "window" ? (
        <WindowChrome label={fig.src.includes("mairie") ? "Microsoft Access" : "app.samaykeur.com"}>
          {img}
        </WindowChrome>
      ) : (
        <div className="overflow-hidden panel">{img}</div>
      )}
      {fig.caption ? (
        <figcaption className="annotation mx-auto mt-3 max-w-2xl text-center normal-case tracking-normal text-ink-muted">
          {fig.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function PhoneFrame({ fig }: { fig: Figure }) {
  return (
    <div className="mx-auto w-full max-w-[210px] overflow-hidden rounded-[1.6rem] border-[5px] border-night bg-night p-0 shadow-float">
      <div className="overflow-hidden rounded-[1.15rem]">
        <SmartImage
          src={fig.src}
          alt={fig.alt}
          width={fig.width}
          height={fig.height}
          sizes="220px"
          className="block"
        />
      </div>
    </div>
  );
}
