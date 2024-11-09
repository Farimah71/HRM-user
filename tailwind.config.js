/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#262323",
        "custom-gray": "#E1E3EA",
        "custom-gray-muted": "#99a1b7",
        "custom-gray-light": "#F2F2F2",
        "custom-gray-medium": "#F1F1F2",
        "custom-orange": "#FE6601",
        "custom-orange-light": "rgba(240, 96, 0, 0.1)",
        "custom-blue": "#049CDB"
      },
      backgroundColor: {
        "custom-white-0.5": "rgba(255, 255, 255, 0.55)"
      },
      backgroundImage: {
        "gradient-orange": "linear-gradient(90deg, #FE6601 0%, #F0AD80 100%)"
      },
      boxShadow: {
        "custom-orange-light": "-1px 0px 3px 0px rgba(254, 102, 1, 0.06)",
        "custom-gray": "0 0 3px 1px rgba(0, 0, 0, 0.2)",
        "custom-box": "0px 0px 50px 0px rgba(82, 63, 105, 0.15)"
      },
      borderRadius: {
        10: "10px",
        11: "11px",
        30: "30px",
        48: "48px",
        200: "500px",
        134: "134px",
        50: "50%"
      },
      fontSize: {
        14: "14px",
        16: "16px",
        18: "18px",
        19: "19px",
        21: "21px",
        49: "49px",
      },
      width: {
        450: "450px",
        84: "84%",
        265: "265px",
        285: "285px",
        1400: "1400px",
      },
      height: {
        74: "74px",
        285: "285px",
        700: "700px"
      },
      maxWidth: {
        98: "98%"
      },
      minHeight: {
        280: "280px",
        320: "320px"
      },
      spacing: {
        74: "74px"
      },
      inset: {
        "box": "110px auto auto 10px"
      }
    },
  },
  plugins: [],
}

