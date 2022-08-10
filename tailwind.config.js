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
        pulse: 'pulse 0.1s cubic-bezier(0.3, 0, 1, 1) 0s',
      },
      keyframes: {
        pulse: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
