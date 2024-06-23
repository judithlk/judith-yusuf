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
      // animation: {
      //   typewriter: "typewriter 2s steps(50) forwards",
      //   caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
      // },
      // keyframes: {
      //   typewriter: {
      //     to: {
      //       left: "100%"
      //     }
      //   },
      //   blink: {
      //     '0%': {
      //       opacity: '0',
      //     },
      //     '0.1%': {
      //       opacity: '1',
      //     },
      //     '50%': {
      //       opacity: '1',
      //     },
      //     '50.1%': {
      //       opacity: '0',
      //     },
      //     '100%': {
      //       opacity: '0',
      //     },
      //   }
      // },
      animation: {
        cursor: "cursor .6s linear infinite alternate",
        type: "type 1.8s ease-out .8s 1 normal both",
        "type-reverse": "type 1.8s ease-out 0s infinite alternate-reverse both",
      },
      keyframes: {
        type: {
          "0%": { width: "0ch" },
          "5%, 10%": { width: "1ch" },
          "15%, 20%": { width: "2ch" },
          "25%, 30%": { width: "3ch" },
          "35%, 40%": { width: "4ch" },
          "45%, 50%": { width: "5ch" },
          "55%, 60%": { width: "6ch" },
          "65%, 70%": { width: "7ch" },
          "75%, 80%": { width: "8ch" },
          "85%, 90%": { width: "9ch" },
          "95%": { width: "10ch" },
        },
        cursor: {
          "0%, 40%": {
            opacity: "1",
          },

          "60%, 100%": {
            opacity: "0",
          },
        },
      },
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
