/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        plusJakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        "darker-grey": "#20212C",
        "dark-grey": "#2B2C37",
        "slate-grey": "#3E3F4E",
        "medium-grey": "#828FA3",
        "light-grey": "#F4F7FD",
        "ice-blue": "#E4EBFA",
        "primary-purple": "#635FC7",
        "light-purple": "#A8A4FF",
        "primary-red": "#EA5555",
        "light-red": "#FF9898",
      },
    },
  },
  plugins: [],
};
