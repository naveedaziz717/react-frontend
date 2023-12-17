import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "1.5rem",
        lg: "2rem",
      },
    },
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.rose,
        neutral: colors.stone,
        alert: colors.amber,
        danger: colors.red,
      },
    },
  },
  plugins: [],
};
