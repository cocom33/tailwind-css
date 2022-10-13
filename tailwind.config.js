/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        '2xl': '1320px',
      },
      spacing: {
        13: "3.25rem",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
}
