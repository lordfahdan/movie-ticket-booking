/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "mobile-320": "320px",
      "mobile-480": "480px",
      browser: "600px",
    },
    extend: {
      gridTemplateColumns: {
        "list-mobile": "repeat(auto-fill, calc(50% - 20px))",
        "list-browser": "repeat(auto-fill, calc(33.33% - 20px))",
      },
    },
  },
  plugins: [],
};
