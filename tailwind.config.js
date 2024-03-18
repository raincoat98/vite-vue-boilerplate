/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/*/.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6F61C0", // 기본 primary 색상
          50: "#F3F2FA", // 가장 밝은 톤
          100: "#E1DCF6",
          200: "#C4BAED",
          300: "#A797E4",
          400: "#8A74DB",
          500: "#6F61C0", // 기본 톤
          600: "#564DA9",
          700: "#3D3981",
          800: "#272559",
          900: "#0F1131", // 가장 어두운 톤
        },
      },
    },
  },
  plugins: [],
};
