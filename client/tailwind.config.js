const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        rose: colors.rose,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        lime: colors.lime,
        sky: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        redPrimary: "#CE0000",
        grey: "#F2F2F2",
        blueLight: "#0054A6",
        blueDark: "#004385",
        yellowSecondary: "#FFC318",
        gradient: "#212121",
      },
      
    },
    screens: {
      "2xl": { max: "1490px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1160px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "780px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "500px" },
      // => @media (max-width: 639px) { ... }

      "just-sm": { min: "530px" },
      "just-xl": { min: "1279px" },
      "just-lg": { min: "1160px" },
    },
  },
  plugins: [],
});
