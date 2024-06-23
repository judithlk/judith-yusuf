import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "hover-links": "#87556F",
        "link-light": "#712B75",
        "label-light": "#87556F",
        "subhead-light": "#C74B50",
        "dark-bg": "#322F3D",
        "link-dark": "#C74B50",
        "headers-dark": "#87556F",
        "subhead-dark": "#87556F",
        "label-hover-dark": "#D49B54",
        "header-small-dark": "#D49B54",
        "sun-yellow": "#D49B54",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
