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
  | "shoppingBag";

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
    decisions?: string;
    technologies?: string;
    result?: string;
    retrospective?: string;
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

export interface JournalCategoryItem {
  label: string;
  slug: string;
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
  eyebrow: "Studio de conception numérique",
  titleParts: [
    { text: "Concevoir des " },
    { text: "expériences ", highlight: true },
    { text: "numériques claires, utiles et " },
    { text: "mémorables.", highlight: true },
  ],
  subtitle:
    "REKODE accompagne les entreprises et projets à taille humaine de la stratégie digitale jusqu'à la mise en ligne : UX/UI, architecture de contenu, storytelling, direction artistique, front-end, WordPress, Shopify, Astro et outils d'IA générative.",
  ctaLabel: "Parler de votre projet",
  ctaHref: "/contact",
  secondaryCtaLabel: "Voir les études de cas",
  secondaryCtaHref: "/etudes-de-cas",
  supportingLabel: "Positionnement",
  supportingText:
    "Transformer une idée, une offre ou un contenu complexe en expérience numérique lisible, incarnée et exploitable.",
  features: [
    { label: "Stratégie digitale" },
    { label: "UX / UI" },
    { label: "Front-End & CMS" },
    { label: "Accompagnement" },
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
      decisions:
        "Prioriser une navigation courte, travailler les fiches produits comme des pages de décision, harmoniser les visuels et donner à la boutique un univers identifiable sans alourdir l'expérience d'achat.",
      technologies:
        "Shopify, Liquid, HTML, CSS, JavaScript, Figma, ChatGPT, Codex, Adobe Firefly et optimisation d'images.",
      result:
        "Une boutique en ligne cohérente avec l'identité de la marque, simple à administrer et pensée pour valoriser les produits sur mobile comme sur desktop.",
      retrospective:
        "Le projet montre l'intérêt d'intégrer l'IA générative comme accélérateur de recherche visuelle et éditoriale, à condition de garder une direction claire et des arbitrages humains.",
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
      decisions:
        "Construire la page comme une projection de séjour : image forte, lecture rapide des chambres, informations pratiques visibles et CTA de réservation répétés aux moments utiles.",
      technologies:
        "Astro, HTML, SCSS, composants responsive, optimisation d'images, Figma, ChatGPT et Codex.",
      result:
        "Une démonstration immersive qui sert de base éditoriale et technique pour des projets d'hébergement indépendants.",
      retrospective:
        "Le prototype rappelle qu'un site touristique ne doit pas seulement être esthétique : il doit aider à se projeter, comparer, comprendre et passer à l'action.",
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
      decisions:
        "Conserver la base WordPress existante, concentrer l'effort sur la hiérarchie des informations, créer des modèles de pages plus réguliers et améliorer la lisibilité avant toute refonte lourde.",
      technologies:
        "WordPress, SiteOrigin Page Builder, CSS, structuration éditoriale, rédaction web, Figma et ChatGPT.",
      result:
        "Un site plus lisible, plus cohérent dans ses contenus et plus facile à faire évoluer avec les outils déjà en place.",
      retrospective:
        "La valeur d'une refonte ne vient pas toujours d'un changement graphique majeur. Ici, le gain principal vient de la clarification éditoriale et de l'organisation des parcours.",
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
        "ROCKSIDERS est une entreprise outdoor dans le Verdon qui propose des activités comme le canyoning, l'escalade et la découverte du territoire. Le projet ne consistait pas seulement à créer un site, mais à construire une marque complète : une identité, une manière de parler aux clients, une offre lisible et un dispositif capable de générer des réservations.",
      objective:
        "Transformer une activité de terrain en marque identifiable, rassurante et commercialement exploitable. L'objectif était de clarifier les activités proposées, d'aider les visiteurs à choisir une sortie adaptée à leur niveau, de créer une relation de confiance avant la réservation et d'améliorer la visibilité organique sur les recherches liées aux activités outdoor dans le Verdon.",
      approach:
        "Le travail a commencé par le positionnement : ton de marque, promesse, structure des offres et hiérarchie des informations utiles pour les clients. Le site WordPress a ensuite été conçu comme un véritable support commercial, avec des pages d'activités détaillées, des contenus SEO, des blocs de réassurance, des informations pratiques et une navigation pensée pour accompagner la décision.",
      decisions:
        "Structurer l'offre par activités et niveaux, créer des pages piliers SEO, renforcer les preuves de confiance, articuler contenus pratiques et récit d'expérience, puis aligner le site avec les supports imprimés et commerciaux.",
      technologies:
        "WordPress, thème sur mesure, ACF, HTML, CSS, JavaScript, SEO, rédaction web, supports imprimés, Figma et ChatGPT.",
      result:
        "Un écosystème de marque complet qui relie positionnement, contenus, acquisition, relation client et expérience terrain.",
      retrospective:
        "ROCKSIDERS illustre le mieux le repositionnement de REKODE : le site n'est qu'une partie d'un dispositif plus large de marque, d'offre, de pédagogie commerciale et de confiance.",
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
      decisions:
        "Respecter l'identité déjà présente, organiser les hébergements et informations de séjour, renforcer le SEO local et créer une lecture plus fluide pour les visiteurs en phase de choix.",
      technologies:
        "WordPress, Elementor, CSS, UX/UI, SEO local, Figma et ChatGPT.",
      result:
        "Un site vitrine clair, cohérent avec le lieu et pensé pour accompagner la découverte des hébergements.",
      retrospective:
        "Le projet montre l'importance de prolonger une identité existante sans la surcharger, en laissant les informations pratiques et la projection dans le lieu guider la conception.",
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
      decisions:
        "Penser l'interface comme un produit évolutif plutôt qu'une simple page de présentation : hub, cartes de parcours, progression, fiche programme, catégories et base de design system.",
      technologies:
        "Next.js, TypeScript, Tailwind, Sass, design system, Figma, ChatGPT et Codex.",
      result:
        "Une base de démonstration pour un projet e-learning modulaire, prête à accueillir de nouveaux domaines, parcours et écrans.",
      retrospective:
        "LearnIt confirme l'intérêt de travailler très tôt l'architecture de contenu et les composants, même avant que toutes les fonctionnalités produit soient finalisées.",
      outcome:
        "Une base de démonstration pour un projet e-learning encore en développement, pensée pour accueillir d'autres formations, domaines et écrans à mesure que l'interface se construit.",
    },
  },
];

