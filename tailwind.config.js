/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        ...defaultTheme.colors,
        primary: "#1CD29B",
        secondary:"#151412"
      },
      fontFamily: {
        mona: ["Mona Sans", ...defaultTheme.fontFamily.sans],
        monomaniac: ["Monomaniac One", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        custom: "0px 0px 4px 0px rgba(0, 0, 0, 0.10)",
        "custom-2": "0px 2.04px 6.13px 0px rgba(0, 0, 0, 0.07);",
      },
      height: {
        "custom-screen": "calc(100vh + 86px)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FFFFFF 100%)",
        "custom-gradient-2":
          "linear-gradient(181.03deg, #1CD29B 3.39%, #199972 97.42%)",
      },
      fontSize: {
        1: "10px",
        2: "12px",
        3: "14px",
        4: "16px",
        5: "18px",
        6: "20px",
      },
      keyframes: {
        shrink: {
          "0%": { height: "120px", width: "309px" },
          "50%": { height: "120px", width: "309px" },
          "80%": { height: "95px", width: "209px" },
          "100%": { height: "0", width: "0" },
        },
        popup: {
          "0%": {
            transform: "translateY(130%)",
          },
          "40%": {
            transform: "translateY(80%)",
          },
          "70%": {
            transform: "translateY(-80px) scale(1.4)",
          },
          "90%": {
            transform: "translateY(-80px) scale(1.4)",
          },
          "100%": {
            transform: "translateY(0) scale(1)",
          },
        },
        "show-text": {
          "0%": {
            width: "0",
          },
          "100%": {
            width: "100%",
          },
        },
      },
      animation: {
        shrink: "shrink 1.5s forwards ease-in-out", // 2 seconds animation, forwards keeps the final state
        popup: "popup 2s forwards ease-in-out ",
        "show-text": "show-text 1s 2s forwards ease-in-out",
      },
    },
  },
  plugins: [],
};
