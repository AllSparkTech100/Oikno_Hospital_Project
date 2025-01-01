/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    extend: {
      backgroundImage: {
        heroImg: "url('/converse.webp')",
        blackOverlay: "linear-gradient (to bottom, rgb(0,0,0,0) 0%, rgb(0,0,0,0.8) 100%);",
      },
    },
  },
  plugins: [],
};