export const services: ServiceItem[] = [
  {
    title: "Audit & stratégie digitale",
    icon: "document",
    description: "Prendre du recul sur votre présence numérique, clarifier les objectifs, les publics, les messages, les parcours et les priorités avant d'engager une refonte ou une création.",
  },
  {
    title: "Site vitrine & expérience utilisateur",
    icon: "monitor",
    description: "Concevoir un site clair, crédible et facile à faire évoluer, depuis l'arborescence et les contenus jusqu'à l'interface, l'intégration et la mise en ligne.",
  },
  {
    title: "E-commerce & expérience d'achat",
    icon: "monitor",
    description:
      "Structurer une boutique Shopify autour du catalogue, des fiches produits, du récit de marque et d'un parcours d'achat lisible sur desktop comme sur mobile.",
  },  
  {
    title: "Accompagnement stratégique",
    icon: "ear",
    description: "Avancer avec méthode sur un sujet précis : contenu, UX, WordPress, Shopify, SEO, IA générative, organisation d'un projet ou arbitrage technique.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Comprendre",
    description: "Explorer votre activité, vos publics, vos contraintes, vos objectifs et ce que l'expérience numérique doit rendre lisible.",
    icon: "ear",
  },
  {
    title: "Clarifier",
    description: "Faire émerger le message juste, les priorités éditoriales, les preuves à montrer et les actions attendues.",
    icon: "spark",
  },
  {
    title: "Structurer",
    description: "Organiser l'arborescence, les contenus, les parcours, les composants et les repères nécessaires à la compréhension.",
    icon: "document",
  },
  {
    title: "Concevoir",
    description: "Transformer la stratégie en interface : UX/UI, direction artistique, front-end, CMS et expérience responsive.",
    icon: "pen",
  },
  {
    title: "Accompagner",
    description: "Préparer la mise en ligne, transmettre les repères utiles et aider le projet à évoluer après livraison.",
    icon: "cap",
  },
];

