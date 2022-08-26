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
      keyframes: {
        fade: {
          "0%": {
            opacity: "0",
            transform: "translateX(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        fade: "fade 0.5s ease-out",
      },
      backgroundImage: {
        red: "url('../public/assets/bg2.png')",
      },
      transitionProperty: {
        height: "height",
        background: "background",
        filter: "filter",
      },
    },
  },
  plugins: [],
};
