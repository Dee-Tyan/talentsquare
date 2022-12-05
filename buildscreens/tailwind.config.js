
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
     fontFamily: {
       helvetica: ["Helvetica", "sans-serif"]
     },
     colors: {
       bgcolor: "#F5F6FA",
       white: "#FFFFFF",
       blue: "#5444F2",
       grey: "#E1E1E1",
       dgrey: "#65717C",
       ltxt: "#65717C",  
       lblue: "#F5F6FA",
       dtext: "#65717C",
       hblue: "#1A72F7",
       gto: "#FFEDE3",
     }

    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
