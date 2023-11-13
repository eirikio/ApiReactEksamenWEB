/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        HeaderCarW: ["580px"],
        HomePageTextContainer: ["650px"],
      },
      height: {
        HeaderCarH: ["450px"],
      },
      color: {},
      fontFamily: {
        cabin: ["Cabin"],
        dosis: ["Dosis"],
        blackopsone: ["Black Ops One"],
      },
    },
  },
  plugins: [],
};
