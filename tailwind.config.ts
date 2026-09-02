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
          dim: "#EFEBE0",
          deep: "#E7E1D2",
          cool: "#EDECE6",
        },
        ink: {
          DEFAULT: "#181611",
          soft: "#3B372F",
          muted: "#6B6456",
          faint: "#948C7B",
        },
        line: {
          DEFAULT: "#DDD6C6",
          strong: "#C9C0AC",
        },
        clay: {
          DEFAULT: "#B34327",
          deep: "#8C3119",
          soft: "#C9694E",
          wash: "#F0E4DC",
        },
        night: {
          DEFAULT: "#141208",
          soft: "#211E14",
          line: "#3A3626",
          faint: "#8B836E",
        },
        // Project accent fields — used only as local tints inside a project's staging.
        samay: { DEFAULT: "#0E3D2C", wash: "#E7EFE7", ink: "#0B2C20" },
        mairie: { DEFAULT: "#1E6E86", wash: "#E4EEF1" },
        commerce: { DEFAULT: "#8A5A22", wash: "#F1E9DC" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        kicker: ["0.72rem", { lineHeight: "1", letterSpacing: "0.16em" }],
        "display-xl": ["clamp(2.6rem, 6vw, 4.75rem)", { lineHeight: "1.0", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2.1rem, 4.4vw, 3.35rem)", { lineHeight: "1.04", letterSpacing: "-0.022em" }],
        "display-md": ["clamp(1.7rem, 3vw, 2.4rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        title: ["clamp(1.2rem, 2vw, 1.55rem)", { lineHeight: "1.22", letterSpacing: "-0.015em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
      },
      maxWidth: {
        prose: "42rem",
        wide: "88rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        panel: "0 1px 0 rgba(24,22,17,0.03), 0 18px 40px -28px rgba(24,22,17,0.28)",
        float: "0 30px 60px -32px rgba(24,22,17,0.34)",
      },
      keyframes: {
        "fade-rise": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-rise": "fade-rise 0.7s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
