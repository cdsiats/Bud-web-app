/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#008080",
        lightshade: "#ECE6E5",
        lightaccent: "#78B4D9",
        darkaccent: "#86877E",
        darkshade: "#262B3D",
      },
    },
  },
  plugins: [],
};
