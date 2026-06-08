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

export type AboutPageProcessStep = AboutPageSectionPoint;

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
  technicalSkillsLabel: string;
  technicalSkills: string[];
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
  note: string;
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
  eyebrow: "Studio web et accompagnement",
  titleParts: [
    { text: "Concevoir des " },
    { text: "expériences web", highlight: true },
    { text: " pour des " },
    { text: "humains.", highlight: true },
  ],
  subtitle:
    "Je conçois et accompagne des projets en évolution dans la création, la refonte ou l’évolution de sites et interfaces pensés pour transmettre un message clair, structurer une expérience et donner une forme cohérente aux idées.",
  ctaLabel: "Parler de votre projet",
  ctaHref: "/contact",
  secondaryCtaLabel: "Voir les réalisations",
  secondaryCtaHref: "/realisations",
  supportingLabel: "Fil conducteur",
  supportingText:
    "Créer des expériences qui portent un message, partager ce qui aide à avancer, rester créatif sans perdre en clarté.",
  features: [
    { label: "Création web" },
    { label: "Expérience utilisateur" },
    { label: "Accompagnement" },
    { label: "Transmission" },
  ],
};

export const selectedProjects: ProjectItem[] = [
  {
    title: "ROCKSIDERS",
    slug: "rocksiders",
    summary:
      "Création d'un univers outdoor, du site WordPress aux contenus, en passant par l'identité, le SEO et les supports de communication.",
    tags: ["Création de marque", "WordPress", "SEO", "Contenu", "Communication"],
    meta: "01",
    thumbnailAlt: "Apercu du projet ROCKSIDERS",
    websiteHref: "https://www.rocksiders.com/",
    caseStudy: {
      overview: {
        role: "Création d'entreprise, direction éditoriale, identité de marque, UX, développement de thème WordPress, SEO, rédaction de contenus, supports graphiques, communication web",
        deliverables:
          "Site WordPress sur mesure, thème WP, arborescence, contenus SEO, pages d'offres, identité éditoriale, flyers, affiches, supports de communication, contenus réseaux sociaux",
        stack: "WordPress, thème sur mesure, SEO, contenus éditoriaux, supports imprimés",
        timeline: "Création d'entreprise outdoor et écosystème web / marque",
        highlights: [
          "Création d'une marque de terrain",
          "Structuration des offres outdoor",
          "Écosystème web et communication",
        ],
      },
      cta: {
        label: "Discuter d'un projet similaire",
        href: "/contact",
      },
      context:
        "ROCKSIDERS est né comme une entreprise outdoor dans le Verdon, avec un besoin de construire à la fois une offre lisible, une identité reconnaissable et une présence web capable de rassurer des publics variés.",
      objective:
        "Donner forme à une marque de terrain, clarifier les activités proposées et créer un site capable d'accompagner la découverte, la confiance et la réservation.",
      approach:
        "Le travail a associé création de marque, structuration des offres, rédaction de contenus, conception UX, développement WordPress, optimisation SEO et communication graphique.",
      outcome:
        "Un écosystème cohérent autour d'une activité outdoor : site, contenus, identité, supports imprimés et communication web.",
    },
  },
  {
    title: "Sens Dessus Dessous",
    slug: "sens-dessus-dessous",
    summary:
      "Refonte d'un site WordPress existant pour clarifier l'offre, restructurer les contenus et améliorer l'expérience de lecture.",
    tags: ["Refonte", "WordPress", "Contenu", "UX", "SiteOrigin"],
    meta: "02",
    thumbnailAlt: "Apercu du projet Sens Dessus Dessous",
    websiteHref: "https://sensdessusdessous.eu/",
    caseStudy: {
      overview: {
        role: "Refonte UX/UI, restructuration de contenus, rédaction, création de modèles de pages, amélioration ergonomique, adaptation sur thème WordPress existant",
        deliverables:
          "Pages modèles, contenus réécrits, structure d'activité, optimisation UX, ajustements graphiques, amélioration du parcours utilisateur",
        stack: "WordPress, thème existant, SiteOrigin Page Builder, CSS, structuration éditoriale",
        timeline: "Refonte et restructuration d'un site existant",
        highlights: [
          "Hiérarchie éditoriale retravaillée",
          "Modèles de pages réutilisables",
          "Adaptation sur une base WordPress existante",
        ],
      },
      cta: {
        label: "Parler d'une refonte",
        href: "/contact",
      },
      context:
        "Le site existait déjà mais nécessitait une hiérarchie de l'information retravaillée, une présentation lisible des activités et une expérience de navigation fluide.",
      objective:
        "Aider les visiteurs à comprendre rapidement les activités proposées, les niveaux, les publics concernés et les informations utiles avant contact ou réservation.",
      approach:
        "Le travail a porté sur la structure des pages, la réécriture de contenus, la création de gabarits réutilisables et l'amélioration progressive de l'ergonomie sur la base technique existante.",
      outcome:
        "Un site mieux structuré, cohérent dans ses contenus et facile à faire évoluer.",
    },
  },
  {
    title: "La Fabrique de Moustiers",
    slug: "lafabrique-moustiers",
    summary:
      "Création d'un site WordPress pour un hébergement touristique, en cohérence avec une identité graphique existante.",
    tags: ["Hébergement", "WordPress", "Elementor", "UX", "SEO local"],
    meta: "03",
    thumbnailAlt: "Apercu du projet La Fabrique de Moustiers",
    websiteHref: "https://lafabrique-moustiers.com/",
    caseStudy: {
      overview: {
        role: "Création de site, UX/UI design, intégration WordPress, cohérence de marque, optimisation SEO, structuration du parcours utilisateur",
        deliverables:
          "Site vitrine WordPress, pages hébergements, structure éditoriale, optimisation UX, intégration avec thème Elementor, base SEO",
        stack: "WordPress, Elementor, optimisation UX, SEO local",
        timeline: "Site d'hébergement touristique : gîtes et table d'hôtes",
        highlights: [
          "Cohérence avec l'identité existante",
          "Présentation des hébergements",
          "Parcours de découverte et SEO local",
        ],
      },
      cta: {
        label: "Faire un site pour des hébergements",
        href: "/contact",
      },
      context:
        "La Fabrique de Moustiers disposait déjà d'une identité visuelle avec enseigne et logo. Le site devait prolonger cet univers et présenter clairement les hébergements et la table d'hôtes.",
      objective:
        "Créer une présence web cohérente avec le lieu, aider les visiteurs à se projeter et améliorer la visibilité en ligne.",
      approach:
        "Le travail a cherché l'équilibre entre identité existante, lisibilité des offres, expérience utilisateur, design d'interface et référencement.",
      outcome:
        "Un site vitrine clair, cohérent avec l'univers du lieu et pensé pour accompagner la découverte des hébergements.",
    },
  },
  {
    title: "Maison Alta",
    slug: "alta-website-demo",
    summary:
      "Démo Astro immersive pour une maison d'hôtes contemporaine, entre storytelling visuel, informations de séjour et intention de réservation.",
    tags: ["Astro", "Hébergements", "Landing page", "UI", "Direction artistique"],
    meta: "04",
    thumbnailAlt: "Apercu du projet Maison Alta, site vitrine pour une maison d'hotes contemporaine",
    websiteHref: "https://alta-website-demo.netlify.app/",
    websiteLabel: "Voir la démo",
    caseStudy: {
      overview: {
        role: "Direction artistique, conception UI, intégration Astro, structure éditoriale et hiérarchisation du parcours de réservation",
        deliverables:
          "Landing page complète, hero immersif, sections de chambres, galerie, FAQ, témoignages et CTA de réservation",
        stack: "Astro, HTML, SCSS, composants, optimisation d'images, structure responsive",
        timeline: "Démo éditoriale pour maison d'hôtes",
        highlights: [
          "Univers visuel chaleureux et premium",
          "Parcours orienté séjour et réservation",
          "Base réutilisable pour location ou hôtellerie indépendante",
        ],
      },
      cta: {
        label: "Discuter d'un site d'hébergements",
        href: "/contact",
      },
      context:
        "Maison Alta imagine le site d'une maison d'hôtes nichée en bord de village. L'enjeu est de transmettre une atmosphère, clarifier l'offre et rassurer sur l'expérience avant même la prise de contact.",
      objective:
        "Composer une page de destination capable de vendre un séjour: montrer le lieu, détailler les chambres, mettre en avant les expériences à proximité et rendre les informations pratiques immédiatement lisibles.",
      approach:
        "Le travail s'est concentré sur un hero immersif, une narration par blocs courts, des cartes de chambres et d'expériences, puis des sections de réassurance comme les avis, la FAQ et les informations pratiques pour accompagner la décision.",
      outcome:
        "Une démo Astro cohérente et réutilisable pour des projets d'hébergements touristiques, avec une présence visuelle plus incarnée qu'un simple template vitrine et un parcours pensé pour convertir sans surcharger la lecture.",
    },
  },
  {
    title: "LearnIt",
    slug: "learn-it",
    summary:
      "Work in progress d'un projet e-learning multi-domaines, dont le parcours création web est actuellement présenté comme exemple.",
    tags: ["Next.js", "TypeScript", "UX/UI", "E-learning", "Prototype produit"],
    meta: "05",
    thumbnailAlt: "Apercu du projet LearnIt",
    caseStudy: {
      overview: {
        role: "Direction produit, UX/UI, architecture de contenus, design system, structuration initiale du hub et des parcours de formation, intégration front",
        deliverables:
          "Landing page, hub de formations, fiche programme exemple, composants de progression, filtres catalogue, ressources pédagogiques, maquettes UI",
        stack: "Next.js, TypeScript, Tailwind, Sass, design system, contenus pédagogiques",
        timeline: "Prototype e-learning en cours de développement",
        highlights: [
          "Hub pensé pour accueillir plusieurs domaines de formation",
          "Parcours création web montré comme cas d'usage initial",
          "Base d'interface en préparation avant enrichissement du produit",
        ],
      },
      cta: {
        label: "Échanger sur un produit de formation",
        href: "/contact",
      },
      context:
        "LearnIt est un projet e-learning en cours de construction porté par REKODE. La maquette actuelle pose les bases d'une plateforme capable d'accueillir plusieurs domaines de formation ; le parcours création web y sert aujourd'hui d'exemple, tandis que le hub laisse déjà entrevoir d'autres entrées et futurs contenus.",
      objective:
        "Donner une forme lisible à une première vision produit : présenter la promesse, structurer un hub, détailler un parcours type et préparer une architecture extensible avant le développement complet de l'interface.",
      approach:
        "Le travail s'est concentré sur une maquette de démonstration : hero, indicateurs de progression, hub de formations, fiche programme exemple et premiers liens vers d'autres domaines. L'objectif était de tester la logique de navigation, la hiérarchie des contenus et la capacité du projet à s'étendre avant de figer une interface complète.",
      outcome:
        "Une base de démonstration pour un projet e-learning encore en développement. LearnIt présente pour l'instant une formation création web à titre d'exemple et prépare l'ajout d'autres formations, domaines et écrans à mesure que l'interface se construit.",
    },
  },
];

