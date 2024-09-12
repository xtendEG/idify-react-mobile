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
        'custom-2': '0px 2.04px 6.13px 0px rgba(0, 0, 0, 0.07);',
      },
      height: {
        "custom-screen": "calc(100vh + 86px)",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FFFFFF 100%)',
      },
    },
    
  },
  plugins: [],
};
