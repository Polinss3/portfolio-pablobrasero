import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://pablobrasero.com",
  integrations: [tailwind({ applyBaseStyles: false })],
  // Rutas de la versión anterior del portfolio.
  redirects: {
    "/about": "/",
    "/components": "/",
    "/projects": "/proyectos",
    "/projects/tap-smile": "/proyectos/taps-and-smiles",
    "/projects/propiexpert": "/proyectos/propiexpert",
    "/projects/python-games": "/proyectos/primeros-proyectos",
    "/projects/portfolio": "/proyectos",
  },
});
