// Catálogo del showroom. Cada proyecto es un cuadro: la galería, el índice y
// las fichas de detalle se generan a partir de esta lista.
import type { Tint } from "./profile";

export type Frame = "gilt" | "oak" | "black" | "white" | "walnut";

export type Art =
  | { kind: "image"; src: string; shape: "tall" | "wide" | "square"; position?: string }
  | { kind: "gen"; piece: "bento" | "neural" | "signal" | "ledger" | "still" | "chat" | "pixels"; shape: "tall" | "wide" | "square" };

export type Status = { label: string; tone: "live" | "prod" | "private" | "dev" | "archive" };

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  year: string;
  room: 1 | 2 | 3 | 4;
  tint: Tint;
  frame: Frame;
  art: Art;
  status: Status;
  technique: string;
  summary: string;
  story: string[];
  stats?: { value: string; label: string }[];
  highlights: string[];
  stack: string[];
  links: { label: string; url: string }[];
  shots?: string[];
  shotsLayout?: "phone" | "wide";
};

export const ROOMS = [
  {
    id: 1,
    numeral: "I",
    title: "Publicado en el App Store",
    text: "Apps de principio a fin: idea, diseño, código, revisión de Apple, marketing y versiones posteriores.",
  },
  {
    id: 2,
    numeral: "II",
    title: "Plataformas propias",
    text: "La infraestructura que sostiene a las apps: publicidad propia, agentes de IA y paneles que corren en mi servidor.",
  },
  {
    id: 3,
    numeral: "III",
    title: "Web, comercio y clientes",
    text: "Productos con pagos, NFC y paneles de gestión, y webs para negocios reales.",
  },
  {
    id: 4,
    numeral: "IV",
    title: "Taller",
    text: "Lo que está en el caballete y los primeros bocetos.",
  },
] as const;

