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
      },
      fontfamily: {
        mona: ["Mona Sans", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'custom': '0px 0px 4px 0px rgba(0, 0, 0, 0.10)',
      },
      height: {
        "custom-screen": "calc(100vh + 86px)",
      },
    },
    
  },
  plugins: [],
};
