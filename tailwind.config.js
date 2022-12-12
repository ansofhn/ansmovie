/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        backGround: "#041C32",
        darkGray: "#04293A",
        softBlue: "#064663",
        softCream: "#ECB365",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
