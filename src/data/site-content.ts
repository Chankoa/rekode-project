export interface FeatureItem {
  label: string;
}

export type IconName =
  | "arrow"
  | "bolt"
  | "document"
  | "code"
  | "leaf"
  | "monitor"
  | "refresh"
  | "wordpress"
  | "cap"
  | "ear"
  | "spark"
  | "pen"
  | "rocket"
  | "mail"
  | "phone"
  | "pin"
  | "star"
  | "heart"
  | "mountain";

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
  websiteHref?: string;
  websiteLabel?: string;
  caseStudy?: {
    overview?: {
      role: string;
      deliverables: string;
      stack: string;
      timeline?: string;
      highlights?: string[];
    };
    cta?: {
      label: string;
      href: string;
    };
    context: string;
    objective: string;
    approach: string;
    outcome: string;
  };
}

export interface ServiceItem {
  title: string;
  icon: IconName;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: IconName;
}

export interface AboutHighlightItem {
  label: string;
  icon: IconName;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  text: string;
  points: AboutHighlightItem[];
  ctaLabel: string;
  ctaHref: string;
}

export interface AboutPageSectionPoint {
  title: string;
  text: string;
}

export interface AboutPageIconPoint extends AboutPageSectionPoint {
  icon: IconName;
}

export interface AboutPageProcessStep extends AboutPageSectionPoint {
  icon: IconName;
}

export interface AboutPageSectionBase {
  index: string;
  title: string;
  intro: string;
}

export interface AboutPageHeroContent {
  label: string;
  title: string;
  titleParts?: HeroTitlePart[];
  paragraphs: string[];
  highlightsLabel: string;
  highlights: AboutHighlightItem[];
  ctaLabel: string;
  ctaHref: string;
  portraitAlt: string;
  portraitCaption: string;
}

export interface AboutPageStorySection extends AboutPageSectionBase {
  id: string;
  paragraphs: string[];
  imageAlt: string;
  imageCaption: string;
}

export interface AboutPageExpertiseSection extends AboutPageSectionBase {
  skillsLabel: string;
  skills: string[];
  points: AboutPageSectionPoint[];
}

export interface AboutPageValuesSection extends AboutPageSectionBase {
  manifestoLabel: string;
  manifestoQuote: string;
  items: AboutPageIconPoint[];
}

export interface AboutPageProcessSection extends AboutPageSectionBase {
  steps: AboutPageProcessStep[];
}

export interface AboutPageQuoteSection {
  label: string;
  text: string;
  attribution: string;
}

export interface AboutPageInspirationSection extends AboutPageSectionBase {
  items: string[];
}

export interface AboutPageClosingSection extends AboutPageSectionBase {
  ctaLabel: string;
  ctaHref: string;
}

export interface AboutPageContent {
  meta: {
    title: string;
    description: string;
  };
  hero: AboutPageHeroContent;
  story: AboutPageStorySection;
  expertise: AboutPageExpertiseSection;
  values: AboutPageValuesSection;
  quote: AboutPageQuoteSection;
  process: AboutPageProcessSection;
  inspiration: AboutPageInspirationSection;
  closing: AboutPageClosingSection;
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
}

export interface SectionIntroContent {
  title: string;
  intro: string;
}

