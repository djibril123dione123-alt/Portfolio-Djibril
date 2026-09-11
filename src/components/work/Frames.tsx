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
    <figure className={cn("panel-shot", className)}>
      <div className="chrome-bar">
        <span className="chrome-dot" />
        <span className="chrome-dot" />
        <span className="chrome-dot" />
        {label ? (
          <span className="ml-2 truncate font-mono text-[0.66rem] text-ink-muted">{label}</span>
        ) : null}
      </div>
      {children}
    </figure>
  );
}

const WINDOW_LABELS: [string, string][] = [
  ["mairie", "Microsoft Access"],
  ["samay-keur", "app.samaykeur.com"],
  ["g5-traders", "g5traders.lovable.app"],
  ["al-furqan", "librairie-al-furqan.vercel.app"],
  ["nur-al-bindjib", "nur-al-bindjib.vercel.app"],
];

function windowLabel(src: string): string | undefined {
  return WINDOW_LABELS.find(([needle]) => src.includes(needle))?.[1];
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
      className="block w-full"
    />
  );

  return (
    <figure className={widthClass}>
      {frame === "window" ? (
        <WindowChrome label={windowLabel(fig.src)}>{img}</WindowChrome>
      ) : (
        <div className="panel-shot">{img}</div>
      )}
      {fig.caption ? (
        <figcaption className="annotation mx-auto mt-3.5 max-w-2xl text-center text-ink-muted">
          {fig.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function PhoneFrame({ fig }: { fig: Figure }) {
  return (
    <div className="device-phone mx-auto w-full max-w-[200px]">
      <SmartImage
        src={fig.src}
        alt={fig.alt}
        width={fig.width}
        height={fig.height}
        sizes="200px"
        className="block"
      />
    </div>
  );
}
