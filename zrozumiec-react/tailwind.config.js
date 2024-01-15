/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gap: {
        30: "30px",
      },
      spacing: {
        1: "5px",
        2: "10px",
        3: "15px",
        6: "30px",
      },
    },
  },
  plugins: [],
};
