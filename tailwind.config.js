module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./safelist.txt",
  ],
  darkMode: "class",
  safelist: ["", "px-4", "any-class-you-want-to-keep"],
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  important: "#root",
  theme: {
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
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tw-elements/dist/plugin"),
    require("tailwind-safelist-generator")({
      patterns: ["from-{colors}", "to-{colors}"],
    }),
  ],
};
