module.exports = {
  content: [],
  plugins: [
    plugin(function ({ 
      // Ajoute des nouvelles utilités CSS
      addUtilities,
      // Associe des utilités CSS à des valeurs spécifiques
      matchUtilities,
      // Ajoute des nouveaux composants CSS
      addComponents,
      // Associe des composants CSS à des valeurs spécifiques
      matchComponents,
      // Ajoute des styles de base CSS
      addBase,
      // Ajoute des nouvelles variantes CSS
      addVariant,
      // Associe des variantes CSS à des valeurs spécifiques
      matchVariant,
      // Accède au thème de configuration Tailwind
      theme,
      // Accède à la configuration globale de Tailwind
      config,
      // Gère les plugins de base de Tailwind
      corePlugins,
      // Échappe les classes CSS pour éviter les conflits
      e,
    }) {
      // todo
    }),
  ],
}

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [],
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-gradient": {
          color: "transparent",
          backgroundClip: "text",
        },
      });
    }),
  ],
}