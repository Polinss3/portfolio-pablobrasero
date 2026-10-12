# Portfolio · Pablo Brasero

Currículum y showroom de proyectos, construido con Astro y Tailwind CSS sobre el
sistema de diseño de **Life Dashboard** ("lino, arcilla y oliva": Fraunces +
Figtree, tonos tierra, tiles redondeados y barra lateral).

## Páginas

| Ruta | Contenido |
| --- | --- |
| `/` | Currículum: presentación, trayectoria, formación, herramientas y apps destacadas |
| `/galeria` | Galería interactiva: los proyectos cuelgan como cuadros en cuatro salas. El scroll vertical recorre la pared, ← → saltan de obra en obra, cada cuadro abre un visor y se pueden apagar las luces |
| `/proyectos` | Catálogo con filtro por sala |
| `/proyectos/[slug]` | Ficha de cada proyecto |

`/galeria#miko` abre directamente el visor de una obra. Las rutas de la versión
anterior (`/about`, `/projects/*`) redirigen a las nuevas.

## Dónde se edita

- `src/data/profile.ts`: datos del currículum (trayectoria según LinkedIn).
- `src/data/projects.ts`: catálogo de proyectos. Cada entrada define su sala,
  marco (`gilt`, `oak`, `walnut`, `black`, `white`), lienzo (captura o pieza
  generativa en SVG), cartela, textos y enlaces.
- `public/gallery/<proyecto>/`: capturas en WebP.
- `src/styles/global.css`: tokens y piezas del sistema de diseño, y los marcos.

## Desarrollo

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # astro check + build estático en dist/
```
