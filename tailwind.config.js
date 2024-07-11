/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Look for Tailwind classes in all JavaScript and TypeScript files under the src directory
  ],
  theme: {
    extend: {
    }, // Add custom Tailwind theme configurations here
    colors: {
      background: "#19313b",
      primary: "#264653",
      secondary: "#2A9D8F",
      button: "#F4A261",
      text: "#E9C46A",
      white: "#FFFFFF",
      black: "#000000",
      whiteLineHR: "#636363",
    }
  },
  plugins: [], // Add any Tailwind plugins here
};