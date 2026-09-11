import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F6F3EC",
          pure: "#FCFAF4",
          dim: "#EFEADD",
          cool: "#ECEBE3",
          deep: "#E6DECB",
        },
        // "Encre" — a blue-graphite ink, deliberately cooler than the warm
        // ivory paper it sits on (the print-on-paper contrast is the point).
        ink: {
          DEFAULT: "#1C2027",
          soft: "#3B3F48",
          muted: "#5E6270",
          faint: "#92959F",
        },
        line: {
          DEFAULT: "#DED7C6",
          strong: "#C7BEA8",
        },
        // Discreet copper / terracotta — the single accent.
        clay: {
          DEFAULT: "#A2472A",
          deep: "#7C331E",
          night: "#5C2415",
          soft: "#BE6B4C",
          wash: "#EFE1D7",
        },
        // Deep institutional blue-black — used once, for the Origin rupture.
        // Not a printed pure black: a graphite-navy "ink" tone.
        night: {
          DEFAULT: "#12151F",
          soft: "#1B2030",
          line: "#2B3244",
          faint: "#8890A3",
        },
        // Project accent fields — used as real tinted panels inside a project's staging.
        samay: { DEFAULT: "#0E3D2C", wash: "#E7EFE7", line: "#BFD3C4" },
        mairie: { DEFAULT: "#1E6E86", wash: "#E2ECEF", line: "#BFD6DD" },
        commerce: { DEFAULT: "#8A5A22", wash: "#F0E7D8", line: "#DAC9AC" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      // Modular scale, ~1.24. One system.
      fontSize: {
        label: ["0.72rem", { lineHeight: "1", letterSpacing: "0.14em" }],
        caption: ["0.8125rem", { lineHeight: "1.5" }],
        "body-lg": ["1.1875rem", { lineHeight: "1.6" }],
        lede: ["1.1875rem", { lineHeight: "1.62", letterSpacing: "-0.005em" }],
        title: ["clamp(1.15rem, 1.5vw, 1.35rem)", { lineHeight: "1.28", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.3rem, 1.9vw, 1.6rem)", { lineHeight: "1.16", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.6rem, 2.7vw, 2.15rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.05rem, 3.9vw, 3.05rem)", { lineHeight: "1.04", letterSpacing: "-0.025em" }],
        "display-xl": ["clamp(2.7rem, 5.6vw, 4.4rem)", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
      },
      maxWidth: {
        prose: "40rem",
        wide: "88rem",
      },
      borderRadius: {
        md: "10px",
        lg: "14px",
        device: "2rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        card: "0 2px 4px -1px rgb(30 22 14 / 0.05), 0 12px 24px -10px rgb(30 22 14 / 0.13)",
        screenshot:
          "inset 0 0 0 1px rgb(255 255 255 / 0.55), 0 2px 6px -2px rgb(30 22 14 / 0.09), 0 30px 55px -26px rgb(30 22 14 / 0.24)",
        float: "0 30px 60px -30px rgb(20 17 9 / 0.4)",
      },
      keyframes: {
        "sheen": {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" },
        },
      },
      animation: {
        sheen: "sheen 1.4s cubic-bezier(0.4,0,0.2,1) 0.3s both",
      },
    },
  },
  plugins: [],
};

export default config;