export const services: ServiceItem[] = [
  {
    title: "Diagnostic et plan d'action",
    icon: "document",
    description: "Pour clarifier votre besoin avant de refaire votre site. Prendre du recul sur un site existant, un message ou une idée avant d'engager du temps ou un budget.",
  },
  {
    title: "Création et refonte de site vitrine",
    icon: "monitor",
    description: "Pour créer une présence web vivante et simple à faire évoluer. Concevoir un site cohérent avec une activité, un public et un message. De la structure au contenu, avec une attention portée à l'expérience.",
  },
  {
    title: "Accompagnement et conseil",
    icon: "ear",
    description: "Pour débloquer une idée ou avancer avec méthode. Un temps d'échange pour clarifier un besoin, structurer une réflexion ou avancer sur un site, un contenu ou une problématique web.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Échanger",
    description: "Comprendre votre activité, vos publics et ce que le site doit rendre lisible.",
    icon: "ear",
  },
  {
    title: "Clarifier",
    description: "Identifier le message juste, les priorités et les contenus à structurer.",
    icon: "spark",
  },
  {
    title: "Structurer",
    description: "Organiser les pages, les parcours et les actions attendues.",
    icon: "document",
  },
  {
    title: "Créer",
    description: "Donner forme à une expérience web claire, sobre et cohérente.",
    icon: "pen",
  },
  {
    title: "Transmettre",
    description: "Expliquer les choix, livrer les repères utiles et accompagner la prise en main.",
    icon: "cap",
  },
];

