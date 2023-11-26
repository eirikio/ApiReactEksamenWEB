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
      cursor: {
        f1: "url(/images/f1cursor.png), F1",
      },
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
      screens: {
        sm: "600px",

        md: "768px",

        lg: "1024px",

        xl: "1280px",

        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
