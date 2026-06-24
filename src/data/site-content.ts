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
  | "mountain"
    "shoppingBag";

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
    { text: " ", highlight: true },
    { text: "Concevoir vos " },
    { text: "expériences ", highlight: true },
    { text: "pour le web. " },
  ],
  subtitle:
    "REKODE conçoit et accompagne des projets dans la création, la refonte ou l’évolution de sites et interfaces pensés pour transmettre votre message, optimiser votre présence en ligne et structurer l'expérience utlisateur.",
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
    title: "MIMOSA",
    slug: "mimosa-eshop",
    summary:
      "Boutique Shopify pour une marque de vêtements & lifestyle, combinant direction artistique, e-commerce, UX et production visuelle assistée par IA.",
    tags: [
      "Shopify",
      "Liquid",
      "UX/UI",
      "Direction artistique",
      "E-commerce",
      "IA générative",
      "ChatGPT",
      "Codex",
      "Adobe Firefly",
      "Figma",
    ],
    meta: "01",
    thumbnailAlt: "Aperçu du projet MIMOSA Eshop",
    websiteHref: "https://mimosa-9354.myshopify.com/",
    websiteLabel: "Voir le projet",
    caseStudy: {
      overview: {
        role:
          "Direction artistique, conception UX/UI, intégration Shopify, structuration du catalogue, production visuelle assistée par IA et accompagnement e-commerce",
        deliverables:
          "Boutique Shopify, personnalisation du thème, structure catalogue, fiches produits, navigation, optimisation des visuels, parcours d'achat et pages de contenus",
        stack:
          "Shopify, Liquid, HTML, CSS, JavaScript, Figma, ChatGPT, Codex, Adobe Firefly, optimisation d'images et UX e-commerce",
        timeline:
          "Création d'une boutique e-commerce pour une marque vêtements & lifestyle",
        highlights: [
          "Univers visuel cohérent avec la marque",
          "Parcours d'achat simplifié",
          "Production visuelle enrichie par IA",
        ],
      },
      cta: {
        label: "Discuter d'un projet e-commerce",
        href: "/contact",
      },
      context:
        "MIMOSA souhaitait disposer d'une boutique en ligne capable de refléter son identité tout en offrant une expérience d'achat simple et rassurante. Le projet devait mettre en valeur les produits, faciliter la navigation et créer un environnement cohérent avec l'univers de la marque.",
      objective:
        "Créer une boutique Shopify élégante et facile à administrer, capable de présenter efficacement les collections, d'améliorer la compréhension des produits et d'accompagner le visiteur jusqu'à l'achat.",
      approach:
        "Le travail a porté sur la hiérarchisation des contenus, la personnalisation de l'interface Shopify, l'optimisation des visuels produits, l'organisation du catalogue et la création d'un parcours utilisateur fluide. Des outils d'IA générative ont également été intégrés au processus afin d'explorer différentes directions visuelles, produire certains visuels d'ambiance et accélérer les phases de prototypage et de création de contenus.",
      outcome:
        "Une boutique en ligne cohérente avec l'identité de la marque, pensée pour valoriser les produits, faciliter la gestion quotidienne du catalogue et offrir une expérience d'achat claire sur ordinateur comme sur mobile. Le projet illustre aussi l'intégration d'outils IA dans un workflow de conception et de production orienté résultat.",
    },
  },
  {
    title: "Maison Alta",
    slug: "alta-website-demo",
    summary:
      "Démo Astro immersive pour une maison d'hôtes contemporaine, entre storytelling visuel, informations de séjour et intention de réservation.",
    tags: [
      "Astro",
      "HTML",
      "SCSS",
      "UX/UI",
      "Direction artistique",
      "Landing page",
      "Tourisme",
      "Figma",
      "ChatGPT",
      "Codex",
    ],
    meta: "02",
    thumbnailAlt:
      "Aperçu du projet Maison Alta, site vitrine pour une maison d'hôtes contemporaine",
    websiteHref: "https://alta-website-demo.netlify.app/",
    websiteLabel: "Voir la démo",
    caseStudy: {
      overview: {
        role:
          "Direction artistique, conception UI, intégration Astro, structure éditoriale et hiérarchisation du parcours de réservation",
        deliverables:
          "Landing page complète, hero immersif, sections de chambres, galerie, FAQ, témoignages et CTA de réservation",
        stack:
          "Astro, HTML, SCSS, composants, optimisation d'images, structure responsive, Figma, ChatGPT, Codex",
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
        "Composer une page de destination capable de vendre un séjour : montrer le lieu, détailler les chambres, mettre en avant les expériences à proximité et rendre les informations pratiques immédiatement lisibles.",
      approach:
        "Le travail s'est concentré sur un hero immersif, une narration par blocs courts, des cartes de chambres et d'expériences, puis des sections de réassurance comme les avis, la FAQ et les informations pratiques.",
      outcome:
        "Une démo Astro cohérente et réutilisable pour des projets d'hébergements touristiques, avec une présence visuelle plus incarnée qu'un simple template vitrine.",
    },
  },
  {
    title: "Sens Dessus Dessous",
    slug: "sens-dessus-dessous",
    summary:
      "Refonte d'un site WordPress existant pour clarifier l'offre, restructurer les contenus et améliorer l'expérience de lecture.",
    tags: [
      "Refonte",
      "WordPress",
      "SiteOrigin",
      "CSS",
      "UX",
      "SEO",
      "Rédaction web",
      "Structuration éditoriale",
      "Figma",
      "ChatGPT",
    ],
    meta: "03",
    thumbnailAlt: "Aperçu du projet Sens Dessus Dessous",
    websiteHref: "https://sensdessusdessous.eu/",
    caseStudy: {
      overview: {
        role:
          "Refonte UX/UI, restructuration de contenus, rédaction, création de modèles de pages, amélioration ergonomique, adaptation sur thème WordPress existant",
        deliverables:
          "Pages modèles, contenus réécrits, structure d'activité, optimisation UX, ajustements graphiques, amélioration du parcours utilisateur",
        stack:
          "WordPress, thème existant, SiteOrigin Page Builder, CSS, structuration éditoriale, Figma, ChatGPT",
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
    title: "ROCKSIDERS",
    slug: "rocksiders",
    summary:
      "Création complète d'une marque outdoor dans le Verdon : positionnement, identité éditoriale, site WordPress, SEO, offres, supports commerciaux et acquisition client.",
    tags: [
      "Création de marque",
      "WordPress",
      "ACF",
      "HTML",
      "CSS",
      "JavaScript",
      "UX",
      "SEO",
      "Rédaction web",
      "Communication",
      "Acquisition client",
      "Outdoor",
      "Figma",
      "ChatGPT",
    ],
    meta: "04",
    thumbnailAlt: "Aperçu du projet ROCKSIDERS",
    websiteHref: "https://www.rocksiders.com/",
    caseStudy: {
      overview: {
        role:
          "Création d'entreprise, positionnement de marque, direction éditoriale, UX/UI, développement WordPress, structuration des offres, SEO, rédaction de contenus, supports graphiques et communication commerciale",
        deliverables:
          "Marque outdoor, site WordPress sur mesure, thème personnalisé, arborescence SEO, pages piliers, pages d'activités, contenus éditoriaux, supports imprimés, flyers, affiches, visuels web, messages commerciaux et contenus réseaux sociaux",
        stack:
          "WordPress, thème sur mesure, ACF, HTML, CSS, JavaScript, SEO, rédaction web, identité éditoriale, supports imprimés, Figma, ChatGPT",
        timeline:
          "Création, développement et exploitation d'un écosystème de marque outdoor dans le Verdon",
        highlights: [
          "Création d'une marque de terrain identifiable",
          "Structuration d'une offre outdoor lisible",
          "Site pensé pour la confiance, le SEO et la réservation",
        ],
      },
      cta: {
        label: "Construire une présence de marque",
        href: "/contact",
      },
      context:
        "ROCKSIDERS est né comme une entreprise outdoor dans le Verdon, autour d'activités comme le canyoning, l'escalade et la découverte du territoire. Le projet ne consistait pas seulement à créer un site, mais à construire une marque complète : une identité, une manière de parler aux clients, une offre lisible et un dispositif capable de générer des réservations.",
      objective:
        "Transformer une activité de terrain en marque identifiable, rassurante et commercialement exploitable. L'objectif était de clarifier les activités proposées, d'aider les visiteurs à choisir une sortie adaptée à leur niveau, de créer une relation de confiance avant la réservation et d'améliorer la visibilité organique sur les recherches liées aux activités outdoor dans le Verdon.",
      approach:
        "Le travail a commencé par le positionnement : ton de marque, promesse, structure des offres et hiérarchie des informations utiles pour les clients. Le site WordPress a ensuite été conçu comme un véritable support commercial, avec des pages d'activités détaillées, des contenus SEO, des blocs de réassurance, des informations pratiques et une navigation pensée pour accompagner la décision.",
      outcome:
        "ROCKSIDERS est devenu un écosystème de marque cohérent, capable de relier l'expérience terrain, la communication, le référencement naturel et la relation client. Le projet démontre une approche complète : création de marque, conception web, contenu, acquisition, pédagogie commerciale et cohérence entre le discours en ligne et l'expérience vécue sur le terrain.",
    },
  },
  {
    title: "La Fabrique de Moustiers",
    slug: "lafabrique-moustiers",
    summary:
      "Création d'un site WordPress pour un hébergement touristique, en cohérence avec une identité graphique existante.",
    tags: [
      "Hébergement",
      "WordPress",
      "Elementor",
      "CSS",
      "UX/UI",
      "SEO local",
      "Tourisme",
      "Figma",
      "ChatGPT",
    ],
    meta: "05",
    thumbnailAlt: "Aperçu du projet La Fabrique de Moustiers",
    websiteHref: "https://lafabrique-moustiers.com/",
    caseStudy: {
      overview: {
        role:
          "Création de site, UX/UI design, intégration WordPress, cohérence de marque, optimisation SEO, structuration du parcours utilisateur",
        deliverables:
          "Site vitrine WordPress, pages hébergements, structure éditoriale, optimisation UX, intégration avec thème Elementor, base SEO",
        stack: "WordPress, Elementor, optimisation UX, SEO local, Figma, ChatGPT",
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
    title: "LearnIt",
    slug: "learn-it",
    summary:
      "Prototype e-learning multi-domaines, pensé comme un produit numérique évolutif autour de la formation, de l'UX pédagogique et du design system.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Sass",
      "UX/UI",
      "E-learning",
      "Prototype produit",
      "Product design",
      "Design system",
      "Figma",
      "ChatGPT",
      "Codex",
    ],
    meta: "06",
    thumbnailAlt: "Aperçu du projet LearnIt",
    caseStudy: {
      overview: {
        role:
          "Direction produit, UX/UI, architecture de contenus, design system, structuration initiale du hub et des parcours de formation, intégration front",
        deliverables:
          "Landing page, hub de formations, fiche programme exemple, composants de progression, filtres catalogue, ressources pédagogiques, maquettes UI",
        stack:
          "Next.js, TypeScript, Tailwind, Sass, design system, contenus pédagogiques, Figma, ChatGPT, Codex",
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
        "LearnIt est un projet e-learning en cours de construction porté par REKODE. La maquette actuelle pose les bases d'une plateforme capable d'accueillir plusieurs domaines de formation ; le parcours création web y sert aujourd'hui d'exemple.",
      objective:
        "Donner une forme lisible à une première vision produit : présenter la promesse, structurer un hub, détailler un parcours type et préparer une architecture extensible avant le développement complet de l'interface.",
      approach:
        "Le travail s'est concentré sur une maquette de démonstration : hero, indicateurs de progression, hub de formations, fiche programme exemple et premiers liens vers d'autres domaines.",
      outcome:
        "Une base de démonstration pour un projet e-learning encore en développement, pensée pour accueillir d'autres formations, domaines et écrans à mesure que l'interface se construit.",
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
    title: "Boutique e-commerce Shopify",
    icon: "monitor",
    description:
      "Pour vendre en ligne avec une boutique pensée pour votre activité et vos clients. Conception UX/UI, personnalisation Shopify, structuration du catalogue, optimisation des fiches produits et accompagnement jusqu'à la mise en ligne.",
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
      "REKODE est né d'un parcours à la croisée des activités de pleine nature, de ma passion pour l'espace de création web, et de mon goût pour le partage des savoirs (et celui de l'apprentissage). Le but est de créer des expériences web qui font sens, et dont le message est clair et attractif, adapté au public qui est visé : le bon message, pour le bon public.",
      "Dans cette perspective, je cherche à comprendre l'activité, son contexte, les publics, les contraintes, afin de trouver le ton juste. Le site doit être un support clair, crédible et vivant, pensé pour être compris, et si possible, parcouru avec plaisir.",
    ],
    highlightsLabel: "Repères",
    highlights: [
      {
        label: "Écoute, empathie et expérience utilisateur",
        icon: "ear",
      },
      {
        label: "Ergonomie et design pour donner du sens",
        icon: "monitor",
      },
      {
        label: "Rythme, récit et attention aux détails",
        icon: "spark",
      },
      {
        label: "Transmission, bienveillance et autonomie",
        icon: "cap",
      },
      {
        label: "Culture terrain et entrepreneuriat",
        icon: "mountain",
      },
    ],
    ctaLabel: "Parler de votre projet",
    ctaHref: "/contact",
    portraitAlt: "Portrait en noir et blanc",
    portraitCaption:
      "Regarder au loin pour voir plus près ?",
  },
  story: {
    id: "parcours",
    index: "01",
    title: "Un parcours nourri par des expériences de terrain.",
    intro:
      "Je m’appelle Chandra, j’ai suivi un parcours de formation initial orienté vers la relation client et l’enseignement, et c’est un peu par hasard que j’ai découvert une passion pour le web et son potentiel créatif, au détour d’une falaise et de la nécessité de concevoir un site pour promouvoir et vendre des activités de pleine nature.",
    paragraphs: [
      "Éducateur sportif, puis entrepreneur outdoor, j'ai appris à construire une offre, tenir un cadre, écouter des publics différents et transformer des idées en actions concrètes.",
      "Le web s'est ainsi ajouté comme un espace de création, de partage, et se nourrit de toutes ces expériences, ainsi que d’une indéfectible curiosité. C’est un moyen de communiquer, de raconter une activité, de rendre une idée ou un concept compréhensible, et de créer des supports pour que les utilisateurs(trices) vivent des expériences, numériques, mais aussi réelles.",
      "Cette double culture alimente aujourd'hui mon travail : une manière de concevoir qui part du réel avant de choisir les outils.",
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
      "Outils IA",
    ],
    imageAlt: "Carnet ouvert face aux montagnes au lever du soleil",
    imageCaption:
      "Un café, un carnet, un stylo, un ordinateur, et le paysage (parfois) comme source d'inspiration.",
  },
  expertise: {
    index: "02",
    title: "Clarifier, structurer, transmettre.",
    intro:
      "Cette approche tient en trois gestes simples : clarifier ce qui doit être compris, structurer et organiser des parcours, transmettre et expliquer : créer une expérience web, c'est aussi partager.",
    skillsLabel: "Axes directeurs",
    skills: [
      "Contexte et public",
      "Expérience utilisateur",
      "Storytelling",
      "Ergonomie",
      "Design",
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
    label: "Qui a dit ça ?",
    text:
      "Un site réussi commence souvent par un café serré.",
    attribution: "REKODE",
  },
  process: {
    index: "03",
    title: "Laisser les idées prendre forme",
    intro:
      "Avant de concevoir une interface, il faut souvent mettre les idées sur la table : écouter, observer, déplacer les angles, prendre du recul, chercher le message juste : ce qui semblait un détour est une phase essentielle de l'expérience réussie.",
    note: "(NB: boire un café à l'étape 1 et 3)",
    steps: [
      {
        title: "Observer",
        text: "Prendre le temps de regarder le contexte, les usages, les contraintes et les détails.",
      },
      {
        title: "Connecter",
        text: "Relier les idées, les envies (et quelques hésitations) pour faire apparaître une direction.",
      },
      {
        title: "Recomposer",
        text: "Remettre les éléments dans un ordre clair, en gardant ce qui donne au projet sa matière vivante.",
      },
      {
        title: "Itérer",
        text: "Ajuster la forme, le rythme et les contenus, par couches successives, jusqu'à trouver le bon parcours, le message juste.",
      },
      {
        title: "Recommencer",
        text: "Bien mélanger : revenir au besoin, simplifier encore, puis avancer (Same player, Try again).",
      },
    ],
  },
  inspiration: {
    index: "04",
    title: "Ce qui nourrit ce travail.",
    intro:
      "Des projets, des personnes et des univers variés, la curiosité, un zeste de bienveillance, une attention portée au public, au message, et au rythme et au détail.",
    items: [
      "La recherche d'une expérience utilisateur optimale, l'ergonomie, l'utilisabilité, et le design des interfaces.",
      "Le récit visuel et la communication par l'image, photographique, cinématographique et publicitaire.",
      "La volonté de partager, enseigner (et apprendre), et la curiosité.",
      "La passion pour les récits et les histoires, cinématographiques ou sériels, quelques romans, et la musique, Rock ou électronique.",
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
  title: "Quelques réalisations",
  intro:
    "Des sites pensés pour promouvoir une activité et la rendre visible, crédible et attractive.",
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
