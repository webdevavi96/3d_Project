/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lavender: "#E0C3FC",
        blush: "#FBC2EB",
        warmBeige: "#FDFBF7",
        softBlue: "#A6C1EE",
        glass: "rgba(255, 255, 255, 0.25)",
      },
      animation: {
        "fade-in": "fadeIn 2s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Ensure you have a clean font
      },
    },
  },
  plugins: [],
};
