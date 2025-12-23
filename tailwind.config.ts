import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1F3B",
        teal: "#00897B",
        sky: "#4C6FFF",
        ink: "#1B1F24",
        paper: "#F5F7FA",
        card: "#FFFFFF",
        muted: "#E6ECF2",
        amber: "#FFB300",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
