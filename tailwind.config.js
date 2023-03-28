/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-100": "#F5F3F1",
        "main-900": "#2C2A29",
      },
      fontSize: {
        lg: ["17px", "24px"],
        xl: ["21px", "24px"],
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
