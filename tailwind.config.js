/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          50: "#FFEEEE",
          100: "#FACDCD",
          200: "#F29B9B",
          300: "#E66A6A",
          400: "#D64545",
          500: "#BA2525",
          600: "#A61B1B",
          700: "#911111",
          800: "#780A0A",
          900: "#610404",
        },
        secondary: {
          50: "#FFFBEA",
          100: "#FFF3C4",
          200: "#FCE588",
          300: "#FADB5F",
          400: "#F7C948",
          500: "#F0B429",
          600: "#DE911D",
          700: "#CB6E17",
          800: "#B44D12",
          900: "#8D2B0B",
        },
        neutral: {
          50: "#FAF9F7",
          100: "#E8E6E1",
          200: "#D3CEC4",
          300: "#B8B2A7",
          400: "#A39E93",
          500: "#857F72",
          600: "#625D52",
          700: "#504A40",
          800: "#423D33",
          900: "#27241D",
        },
      },
    },
  },
  plugins: [],
};
