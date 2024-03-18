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
          // primary: 'rgb(var(--color-primary) / <alpha-value>)',
          DEFAULT: "rgb(var(--color-primary-500) / 1)",
          50: "rgb(var(--color-primary-50) / 1)",
          100: "rgb(var(--color-primary-100) / 1)",
          200: "rgb(var(--color-primary-200) / 1)",
          300: "rgb(var(--color-primary-300) / 1)",
          400: "rgb(var(--color-primary-400) / 1)",
          500: "rgb(var(--color-primary-500) / 1)",
          600: "rgb(var(--color-primary-600) / 1)",
          700: "rgb(var(--color-primary-700) / 1)",
          800: "rgb(var(--color-primary-800) / 1)",
          900: "rgb(var(--color-primary-900) / 1)",
        },

        surface: {
          DEFAULT: "rgb(var(--color-surface-0))",
          0: "rgb(var(--color-surface-0))",
          50: "rgb(var(--color-surface-50) / 1)",
          100: "rgb(var(--color-surface-100) / 1)",
          200: "rgb(var(--color-surface-200) / 1)",
          300: "rgb(var(--color-surface-300) / 1)",
          400: "rgb(var(--color-surface-400) / 1)",
          500: "rgb(var(--color-surface-500) / 1)",
          600: "rgb(var(--color-surface-600) / 1)",
          700: "rgb(var(--color-surface-700) / 1)",
          800: "rgb(var(--color-surface-800) / 1)",
          900: "rgb(var(--color-surface-900) / 1)",
          950: "rgb(var(--color-surface-950) / 1)",
        },
      },
    },
  },
  plugins: [],
};
