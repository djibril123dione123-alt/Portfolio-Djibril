import { Fragment, type ReactNode } from "react";

/** Minimal inline emphasis: **bold** segments become <strong>. */
export function rich(text: string): ReactNode {
  const parts = text.split("**");
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>,
  );
}
