/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        customTransparent: "#b8f2f238",
        lightblue: "#e7f5f5",
        skyBlue: "#7ad6d5",
      },
    },
  },
  plugins: [],
};
