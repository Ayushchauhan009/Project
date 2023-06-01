/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-color1": "#524338",
        "custom-color2": "#AE874E",
        "custom-color3": "#C59E5E",
        "custom-color4": "#040725",
        "custom-color5": "#2A355B",
      },
      screens: {
        xxs: "300px",
        xs: "400px",
        sm: "640px",
        md: "865px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
