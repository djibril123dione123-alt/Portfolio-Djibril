import QRCode from "qrcode";
import { absoluteUrl, hasPublicDomain } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * A print-ready QR code pointing at the live portfolio, with the "D." mark
 * composited in the centre (High error-correction leaves enough redundancy
 * for a logo overlay to stay scannable).
 *
 * Generated server-side (build time) from `NEXT_PUBLIC_SITE_URL` — never a
 * fabricated domain. Until a real domain is configured this renders nothing
 * at all rather than a QR code to a placeholder address; the layout that
 * uses it (the CV) is built to look complete either way. Once the env var
 * is set, the QR appears automatically — no code change needed.
 */
export async function PortfolioQr({
  path = "/",
  size = 112,
  className,
}: {
  path?: string;
  size?: number;
  className?: string;
}) {
  if (!hasPublicDomain) return null;

  const target = absoluteUrl(path);
  const svg = await QRCode.toString(target, {
    type: "svg",
    errorCorrectionLevel: "H",
    margin: 1,
    width: size,
    color: { dark: "#1C2027", light: "#00000000" },
  });

  const markSize = Math.round(size * 0.26);

  return (
    <div
      role="img"
      aria-label={`QR code linking to ${target}`}
      className={cn("qr-code relative shrink-0 [&_svg]:block [&_svg]:h-full [&_svg]:w-full", className)}
      style={{ width: size, height: size }}
    >
      {/* Trusted, self-generated SVG markup — not user input. */}
      <div dangerouslySetInnerHTML={{ __html: svg }} />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper-pure"
        style={{ width: markSize + 6, height: markSize + 6 }}
      >
        <div
          className="flex items-center justify-center rounded-full bg-ink"
          style={{ width: markSize, height: markSize }}
        >
          <span
            className="font-display text-paper-pure"
            style={{ fontSize: markSize * 0.62, lineHeight: 1 }}
          >
            D
          </span>
        </div>
      </div>
    </div>
  );
}

/** QR + French micro-legend, sized for print. Used on the CV. */
export async function PortfolioQrBlock({ className }: { className?: string }) {
  if (!hasPublicDomain) return null;

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <PortfolioQr size={80} className="qr-print-size" />
      <div className="leading-tight">
        <p className="text-[0.78rem] font-semibold uppercase tracking-[0.06em] text-ink">
          Voir le portfolio
        </p>
        <p className="text-[0.74rem] text-ink-muted">Projets · réalisations · parcours</p>
      </div>
    </div>
  );
}