export const heroContent: HeroContent = {
  eyebrow: "Studio web et accompagnement digital",
  titleParts: [
    { text: "Des " },
    { text: "sites web", highlight: true },
    { text: "pensés pour des " },
    { text: "humains.", highlight: true },
  ],
  subtitle:
    "J’aide les indépendants, petites structures et acteurs du tourisme à clarifier leur présence web grâce à une approche mêlant UX, contenu, WordPress, SEO et accompagnement humain.",
  ctaLabel: "Parler de votre projet",
  ctaHref: "/contact",
  secondaryCtaLabel: "Voir les réalisations",
  secondaryCtaHref: "/realisations",
  supportingLabel: "Clarté éditoriale",
  supportingText:
    "Une base technique légère et une structure de contenu lisible pour garder le bon niveau de précision sans transformer le site en vitrine technique.",
  features: [
    { label: "Sites optimisés" },
    { label: "UX et design" },
    { label: "Intégration soignée" },
    { label: "Accompagnement" },
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
    websiteHref: "https://www.rocksiders.com/",
    caseStudy: {
      overview: {
        role: "UX, direction visuelle, intégration WordPress",
        deliverables: "Arborescence, maquettes, intégration, optimisation SEO",
        stack: "WordPress, SCSS, contenus éditoriaux structurés",
        timeline: "Refonte et mise en ligne progressive",
        highlights: [
          "Clarification de l'offre et des parcours",
          "Direction visuelle plus incarnée",
          "Base WordPress légère et maintenable",
        ],
      },
      cta: {
        label: "Discuter d'un projet similaire",
        href: "/contact",
      },
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
    websiteHref: "https://sensdessusdessous.eu/",
    caseStudy: {
      overview: {
        role: "Refonte UX/UI et intégration WordPress",
        deliverables: "Reprise de structure, redesign, gabarits de contenus",
        stack: "WordPress, CSS sur mesure, optimisation éditoriale",
        timeline: "Refonte du site existant",
        highlights: [
          "Hiérarchie éditoriale simplifiée",
          "Mise en avant plus lisible des accompagnements",
          "Autonomie de mise à jour côté client",
        ],
      },
      cta: {
        label: "Parler d'une refonte",
        href: "/contact",
      },
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
    websiteHref: "https://lafabrique-moustiers.com/",
    caseStudy: {
      overview: {
        role: "UX/UI design, intégration et optimisation de parcours",
        deliverables: "Direction visuelle, pages de présentation, base SEO",
        stack: "WordPress, design system léger, optimisation performance",
        timeline: "Conception et déploiement du site vitrine",
        highlights: [
          "Valorisation sensible du lieu",
          "Parcours de découverte plus fluides",
          "Attention portée aux performances et au SEO",
        ],
      },
      cta: {
        label: "Imaginer un site d'hospitalité",
        href: "/contact",
      },
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
      overview: {
        role: "Conception produit, UX/UI design, architecture front",
        deliverables: "Parcours, composants, interface pédagogique",
        stack: "React, WordPress, logique modulaire de contenus",
        timeline: "Projet en cours",
        highlights: [
          "Parcours d'apprentissage plus progressifs",
          "Architecture de contenus modulaire",
          "Articulation entre pédagogie et interface",
        ],
      },
      cta: {
        label: "Échanger sur un produit pédagogique",
        href: "/contact",
      },
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
    {
      label: "15+ ans d'expérience dans l'accompagnement",
      icon: "cap",
    },
    {
      label: "Passion pour l'UX, le design et le cinéma",
      icon: "pen",
    },
    {
      label: "Esprit entrepreneurial et sens du terrain",
      icon: "mountain",
    },
  ],
  ctaLabel: "En savoir plus sur moi",
  ctaHref: "/a-propos",
};

export const aboutPageContent: AboutPageContent = {
  meta: {
    title: "À propos",
    description:
      "Un parcours hybride entre terrain, création et numérique au service d’expériences web plus humaines.",
  },
  hero: {
    label: "À propos",
    title: "Un parcours transversal pour concevoir des projets web plus justes.",
    titleParts: [
      { text: "Je m'appelle " },
      { text: "Chandra", highlight: true },
      { text: "," },
    ],
    paragraphs: [
      "J'avance depuis plusieurs annees a la croisee du terrain, de la creation, de la transmission et du developpement web, avec une meme attention pour le fond, l'usage, le rythme et la clarte.",
      "Design, intégration front-end, WordPress, Astro, React, pédagogie et entrepreneuriat terrain : un parcours transversal qui me permet de relier vision, exécution et transmission.",
    ],
    highlightsLabel: "Repères",
    highlights: [
      {
        label: "Webdesigner / intégrateur depuis 2007",
        icon: "monitor",
      },
      {
        label: "UX, design & front-end",
        icon: "pen",
      },
      {
        label: "Formation web et pédagogie",
        icon: "cap",
      },
      {
        label: "Entrepreneuriat & expérience terrain",
        icon: "mountain",
      },
      {
        label: "Sens du détail, du rythme et du récit",
        icon: "spark",
      },
    ],
    ctaLabel: "Découvrir mon parcours",
    ctaHref: "#parcours",
    portraitAlt: "Portrait en noir et blanc",
    portraitCaption:
      "Un parcours hybride, entre exigence terrain, culture visuelle et production web.",
  },
  story: {
    id: "parcours",
    index: "01",
    title: "Un parcours entre terrain, création et numérique.",
    intro:
      "Avant le web, il y a eu le terrain, l'accompagnement, la relation humaine et l'entrepreneuriat.",
    paragraphs: [
      "Éducateur sportif depuis 1998, puis entrepreneur outdoor avec ROCKSIDERS de 2019 à 2025, j'ai appris à construire des offres, gérer des projets, transmettre, communiquer et prendre des décisions au contact du réel.",
      "En parallèle, le web est devenu un terrain d'expression central : design d'interface, intégration HTML/CSS, WordPress, responsive design, UX/UI, puis outils plus récents comme Astro ou React. Cette diversité nourrit aujourd'hui ma manière de concevoir des projets numériques plus solides, plus lisibles et plus ancrés dans les usages.",
    ],
    imageAlt: "Carnet ouvert face aux montagnes au lever du soleil",
    imageCaption:
      "Terrain, pédagogie, entrepreneuriat : une culture du concret qui structure ensuite les projets web.",
  },
  expertise: {
    index: "02",
    title: "Ce que ce parcours me permet d'apporter.",
    intro:
      "Mes compétences ne sont pas un inventaire d'outils. Elles prennent sens dans la façon dont j'articule stratégie, design, intégration et transmission pour faire avancer un projet de manière lisible.",
    skillsLabel: "Compétences-clés",
    skills: [
      "HTML / CSS",
      "WordPress",
      "UX / UI",
      "Astro",
      "React",
      "SEO",
      "Pédagogie",
      "Gestion de projet",
    ],
    points: [
      {
        title: "Concevoir avec clarté",
        text: "Transformer des besoins diffus en structure lisible, en hiérarchie de contenu et en expérience crédible.",
      },
      {
        title: "Produire sans surcouche inutile",
        text: "Choisir le bon niveau d'outil et d'intégration pour rester sobre, maintenable et vraiment utile dans le temps.",
      },
      {
        title: "Transmettre et rendre autonome",
        text: "Documenter, expliquer et simplifier pour que le projet puisse être compris, repris et faire gagner du temps après livraison.",
      },
    ],
  },
  values: {
    index: "03",
    title: "Ma philosophie.",
    intro:
      "Je crois aux expériences digitales qui restent simples, compréhensibles et alignées avec ce que vous faites réellement. Un site n'a pas besoin d'être spectaculaire pour être juste : il doit être lisible, fluide et crédible.",
    manifestoLabel: "Fil conducteur",
    manifestoQuote:
      "Concevoir des interfaces calmes, utiles et lisibles, où la forme accompagne le sens au lieu de le parasiter.",
    items: [
      {
        icon: "leaf",
        title: "Clarté",
        text: "Concevoir des interfaces lisibles, hiérarchisées et utiles, sans surcharger l'expérience.",
      },
      {
        icon: "heart",
        title: "Humain",
        text: "Relier le fond, la forme et la relation de confiance pour faire émerger des expériences plus justes.",
      },
      {
        icon: "spark",
        title: "Sens",
        text: "Faire en sorte que la technique, le design et le contenu servent une intention claire et durable.",
      },
    ],
  },
  quote: {
    label: "Phrase repere",
    text:
      "Pour penser differemment, il faut parfois accepter de sortir du chemin commun.",
    attribution: "Libre inspiration autour d'une idee souvent associee a Haruki Murakami",
  },
  process: {
    index: "04",
    title: "Ma façon d'aborder vos projets.",
    intro:
      "Une démarche souple et collaborative, nourrie par le design, l'intégration, la pédagogie et la gestion de projet, adaptée à votre réalité et au bon niveau de complexité.",
    steps: [
      {
        icon: "ear",
        title: "Écouter",
        text: "Comprendre votre activité, votre contexte et ce qui compte vraiment pour vos utilisateurs.",
      },
      {
        icon: "document",
        title: "Explorer",
        text: "Clarifier les contenus, les enjeux et les opportunités avant de produire des écrans.",
      },
      {
        icon: "pen",
        title: "Concevoir",
        text: "Donner une forme visuelle et narrative cohérente à des idées parfois encore diffuses.",
      },
      {
        icon: "code",
        title: "Développer",
        text: "Intégrer proprement en HTML, CSS, WordPress, Astro ou React selon le bon niveau de réponse.",
      },
      {
        icon: "arrow",
        title: "Livrer & ajuster",
        text: "Documenter, transmettre et ajuster pour que le projet reste vivant et appropriable.",
      },
    ],
  },
  inspiration: {
    index: "05",
    title: "Ce qui m'inspire.",
    intro:
      "Des projets utiles, des personnes passionnées et des trajectoires atypiques. J'aime les croisements entre technique, création, transmission et récit visuel.",
    items: [
      "Les projets utiles, les trajectoires atypiques et les personnes qui portent une vision claire.",
      "La nature, le mouvement, l'outdoor et ce qu'ils enseignent sur le rythme, l'attention et la simplicité.",
      "La transmission, la pédagogie et le plaisir d'aider d'autres personnes à mieux comprendre les outils du web.",
      "Le récit visuel, l'audiovisuel, le voyage, la culture et les détails qui créent une ambiance juste.",
    ],
  },
  closing: {
    index: "06",
    title: "Un projet en tête ?",
    intro:
      "Une idée, une refonte ou un projet à faire émerger ? Discutons-en simplement et voyons quelle forme lui donner.",
    ctaLabel: "Discutons-en",
    ctaHref: "/contact",
  },
};

export const contactContent: ContactContent = {
  title: "Un projet en tête ? Discutons-en.",
  intro:
    "Un site, une refonte ou une idée à concrétiser ? Écrivez-moi, je vous réponds rapidement.",
  ctaLabel: "Parler du projet",
  ctaHref: "/contact",
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

export const selectedProjectsContent: SectionIntroContent = {
  title: "Quelques réalisations",
  intro:
    "Une sélection de projets menés autour des activités de pleine nature, des hébergements touristiques, de l’accompagnement et de la pédagogie.",
};

export const servicesContent: SectionIntroContent = {
  title: "Ce que je peux faire pour vous",
  intro: "Des prestations structurées pour produire un site juste, rapide et facile à faire vivre.",
};

export const processContent: SectionIntroContent = {
  title: "Une approche simple et humaine",
  intro:
    "Une méthode lisible, sans mise en scène inutile : comprendre, structurer, concevoir, intégrer, mettre en ligne.",
};