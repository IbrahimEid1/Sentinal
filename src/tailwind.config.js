/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0056D2",
        secondary: "#F59E0B",
      },
      
    },
    container: {
      center: true,
      screens: {
        sm: "90%",
        md: "90%",
        lg: "90%",
        xl: "90%",
      },
    },
  },
  plugins: [],
};