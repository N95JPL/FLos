/* eslint-disable no-unused-vars */
import defaultTheme from "tailwindcss/defaultTheme";
export const darkMode = "class";
export const safelist = ["", "px-4", "any-class-you-want-to-keep"];
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./src/renderer/index.html",
  "./safelist.txt",
  "./node_modules/tw-elements/dist/js/**/*.js",
];
export const important = "#root";
export const theme = {
  container: {
    center: true,

    padding: {
      DEFAULT: "1rem",
      sm: "2rem",
      lg: "4rem",
      xl: "5rem",
      "2xl": "6rem",
    },
  },
  extend: {
    lineClamp: {
      7: "7",
      8: "8",
      9: "9",
      10: "10",
    },
  },
};
export const variants = {
  extend: {},
  lineClamp: ["responsive", "hover"],
};
export const corePlugins = {
  aspectRatio: false,
};
export const plugins = [
  require("tw-elements/dist/plugin"),
  require("@tailwindcss/forms"),
  require("@tailwindcss/typography"),
  require("@tailwindcss/container-queries"),
  require("@tailwindcss/aspect-ratio"),
  require("tailwind-safelist-generator")({
    patterns: ["from-{colors}", "to-{colors}"],
  }),
];
