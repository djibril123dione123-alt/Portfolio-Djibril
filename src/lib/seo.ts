import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { SITE_URL, hasPublicDomain } from "@/lib/site";

export function pageMeta(opts: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}): Metadata {
  const path = opts.path ?? "/";
  const image = opts.ogImage ?? "/og/default.png";

  const meta: Metadata = {
    title: opts.title,
    description: opts.description,
    openGraph: {
      title: opts.title,
      description: opts.description,
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

  // Only emit a canonical / absolute OG url once a real public domain is configured.
  if (hasPublicDomain) {
    const url = `${SITE_URL}${path}`;
    meta.alternates = { canonical: url };
    (meta.openGraph as { url?: string }).url = url;
  }

  return meta;
}
