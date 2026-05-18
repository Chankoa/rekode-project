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
  thumbnailAlt?: string;
  clientLogoAlt?: string;
  caseStudy?: {
    context: string;
    objective: string;
    approach: string;
    outcome: string;
  };
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
    { text: "pensés pour des " },
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
    thumbnailAlt: "Apercu du projet ROCKSIDERS",
    caseStudy: {
      context:
        "ROCKSIDERS avait besoin d'une présence en ligne plus cohérente avec son positionnement outdoor, capable de transmettre l'esprit de terrain de la marque tout en rendant l'offre plus lisible pour un public qui découvre l'activité.",
      objective:
        "Clarifier les prestations, renforcer la crédibilité dès les premières secondes et poser une base WordPress suffisamment souple pour faire évoluer les contenus sans complexifier l'administration.",
      approach:
        "Le travail s'est concentré sur une hiérarchie de contenus plus nette, un design plus incarné, des points d'entrée plus directs vers les offres et une intégration sobre pour garder un site rapide, clair et facile à maintenir.",
      outcome:
        "Le projet aboutit à une vitrine plus rassurante, plus alignée avec l'univers de la marque et mieux structurée pour accompagner la prise de contact ou la découverte progressive des prestations.",
    },
  },
  {
    title: "Sens Dessus Dessous",
    slug: "sens-dessus-dessous",
    summary: "Site vitrine pour promouvoir des activités de pleine nature.",
    tags: ["Redesign", "Intégration", "WordPress", "SEO"],
    meta: "02",
    thumbnailAlt: "Apercu du projet Sens Dessus Dessous",
    caseStudy: {
      context:
        "Le site devait mieux refléter la qualité de l'accompagnement proposé, avec une présentation plus claire des activités et une expérience de lecture plus fluide pour des visiteurs parfois peu familiers avec cet univers.",
      objective:
        "Redonner de la lisibilité à l'ensemble, mieux mettre en avant les accompagnements et construire un cadre éditorial rassurant pour faciliter la compréhension de l'offre.",
      approach:
        "La refonte a porté sur la structure des pages, la hiérarchie des informations, la respiration visuelle et une intégration WordPress légère, pensée pour permettre des mises à jour simples côté client.",
      outcome:
        "Le résultat est un site plus apaisé, plus clair et plus crédible, qui soutient mieux la prise d'information et donne davantage de place au contenu utile dans le parcours utilisateur.",
    },
  },
  {
    title: "La Fabrique de Moustiers",
    slug: "lafabrique-moustiers",
    summary: "Site vitrine des hébergements touristiques de La Fabrique de Moustiers.",
    tags: ["Wordpress", "UX / UI Design", "Performance", "Optimisation SEO"],
    meta: "03",
    thumbnailAlt: "Apercu du projet La Fabrique de Moustiers",
    caseStudy: {
      context:
        "Le projet consistait à mettre en valeur plusieurs hébergements touristiques au sein d'un même univers, en trouvant le bon équilibre entre désirabilité, informations pratiques et capacité de réservation ou de contact.",
      objective:
        "Raconter le lieu avec plus de sensibilité, aider les visiteurs à se projeter et structurer le contenu de façon à soutenir à la fois l'expérience utilisateur et la visibilité organique.",
      approach:
        "L'approche a combiné cadrage UX, direction visuelle, optimisation des parcours de découverte et attention portée aux performances pour conserver une navigation légère malgré la richesse du contenu visuel.",
      outcome:
        "Le site sert aujourd'hui de support de présentation plus complet, avec une lecture plus fluide des hébergements et une base plus saine pour faire évoluer les contenus et le référencement dans le temps.",
    },
  },
  {
    title: "Learn It",
    slug: "learn-it",
    summary: "Plateforme pédagogique WordPress sur-mesure.",
    tags: ["Work in Progress", "React", "UX/UI Design", "Pédagogie"],
    meta: "04",
    thumbnailAlt: "Apercu du projet Learn It",
    caseStudy: {
      context:
        "Learn It est un projet en cours autour d'une expérience pédagogique plus engageante, avec des besoins forts en clarté de parcours, en modularité des contenus et en cohérence entre usage éditorial et interface.",
      objective:
        "Construire une base capable d'accompagner différentes formes d'apprentissage, tout en gardant une expérience simple, progressive et suffisamment robuste pour accueillir des évolutions futures.",
      approach:
        "Le travail explore une articulation entre UX, design d'interface, logique de composants et réflexion pédagogique, avec une attention particulière portée à la lisibilité des étapes, des contenus et des actions attendues.",
      outcome:
        "Le projet est encore en développement, mais il pose déjà les fondations d'une plateforme plus claire, plus flexible et mieux alignée avec les besoins d'apprentissage et de transmission.",
    },
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