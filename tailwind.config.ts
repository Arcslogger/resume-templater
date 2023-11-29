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
        pine: {
          base: "#191724",
        },
        dawn: {
          base: "#fcfcfc",
          text: "#575279",
          darkText: "#221c4f",
          subtle: "#797593",
          muted: "#9893a5",
          iris: "#907aa9",
          irisBright: "#9368b0",
          rose: "#d7827e",
          overlay: "#f2e9e1",
          surface: "#fffaf3",
          pine: "#286983",
          foam: "#56949f",
        },
      },
      fontFamily: {
        heading: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace"],
        sans: ["Atkinson Hyperlegible", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
