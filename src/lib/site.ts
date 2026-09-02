/**
 * Public origin of the portfolio.
 *
 * NOTE: no confirmed production domain is owned yet (see CONTENT_TODO.md).
 * Set `NEXT_PUBLIC_SITE_URL` at deploy time to the real domain. Until then we
 * fall back to a neutral local origin so nothing ships a fictitious canonical.
 */
const RAW = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "");

/** True only when a real public domain has been configured for this build. */
export const hasPublicDomain = Boolean(RAW);

/** Absolute origin used for metadataBase, sitemap and robots. Neutral in dev. */
export const SITE_URL = RAW || "http://localhost:3000";

/** Absolute URL helper. */
export const absoluteUrl = (path = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