export const aboutContent: AboutContent = {
  eyebrow: "À propos",
  title: "Un parcours transversal pour relier stratégie, contenu, design et technique.",
  text:
    "REKODE s'appuie sur un parcours entre terrain, entrepreneuriat, transmission et création web pour concevoir des expériences numériques qui partent du réel avant de choisir les outils.",
  points: [
    {
      label: "Observer le contexte et les publics",
      icon: "ear",
    },
    {
      label: "Relier contenu, parcours et interface",
      icon: "pen",
    },
    {
      label: "Transformer les idées en supports utilisables",
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
      "Un parcours entre terrain, création, transmission et technique pour concevoir des expériences numériques claires, utiles et incarnées.",
  },
  hero: {
    label: "À propos",
    title: "Derrière chaque projet, chercher l'expérience juste",
    titleParts: [
      { text: "Relier le fond, " },
      { text: "la forme ", highlight: true },
      { text: "et l'usage." },
    ],
    paragraphs: [
      "REKODE est né d'un parcours à la croisée des activités de pleine nature, de l'entrepreneuriat, de la transmission et de la création numérique. Cette trajectoire a construit une manière de travailler attentive au terrain, aux publics, aux usages et aux détails qui rendent une expérience compréhensible.",
      "Dans cette perspective, je cherche à comprendre l'activité, son contexte, les contraintes et les objectifs avant de choisir la forme. Un site, une boutique ou une interface doivent devenir des supports clairs, crédibles et vivants, capables de raconter, orienter et accompagner.",
    ],
    highlightsLabel: "Repères",
    highlights: [
      {
        label: "Écoute, empathie et expérience utilisateur",
        icon: "ear",
      },
      {
        label: "Architecture de contenu et parcours lisibles",
        icon: "monitor",
      },
      {
        label: "Storytelling, direction artistique et détails",
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
      "Je m’appelle Chandra. Mon parcours a commencé par la relation client, l'enseignement et les activités de pleine nature, avant de rejoindre le web par la nécessité très concrète de structurer une offre, la raconter et la rendre visible.",
    paragraphs: [
      "Éducateur sportif, puis entrepreneur outdoor, j'ai appris à construire une offre, tenir un cadre, écouter des publics différents et transformer des idées en actions concrètes.",
      "Le web s'est ainsi ajouté comme un espace de création, de stratégie et de transmission. Il permet de communiquer, de raconter une activité, de rendre une idée compréhensible et de construire des supports qui préparent aussi des expériences réelles.",
      "Cette double culture alimente aujourd'hui mon travail : partir du réel, clarifier ce qui doit être compris, puis choisir les outils adaptés, qu'il s'agisse de WordPress, Shopify, Astro, front-end ou IA générative.",
    ],
    technicalSkillsLabel: "Compétences techniques",
    technicalSkills: [
      "HTML / CSS",
      "WordPress",
      "Shopify",
      "Responsive design",
      "UX / UI",
      "Architecture de contenu",
      "Storytelling",
      "Optimisation SEO",
      "Accessibilité",
      "Astro / React",
      "ChatGPT / Codex / Firefly",
    ],
    imageAlt: "Carnet ouvert face aux montagnes au lever du soleil",
    imageCaption:
      "Un café, un carnet, un stylo, un ordinateur, et le paysage (parfois) comme source d'inspiration.",
  },
  expertise: {
    index: "02",
    title: "Clarifier, structurer, concevoir.",
    intro:
      "Cette approche tient en trois gestes simples : clarifier ce qui doit être compris, structurer les parcours et donner forme à une expérience numérique utile, cohérente et maintenable.",
    skillsLabel: "Axes directeurs",
    skills: [
      "Contexte et public",
      "Expérience utilisateur",
      "Architecture de contenu",
      "Storytelling",
      "Direction artistique",
      "Front-End / CMS",
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
        title: "Concevoir",
        text: "Transformer les décisions en interface, composants, contenus, intégration et repères de prise en main.",
      },
    ],
  },
  quote: {
    label: "Fil conducteur",
    text:
      "Une expérience numérique réussie commence rarement par l'écran. Elle commence par ce qu'il faut rendre clair.",
    attribution: "REKODE",
  },
  process: {
    index: "03",
    title: "Laisser les idées prendre forme",
    intro:
      "Avant de concevoir une interface, il faut souvent mettre les idées sur la table : écouter, observer, déplacer les angles, prendre du recul et chercher la forme utile. Ce qui ressemble à un détour devient souvent la base d'une expérience plus solide.",
    note: "L'objectif reste simple : rendre le projet plus clair, plus cohérent et plus facile à faire évoluer.",
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
      "Des projets, des personnes et des univers variés, la curiosité, la technique, le design, les usages et une attention constante portée au public, au message, au rythme et au détail.",
    items: [
      "La recherche d'une expérience utilisateur lisible : ergonomie, utilisabilité, accessibilité et design d'interface.",
      "Le récit visuel et la communication par l'image, de la direction artistique à la production de contenus.",
      "La volonté de partager, enseigner, apprendre et documenter les décisions pour rendre les projets appropriables.",
      "La curiosité pour les outils, du front-end aux CMS en passant par les usages de l'IA générative dans la conception.",
    ],
  },
  closing: {
    index: "05",
    title: "Un projet à clarifier ?",
    intro:
      "Une idée, une refonte, une boutique ou une expérience numérique à clarifier ? Discutons-en simplement et voyons quelle direction faire émerger.",
    ctaLabel: "Discutons-en",
    ctaHref: "/contact",
  },
};

export const contactContent: ContactContent = {
  title: "Un projet à clarifier ? Discutons-en.",
  intro:
    "Une idée, une refonte, une boutique, un contenu ou une expérience numérique à structurer ? Écrivez-moi, je vous réponds rapidement.",
  ctaLabel: "Parler du projet",
  ctaHref: "/contact",
};

export const labItems: LabItem[] = [
  {
    title: "UX & architecture de contenu",
    summary: "Réflexions sur les parcours, les arborescences, les messages et les contenus qui rendent une expérience plus claire.",
  },
  {
    title: "Direction artistique & storytelling",
    summary: "Notes sur le rythme visuel, la mise en récit, les univers de marque et la production d'images.",
  },
  {
    title: "Front-End, WordPress, Shopify & Astro",
    summary: "Retours d'expérience sur les choix techniques, les CMS, les composants, la performance et la maintenabilité.",
  },
  {
    title: "IA générative appliquée",
    summary: "Usages concrets de ChatGPT, Codex ou Firefly dans la recherche, le contenu, la conception et la production.",
  },
];

export const journalCategories: JournalCategoryItem[] = [
  {
    label: "UX",
    slug: "ux",
    summary: "Parcours, ergonomie, lisibilité des interfaces et décisions de conception.",
  },
  {
    label: "Direction artistique",
    slug: "direction-artistique",
    summary: "Univers visuels, cohérence de marque, images et atmosphère d'un projet.",
  },
  {
    label: "Création de contenu",
    slug: "creation-de-contenu",
    summary: "Architecture éditoriale, storytelling, rédaction web et hiérarchie des messages.",
  },
  {
    label: "WordPress",
    slug: "wordpress",
    summary: "Refontes, thèmes, ACF, builders, maintenance et autonomie éditoriale.",
  },
  {
    label: "Shopify",
    slug: "shopify",
    summary: "Expérience d'achat, catalogue, fiches produits, Liquid et personnalisation.",
  },
  {
    label: "Astro",
    slug: "astro",
    summary: "Sites performants, architecture de composants et génération statique.",
  },
  {
    label: "Front-End",
    slug: "front-end",
    summary: "HTML, CSS, JavaScript, accessibilité, responsive et qualité d'intégration.",
  },
  {
    label: "IA générative",
    slug: "ia-generative",
    summary: "ChatGPT, Codex, Firefly et workflows hybrides de conception.",
  },
  {
    label: "Études de cas",
    slug: "etudes-de-cas",
    summary: "Retours structurés sur les projets, les arbitrages et les résultats obtenus.",
  },
  {
    label: "Design systems",
    slug: "design-systems",
    summary: "Composants, tokens, cohérence visuelle et bases réutilisables.",
  },
  {
    label: "SEO",
    slug: "seo",
    summary: "Structure, intentions de recherche, contenus piliers et visibilité naturelle.",
  },
  {
    label: "Accessibilité",
    slug: "accessibilite",
    summary: "Contrastes, navigation, sémantique et usages inclusifs.",
  },
];

export const selectedProjectsContent: SectionIntroContent = {
  title: "Études de cas",
  intro:
    "Des projets où la stratégie, les contenus, l'interface et la technique travaillent ensemble pour rendre une activité plus claire, plus crédible et plus actionnable.",
};

export const servicesContent: SectionIntroContent = {
  title: "Services",
  intro: "Des formats d'accompagnement pour clarifier une stratégie, concevoir une expérience numérique, structurer des contenus et mettre en ligne un support fiable.",
};

export const processContent: SectionIntroContent = {
  title: "Méthode",
  intro:
    "Cinq étapes pour passer d'une idée, d'un site confus ou d'une offre à clarifier vers une expérience numérique structurée, utile et durable.",
};
