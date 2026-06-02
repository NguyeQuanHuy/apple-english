import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "monospace"],
      },
      colors: {
        paper: {
          50: "#FBF7F0",
          100: "#F5EFE3",
          200: "#EBE1CC",
        },
        ink: {
          900: "#1A1814",
          700: "#3A352C",
          500: "#6B6358",
          300: "#A89F8F",
        },
        ember: {
          // warm orange accent
          50: "#FFF4ED",
          100: "#FFE4D1",
          400: "#FF8A4C",
          500: "#F26B1F",
          600: "#D8530C",
          700: "#A53D08",
        },
        teal: {
          50: "#E8F4F2",
          400: "#3DA89C",
          500: "#2A8F84",
          600: "#1F6F66",
          700: "#155049",
        },
        gold: {
          400: "#E8B84A",
          500: "#C89A2E",
        },
        rose: {
          400: "#E8678A",
          500: "#C84A6E",
        },
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(26,24,20,0.04), 0 4px 12px -2px rgba(26,24,20,0.08)",
        bump: "0 4px 0 0 currentColor",
        bumpsm: "0 3px 0 0 currentColor",
      },
      borderRadius: {
        chunky: "1.25rem",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
        pop: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        wiggle: "wiggle 0.4s ease-in-out",
        pop: "pop 0.3s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
