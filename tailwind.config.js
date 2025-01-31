/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vscode_blue: {
          900: "#007acc"
        },
        vscode_dark: {
          900: "#121212",
          800: "#15141F",
          700: "#252526",
          600: "#1e1e1e",
          500: "#3e3e42"
        }
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        nikea: ["Nikea", "sans-serif"],
        landasans: ["Landa Sans", "sans-serif"]
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/typography")]
};
