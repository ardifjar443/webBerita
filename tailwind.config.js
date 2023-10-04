/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        myLight: {
          primary: "#0f0e17", //box , navbar color
          secondary: "#4df253", //
          accent: "#f25f4c", // button active
          neutral: "#ff8906", //
          "base-100": "#fffffe", // background color
          info: "#fffffe", // text color
          success: "#a7a9be", // text secondary color
          warning: "#937d10",
          error: "#dc3a38",
        },
      },
      {
        myDark: {
          primary: "#fffffe", //box , navbar color
          secondary: "#4df253", //
          accent: "#f25f4c", // button active
          neutral: "#ff8906", //
          "base-100": "#0f0e17", // background color
          info: "#0f0e17", // text color
          success: "#a7a9be", // text secondary color
          warning: "#937d10",
          error: "#dc3a38",
        },
      },
    ],
  },
});
