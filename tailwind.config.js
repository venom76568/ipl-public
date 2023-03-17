/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
			xs: "375px",
			...defaultTheme.screens,
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/forms"),
  ],
}
