/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#54E6AF",
        lightGreen: "#B3FFE2",
        darkGray: "#2C344B",
        lightGray: "#C2CBE5",
        gray: "#5A668A",
        dark: "#121725",
        red: "#FB3E3E",
      }
    },
  },
  plugins: [],
}