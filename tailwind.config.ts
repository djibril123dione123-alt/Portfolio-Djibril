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
        // Warm editorial neutrals
        paper: {
          DEFAULT: "#F6F3EC",
          dim: "#EEEADF",
          deep: "#E4DECF",
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
        // Single controlled accent: clay / burnt sienna
        clay: {
          DEFAULT: "#B34327",
          deep: "#8C3119",
          soft: "#C9694E",
          wash: "#F0E4DC",
        },
        night: {
          DEFAULT: "#151309",
          soft: "#211E14",
          line: "#3A3626",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        kicker: ["0.72rem", { lineHeight: "1", letterSpacing: "0.18em" }],
        "display-xl": ["clamp(2.85rem, 8vw, 6.25rem)", { lineHeight: "0.98", letterSpacing: "-0.022em" }],
        "display-lg": ["clamp(2.35rem, 5.6vw, 4.25rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.9rem, 4vw, 2.9rem)", { lineHeight: "1.06", letterSpacing: "-0.015em" }],
        "title": ["clamp(1.3rem, 2.4vw, 1.7rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "body-lg": ["1.1875rem", { lineHeight: "1.6" }],
      },
      maxWidth: {
        prose: "40rem",
        wide: "78rem",
      },
      spacing: {
        section: "clamp(5rem, 12vw, 9.5rem)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
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
