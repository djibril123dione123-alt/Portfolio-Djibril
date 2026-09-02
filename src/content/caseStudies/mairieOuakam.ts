import type { CaseStudy } from "./types";

export const mairieOuakam: CaseStudy = {
  slug: "mairie-ouakam",
  name: "Mairie de Ouakam",
  tagline: "Turning a paper-based administrative workflow into a digital system.",
  summary:
    "A one-month digital-transformation internship in a Dakar municipality. The technical-services department tracked incoming mail on paper registers. I diagnosed the workflow, designed and built a structured database to replace it, set up the infrastructure to run it, trained the staff and left it in daily use.",
  role: "Digital Transformation Intern",
  period: "3 October – 3 November 2025",
  status: "Deployed · staff trained · in use at end of internship",
  stack: [
    "Microsoft Access (forms, queries, reports)",
    "Multi-criteria search",
    "Scanned-document links",
    "Local-network file sharing",
    "Workstation maintenance",
  ],
  links: [],
  hero: {
    src: "/projects/mairie-ouakam/menu-principal.webp",
    alt: "Main menu of the Access solution for incoming-mail management: add a letter, consult letters.",
    caption: "The front door of the tool: two actions, no training manual required.",
    width: 1919,
    height: 946,
  },
  facts: [
    { k: "Role", v: "Digital Transformation Intern" },
    { k: "Where", v: "Mairie de Ouakam — Direction des Services Techniques" },
    { k: "Supervisor", v: "Mouhamed Fall — Director of Technical Services" },
    { k: "Dates", v: "3 October 2025 – 3 November 2025" },
    { k: "Scope", v: "Incoming-mail registration, search, status tracking" },
    { k: "Evidence", v: "Internship report, official presentation, Access screenshots" },
  ],
  blocks: [
    {
      kind: "prose",
      kicker: "01 — Context",
      heading: "A department that ran on paper registers",
      body: [
        "The technical-services department of the Mairie de Ouakam receives a constant flow of incoming mail — requests, notifications, official correspondence. It was recorded by hand in registers and moved physically between offices.",
        "That worked until someone needed to find something. Then it meant leafing through a register, hoping the entry was legible, hoping the letter hadn't been misfiled or carried off to another desk.",
      ],
    },
    {
      kind: "split",
      kicker: "02 — Before",
      heading: "What the paper process cost",
      left: {
        title: "Symptoms",
        points: [
          "Slow lookups through physical registers",
          "Risk of lost or misfiled correspondence",
          "Weak traceability of where a letter was",
          "No usable statistics on volume or status",
        ],
      },
      right: {
        title: "Consequences",
        points: [
          "Requests answered late or not at all",
          "No shared view between offices",
          "Institutional memory tied to individuals",
          "Hard to show the workload the department carried",
        ],
      },
    },
    {
      kind: "steps",
      kicker: "03 — Diagnosis",
      heading: "One month, spent understanding before building",
      intro:
        "The internship was short, so the temptation was to open Access on day one. I didn't. The first week was diagnosis.",
      steps: [
        {
          title: "Direct observation",
          body: "Watched how mail was actually received, logged, routed and retrieved — including the informal habits that no procedure document mentions.",
        },
        {
          title: "Interviews",
          body: "Sat with the Director of Technical Services and with the agents who handle the registers every day.",
        },
        {
          title: "Document analysis",
          body: "Went through the existing registers and internal forms to understand the fields that mattered and the ones that didn't.",
        },
      ],
    },
    {
      kind: "prose",
      kicker: "04 — Solution",
      heading: "A structured database shaped to the office, not to the tool",
      body: [
        "The build was a Microsoft Access solution — the right call for the context: no server to provision, runs on the machines the department already had, and something a successor can maintain.",
        "It replaced the register with structured records for every incoming letter, and gave the staff **multi-criteria search**: by date range, sender, recipient, status and discharge number. Letters could be consulted, their status tracked, and scanned copies opened from the record. History was kept and could be exported for statistics.",
      ],
    },
    {
      kind: "gallery",
      columns: 2,
      items: [
        {
          src: "/projects/mairie-ouakam/ajout-courrier.webp",
          alt: "Access form for adding an incoming letter: discharge number, reception date, sender, recipient, subject, scanned copy.",
          caption: "Adding a letter — one screen, the fields the office actually uses. Personal values masked.",
          width: 1855,
          height: 886,
        },
        {
          src: "/projects/mairie-ouakam/recherche.webp",
          alt: "Access search form with filters for date range, recipient, status and discharge number.",
          caption: "Search by discharge number — a lookup that used to mean opening a register.",
          width: 1697,
          height: 495,
        },
      ],
    },
    {
      kind: "figure",
      src: "/projects/mairie-ouakam/consultation.webp",
      alt: "Access consultation grid listing incoming letters with number, reception date, sender, recipient and subject. Sender and subject columns are masked for privacy.",
      caption:
        "The consultation grid over the full register. Sender and subject columns are pixelated here — this is real municipal correspondence and none of it is mine to publish.",
      bleed: "wide",
      frame: "plain",
      width: 1907,
      height: 887,
    },
    {
      kind: "split",
      kicker: "05 — Infrastructure",
      heading: "Making it something the office could actually run",
      intro:
        "A database nobody can open is not a transformation. Part of the internship was the unglamorous infrastructure work around it.",
      left: {
        title: "Set up",
        points: [
          "Split front-end / back-end Access files",
          "Local-network file sharing so several agents use one dataset",
          "Antivirus and basic workstation hardening",
        ],
      },
      right: {
        title: "Kept running",
        points: [
          "Updates to forms and queries during the month",
          "Repair of a workstation that was out of service",
          "Handover notes so the tool outlives the intern",
        ],
      },
    },
    {
      kind: "prose",
      kicker: "06 — Adoption",
      heading: "Trained the people who would keep using it",
      body: [
        "The tool was demonstrated to the secretaries and agents who log mail, and they were walked through the real tasks — adding a letter, finding one, checking a status — until it was theirs, not mine.",
        "By the end of the internship the department was using it for incoming mail.",
      ],
    },
    {
      kind: "statement",
      text:
        "Searches that once meant leafing through a physical register could now be done in seconds through structured filters.",
      attribution: "The defensible version of the impact",
    },
    {
      kind: "prose",
      kicker: "07 — On the numbers",
      heading: "What I will and won't claim",
      body: [
        "The internship report mentions a reduction of more than 70% in processing time. I include it for completeness, but there was no formal measurement protocol behind it, so I don't present it as a metric.",
        "The claim I stand behind is the qualitative one: a lookup went from minutes of manual searching to seconds of filtering, and the department gained traceability and statistics it did not have before.",
      ],
    },
  ],
  learned: [
    "In a short engagement, spending the first week not building is the highest-leverage decision available.",
    "The right technology is the one the client can still run after you leave. Access was unglamorous and correct.",
    "Deployment, training and a broken PC are part of the work, not a footnote to it.",
    "Claim what you measured. A qualitative statement you can defend beats a percentage you can't.",
  ],
  disclaimers: [
    "Screenshots are from the real Access solution. Sender names and letter subjects — genuine municipal correspondence — are irreversibly pixelated. Originals were never modified.",
    "The \">70% processing-time reduction\" from the internship report is reported as context, not as a measured KPI.",
  ],
};
