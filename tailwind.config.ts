import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          DEFAULT: "#F7F4ED", // warm off-white background
          50: "#FCFAF6",
          100: "#F7F4ED",
          200: "#EFEAE0",
        },
        ink: {
          DEFAULT: "#1C1A16", // near-black primary text
          muted: "#5C584F", // secondary text, warm gray
        },
        sage: {
          DEFAULT: "#A8C0A0", // muted sage green accent
          50: "#EEF3EC",
          100: "#DCE8D8",
          400: "#A8C0A0",
          600: "#728566", // deeper sage, for text on light sage / hover states
        },
        line: "#E2DDCF", // hairline borders / dividers
      },
      fontFamily: {
        display: ["var(--font-display)", "-apple-system", "Helvetica", "Arial", "sans-serif"],
        body: ["var(--font-display)", "-apple-system", "Helvetica", "Arial", "sans-serif"],
      },

      fontSize: {
        // Type scale per design handoff
        h1: ["4rem", { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "600" }],
        h2: ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "600" }],
        h3: ["1.5rem", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "600" }],
        body: ["1.125rem", { lineHeight: "1.7" }], // 18px / 1.7
        small: ["0.9375rem", { lineHeight: "1.5" }],
        eyebrow: ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.08em" }],
      },
      maxWidth: {
        page: "1440px",
        reading: "760px",
        artifact: "1100px",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        lg: "12px",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(28, 26, 22, 0.04)",
        card: "0 2px 8px rgba(28, 26, 22, 0.06)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
