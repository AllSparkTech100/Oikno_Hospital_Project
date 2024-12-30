/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    extend: {
      backgroundImage: {
        heroImg: "url('https://scontent-fra5-1.xx.fbcdn.net/v/t39.30808-6/462954405_122180254328207847_1111839191395840095_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEuns99yvkcab8lTFWUoZv8ZVuVhDHdm2tlW5WEMd2baxNQE9YaRwtlAQ_DuVAbnvuRw90MOaiAmRRvc6-OXIb2&_nc_ohc=qo0AO9gufzMQ7kNvgHMAwvp&_nc_zt=23&_nc_ht=scontent-fra5-1.xx&_nc_gid=AaNT_eFM6_bY4ylbEB3dyb3&oh=00_AYD4911ZQKo8UvXqbrdwWNsdEA2V5Jk-oRtFKELvWJDLeg&oe=6778D16D')",
        blackOverlay: "linear-gradient (rgba(0,0,0,0.5), rgba(0,0,0,0.2))",
      },
    },
  },
  plugins: [],
};
