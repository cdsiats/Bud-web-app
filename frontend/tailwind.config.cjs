/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#ACD2EC",
        lightshade: "#F5F4F4",
        lightaccent: "#758E7A",
        darkaccent: "#B13B57",
        darkshade: "#27223F",
      },
    },
  },
  plugins: [],
};
