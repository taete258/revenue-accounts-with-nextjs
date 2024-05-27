/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "#191D23",
        primary: {
          DEFAULT: "#00BFF9",
          50: "#F6FDFF",
          100: "#DAF6FF",
          200: "#A2E9FF",
          300: "#6ADCFF",
          400: "#32CFFF",
          500: "#00BFF9",
          600: "#0098C6",
          700: "#007193",
          800: "#004A60",
          900: "#00232D",
          950: "#000F13",
        },
        secondary: {
          DEFAULT: "#FF6E7B",
          50: "#FFF8F8",
          100: "#FFE8EA",
          200: "#FFCACF",
          300: "#FFABB3",
          400: "#FF8D97",
          500: "#FF6E7B",
          600: "#FF2135",
          700: "#D40013",
          800: "#87000C",
          900: "#3B0005",
          950: "#150002",
        }
      },
    },
  },
  plugins: [],
};
