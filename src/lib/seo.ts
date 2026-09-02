import type { Metadata } from "next";
import { profile } from "@/content/profile";

const BASE = profile.meta.domain;

export function pageMeta(opts: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}): Metadata {
  const url = opts.path ? `${BASE}${opts.path}` : BASE;
  const image = opts.ogImage ?? "/og/default.png";
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: profile.meta.siteName,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: opts.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [image],
    },
  };
}
