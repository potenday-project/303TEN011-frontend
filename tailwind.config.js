/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["var(--font-bebas)"],
        pretendard: ["var(--font-pretendard)"],
        scdream: ["var(--font-scdream)"],
        bookk: ["var(--font-bookk)"],
        jsongmyung: ["var(--font-jsongmyung)"],
      },
      colors: {
        main: {
          100: "#F5F3F1",
          900: "#2C2A29",
        },
      },
      backgroundImage: {
        landing: "url('../../public/images/background_landing.svg')",
        login: "url('../../public/images/background_login.svg')",
        main: "url('../../public/images/background_main.svg')",
      },
      fontSize: {
        lg: ["17px", "24px"],
        xl: ["21px", "24px"],
        headline1: ["25px", "34px"],
        headline2: ["21px", "30px"],
        headline3: ["18px", "24px"],
        body1: ["16px", "24px"],
        body2: ["14px", "20px"],
        caption1: ["12px", "14px"],
        caption2: ["10px", "10px"],
        button1: ["18px", "34px"],
        button2: ["16px", "30px"],
        button3: ["14px", "30px"],
        label: ["12px", "12px"],
      },
      aspectRatio: {
        long: "9 / 16",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
