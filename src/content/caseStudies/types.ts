import type { ProjectLink } from "@/content/projects";

export type Figure = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

export type CaseBlock =
  | { kind: "prose"; kicker?: string; heading?: string; body: string[] }
  | ({ kind: "figure"; bleed?: "full" | "wide" | "inset"; frame?: "window" | "plain" } & Figure)
  | { kind: "gallery"; columns?: 2 | 3; items: Figure[] }
  | { kind: "metrics"; note?: string; items: { value: string; label: string; sub?: string }[] }
  | {
      kind: "steps";
      kicker?: string;
      heading?: string;
      intro?: string;
      steps: { title: string; body: string }[];
    }
  | {
      kind: "split";
      kicker?: string;
      heading?: string;
      intro?: string;
      left: { title: string; points: string[] };
      right: { title: string; points: string[] };
    }
  | { kind: "statement"; text: string; attribution?: string }
  | { kind: "keyvalue"; heading?: string; rows: { k: string; v: string }[] }
  | {
      kind: "devices";
      kicker?: string;
      heading?: string;
      intro?: string;
      caption?: string;
      phones: Figure[];
    };

export type CaseStudy = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  role: string;
  period: string;
  status: string;
  stack: string[];
  links: ProjectLink[];
  hero: Figure;
  facts: { k: string; v: string }[];
  blocks: CaseBlock[];
  learned: string[];
  disclaimers?: string[];
};
