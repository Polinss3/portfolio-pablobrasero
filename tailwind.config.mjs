/** @type {import('tailwindcss').Config} */
// Tema "lino, arcilla y oliva", heredado del sistema de diseño de life-dashboard.
// Mismos nombres de tokens para que una clase signifique lo mismo en ambos proyectos.
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        night: "#f3eee5",
        panel: "#fffdf9",
        raised: "#f6f1e8",
        track: "#efe8dc",
        line: "#e6dccb",
        sand: "#ece5d8",
        ink: "#2b2620",
        soft: "#4a4238",
        dim: "#6b6052",
        clay: { DEFAULT: "#a4502f", dark: "#7e3b21", tint: "#f4e3d9" },
        olive: { DEFAULT: "#4e5c2e", light: "#7d8b55", tint: "#e8eadb" },
        ochre: { DEFAULT: "#8f6512", light: "#c99a45", tint: "#f5ead2" },
        plum: { DEFAULT: "#7a4d66", light: "#8e6478", tint: "#efe2e8" },
        slate: { DEFAULT: "#44627a", light: "#5f7c91", tint: "#e1e8ec" },
        sage: { DEFAULT: "#3f6e62", light: "#5e8478", tint: "#dfeae5" },
        umber: { DEFAULT: "#6e5440", tint: "#ece3da" },
      },
      fontFamily: {
        sans: ["Figtree", "-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        display: ["Fraunces", "Georgia", "Times New Roman", "serif"],
        mono: ["SFMono-Regular", "Menlo", "Consolas", "Liberation Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
