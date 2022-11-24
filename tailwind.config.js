module.exports = {
  darkMode: "class",
  safelist: ["", "px-4", "any-class-you-want-to-keep"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./safelist.txt",
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
    extend: {
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      }
    }
  },
  variants: {
    extend: {},
    lineClamp: ['responsive', 'hover']
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("tw-elements/dist/plugin"),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require("tailwind-safelist-generator")({
      patterns: ["from-{colors}", "to-{colors}"],
    }),
  ],
};
