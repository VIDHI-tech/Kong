/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'b': '#019BFD',
        'r': '#FD3246',
        'y': '#FFD946',
        'g': '#CCCCCC',
        'black': '#000000',
      },
    },
    keyframes: {
      rotated: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
      bounce: {
        "0%, 100%" :{
          transform: "translateY(0)",
        },
        "50%": {
          transform: "translateY(-20px)",
        }
      }
    },
    animation: {
      rotate: "rotated 10s infinite linear",
      bounce: "bounce 1s ease-in-out infinite;",
    },
  },
  plugins: [],
}
 
 
