export interface FeatureItem {
  label: string;
  icon: string;
}

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
  title: "Des sites web clairs, pensés pour des humains",
  subtitle:
    "J'aide les independants, petites structures et projets creatifs a construire une presence en ligne juste, efficace et humaine.",
  ctaLabel: "Parler de votre projet",
  ctaHref: "/contact",
  secondaryCtaLabel: "Voir les projets",
  secondaryCtaHref: "/projets",
  supportingLabel: "Clarte editoriale",
  supportingText:
    "Une base technique legere et une structure de contenu lisible pour garder le bon niveau de precision sans transformer le site en vitrine technique.",
  features: [
    { label: "Sites rapides", icon: "bolt" },
    { label: "UX & design", icon: "document" },
    { label: "Integration propre", icon: "code" },
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
    tags: ["Redesign", "Integration", "WordPress", "SEO"],
    meta: "02",
  },
  {
    title: "Template Astro",
    slug: "template-site-vitrine",
    summary: "Modele de site vitrine rapide et optimise.",
    tags: ["Astro", "Performance", "Accessibilite"],
    meta: "03",
  },
  {
    title: "Learn It",
    slug: "learn-it",
    summary: "Plateforme pedagogique WordPress sur-mesure.",
    tags: ["WordPress", "UX", "Pedagogie"],
    meta: "04",
  },
];

export const services: ServiceItem[] = [
  {
    title: "Création de site vitrine",
    icon: "monitor",
    description: "Un site clair, adapte a votre activite et a vos objectifs.",
  },
  {
    title: "Intégration front-end",
    icon: "code",
    description: "HTML, CSS, JavaScript, Astro. Propre, semantique, rapide.",
  },
  {
    title: "Refonte / optimisation",
    icon: "refresh",
    description: "Amelioration de l'experience, des performances et du SEO.",
  },
  {
    title: "WordPress sur-mesure",
    icon: "wordpress",
    description: "Themes legers, modulaires et faciles a prendre en main.",
  },
  {
    title: "Formation / accompagnement",
    icon: "cap",
    description: "Transmission et autonomie pour vos equipes.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Ecouter",
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
    description: "Imaginer des interfaces claires, utiles et elegantes.",
    icon: "pen",
  },
  {
    title: "Intégration",
    description: "Developper un front-end propre, rapide et accessible.",
    icon: "code",
  },
  {
    title: "Mise en ligne",
    description: "Deployer, optimiser et vous rendre autonome.",
    icon: "rocket",
  },
];

export const aboutContent: AboutContent = {
  eyebrow: "A propos",
  title: "Un profil hybride au service du web.",
  text:
    "Developpeur front-end, integrateur, designer dans l'ame, formateur et entrepreneur terrain. J'aime les projets qui ont du sens et les collaborations basees sur la confiance.",
  points: [
    "15+ ans d'experience dans l'accompagnement",
    "Passion pour l'UX, le design et le cinema",
    "Esprit entrepreneurial et sens du terrain",
  ],
  ctaLabel: "En savoir plus sur moi",
  ctaHref: "/a-propos",
};

export const contactContent: ContactContent = {
  title: "Un projet en tete ? Discutons-en.",
  intro:
    "Un site, une refonte ou une idee a concretiser ? Ecrivez-moi, je vous reponds rapidement.",
  ctaLabel: "Parler du projet",
  ctaHref: "/contact",
  newsletterTitle: "Restez inspire",
  newsletterText:
    "Recevez mes articles, ressources et inspirations autour du web et de la creation.",
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