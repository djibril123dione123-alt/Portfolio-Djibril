import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { SmartImage } from "@/components/ui/SmartImage";

/* --------------------------------------------------------------------------
 * Product-evidence primitives — one frame language, one shadow, one radius.
 * ----------------------------------------------------------------------- */

type Shot = { src: string; alt: string; width: number; height: number };

function Chrome({ label }: { label?: string }) {
  return (
    <div className="chrome-bar">
      <span className="chrome-dot" />
      <span className="chrome-dot" />
      <span className="chrome-dot" />
      {label ? (
        <span className="ml-2 truncate font-mono text-[0.64rem] text-ink-muted">{label}</span>
      ) : null}
    </div>
  );
}

export function Screenshot({
  src,
  alt,
  width,
  height,
  caption,
  chrome,
  chromeLabel,
  priority,
  sizes,
  className,
}: Shot & {
  caption?: ReactNode;
  chrome?: boolean;
  chromeLabel?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <figure className={cn("w-full", className)}>
      <div className="panel-shot">
        {chrome ? <Chrome label={chromeLabel} /> : null}
        <SmartImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes ?? "(max-width: 768px) 100vw, 70vw"}
          className="block"
        />
      </div>
      {caption ? (
        <figcaption className="annotation mt-3 max-w-xl text-ink-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

type Note = { x: number; y: number; text: string; side?: "left" | "right" };

export function AnnotatedShot({
  src,
  alt,
  width,
  height,
  notes = [],
  caption,
  chromeLabel,
  priority,
  sizes,
  className,
}: Shot & {
  notes?: Note[];
  caption?: ReactNode;
  chromeLabel?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <figure className={cn("w-full", className)}>
      <div className="relative">
        <div className="panel-shot">
          {chromeLabel ? <Chrome label={chromeLabel} /> : null}
          <SmartImage
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            sizes={sizes ?? "(max-width: 768px) 100vw, 70vw"}
            className="block"
          />
        </div>

        {/* leader-line callouts on wide screens */}
        <div className="pointer-events-none absolute inset-0 hidden xl:block">
          {notes.map((n, i) => {
            const left = n.side === "left";
            return (
              <div
                key={i}
                className="absolute flex items-center gap-2"
                style={{
                  left: `${n.x}%`,
                  top: `${n.y}%`,
                  transform: `translate(${left ? "-100%" : "0"}, -50%)`,
                  flexDirection: left ? "row-reverse" : "row",
                }}
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-clay ring-4 ring-clay/15" />
                <span className="h-px w-7 bg-clay/50" />
                <span className="whitespace-nowrap rounded-[4px] bg-ink px-2 py-1 font-mono text-[0.6rem] uppercase tracking-wide text-paper-pure">
                  {n.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {notes.length ? (
        <ul className="mt-3.5 grid gap-1.5 sm:grid-cols-2 xl:hidden">
          {notes.map((n, i) => (
            <li key={i} className="flex items-baseline gap-2 annotation text-ink-muted">
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-clay" />
              {n.text}
            </li>
          ))}
        </ul>
      ) : null}

      {caption ? (
        <figcaption className="annotation mt-3 max-w-2xl text-ink-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

/** A zoomed detail window onto part of a screenshot. Wrapper reserves space (no CLS). */
export function CropWindow({
  src,
  alt,
  focusX = 50,
  focusY = 50,
  zoom = 1.9,
  ratio = "4 / 3",
  label,
  className,
}: {
  src: string;
  alt: string;
  focusX?: number;
  focusY?: number;
  zoom?: number;
  ratio?: string;
  label?: string;
  className?: string;
}) {
  // background-image renders far more reliably than a scaled <img> and gives
  // clean zoom + focus control. Space is reserved by aspect-ratio (no CLS).
  return (
    <figure className={cn("w-full", className)}>
      <div
        role="img"
        aria-label={alt}
        className="panel-shot bg-paper-pure"
        style={{
          aspectRatio: ratio,
          backgroundImage: `url("${src}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: `${focusX}% ${focusY}%`,
          backgroundSize: `${zoom * 100}% auto`,
        }}
      />
      {label ? (
        <figcaption className="annotation mt-2 text-ink-muted">{label}</figcaption>
      ) : null}
    </figure>
  );
}

export function DevicePhone({
  src,
  alt,
  width,
  height,
  caption,
  className,
  sizes = "190px",
}: Shot & { caption?: ReactNode; className?: string; sizes?: string }) {
  return (
    <figure className={cn("w-full", className)}>
      <div className="device-phone">
        <SmartImage src={src} alt={alt} width={width} height={height} sizes={sizes} className="block" />
      </div>
      {caption ? (
        <figcaption className="annotation mt-2 text-center text-ink-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

export function DevicePair({
  desktop,
  phone,
  className,
}: {
  desktop: Shot & { chromeLabel?: string };
  phone: Shot;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <div className="panel-shot lg:mr-24">
        {desktop.chromeLabel ? <Chrome label={desktop.chromeLabel} /> : null}
        <SmartImage
          src={desktop.src}
          alt={desktop.alt}
          width={desktop.width}
          height={desktop.height}
          sizes="(max-width: 1024px) 100vw, 62vw"
          className="block"
        />
      </div>
      <div className="mx-auto mt-5 w-[38%] min-w-[130px] max-w-[180px] lg:absolute lg:-bottom-8 lg:right-0 lg:mt-0 lg:w-[180px]">
        <div className="device-phone">
          <SmartImage
            src={phone.src}
            alt={phone.alt}
            width={phone.width}
            height={phone.height}
            sizes="180px"
            className="block"
          />
        </div>
      </div>
    </div>
  );
}
