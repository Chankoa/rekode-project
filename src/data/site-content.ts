export interface HeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  supportingLabel: string;
  supportingText: string;
  features: string[];
}

export interface ProjectItem {
  title: string;
  slug: string;
  summary: string;
  tags: string[];
}

export interface ServiceItem {
  title: string;
  highlight: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface AboutContent {
  text: string;
  points: string[];
}

export interface LabItem {
  title: string;
  summary: string;
}

export const heroContent: HeroContent = {
  eyebrow: "Design & integration front-end",
  title: "Des sites web clairs, rapides et penses pour durer.",
  subtitle:
    "J'aide les independants, petites structures et projets creatifs a construire une presence en ligne juste, efficace et humaine.",
  ctaLabel: "Parler de votre projet",
  ctaHref: "/contact",
  secondaryCtaLabel: "Voir les projets",
  secondaryCtaHref: "/projets",
  supportingLabel: "Base technique",
  supportingText:
    "Architecture Astro legere, styles segmentes, composants lisibles et donnees centralisees pour faire evoluer le site sans friction.",
  features: ["Sites rapides", "UX & design", "Integration propre", "Accompagnement"],
};

export const selectedProjects: ProjectItem[] = [
  {
    title: "ROCKSIDERS",
    slug: "rocksiders",
    summary: "Direction visuelle, système de styles et interface éditoriale pour un univers musical affirmé.",
    tags: ["UI", "Design system", "Intégration"],
  },
  {
    title: "Sens Dessus Dessous",
    slug: "sens-dessus-dessous",
    summary: "Site de présentation structuré pour mettre en avant l'offre, le ton et les prises de contact.",
    tags: ["Site vitrine", "Contenu", "SEO"],
  },
  {
    title: "Template site vitrine",
    slug: "template-site-vitrine",
    summary: "Base Astro réutilisable pensée pour accélérer les futurs projets sans dette structurelle.",
    tags: ["Astro", "Performance", "Réutilisable"],
  },
  {
    title: "Learn It",
    slug: "learn-it",
    summary: "Expérimentation pédagogique mêlant front-end, contenus et scénarios d'apprentissage.",
    tags: ["Pédagogie", "Prototype", "Expérimentation"],
  },
];

export const services: ServiceItem[] = [
  {
    title: "Création de site vitrine",
    highlight: "Base solide",
    description: "Un site sobre, performant et crédible, conçu pour présenter l'activité et orienter vers le bon contact.",
  },
  {
    title: "Intégration front-end",
    highlight: "Astro / HTML / CSS",
    description: "Transformation de maquettes en interfaces robustes, accessibles et maintenables, sans sur-ingénierie.",
  },
  {
    title: "Refonte / optimisation",
    highlight: "Clarté & performance",
    description: "Remise à plat de l'existant pour améliorer structure, vitesse, lisibilité et cohérence visuelle.",
  },
  {
    title: "WordPress sur-mesure",
    highlight: "Quand utile",
    description: "Mise en place ou adaptation de sites WordPress lorsque l'autonomie éditoriale prime sur la sobriété du stack.",
  },
  {
    title: "Formation / accompagnement",
    highlight: "Transmission",
    description: "Aide au cadrage, montée en compétence et documentation pour garder la main après la mise en ligne.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Écoute",
    description: "Clarifier le besoin réel, le public visé et les contraintes pour éviter les choix décoratifs sans impact.",
  },
  {
    title: "Structure",
    description: "Définir l'arborescence, les contenus clés et les parcours avant d'entrer dans les détails visuels.",
  },
  {
    title: "Design",
    description: "Construire une identité d'interface cohérente, utile et assez souple pour évoluer sans tout refaire.",
  },
  {
    title: "Intégration",
    description: "Assembler dans Astro avec des composants lisibles, des styles segmentés et des données centralisées.",
  },
  {
    title: "Mise en ligne",
    description: "Finaliser SEO, formulaires, performance et passation pour une mise en production propre.",
  },
];

export const aboutContent: AboutContent = {
  text:
    "REKODE est un studio web orienté conception et intégration. L'objectif n'est pas de multiplier les couches, mais de produire un site lisible, rapide à faire évoluer et simple à reprendre plus tard.",
  points: [
    "Une architecture Astro pensée pour durer",
    "Des composants de sections réutilisables sans logique dispersée",
    "Un cadrage pragmatique du contenu, du design et de la mise en ligne",
  ],
};

export const labItems: LabItem[] = [
  {
    title: "UI / CSS",
    summary: "Explorations de systèmes visuels, composants et détails d'interaction.",
  },
  {
    title: "Astro / front-end",
    summary: "Tests d'architecture, patterns de composition et arbitrages de performance.",
  },
  {
    title: "IA créative",
    summary: "Essais autour de la génération, de l'assistance au design et des usages éditoriaux.",
  },
  {
    title: "Storytelling visuel",
    summary: "Formats narratifs, rythme de lecture et mise en scène de contenus complexes.",
  },
];