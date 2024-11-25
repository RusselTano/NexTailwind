/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.{html,css,js}"],
  theme: {
    // Modification de la couleur
    spacing: {
      "custom-spacing": "10px",
    },
    // Modification de la font
    fontFamily: {
      sans: ["Inter"],
    },
    // Modification des breakpoints
    screens: {
      tablet: "768px",
      desktop: "1024px",
    }
  },
  plugins: [],
}

// animate-spin
// animate-pulse
// animate-ping
// animate-bounce