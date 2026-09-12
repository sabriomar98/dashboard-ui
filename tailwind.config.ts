import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lamaSky: "#C3EBFA",
        lamaSkyLight: "#EDF9FD",
        lamaYellow: "#FAE27C",
        lamaYellowLight: "#FEFCE8",
        lamaPurple: "#CFCEFF",
        lamaPurpleLight: "#F1F0FF",
        lamaRed: "#FCDDD7",
        lamaRedLight: "#FEF2F0",
        lamaGreen: "#D1FAE5",
        lamaGreenLight: "#F0FDF4",
      },
      boxShadow: {
        card: "0 2px 15px -3px rgba(0,0,0,.07), 0 10px 20px -2px rgba(0,0,0,.04)",
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};
export default config;
