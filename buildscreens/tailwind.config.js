
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
       ltxt: "#65717C",  
     }

    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
