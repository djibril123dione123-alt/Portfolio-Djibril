"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "span" | "article" | "header";
  y?: number;
};

/** The single reveal signature used across the site. */
export function Reveal({ children, className, delay = 0, as = "div", y = 12 }: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE, delay },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      {children}
    </MotionTag>
  );
}

/** Parent that staggers its <Stagger.Item> children. */
export function Stagger({
  children,
  className,
  step = 0.06,
  as = "div",
  /** onLoad = animate on mount (use above the fold); otherwise on scroll-in. */
  trigger = "inView",
}: {
  children: ReactNode;
  className?: string;
  step?: number;
  as?: "div" | "ul" | "ol" | "dl";
  trigger?: "inView" | "onLoad";
}) {
  const MotionTag = motion[as];
  const activation =
    trigger === "onLoad"
      ? { animate: "visible" as const }
      : { whileInView: "visible" as const, viewport: { once: true, amount: 0.18 } };
  return (
    <MotionTag
      className={className}
      initial="hidden"
      {...activation}
      variants={{ visible: { transition: { staggerChildren: step, delayChildren: 0.05 } } }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  className,
  y = 12,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  as?: "div" | "li";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
      }}
    >
      {children}
    </MotionTag>
  );
}

/** Image reveal — a clip wipe + settle, not a plain fade. */
export function RevealMedia({
  children,
  className,
  delay = 0,
  trigger = "inView",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  trigger?: "inView" | "onLoad";
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  const shown = { clipPath: "inset(0 0 0% 0)", opacity: 1, y: 0 };
  const activation =
    trigger === "onLoad"
      ? { animate: shown }
      : { whileInView: shown, viewport: { once: true, amount: 0.2 } };
  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(0 0 12% 0)", opacity: 0, y: 14 }}
      {...activation}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
