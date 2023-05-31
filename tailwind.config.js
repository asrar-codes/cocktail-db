/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    gridTemplateColumns: {
      custom: "repeat(auto-fit, minmax(230px, 1fr))",
    },
    fontFamily: {
      pop: ["Poppins", "sans-serif"],
      ubuntu: ["Ubuntu Mono", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
