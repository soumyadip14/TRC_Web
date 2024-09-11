/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-sarif"],
        NanumGothicCoding:["NanumGothicCoding", "monospace"],
        Merriweather:["Merriweather", "serif"],

      },
    },
    plugins: [],
  },
}
