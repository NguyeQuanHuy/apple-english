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
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "monospace"],
      },
      colors: {
        // nền + bề mặt (thay "paper")
        paper: { 50: "#1e2030", 100: "#242637", 200: "#2c2e42" },
        // chữ + viền (thay "ink")
        ink: { 900: "#e9e9ed", 700: "#c7c7d1", 500: "#9a9aa8", 300: "#6b6b78" },
        // accent chính duy nhất (thay "ember" và "sky")
        ember: { 50: "#26243a", 100: "#332f4d", 400: "#a79bdf", 500: "#9184d9", 600: "#7a6cc4", 700: "#6355a8" },
        sky: { 50: "#26243a", 100: "#332f4d", 400: "#a79bdf", 500: "#9184d9", 600: "#7a6cc4", 700: "#6355a8" },
        teal: { 50: "#22243a", 400: "#8f9bd9", 500: "#7a87c4", 600: "#636fa8" },
        gold: { 400: "#a79bdf", 500: "#9184d9" },
        rose: { 400: "#a79bdf", 500: "#9184d9" },
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(0,0,0,0.2), 0 4px 12px -2px rgba(0,0,0,0.35)",
        bump: "none",
        bumpsm: "none",
      },
      borderRadius: {
        chunky: "8px",
      },
      keyframes: {
        wiggle: { "0%, 100%": { transform: "rotate(-1deg)" }, "50%": { transform: "rotate(1deg)" } },
        pop: { "0%": { transform: "scale(0.95)", opacity: "0" }, "50%": { transform: "scale(1.05)" }, "100%": { transform: "scale(1)", opacity: "1" } },
      },
      animation: { wiggle: "wiggle 0.4s ease-in-out", pop: "pop 0.3s ease-out" },
    },
  },
  plugins: [],
};

export default config;