export const PROJECTS: Project[] = [
  // ───────────── Sala I · App Store ─────────────
  {
    slug: "miko",
    title: "Miko",
    kicker: "Estudia cuidando a tu mascota",
    year: "2026",
    room: 1,
    tint: "clay",
    frame: "gilt",
    art: { kind: "image", src: "/gallery/miko/cover.webp", shape: "tall" },
    status: { label: "En el App Store · v1.6", tone: "live" },
    technique: "React Native, Supabase y arte 3D sobre iPhone y iPad",
    summary:
      "Temporizador de estudio con mascota virtual. Cada sesión completada da monedas y experiencia para cuidar, vestir y jugar con tu mascota.",
    story: [
      "Miko convierte el tiempo de estudio en algo que cuidar. La mascota tiene hambre, sed, felicidad y energía; las sesiones completadas dan monedas para comida, juguetes, ropa, camas y fondos, y la experiencia desbloquea nuevas mascotas. Salir de la app durante una sesión la hace fallar.",
      "El modelo de negocio es deliberadamente honesto: una única compra, Miko Plus, que quita los anuncios propios y añade un armario exclusivo, un icono dorado y un marco de perfil. Sin suscripciones ni packs de monedas.",
    ],
    stats: [
      { value: "1.6", label: "versión publicada" },
      { value: "2", label: "idiomas" },
      { value: "1", label: "compra única" },
    ],
    highlights: [
      "Supabase con Auth (Apple, Google, enlace mágico), Postgres con RLS y Edge Functions.",
      "Compras con RevenueCat y webhook que sincroniza el estado Plus.",
      "Anuncios servidos por In-House Ads, sin IDFA.",
      "Actualizaciones OTA con EAS Update y build «Designed for iPad» en Mac.",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "RevenueCat", "Reanimated", "i18next"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/app/id6785652879" },
      { label: "mikostudy.com", url: "https://mikostudy.com" },
    ],
    shots: ["/gallery/miko/s2.webp", "/gallery/miko/s3.webp", "/gallery/miko/s4.webp"],
  },
  {
    slug: "101-juegos",
    title: "101 Offline Games",
    kicker: "114 juegos clásicos, sin conexión",
    year: "2026",
    room: 1,
    tint: "slate",
    frame: "black",
    art: { kind: "image", src: "/gallery/101-games/cover.webp", shape: "tall" },
    status: { label: "En el App Store · v1.3.1", tone: "live" },
    technique: "TypeScript estricto y 1.760 tests sobre lienzo offline",
    summary:
      "Colección de 114 juegos clásicos, puzles y retos. Sin cuentas, 100 % jugable sin conexión y monetizada con publicidad contextual propia.",
    story: [
      "Serpiente, sudoku, sopa de letras, crucigramas, 2048, rompecabezas… y así hasta 114. Cada juego tiene su generador, su solucionador y su equilibrio de dificultad, probados con tests de lógica pura.",
      "Sin backend, sin analítica y sin identificadores: los datos viven en el dispositivo. La única compra elimina los anuncios, y la ficha de la tienda está traducida a siete idiomas.",
    ],
    stats: [
      { value: "114", label: "juegos" },
      { value: "1.760", label: "tests" },
      { value: "7", label: "idiomas en tienda" },
    ],
    highlights: [
      "Generadores y solucionadores deterministas cubiertos por 183 ficheros de tests.",
      "Tableros adaptados a iPad, favoritos y seis paquetes de iconos.",
      "Web oficial renovada con la imagen de la 1.3.1.",
      "Versión Android preparada para Google Play.",
    ],
    stack: ["Expo SDK 57", "React Native", "TypeScript", "Zustand", "Reanimated", "Vitest", "RevenueCat"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/app/id6791493133" },
      { label: "101games.pablobrasero.com", url: "https://101games.pablobrasero.com" },
    ],
    shots: ["/gallery/101-games/s2.webp", "/gallery/101-games/s3.webp", "/gallery/101-games/s4.webp"],
  },
  {
    slug: "cultura-general",
    title: "Cultura General",
    kicker: "Trivia diaria, ligas y multijugador",
    year: "2026",
    room: 1,
    tint: "plum",
    frame: "walnut",
    art: { kind: "image", src: "/gallery/cultura-general/cover.webp", shape: "wide" },
    status: { label: "En el App Store · v2.3", tone: "live" },
    technique: "Expo, Supabase y 1.589 preguntas sobre fondo nocturno",
    summary:
      "App de preguntas con seis modos de juego, progresión con niveles y monedas, ligas semanales y multijugador local. Fuera de España se llama CG Trivia.",
    story: [
      "Pregunta del día con cuatro rankings, Contrarreloj de 30 segundos, Modo Ascenso con vidas, checkpoints y un bote que se arriesga o se asegura, retos de banderas de 196 países y de años históricos, y cinco modos para jugar con amigos en un solo móvil.",
      "La progresión usa la misma fórmula en el cliente y en SQL para que nunca discrepen, y las pantallas con datos de servidor conviven con un modo invitado que permite jugar sin cuenta.",
    ],
    stats: [
      { value: "1.589", label: "preguntas" },
      { value: "13", label: "categorías" },
      { value: "6", label: "modos de juego" },
    ],
    highlights: [
      "Ligas semanales, misiones diarias y rachas.",
      "Multijugador local de 2 a 10 jugadores, también por equipos.",
      "Tema claro, oscuro o del sistema; español e inglés.",
      "Campañas propias de vídeo e imagen para Meta y App Store.",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "Sentry", "i18next"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/app/id6766927114" },
      { label: "cg-trivia.pablobrasero.com", url: "https://cg-trivia.pablobrasero.com" },
    ],
    shots: ["/gallery/cultura-general/s2.webp", "/gallery/cultura-general/s3.webp", "/gallery/cultura-general/s4.webp"],
  },
  {
    slug: "peakly",
    title: "Peakly",
    kicker: "Tu coach personal en el bolsillo",
    year: "2026",
    room: 1,
    tint: "umber",
    frame: "oak",
    art: { kind: "image", src: "/gallery/peakly/cover.webp", shape: "tall" },
    status: { label: "En el App Store", tone: "live" },
    technique: "Agentes de IA, Supabase y Stripe sobre oscuro cálido",
    summary:
      "Coach con IA: describes un objetivo en lenguaje natural, una entrevista lo perfila y un agente lo convierte en fases, hitos y tareas diarias.",
    story: [
      "Peakly es un ecosistema de dos superficies con un mismo backend: la app móvil, donde se crean objetivos y se conversa con el coach, y una web en Astro con precios, cuenta y suscripciones en Stripe.",
      "Los agentes de entrevista, planificación y replanificación viven en Edge Functions. El premium puede llegar por compra in-app o por suscripción web y se interpreta igual en ambos lados. Hoy está centrado en deporte, con un catálogo bilingüe de 1.323 ejercicios.",
    ],
    stats: [
      { value: "2", label: "superficies" },
      { value: "1.323", label: "ejercicios" },
      { value: "2", label: "idiomas" },
    ],
    highlights: [
      "Planificación automática en fases, hitos, reglas recurrentes y tareas.",
      "Coach global y coach por objetivo.",
      "Premium compartido entre RevenueCat y Stripe.",
      "Sistema de diseño propio: monocromo cálido, el color se gana.",
    ],
    stack: ["React Native", "Expo", "Supabase Edge Functions", "Astro SSR", "Stripe", "RevenueCat", "AppsFlyer"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/app/id6774778806" },
      { label: "peaklycoach.app", url: "https://peaklycoach.app" },
    ],
    shots: ["/gallery/peakly/s2.webp", "/gallery/peakly/s3.webp", "/gallery/peakly/s4.webp"],
  },

  // ───────────── Sala II · Plataformas ─────────────
  {
    slug: "in-house-ads",
    title: "In-House Ads",
    kicker: "Mi propia red publicitaria, sin rastreo",
    year: "2026",
    room: 2,
    tint: "sage",
    frame: "white",
    art: { kind: "image", src: "/gallery/inhouse-ads/cover.webp", shape: "wide", position: "left top" },
    status: { label: "En producción", tone: "prod" },
    technique: "PostgreSQL con RLS, SDK propio y servidor MCP",
    summary:
      "Plataforma privada de publicidad: panel, API contextual, campañas revisadas, métricas agregadas y un SDK con adaptador para Expo. Sin redes externas ni identificadores persistentes.",
    story: [
      "Nació para monetizar mis apps sin entregar datos a terceros. Hoy Miko, 101 Offline Games, Cultura General y Peakly están registradas, y las apps se promocionan entre sí con anuncios que yo mismo apruebo.",
      "Las campañas pasan por borrador, revisión, aprobación y publicación, con revisiones inmutables y rollback. Un servidor MCP con OAuth por usuario permite gestionarlas desde Claude o ChatGPT.",
    ],
    stats: [
      { value: "4", label: "apps conectadas" },
      { value: "3", label: "formatos" },
      { value: "0", label: "identificadores" },
    ],
    highlights: [
      "Intersticial, banner y recompensado con recibos de una sola concesión.",
      "Exclusión de menores en cliente y servidor; premium sin anuncios.",
      "Descargas atribuidas por campaña con la API de App Store Connect.",
      "API versionada con OpenAPI, idempotencia y kill switches.",
    ],
    stack: ["TypeScript", "Node.js", "PostgreSQL", "Docker Compose", "Playwright", "OpenAPI", "MCP"],
    links: [{ label: "inhouseads.pablobrasero.com", url: "https://inhouseads.pablobrasero.com" }],
    shots: ["/gallery/inhouse-ads/s2.webp", "/gallery/inhouse-ads/s3.webp", "/gallery/inhouse-ads/s4.webp"],
    shotsLayout: "wide",
  },
  {
    slug: "life-dashboard",
    title: "Life Dashboard",
    kicker: "El panel de control de mi vida",
    year: "2026",
    room: 2,
    tint: "olive",
    frame: "oak",
    art: { kind: "gen", piece: "bento", shape: "square" },
    status: { label: "Uso privado", tone: "private" },
    technique: "Composición en lino, arcilla y oliva. SVG renderizado en servidor",
    summary:
      "Panel personal con precio de la luz, gasto en IA, salud de Apple Health, finanzas clasificadas por IA e inversiones. Su sistema de diseño es el de esta web.",
    story: [
      "Pensado para colgarse en la pared en un iPad 2 con Safari 9: todo se renderiza en el servidor como HTML y SVG, sin JavaScript en el cliente y sin CSS Grid. Esa restricción dio forma a un sistema visual sobrio, de tonos tierra, que ahora viste este portfolio.",
      "Para la salud escribí HealthBridge, una app iOS de código abierto que prioriza las fuentes de datos, deduplica intervalos y vuelca las métricas al panel.",
    ],
    highlights: [
      "Precio PVPC con las horas más baratas del día.",
      "Límites reales de Claude Code y Codex, y gasto en API de OpenAI y Anthropic.",
      "Sueño, HRV, recuperación y entrenos vía HealthBridge.",
      "Movimientos bancarios importados y clasificados con IA.",
    ],
    stack: ["Next.js", "React", "SQLite", "Tailwind CSS", "SwiftUI", "SVG"],
    links: [{ label: "HealthBridge en GitHub", url: "https://github.com/Polinss3/HealthBridge" }],
  },
  {
    slug: "jarvis-os",
    title: "JARVIS OS",
    kicker: "Asistente personal de IA, de código abierto",
    year: "2026",
    room: 2,
    tint: "slate",
    frame: "black",
    art: { kind: "gen", piece: "neural", shape: "wide" },
    status: { label: "Código abierto", tone: "dev" },
    technique: "Topología neuronal en voz y texto. FastAPI y WebRTC",
    summary:
      "Base abierta y neutral respecto al proveedor para un asistente personal: sala de control animada, conversación por voz en tiempo real y agentes especialistas con políticas estrictas.",
    story: [
      "Una sala de control muestra la topología JARVIS → supervisor → especialistas → herramientas, con el estado de cada nodo en vivo. La conversación funciona por texto con un modelo privado en Ollama o por voz con OpenAI Realtime sobre WebRTC, con respaldo local en whisper.cpp.",
      "La seguridad es el diseño: la conversación normal no recibe contexto de salud ni de finanzas, y cada lectura especialista exige una ruta aceptada por el supervisor y un permiso de un solo uso.",
    ],
    highlights: [
      "Voz a voz en español con interrupción y filtro por nombre del asistente.",
      "Agente de salud de solo lectura compatible con HealthBridge.",
      "Registro tipado de proveedores, modelos, agentes y herramientas.",
      "Licencia Apache 2.0.",
    ],
    stack: ["Python", "FastAPI", "TypeScript", "WebRTC", "OpenAI Realtime", "Ollama", "whisper.cpp"],
    links: [{ label: "GitHub", url: "https://github.com/Polinss3/jarvis-os" }],
  },
  {
    slug: "ads-agent",
    title: "Ads Agent",
    kicker: "Campañas publicitarias en lenguaje natural",
    year: "2026",
    room: 2,
    tint: "ochre",
    frame: "white",
    art: { kind: "gen", piece: "chat", shape: "tall" },
    status: { label: "Uso privado", tone: "private" },
    technique: "Agente con herramientas sobre Meta, Google y TikTok Ads",
    summary:
      "Gestor publicitario multicanal que se opera conversando. Cada proyecto agrupa sus conexiones, contexto, campañas, medios y automatizaciones.",
    story: [
      "Un bucle de agente con herramientas validadas por esquemas crea, modifica y analiza campañas. Meta Ads es el adaptador plenamente operativo; Google Ads y TikTok Ads ya leen campañas y preparan cambios.",
      "Seguro por defecto: toda acción que gasta presupuesto se ejecuta antes en dry-run, exige confirmación explícita y queda auditada. Las claves se guardan cifradas con AES-256-GCM.",
    ],
    highlights: [
      "Proveedores de LLM intercambiables: Anthropic, OpenAI u Ollama.",
      "Servidor MCP para operarlo desde Claude Desktop.",
      "Biblioteca de medios y auditoría completa.",
    ],
    stack: ["TypeScript", "Express", "SQLite", "React", "Vite", "Zod", "MCP"],
    links: [],
  },
  {
    slug: "hermes-marketing",
    title: "Hermes Marketing",
    kicker: "Un agente que busca dónde hablar de mis apps",
    year: "2026",
    room: 2,
    tint: "clay",
    frame: "walnut",
    art: { kind: "gen", piece: "signal", shape: "square" },
    status: { label: "En producción", tone: "prod" },
    technique: "Señales y borradores revisados a mano",
    summary:
      "Agente de marketing que analiza conversaciones en Hacker News y otras comunidades, puntúa oportunidades y redacta borradores que yo reviso antes de publicar.",
    story: [
      "Cada análisis guarda inicio, fin, resultados parciales, errores y los hilos revisados. Una petición genérica no basta para promocionar una app: se comprueba el tema, la intención y la compatibilidad antes de proponer nada.",
      "La publicación autónoma está desactivada: aprobar exige un texto guardado y editar una aprobación la devuelve a pendiente.",
    ],
    highlights: [
      "Panel con oportunidades, borradores, publicaciones, análisis y canales.",
      "Cupos diarios y reservas para impedir ejecuciones simultáneas.",
      "Desplegado en mi servidor tras Nginx y Cloudflare Tunnel.",
    ],
    stack: ["Python", "Hermes Agent", "Docker", "Nginx", "Cloudflare Tunnel"],
    links: [],
  },

  // ───────────── Sala III · Web y comercio ─────────────
  {
    slug: "taps-and-smiles",
    title: "Taps & Smiles",
    kicker: "Regalos físicos con experiencia digital",
    year: "2025",
    room: 3,
    tint: "plum",
    frame: "gilt",
    art: { kind: "image", src: "/gallery/taps-smiles/cover.webp", shape: "wide", position: "left top" },
    status: { label: "En producción", tone: "prod" },
    technique: "Astro SSR, Stripe y etiquetas NFC",
    summary:
      "Tienda de regalos personalizados: el cliente configura el regalo, sube sus imágenes, paga con Stripe y obtiene una página privada que se abre al acercar el móvil a una etiqueta NFC.",
    story: [
      "Del configurador al checkout y al webhook de pago, pasando por la página del regalo, previsualizaciones temporales y un panel interno para gestionar pedidos, experiencias y tandas de etiquetas NFC.",
      "Incluye un estudio para colaboradores y compradores autorizados, y scripts propios para escribir las URL en las etiquetas físicas.",
    ],
    highlights: [
      "Checkout con Stripe y emails transaccionales con Resend.",
      "Imágenes en Cloudinary y datos en MongoDB.",
      "Panel de administración con métricas en Chart.js.",
    ],
    stack: ["Astro", "TypeScript", "Tailwind CSS", "MongoDB", "Stripe", "Cloudinary", "Resend"],
    links: [{ label: "tapsandsmiles.com", url: "https://tapsandsmiles.com" }],
  },
  {
    slug: "propiexpert",
    title: "PropieXpert",
    kicker: "Gestión inmobiliaria, reinventada",
    year: "2025",
    room: 3,
    tint: "slate",
    frame: "black",
    art: { kind: "image", src: "/gallery/propiexpert/cover.webp", shape: "wide", position: "left top" },
    status: { label: "En producción", tone: "prod" },
    technique: "FastAPI, Astro y Expo en cuatro repositorios",
    summary:
      "Plataforma para gestionar inmuebles: propiedades, rentabilidad, tareas y documentos, con backend propio, aplicación web, app iOS y web comercial.",
    story: [
      "Un backend en FastAPI con Docker da servicio a una aplicación web en Astro, a una app móvil en Expo y a la landing comercial. Incluye autenticación, listados, búsqueda, planes de suscripción y herramientas de administración.",
    ],
    highlights: [
      "Arquitectura en cuatro piezas con un único backend.",
      "Sistema de planes y pagos.",
      "App móvil y web comercial sobre la misma API.",
    ],
    stack: ["Python", "FastAPI", "Docker", "Astro", "React Native", "Expo"],
    links: [{ label: "propiexpert.com", url: "https://propiexpert.com" }],
  },
  {
    slug: "luxity",
    title: "Luxity",
    kicker: "Trazabilidad para artículos de lujo",
    year: "2026",
    room: 3,
    tint: "ochre",
    frame: "gilt",
    art: { kind: "gen", piece: "ledger", shape: "tall" },
    status: { label: "Prototipo", tone: "dev" },
    technique: "Ledger encadenado, NFC y SwiftUI",
    summary:
      "Plataforma de autenticidad y experiencia premium: cada prenda auténtica tiene un historial inmutable y una etiqueta NFC que lo demuestra.",
    story: [
      "Un backend FastAPI mantiene un ledger lineal de bloques de propietarios y artículos, con instantáneas en MongoDB para lecturas rápidas. Encima: transferencias, amigos, feed de actividad, rankings, logros y códigos QR.",
      "La app iOS en SwiftUI es el armario del coleccionista, y la web en Next.js combina la experiencia pública con un panel de administración. El tooling NFC escribe y registra las etiquetas físicas.",
    ],
    highlights: [
      "Ledger append-only con estado materializado.",
      "Registro y verificación NFC contra artículos reales.",
      "Universal links entre web e iOS.",
    ],
    stack: ["Python", "FastAPI", "MongoDB", "Next.js", "SwiftUI", "NFC"],
    links: [],
  },
  {
    slug: "viena-la-baguette",
    title: "Viena La Baguette",
    kicker: "Panadería artesanal de masa madre",
    year: "2026",
    room: 3,
    tint: "umber",
    frame: "walnut",
    art: { kind: "image", src: "/gallery/viena/cover.webp", shape: "square" },
    status: { label: "Proyecto web", tone: "dev" },
    technique: "Next.js y masa madre",
    summary:
      "Web para una panadería artesanal: catálogo de panes con carrusel arrastrable, blog y páginas legales, cuidada como un escaparate.",
    story: [
      "Una web rápida y cálida en Next.js con un carrusel de panes que se arrastra y retoma solo su desplazamiento, blog propio y SEO preparado.",
    ],
    highlights: ["Carrusel arrastrable con auto-scroll reanudable.", "Blog y SEO con robots y metadatos.", "Páginas legales completas."],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: [],
  },

  // ───────────── Sala IV · Taller ─────────────
  {
    slug: "miga",
    title: "Miga",
    kicker: "Compañero de nutrición con IA",
    year: "2026",
    room: 4,
    tint: "olive",
    frame: "oak",
    art: { kind: "gen", piece: "still", shape: "square" },
    status: { label: "En desarrollo", tone: "dev" },
    technique: "Bodegón con visión artificial",
    summary:
      "Registro de comidas con escaneo de códigos de barras, tickets y fotos de platos, despensa, recetas, planificación semanal con IA y un asesor con límites de seguridad.",
    story: [
      "La IA es intercambiable entre OpenAI, Anthropic y Gemini, y siempre se ejecuta en el servidor. El asesor está acotado por reglas de seguridad documentadas, y la app sigue el diseño Liquid Glass en iOS 26.",
    ],
    highlights: ["Escaneo de etiquetas nutricionales y tickets.", "Planificación de la semana con IA.", "Privacidad y RGPD documentados."],
    stack: ["React Native", "Expo", "Supabase", "TanStack Query", "RevenueCat"],
    links: [],
  },
  {
    slug: "primeros-proyectos",
    title: "Primeros proyectos",
    kicker: "Juegos en Python y microservicios",
    year: "2023",
    room: 4,
    tint: "sage",
    frame: "white",
    art: { kind: "gen", piece: "pixels", shape: "tall" },
    status: { label: "Archivo", tone: "archive" },
    technique: "Pygame y FastAPI. Primeros bocetos",
    summary:
      "Clásicos como Snake, 2048 o Space Invaders en Pygame, y una colección de microservicios en FastAPI y Docker con chatbots y generación de imágenes.",
    story: [
      "Los proyectos con los que aprendí a estructurar código: cada juego en su carpeta con sus tests e instrucciones, y cada microservicio en su contenedor, orquestados con Docker Compose.",
    ],
    highlights: ["Juegos con tests unitarios.", "Microservicios independientes con Docker Compose."],
    stack: ["Python", "Pygame", "FastAPI", "Docker"],
    links: [
      { label: "Juegos en GitHub", url: "https://github.com/Polinss3/python-games" },
      { label: "API en GitHub", url: "https://github.com/Polinss3/fastAPI-project" },
    ],
  },
];

export const STATUS_TONE: Record<Status["tone"], { bg: string; fg: string }> = {
  live: { bg: "#e8eadb", fg: "#4e5c2e" },
  prod: { bg: "#dfeae5", fg: "#3f6e62" },
  private: { bg: "#ece3da", fg: "#6e5440" },
  dev: { bg: "#f5ead2", fg: "#7a5410" },
  archive: { bg: "#efe8dc", fg: "#6b6052" },
};

export const TINT: Record<Tint, { bg: string; fg: string }> = {
  clay: { bg: "#f4e3d9", fg: "#9a4528" },
  olive: { bg: "#e8eadb", fg: "#4e5c2e" },
  ochre: { bg: "#f5ead2", fg: "#8f6512" },
  plum: { bg: "#efe2e8", fg: "#7a4d66" },
  slate: { bg: "#e1e8ec", fg: "#44627a" },
  sage: { bg: "#dfeae5", fg: "#3f6e62" },
  umber: { bg: "#ece3da", fg: "#6e5440" },
};
