import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

/**
 * Chrome for every normal page (home, about, case studies). Deliberately
 * excluded from `/cv`, which is its own print-composed document and gets
 * only the bare root layout (fonts, skip link).
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  );
}
