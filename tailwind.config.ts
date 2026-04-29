import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        porcelain: "#F4F3EF",
        charcoal: "#1A1918",
        maerx: {
          dark: "#050B14",
          card: "#0D1829",
          cyan: "#00E5FF",
          blue: "#1E88E5",
          purple: "#7C4DFF",
          text: "#E2E8F0",
        },
        liquid: {
          amber: "#FF6B35",
          sage: "#8F9E8B",
        },
      },
    },
  },
  plugins: [],
};
export default config;
