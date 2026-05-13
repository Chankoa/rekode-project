export interface FeatureItem {
  label: string;
  icon: string;
}

export interface HeroTitlePart {
  text: string;
  highlight?: boolean;
  accent?: boolean;
}

export interface HeroContent {
  eyebrow: string;
  titleParts: HeroTitlePart[];
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  supportingLabel: string;
  supportingText: string;
  features: FeatureItem[];
}

export interface ProjectItem {
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  meta: string;
}

export interface ServiceItem {
  title: string;
  icon: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  text: string;
  points: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface LabItem {
  title: string;
  summary: string;
}

export interface ContactContent {
  title: string;
  intro: string;
  ctaLabel: string;
  ctaHref: string;
  newsletterTitle: string;
  newsletterText: string;
}

export const heroContent: HeroContent = {
  eyebrow: "Design & integration front-end",
  titleParts: [
    { text: "Des " },
    { text: "sites web", highlight: true },
    { text: " clairs, pensés pour des " },
    { text: "humains.", highlight: true },
  ],
  subtitle:
    "J'aide les projets créatifs à construire une présence en ligne efficace, esthétique et humaine.",
  ctaLabel: "Parler de votre projet",
  ctaHref: "/contact",
  secondaryCtaLabel: "Voir les projets",
  secondaryCtaHref: "/projets",
  supportingLabel: "Clarté éditoriale",
  supportingText:
    "Une base technique légère et une structure de contenu lisible pour garder le bon niveau de précision sans transformer le site en vitrine technique.",
  features: [
    { label: "Sites rapides", icon: "bolt" },
    { label: "UX & design", icon: "document" },
    { label: "Intégration propre", icon: "code" },
    { label: "Accompagnement", icon: "leaf" },
  ],
};

export const selectedProjects: ProjectItem[] = [
  {
    title: "ROCKSIDERS",
    slug: "rocksiders",
    summary: "Site WordPress sur-mesure pour l'encadrement outdoor.",
    tags: ["UX", "Design", "WordPress", "SEO"],
    meta: "01",
  },
  {
    title: "Sens Dessus Dessous",
    slug: "sens-dessus-dessous",
    summary: "Site vitrine pour accompagnement en montagne.",
    tags: ["Redesign", "Intégration", "WordPress", "SEO"],
    meta: "02",
  },
  {
    title: "Template Astro",
    slug: "template-site-vitrine",
    summary: "Modèle de site vitrine rapide et optimisé.",
    tags: ["Astro", "Performance", "Accessibilité"],
    meta: "03",
  },
  {
    title: "Learn It",
    slug: "learn-it",
    summary: "Plateforme pédagogique WordPress sur-mesure.",
    tags: ["WordPress", "UX", "Pédagogie"],
    meta: "04",
  },
];

export const services: ServiceItem[] = [
  {
    title: "Création de site vitrine",
    icon: "monitor",
    description: "Un site clair, adapté à votre activité et à vos objectifs.",
  },
  {
    title: "Intégration front-end",
    icon: "code",
    description: "HTML, CSS, JavaScript, Astro. Propre, sémantique, rapide.",
  },
  {
    title: "Refonte / optimisation",
    icon: "refresh",
    description: "Amélioration de l'expérience, des performances et du SEO.",
  },
  {
    title: "WordPress sur-mesure",
    icon: "wordpress",
    description: "Thèmes légers, modulaires et faciles à prendre en main.",
  },
  {
    title: "Formation / accompagnement",
    icon: "cap",
    description: "Transmission et autonomie pour vos équipes.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Écouter",
    description: "Comprendre vos besoins, vos contraintes et vos enjeux.",
    icon: "ear",
  },
  {
    title: "Structure",
    description: "Organiser l'information et poser des bases solides.",
    icon: "spark",
  },
  {
    title: "Concevoir",
    description: "Imaginer des interfaces claires, utiles et élégantes.",
    icon: "pen",
  },
  {
    title: "Intégration",
    description: "Développer un front-end propre, rapide et accessible.",
    icon: "code",
  },
  {
    title: "Mise en ligne",
    description: "Déployer, optimiser et vous rendre autonome.",
    icon: "rocket",
  },
];

export const aboutContent: AboutContent = {
  eyebrow: "À propos",
  title: "Un profil hybride au service du web.",
  text:
    "Développeur front-end, intégrateur, designer dans l'âme, formateur et entrepreneur terrain. J'aime les projets qui ont du sens et les collaborations basées sur la confiance.",
  points: [
    "15+ ans d'expérience dans l'accompagnement",
    "Passion pour l'UX, le design et le cinéma",
    "Esprit entrepreneurial et sens du terrain",
  ],
  ctaLabel: "En savoir plus sur moi",
  ctaHref: "/a-propos",
};

export const contactContent: ContactContent = {
  title: "Un projet en tête ? Discutons-en.",
  intro:
    "Un site, une refonte ou une idée à concrétiser ? Écrivez-moi, je vous réponds rapidement.",
  ctaLabel: "Parler du projet",
  ctaHref: "/contact",
  newsletterTitle: "Restez inspiré",
  newsletterText:
    "Recevez mes articles, ressources et inspirations autour du web et de la création.",
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