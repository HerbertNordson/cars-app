/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        36: "9.25rem",
        "base": "80rem"
      },
      colors: {
        primary: "#25293c",
        secundary: "#2f3349",

        txt: "#e1def5",
        logo: "#7367f0",
      },
    },
  },
  plugins: [],
};
