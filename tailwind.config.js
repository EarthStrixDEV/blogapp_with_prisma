/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Look for Tailwind classes in all JavaScript and TypeScript files under the src directory
  ],
  theme: {
    extend: {
    }, // Add custom Tailwind theme configurations here
    colors: {
      background: "#000814",
      primary: "#001D3D",
      secondary: "#003566",
      button: "#FFC300",
      white: "#FFFFFF",
      black: "#000000",
    }
  },
  plugins: [], // Add any Tailwind plugins here
};