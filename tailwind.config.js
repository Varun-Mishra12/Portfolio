// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust depending on your project
  ],
  darkMode: 'class',  // <-- ADD THIS LINE to enable dark mode via class
  theme: {
    extend: {},
  },
  plugins: [],
};
