/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryColor: "#00B207",
        SecondaryColor: "#2C742F",
        green50: "#EDF2EE",
        warning: "#FF8A00",
      },
      fontFamily: {
        homemade: ['"Homemade Apple"', "cursive"],
      },
    },
  },
  plugins: [],
};
