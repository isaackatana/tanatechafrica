/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"], // 👈 this is the fix
  theme: {
    extend: {},
  },
  plugins: [],
};
