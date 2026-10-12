// Datos del currículum. La trayectoria sale del perfil de LinkedIn (octubre de 2026).

export const PROFILE = {
  name: "Pablo Brasero Martínez",
  short: "Pablo Brasero",
  initials: "PB",
  role: "Senior Consultant en Management Solutions",
  tagline: "Ingeniero informático que diseña, construye y publica producto digital de principio a fin.",
  location: "Madrid, España",
  photo: "/gallery/pablo.webp",
  cv: "/CurrículumPabloBrasero.pdf",
  linkedin: "https://www.linkedin.com/in/pablo-brasero-mart%C3%ADnez/",
  github: "https://github.com/Polinss3",
  site: "https://pablobrasero.com",
};

export const ABOUT = [
  "Estudié Ingeniería Informática en la Universidad Carlos III de Madrid. Al terminar tercero entré de prácticas en Total Renting y, al acabarlas, me ofrecieron mi primer contrato indefinido: compaginé el último curso de la carrera con el trabajo como programador.",
  "Hoy soy Senior Consultant en Management Solutions. Fuera de la consultoría construyo mis propios productos: apps publicadas en el App Store, una plataforma publicitaria propia, agentes de IA y herramientas que uso a diario. Me interesa todo el recorrido, de la idea y el diseño al código, la publicación y el marketing.",
  "Me mueve aprender: adoptar tecnologías y formas de trabajar nuevas, y trabajar en equipo con gente que quiere hacer las cosas bien.",
];

export type Role = { title: string; period: string; duration: string; note?: string };

export type Job = {
  company: string;
  place: string;
  mode: string;
  period: string;
  tint: Tint;
  summary: string;
  roles: Role[];
  highlights: string[];
};

export type Tint = "clay" | "olive" | "ochre" | "plum" | "slate" | "sage" | "umber";

export const EXPERIENCE: Job[] = [
  {
    company: "Management Solutions",
    place: "Madrid",
    mode: "Jornada completa · Híbrido",
    period: "ene. 2025 — actualidad",
    tint: "clay",
    summary:
      "Consultoría tecnológica. Tres puestos en menos de dos años: de Assistant a Senior Consultant.",
    roles: [
      { title: "Senior Consultant", period: "ago. 2026 — actualidad", duration: "Actual" },
      { title: "Technical Consultant (Assistant II)", period: "sept. 2025 — ago. 2026", duration: "1 año" },
      { title: "Assistant I", period: "ene. 2025 — sept. 2025", duration: "9 meses" },
    ],
    highlights: [
      "Desarrollo de herramientas de automatización y de gestión de accesos.",
      "Soporte y acompañamiento técnico a cliente.",
    ],
  },
  {
    company: "Total Renting",
    place: "Madrid",
    mode: "Híbrido",
    period: "jul. 2023 — ene. 2025",
    tint: "olive",
    summary:
      "Mi primera empresa. Entré de prácticas y me quedé con contrato indefinido mientras terminaba la carrera.",
    roles: [
      { title: "Programador informático", period: "sept. 2023 — ene. 2025", duration: "1 año 5 meses" },
      { title: "Programador informático (prácticas)", period: "jul. 2023 — ago. 2023", duration: "2 meses" },
    ],
    highlights: [
      "Integraciones entre la plataforma de la empresa y servicios externos.",
      "Nuevas funcionalidades para la plataforma y páginas para la web corporativa.",
    ],
  },
  {
    company: "La Bonotte",
    place: "Madrid",
    mode: "Contrato temporal",
    period: "jun. 2022 — ago. 2022",
    tint: "ochre",
    summary: "Camarero durante un verano: servicio de barra y trabajo en equipo bajo presión.",
    roles: [{ title: "Camarero", period: "jun. 2022 — ago. 2022", duration: "3 meses" }],
    highlights: [],
  },
];

export const EDUCATION = [
  {
    title: "Máster en Business Consulting",
    school: "Universidad Pontificia Comillas · ICAI-ICADE",
    period: "Desde 2025",
    tint: "plum" as Tint,
  },
  {
    title: "Grado en Ingeniería Informática",
    school: "Universidad Carlos III de Madrid",
    period: "2020 — 2025",
    tint: "slate" as Tint,
  },
  {
    title: "Bachillerato tecnológico",
    school: "Centro Educativo Zola",
    period: "2018 — 2020",
    tint: "sage" as Tint,
  },
];

export const SKILLS: { group: string; tint: Tint; items: string[] }[] = [
  {
    group: "Móvil",
    tint: "clay",
    items: ["React Native", "Expo · EAS", "Expo Router", "Reanimated", "SwiftUI", "RevenueCat", "App Store Connect"],
  },
  {
    group: "Web",
    tint: "olive",
    items: ["TypeScript", "Astro", "Next.js", "React", "Tailwind CSS", "Vite", "Stripe"],
  },
  {
    group: "Backend y datos",
    tint: "slate",
    items: ["Node.js", "Python · FastAPI", "PostgreSQL", "Supabase", "MongoDB", "SQLite", "OpenAPI"],
  },
  {
    group: "IA y agentes",
    tint: "plum",
    items: ["Claude · OpenAI", "Tool use", "Servidores MCP", "Ollama", "OpenAI Realtime", "whisper.cpp"],
  },
  {
    group: "Infra y calidad",
    tint: "sage",
    items: ["Docker Compose", "Nginx", "Cloudflare Tunnel", "Vitest", "Playwright", "GitHub", "Vercel"],
  },
];

export const SERVICES = ["Diseño web", "Desarrollo web", "Diseño de experiencia de usuario", "Software a medida", "Desarrollo de SaaS"];

