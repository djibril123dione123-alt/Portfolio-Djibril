import type { CaseStudy } from "./types";

export const nurAlBindjib: CaseStudy = {
  slug: "nur-al-bindjib",
  name: "Nur Al-BinDjib",
  tagline: "A collaborative PWA for shared progress and accountability between two people.",
  summary:
    "A private, installable web app built solo for two people to keep shared goals and hold each other accountable. Pairing through an invitation code, shared tasks and progress, assigned tasks with event notifications, a deep-work timer, and push notifications through a service worker. Built as a real multi-user, realtime product on a small surface.",
  role: "Solo design & development",
  period: "2026",
  status: "Deployed · private product",
  stack: [
    "React",
    "Tailwind CSS",
    "Supabase / PostgreSQL",
    "Row-Level Security",
    "RPC",
    "Edge Functions",
    "Web Push",
    "Service Worker",
    "PWA",
    "Vercel",
  ],
  links: [
    { label: "nur-al-bindjib.vercel.app", href: "https://nur-al-bindjib.vercel.app", kind: "live" },
  ],
  hero: {
    src: "/projects/nur-al-bindjib/cover.svg",
    alt: "Nur Al-BinDjib — pairing by invitation code, shared tasks, shared progress and push notifications.",
    caption: "Two paired users, one shared state, realtime.",
    width: 1200,
    height: 750,
  },
  facts: [
    { k: "Role", v: "Solo design & development" },
    { k: "Type", v: "Collaborative PWA · accountability between two users" },
    { k: "Pairing", v: "Invitation code links two accounts into one shared space" },
    { k: "Realtime", v: "Shared progress, assigned tasks, event notifications" },
    { k: "Platform", v: "Installable PWA with service worker and Web Push" },
    { k: "Status", v: "Deployed · kept private" },
  ],
  blocks: [
    {
      kind: "prose",
      kicker: "01 — What it is",
      heading: "A two-person accountability space",
      body: [
        "Nur Al-BinDjib is a private product for two people to share goals, assign each other tasks, track progress together and get nudged when something needs attention. It is deliberately small in scope and personal in nature, so it stays private.",
        "What it demonstrates technically is not small: pairing, shared state, realtime updates, assigned work between users, and notifications that reach a phone even when the app is closed.",
      ],
    },
    {
      kind: "split",
      kicker: "02 — Features",
      heading: "Small surface, real multi-user mechanics",
      left: {
        title: "Collaboration",
        points: [
          "Pairing via invitation code",
          "Tasks, goals and a shared points / progress system",
          "Assigning tasks to the other user",
          "Shared history and progress",
          "Messaging / exchanges between the pair",
        ],
      },
      right: {
        title: "Platform",
        points: [
          "Installable PWA",
          "Service worker for offline shell and push",
          "Web Push notifications on events",
          "Deep-work timer",
          "Daily content and tracking",
        ],
      },
    },
    {
      kind: "prose",
      kicker: "03 — Architecture",
      heading: "How two accounts share one reality safely",
      body: [
        "Supabase and PostgreSQL hold the data. **Row-Level Security** scopes every row to the paired space so neither user can read anything outside it. **RPC** functions handle the multi-step operations — pairing, task assignment, progress updates — as single trusted calls. **Edge Functions** send Web Push messages when an event fires.",
        "On the client, a service worker makes it installable and lets notifications arrive when the app isn't open.",
      ],
    },
    {
      kind: "prose",
      kicker: "04 — Why it's in the portfolio",
      heading: "The multi-user primitives, isolated",
      body: [
        "It's less commercially weighty than the three main case studies, and it's kept private. It earns its place by showing the pairing, permissions, realtime and push building blocks cleanly, on a surface small enough to see all of them at once.",
      ],
    },
  ],
  learned: [
    "Push notifications that actually arrive are mostly service-worker and edge-function plumbing, not UI.",
    "Row-Level Security is the right place to enforce a shared space — not the client, not the queries.",
    "A small, personal product is a good lab for mechanics you'll reuse at larger scale.",
  ],
  disclaimers: [
    "Presented at the level of mechanics and architecture only. No user identities, private content or the personal context behind the product are shown.",
  ],
};
