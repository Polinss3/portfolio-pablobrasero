/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "color1": "#292929", // Ejemplo de color personalizado
        "color2": "#7e7e7e",
		"color3": "#bdbdbd"
      },
    },
  },
  plugins: [],
};
