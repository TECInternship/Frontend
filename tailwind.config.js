/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Willywonka: "'Willywonka'",
        WorkSans: "'Work Sans', sans-serif",
      },
      animation: {
        fade: "pulse 0.5s ease-in-out 1",
      },
    },
  },
  plugins: [],
};
