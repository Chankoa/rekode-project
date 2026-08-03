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
  | "shopping"
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
}

export interface SectionIntroContent {
  title: string;
  intro: string;
}

export const heroContent: HeroContent = {
  eyebrow: "Studio de conception web et numérique",
  titleParts: [
    { text: "Concevoir " },
    { text: "des expériences ", highlight: true },
    { text: "pour le " },
    { text: "web.", highlight: true },
  ],
  subtitle:
    "REKODE conçoit et refond des sites qui présentent une offre clairement, orientent les visiteurs et restent simples à faire évoluer.",
  ctaLabel: "Voir les services",
  ctaHref: "/services",
  secondaryCtaLabel: "Voir les études de cas",
  secondaryCtaHref: "/etudes-de-cas",
  supportingLabel: "Positionnement",
  supportingText:
    "Faire comprendre une offre, aider à choisir et faciliter le passage à l'action.",
  features: [
    { label: "Création & refonte" },
    { label: "UX/UI" },
    { label: "WordPress · Shopify · Astro" },
    { label: "Intégration Front-End" },
  ],
};

export const selectedProjects: ProjectItem[] = [
  {
    title: "MIMOSA",
    slug: "mimosa-eshop",
    summary:
      "Boutique Shopify pour une marque de vêtements & lifestyle, entre UX/UI, direction artistique, catalogue produits et workflow IA avec Firefly, ChatGPT et Codex.",
    tags: [
      "Shopify",
      "Liquid",
      "UX/UI",
      "Direction artistique",
      "Catalogue produits",
      "Expérience d'achat",
      "Workflow IA",
      "ChatGPT",
      "Codex",
      "Adobe Firefly",
      "Figma",
    ],
    meta: "01",
    thumbnailAlt: "Aperçu de la boutique Shopify MIMOSA avec catalogue produits et direction artistique",
    websiteHref: "https://mimosa-eshop.com/",
    websiteLabel: "Voir le projet",
    caseStudy: {
      overview: {
        role:
          "Direction artistique, UX/UI, intégration Shopify, structuration du catalogue produits, production visuelle avec Adobe Firefly et accompagnement e-commerce",
        deliverables:
          "Boutique Shopify, personnalisation du thème, structure catalogue, fiches produits, navigation, parcours d'achat, visuels générés ou enrichis par IA et pages de contenus",
        stack:
          "Shopify, Liquid, HTML, CSS, JavaScript, Figma, ChatGPT, Codex, Adobe Firefly, optimisation d'images et UX/UI e-commerce",
        timeline:
          "Création d'une boutique e-commerce pour une marque vêtements & lifestyle",
        highlights: [
          "Univers visuel cohérent avec la marque",
          "Catalogue produits structuré",
          "Workflow IA intégré à la conception",
        ],
      },
      cta: {
        label: "Discuter d'un projet e-commerce",
        href: "/contact",
      },
      context:
        "MIMOSA souhaitait disposer d'une boutique Shopify capable de refléter son univers tout en offrant une expérience d'achat simple et rassurante. Le projet devait mettre en valeur les vêtements, organiser le catalogue produits et créer une direction artistique cohérente avec la marque.",
      objective:
        "Créer une boutique Shopify facile à administrer, capable de présenter les collections, d'améliorer la compréhension des produits et d'accompagner le visiteur jusqu'à l'achat avec une UX/UI claire.",
      approach:
        "Le travail a porté sur la hiérarchisation des contenus, la personnalisation de l'interface Shopify, l'optimisation des visuels produits, l'organisation du catalogue et la création d'un parcours utilisateur fluide. Figma a servi à cadrer l'UX/UI, tandis que ChatGPT, Codex et Adobe Firefly ont été intégrés dans un workflow IA pour explorer les directions visuelles, accélérer certains contenus et faciliter l'intégration.",
      decisions:
        "Prioriser une navigation courte, travailler les fiches produits comme des pages de décision, harmoniser les visuels, clarifier le catalogue et donner à la boutique un univers identifiable sans alourdir l'expérience d'achat.",
      technologies:
        "Shopify, Liquid, HTML, CSS, JavaScript, Figma, ChatGPT, Codex, Adobe Firefly et optimisation d'images.",
      result:
        "Une boutique Shopify cohérente avec l'identité de la marque, simple à administrer et pensée pour valoriser les produits sur mobile comme sur desktop.",
      retrospective:
        "Le projet montre l'intérêt d'un workflow IA dans une mission e-commerce : l'IA accélère la recherche visuelle et éditoriale, mais la cohérence vient toujours des arbitrages de direction artistique, d'UX/UI et de catalogue.",
      outcome:
        "Une boutique en ligne cohérente avec l'identité de la marque, pensée pour valoriser les produits, faciliter la gestion quotidienne du catalogue et offrir une expérience d'achat claire sur ordinateur comme sur mobile. Le projet illustre aussi l'intégration d'outils IA dans un workflow de conception et de production orienté résultat.",
    },
  },
  {
    title: "Maison Alta",
    slug: "alta-website-demo",
    summary:
      "Expérience Astro pour une maison d'hôtes contemporaine, entre storytelling visuel, direction artistique, UX et parcours de réservation.",
    tags: [
      "Astro",
      "UX/UI",
      "Direction artistique",
      "Storytelling",
      "Intégration Front-End",
      "HTML",
      "SCSS",
      "Tourisme",
      "Figma",
      "ChatGPT",
      "Codex",
    ],
    meta: "02",
    thumbnailAlt:
      "Aperçu de l'expérience Astro Maison Alta avec storytelling, UX et direction artistique",
    websiteHref: "https://alta-website-demo.netlify.app/",
    websiteLabel: "Voir la démo",
    caseStudy: {
      overview: {
        role:
          "Direction artistique, conception UX/UI, intégration Astro, structure éditoriale et hiérarchisation du parcours de réservation",
        deliverables:
          "Page Astro complète, hero immersif, sections de chambres, galerie, FAQ, témoignages, contenus de réassurance et CTA de réservation",
        stack:
          "Astro, HTML, SCSS, composants, optimisation d'images, structure responsive, Figma, ChatGPT, Codex",
        timeline: "Démo éditoriale pour maison d'hôtes",
        highlights: [
          "Direction artistique orientée séjour",
          "UX de réservation lisible",
          "Intégration Astro responsive",
        ],
      },
      cta: {
        label: "Discuter d'un site d'hébergements",
        href: "/contact",
      },
      context:
        "Maison Alta imagine l'expérience numérique d'une maison d'hôtes nichée en bord de village. L'enjeu est de transmettre une atmosphère, clarifier l'offre et rassurer sur l'expérience avant même la prise de contact.",
      objective:
        "Composer une page Astro capable de soutenir une intention de séjour : montrer le lieu, détailler les chambres, mettre en avant les expériences à proximité et rendre les informations pratiques immédiatement lisibles.",
      approach:
        "Le travail s'est concentré sur un hero immersif, une direction artistique chaleureuse, une narration par blocs courts, des cartes de chambres et d'expériences, puis des sections de réassurance comme les avis, la FAQ et les informations pratiques.",
      decisions:
        "Construire la page comme une projection de séjour : image forte, lecture rapide des chambres, informations pratiques visibles, UX orientée décision et CTA de réservation répétés aux moments utiles.",
      technologies:
        "Astro, HTML, SCSS, composants responsive, optimisation d'images, Figma, ChatGPT et Codex.",
      result:
        "Une expérience Astro immersive qui sert de base éditoriale et technique pour des projets d'hébergement indépendants.",
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
      "Refonte WordPress pour clarifier la hiérarchie éditoriale, améliorer l'expérience de lecture et renforcer les bases SEO d'un site existant.",
    tags: [
      "Refonte",
      "WordPress",
      "Hiérarchie éditoriale",
      "Architecture de contenu",
      "SEO",
      "UX/UI",
      "SiteOrigin",
      "CSS",
      "Rédaction web",
      "Figma",
      "ChatGPT",
    ],
    meta: "03",
    thumbnailAlt: "Aperçu de la refonte WordPress Sens Dessus Dessous avec hiérarchie éditoriale et SEO",
    websiteHref: "https://sensdessusdessous.eu/",
    caseStudy: {
      overview: {
        role:
          "Refonte UX/UI, hiérarchie éditoriale, restructuration de contenus, rédaction web, amélioration SEO et adaptation sur thème WordPress existant",
        deliverables:
          "Pages modèles, contenus réécrits, structure d'activité, optimisation UX, ajustements graphiques, amélioration du parcours utilisateur et bases SEO",
        stack:
          "WordPress, thème existant, SiteOrigin Page Builder, CSS, architecture de contenu, SEO, Figma, ChatGPT",
        timeline: "Refonte et restructuration d'un site existant",
        highlights: [
          "Hiérarchie éditoriale retravaillée",
          "SEO et contenus clarifiés",
          "Adaptation sur une base WordPress existante",
        ],
      },
      cta: {
        label: "Parler d'une refonte",
        href: "/contact",
      },
      context:
        "Le site WordPress existait déjà mais nécessitait une hiérarchie éditoriale retravaillée, une présentation lisible des activités, des contenus plus cohérents et une expérience de navigation plus fluide.",
      objective:
        "Aider les visiteurs à comprendre rapidement les activités proposées, les niveaux, les publics concernés et les informations utiles avant contact ou réservation, tout en renforçant les bases SEO.",
      approach:
        "Le travail a porté sur la structure des pages, la réécriture de contenus, la création de gabarits réutilisables, la hiérarchie Hn, les repères SEO et l'amélioration progressive de l'ergonomie sur la base technique existante.",
      decisions:
        "Conserver la base WordPress existante, concentrer l'effort sur la hiérarchie des informations, créer des modèles de pages plus réguliers, améliorer la lisibilité et renforcer les contenus utiles avant toute refonte lourde.",
      technologies:
        "WordPress, SiteOrigin Page Builder, CSS, architecture de contenu, rédaction web, SEO, Figma et ChatGPT.",
      result:
        "Un site WordPress plus lisible, plus cohérent dans ses contenus, mieux structuré pour le SEO et plus facile à faire évoluer avec les outils déjà en place.",
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
      "Création d'une marque outdoor dans le Verdon : positionnement, offres, SEO, communication, acquisition et expérience client autour d'un écosystème WordPress.",
    tags: [
      "Création de marque",
      "Positionnement",
      "Offres",
      "WordPress",
      "ACF",
      "SEO",
      "Communication",
      "Acquisition client",
      "Expérience client",
      "UX/UI",
      "Rédaction web",
      "Figma",
      "ChatGPT",
    ],
    meta: "04",
    thumbnailAlt: "Aperçu de l'écosystème de marque ROCKSIDERS avec WordPress, SEO et acquisition client",
    websiteHref: "https://www.rocksiders.com/",
    caseStudy: {
      overview: {
        role:
          "Création de marque, positionnement, structuration des offres, direction éditoriale, UX/UI, développement WordPress, SEO, communication, acquisition et expérience client",
        deliverables:
          "Positionnement de marque, offres outdoor, site WordPress sur mesure, arborescence SEO, pages piliers, pages d'activités, contenus éditoriaux, supports imprimés, messages commerciaux et contenus de communication",
        stack:
          "WordPress, thème sur mesure, ACF, HTML, CSS, JavaScript, SEO, rédaction web, identité éditoriale, communication, Figma, ChatGPT",
        timeline:
          "Création, développement et exploitation d'un écosystème de marque outdoor dans le Verdon",
        highlights: [
          "Marque outdoor positionnée",
          "Offres structurées pour la réservation",
          "SEO, communication et acquisition reliés",
        ],
      },
      cta: {
        label: "Construire une présence de marque",
        href: "/contact",
      },
      context:
        "ROCKSIDERS est une marque outdoor dans le Verdon construite autour d'activités comme le canyoning, l'escalade et la découverte du territoire. Le projet ne consistait pas uniquement à créer un site WordPress, mais à poser un positionnement, une offre, une communication et une expérience client capables de générer de la confiance et des réservations.",
      objective:
        "Transformer une activité de terrain en marque identifiable, rassurante et commercialement exploitable. L'objectif était de clarifier les offres, d'aider les visiteurs à choisir une sortie adaptée à leur niveau, de créer une relation de confiance avant la réservation et d'améliorer l'acquisition organique grâce au SEO.",
      approach:
        "Le travail a commencé par le positionnement : ton de marque, promesse, structure des offres, arguments de confiance et informations utiles pour les clients. Le site WordPress a ensuite été conçu comme un support commercial et SEO, avec des pages d'activités détaillées, des contenus d'acquisition, des blocs de réassurance et une navigation pensée pour accompagner la décision.",
      decisions:
        "Structurer l'offre par activités et niveaux, créer des pages piliers SEO, renforcer les preuves de confiance, articuler contenus pratiques et récit d'expérience, puis aligner le site avec les supports imprimés, les messages commerciaux et les contenus de communication.",
      technologies:
        "WordPress, thème sur mesure, ACF, HTML, CSS, JavaScript, SEO, rédaction web, communication, supports imprimés, Figma et ChatGPT.",
      result:
        "Un écosystème de marque complet qui relie positionnement, offres, contenus, SEO, acquisition, relation client et expérience terrain.",
      retrospective:
        "ROCKSIDERS illustre le repositionnement de REKODE : le site WordPress n'est qu'une partie d'un dispositif plus large de marque, d'offre, de communication, d'acquisition et de confiance.",
      outcome:
        "ROCKSIDERS est devenu un écosystème de marque cohérent, capable de relier l'expérience terrain, la communication, le référencement naturel et la relation client. Le projet démontre une approche complète : création de marque, conception web, contenu, acquisition, pédagogie commerciale et cohérence entre le discours en ligne et l'expérience vécue sur le terrain.",
    },
  },
  {
    title: "La Fabrique de Moustiers",
    slug: "lafabrique-moustiers",
    summary:
      "Création d'un site WordPress pour un hébergement touristique, avec UX/UI, SEO local et cohérence avec une identité graphique existante.",
    tags: [
      "WordPress",
      "Elementor",
      "UX/UI",
      "SEO local",
      "Architecture de contenu",
      "Hébergement touristique",
      "Direction artistique",
      "CSS",
      "Tourisme",
      "Figma",
      "ChatGPT",
    ],
    meta: "05",
    thumbnailAlt: "Aperçu du site WordPress La Fabrique de Moustiers avec UX/UI et SEO local",
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
      "Produit numérique e-learning conçu autour de Next.js, de l'UX pédagogique, d'un design system et d'une architecture de contenu évolutive.",
    tags: [
      "Next.js",
      "TypeScript",
      "UX/UI",
      "UX pédagogique",
      "Design System",
      "Architecture de contenu",
      "E-learning",
      "Produit numérique",
      "Product design",
      "Tailwind",
      "Sass",
      "Figma",
      "ChatGPT",
      "Codex",
    ],
    meta: "06",
    thumbnailAlt: "Aperçu du produit numérique LearnIt avec UX pédagogique et design system",
    caseStudy: {
      overview: {
        role:
          "Direction produit, UX/UI, UX pédagogique, architecture de contenu, design system, structuration du hub de formation et intégration Front-End",
        deliverables:
          "Landing page, hub de formations, fiche programme exemple, composants de progression, filtres catalogue, ressources pédagogiques, maquettes UI et premiers repères de design system",
        stack:
          "Next.js, TypeScript, Tailwind, Sass, design system, architecture de contenu, contenus pédagogiques, Figma, ChatGPT, Codex",
        timeline: "Prototype e-learning en cours de développement",
        highlights: [
          "Produit numérique structuré",
          "UX pédagogique et parcours de formation",
          "Design system initial",
        ],
      },
      cta: {
        label: "Échanger sur un produit de formation",
        href: "/contact",
      },
      context:
        "LearnIt est un produit numérique e-learning en cours de construction porté par REKODE. La maquette actuelle pose les bases d'une plateforme capable d'accueillir plusieurs domaines de formation ; le parcours création web y sert aujourd'hui d'exemple.",
      objective:
        "Donner une forme lisible à une première vision produit : présenter la promesse, structurer un hub, détailler un parcours type, poser une UX pédagogique et préparer une architecture de contenu extensible avant le développement complet.",
      approach:
        "Le travail s'est concentré sur une maquette de démonstration construite comme un produit : hero, indicateurs de progression, hub de formations, fiche programme exemple, premiers liens vers d'autres domaines et composants réutilisables.",
      decisions:
        "Penser l'interface comme un produit évolutif plutôt qu'une simple page de présentation : hub, cartes de parcours, progression, fiche programme, catégories, architecture de contenu et base de design system.",
      technologies:
        "Next.js, TypeScript, Tailwind, Sass, design system, Figma, ChatGPT et Codex.",
      result:
        "Une base de produit numérique e-learning modulaire, prête à accueillir de nouveaux domaines, parcours et écrans.",
      retrospective:
        "LearnIt confirme l'intérêt de travailler très tôt l'architecture de contenu, l'UX pédagogique et les composants de design system, même avant que toutes les fonctionnalités produit soient finalisées.",
      outcome:
        "Une base de démonstration pour un projet e-learning encore en développement, pensée pour accueillir d'autres formations, domaines et écrans à mesure que l'interface se construit.",
    },
  },
];

export const services: ServiceItem[] = [
  {
    title: "Audit & stratégie digitale",
    icon: "document",
    description: "Clarifier les objectifs, les publics, les contenus et les parcours avant une création de site professionnel, une refonte de site ou une évolution de votre présence numérique.",
  },
  {
    title: "Création & refonte de site professionnel",
    icon: "monitor",
    description: "Concevoir un site clair et durable, depuis l'architecture de contenu et l'UX/UI jusqu'à l'intégration Front-End, WordPress, Astro ou la mise en ligne.",
  },
  {
    title: "Shopify & expérience d'achat",
    icon: "shopping",
    description:
      "Structurer une boutique Shopify autour du catalogue produits, des fiches articles, du récit de marque, de l'UX/UI et d'un parcours d'achat lisible sur desktop comme sur mobile.",
  },  
  {
    title: "Accompagnement stratégique",
    icon: "ear",
    description: "Avancer avec méthode sur un sujet précis : refonte, contenus, UX/UI, WordPress, Shopify, SEO, IA générative, architecture de contenu ou arbitrage technique.",
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
    description: "Transformer la stratégie en interface : UX/UI, direction artistique, intégration Front-End, CMS et expérience responsive.",
    icon: "pen",
  },
  {
    title: "Accompagner",
    description: "Préparer la mise en ligne, transmettre les repères utiles et aider le projet à évoluer après livraison.",
    icon: "cap",
  },
];

export const homeProcessSteps: ProcessStep[] = [
  {
    title: "Clarifier",
    description: "Mettre au point l'offre, les publics et ce que le site doit permettre de comprendre.",
    icon: "spark",
  },
  {
    title: "Structurer",
    description: "Organiser les pages et les repères pour aider à choisir, prendre contact ou acheter.",
    icon: "document",
  },
  {
    title: "Concevoir",
    description: "Créer une interface responsive et une base technique adaptée à l'usage réel, facile à maintenir.",
    icon: "pen",
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
    ctaLabel: "Découvrir le parcours",
    ctaHref: "#parcours",
    portraitAlt: "Portrait du concepteur REKODE, studio de conception web et expériences numériques",
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
      "Cette double culture alimente aujourd'hui mon travail : partir du réel, clarifier ce qui doit être compris, puis choisir les outils adaptés, qu'il s'agisse de WordPress, Shopify, Astro, intégration Front-End ou IA générative.",
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
    title: "Ce que le terrain change dans ma pratique.",
    intro:
      "Les expériences de terrain, de relation client et de transmission orientent ma façon de travailler : partir des situations réelles, faire des choix compréhensibles et laisser des outils utilisables.",
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
        title: "Écouter avant de proposer",
        text: "Comprendre l'activité, les personnes concernées, les contraintes et les questions qui reviennent vraiment.",
      },
      {
        title: "Faire des choix utilisables",
        text: "Hiérarchiser l'information pour aider à choisir, rassurer et faciliter la prise de contact ou l'achat.",
      },
      {
        title: "Transmettre une base autonome",
        text: "Adapter la technique à l'usage réel et livrer un site que l'on peut comprendre, maintenir et faire évoluer.",
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
    note: "Cet espace d'essai complète la méthode de projet sans la recopier : il sert à éprouver une piste avant de la retenir.",
    steps: [
      {
        title: "Observer",
        text: "Prendre le temps de regarder le contexte, les usages, les contraintes et les détails.",
      },
      {
        title: "Essayer",
        text: "Mettre une idée en forme, la confronter au contenu et vérifier si elle aide réellement à comprendre.",
      },
      {
        title: "Ajuster",
        text: "Garder ce qui fonctionne, retirer le reste et documenter la décision pour pouvoir avancer.",
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
      "La curiosité pour les outils, de l'intégration Front-End aux CMS en passant par les usages de l'IA générative dans la conception.",
    ],
  },
};

export const contactContent: ContactContent = {
  title: "Un projet à clarifier ? Discutons-en.",
  intro:
    "Une idée, une refonte, une boutique, un contenu ou une expérience numérique à structurer ? Écrivez-moi, je vous réponds rapidement.",
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
    label: "Conception & contenus",
    slug: "conception-contenus",
    summary: "Lisibilité des pages, architecture éditoriale, UX et décisions d'interface.",
  },
  {
    label: "Projets & arbitrages",
    slug: "projets-arbitrages",
    summary: "Retours sur les problèmes rencontrés, les options écartées et les choix retenus.",
  },
  {
    label: "Outils & maintenance",
    slug: "outils-maintenance",
    summary: "WordPress, Shopify, Astro et pratiques qui rendent un site fiable et maintenable.",
  },
  {
    label: "IA & pratiques de production",
    slug: "ia-production",
    summary: "Usages situés de l'IA pour rechercher, prototyper, produire et contrôler le résultat.",
  },
];

export const selectedProjectsContent: SectionIntroContent = {
  title: "Études de cas",
  intro:
    "Des projets où la stratégie, les contenus, l'interface et la technique travaillent ensemble pour rendre une activité plus claire, plus crédible et plus actionnable.",
};

export const servicesContent: SectionIntroContent = {
  title: "Services",
  intro: "Des formats d'accompagnement pour clarifier une stratégie, concevoir une expérience numérique, structurer des contenus et mettre en ligne un site professionnel fiable.",
};

export const processContent: SectionIntroContent = {
  title: "Méthode",
  intro:
    "Cinq étapes pour passer d'une idée, d'une recherche de visibilité, d'une offre à promouvoir vers une expérience numérique structurée, utile et durable.",
};
