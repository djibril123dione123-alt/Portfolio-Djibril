/* eslint-disable @next/next/no-img-element -- deliberate raw <img> for our own trusted inline SVG covers; next/image cannot optimise SVG without dangerouslyAllowSVG */
import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/** next/image for raster assets, plain <img> for our own trusted inline SVG covers. */
export function SmartImage({ src, alt, width, height, className, sizes, priority }: Props) {
  if (src.endsWith(".svg")) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        style={{ aspectRatio: `${width} / ${height}` }}
        className={cn("h-auto w-full", className)}
      />
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes ?? "(max-width: 768px) 100vw, 80vw"}
      priority={priority}
      className={cn("h-auto w-full", className)}
    />
  );
}
