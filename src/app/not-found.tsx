import Link from "next/link";
import { Container } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[70vh] flex-col justify-center py-24">
        <p className="font-mono text-[0.78rem] uppercase tracking-[0.2em] text-clay-deep">
          404
        </p>
        <h1 className="mt-5 max-w-2xl text-display-md font-display text-balance">
          That page isn&rsquo;t part of the system.
        </h1>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          <Link href="/" className="link-underline text-[0.95rem]">
            Back home
          </Link>
          <Link href="/#work" className="link-underline text-[0.95rem]">
            Selected work
          </Link>
        </div>
      </div>
    </Container>
  );
}
