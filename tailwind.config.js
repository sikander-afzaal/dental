/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        avenir: ["Avenir", ...defaultTheme.fontFamily.serif],
        nunito: ["Nunito", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        cyan: "#00D1C2",
        "text-black": "#161616",
        "main-text": "#263355",
        "gray-text": "#545454",
      },
    },
  },
  plugins: [],
};
