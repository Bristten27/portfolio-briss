import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#030712",
        surface: "#111827",
        primary: "#3B82F6",
        secondary: "#06B6D4",
        muted: "#9CA3AF"
      },
      boxShadow: {
        soft: "0 28px 80px rgba(15, 23, 42, 0.25)"
      },
      backgroundImage: {
        "radial-glow": "radial-gradient(circle at top left, rgba(59,130,246,0.18), transparent 26%), radial-gradient(circle at bottom right, rgba(6,182,212,0.16), transparent 22%)"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
