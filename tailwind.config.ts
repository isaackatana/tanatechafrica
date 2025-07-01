import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./routes/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      // Optional: extend screen breakpoints if needed
      screens: {
        xs: "480px",      // extra small devices
        sm: "640px",      // small tablets
        md: "768px",      // tablets
        lg: "1024px",     // laptops
        xl: "1280px",     // desktops
        "2xl": "1536px",  // large desktops
        "3xl": "1920px",  // ultra-wide
      },
    },
  },
  plugins: [],
};

export default config;
