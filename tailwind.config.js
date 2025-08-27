/**
 * Configuración de TailwindCSS.
 * Aquí defines:
 * - paths donde Tailwind debe buscar clases (contenido)
 * - extensiones de tema (colores, animaciones, fuentes personalizadas, etc.)
 */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",  // Archivos de páginas Next.js
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Tus componentes
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Nuevo App Router
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(-20px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(20px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.95)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        fadeInUp: "fadeInUp 1s ease-out",
        fadeInLeft: "fadeInLeft 1s ease-out",
        fadeInRight: "fadeInRight 1s ease-out",
        scaleUp: "scaleUp 0.6s ease-out",
      },
    },
  },
  plugins: [],
}
