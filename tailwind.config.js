/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFA500", // Orange
          light: "#FFB733",
          dark: "#CC8400",
        },
        secondary: {
          DEFAULT: "#FFD700", // Yellow
          light: "#FFE033",
          dark: "#CCAC00",
        },
        accent: {
          DEFAULT: "#4B3621", // Brown for contrast
          light: "#6B5241",
          dark: "#2B1A11",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