export const aboutContent: AboutContent = {
  eyebrow: "À propos",
  title: "Derrière chaque projet, chercher le message juste, pour le bon public.",
  text:
    "Commencer par une phase d'écoute, de réflexion et de clarification : une manière de travailler nourrie par les activités de pleine nature, le goût de partager (et d'apprendre), l'attention portée au design, et aux détails.",
  points: [
    {
      label: "Écouter, observer",
      icon: "ear",
    },
    {
      label: "Chercher les connexions avec le public",
      icon: "pen",
    },
    {
      label: "Tracer les chemins entre le fond et la forme",
      icon: "cap",
    },
  ],
  ctaLabel: "À propos",
  ctaHref: "/a-propos",
};

export const aboutPageContent: AboutPageContent = {
  meta: {
    title: "À propos",
    description:
      "Un parcours entre terrain, création et transmission pour clarifier les projets web et chercher le message juste.",
  },
  hero: {
    label: "À propos",
    title: "Derrière chaque projet, chercher le message juste",
    titleParts: [
      { text: "Sous les projets, " },
      { text: "le message.", highlight: true },
    ],
    paragraphs: [
      "REKODE est né d'un parcours à la croisée des activités de pleine nature, de ma passion pour l'espace de création web, et de mon goût pour le partage des savoirs (et celui de l'apprentissage). Le but de ce studio est de créer des expériences web qui font sens, et dont le message est clair, pour le public qui est visé : le bon message, pour le bon public.",
      "Dans cette perspective, je cherche à comprendre l'activité, son contexte, les publics, les contraintes, afin de trouver le ton juste. Le site doit être un support clair, crédible et vivant, pensé pour être compris, et si possible, parcouru avec plaisir.",
    ],
    highlightsLabel: "Repères",
    highlights: [
      {
        label: "Écoute et clarification",
        icon: "ear",
      },
      {
        label: "Culture terrain et entrepreneuriat",
        icon: "mountain",
      },
      {
        label: "Création web sobre",
        icon: "monitor",
      },
      {
        label: "Transmission et autonomie",
        icon: "cap",
      },
      {
        label: "Rythme, récit et attention aux détails",
        icon: "spark",
      },
    ],
    ctaLabel: "Parler de votre projet",
    ctaHref: "/contact",
    portraitAlt: "Portrait en noir et blanc",
    portraitCaption:
      "Un parcours entre terrain, création, web et transmission.",
  },
  story: {
    id: "parcours",
    index: "01",
    title: "Un parcours nourri par le terrain.",
    intro:
      "Je m’appelle Chandra, j’ai une formation initiale orientée vers la relation client et l’enseignement, et c’est un peu par hasard que j’ai découvert une passion pour le web et son potentiel créatif, au détour d’une falaise et de la nécessité de concevoir un site pour promouvoir et vendre des activités de pleine nature.",
    paragraphs: [
      "Éducateur sportif, puis entrepreneur outdoor, j'ai appris à construire une offre, tenir un cadre, écouter des publics différents et transformer des idées en actions concrètes.",
      "Le web s'est ainsi ajouté comme un espace de création, de partage, et se nourrit de toutes ces expériences, ainsi que d’une indéfectible curiosité. C’est un moyen de structurer des messages, de raconter une activité, de rendre une idée ou un concept compréhensible, et de créer des supports pour que les utilisateurs(trices) vivent des expériences, numériques, mais aussi réelles.",
      "Cette double culture alimente aujourd'hui REKODE : une manière de concevoir qui part du réel avant de choisir les outils.",
    ],
    technicalSkillsLabel: "Compétences techniques",
    technicalSkills: [
      "HTML / CSS",
      "WordPress",
      "Responsive design",
      "UX / UI",
      "Optimisation SEO",
      "Accessibilité",
      "Astro / React",
    ],
    imageAlt: "Carnet ouvert face aux montagnes au lever du soleil",
    imageCaption:
      "Terrain, pédagogie, entrepreneuriat : une culture du concret qui structure ensuite les projets web.",
  },
  expertise: {
    index: "02",
    title: "Clarifier, structurer, transmettre.",
    intro:
      "Cette approche tient en trois gestes simples : clarifier ce qui doit être compris, structurer ce qui doit être parcouru, transmettre ce qui doit rester vivant après la mise en ligne. Créer une expérience web juste, c'est aussi partager les bons repères et rester créatif sans brouiller le message.",
    skillsLabel: "Axes directeurs",
    skills: [
      "Clarification",
      "Structure",
      "Transmission",
    ],
    points: [
      {
        title: "Clarifier",
        text: "Faire émerger le message juste, mettre des mots sur l'activité et distinguer ce qui doit être compris en priorité.",
      },
      {
        title: "Structurer",
        text: "Organiser les contenus, les parcours et les actions attendues pour donner au site une lecture simple et cohérente.",
      },
      {
        title: "Transmettre",
        text: "Expliquer les choix, partager les repères utiles et rendre la présence web appropriable dans le temps.",
      },
    ],
  },
  quote: {
    label: "Repère",
    text:
      "Un site juste commence souvent par une conversation précise.",
    attribution: "REKODE",
  },
  process: {
    index: "03",
    title: "Laisser les idées prendre forme",
    intro:
      "Avant de concevoir une interface, il faut souvent remettre les idées sur la table : écouter, observer, déplacer les angles, chercher le message juste. Cette phase n'est pas un détour ; elle fait partie du travail.",
    note: "Parfois : boire un café, regarder ailleurs, revenir au détail.",
    steps: [
      {
        title: "Observer",
        text: "Prendre le temps de regarder le contexte, les usages, les contraintes et les détails qui comptent.",
      },
      {
        title: "Connecter",
        text: "Relier les idées, les envies et les hésitations pour faire apparaître une direction.",
      },
      {
        title: "Recomposer",
        text: "Remettre les éléments dans un ordre clair, en gardant ce qui donne au projet sa matière vivante.",
      },
      {
        title: "Itérer",
        text: "Ajuster la forme, le rythme et les contenus jusqu'à trouver une lecture juste.",
      },
      {
        title: "Recommencer",
        text: "Revenir au besoin, simplifier encore, puis avancer.",
      },
    ],
  },
  inspiration: {
    index: "04",
    title: "Ce qui nourrit ce travail.",
    intro:
      "Des projets utiles, des personnes engagées et des univers qui demandent une attention au ton, au rythme et au détail.",
    items: [
      "Les projets portés par des personnes qui connaissent leur métier et cherchent à le rendre lisible.",
      "La nature, le mouvement et l'outdoor, pour leur rapport au rythme, à l'attention et à la simplicité.",
      "La pédagogie et la transmission, parce qu'un site doit aussi aider à comprendre.",
      "Le récit visuel, l'image et les ambiances qui donnent une présence sans ajouter de bruit.",
    ],
  },
  closing: {
    index: "05",
    title: "Un projet à clarifier ?",
    intro:
      "Une idée, une refonte ou une présence web à remettre à plat ? Discutons-en simplement et voyons quel message faire émerger.",
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
  title: "Des réalisations concrètes",
  intro:
    "Des sites pensés pour rendre une activité lisible, crédible et simple à comprendre.",
};

export const servicesContent: SectionIntroContent = {
  title: "Mes propositions",
  intro: "Des formats simples pour clarifier votre besoin, faire évoluer votre site ou obtenir des conseils.",
};

export const processContent: SectionIntroContent = {
  title: "Comment ça marche",
  intro:
    "Un process en 5 étapes pour passer d'une idée, d'un site daté ou d'un besoin flou à une présence web claire et un site ergonomique.",
};
