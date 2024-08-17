/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '4rem',
        lg: '6rem',
        xl: '10rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily:{
        'default':['"Plus Jakarta Sans", sans-serif']
      },
      animation:{
        "marquee": "marquee 10s linear infinite",
      },
      keyframes:{
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      }
    },
  },
  plugins: [],
}

