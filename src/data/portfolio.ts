export type ExperienceItem = {
  org: string;
  role: string;
  period: string;
  summary: string;
  stack?: string[];
};

export type EducationItem = {
  school: string;
  program: string;
  period: string;
};

export const navSections = [
  { id: 'hero', label: 'Intro', href: '#hero' },
  { id: 'positioning', label: 'Positionnement', href: '#positioning' },
  { id: 'architecture', label: 'Architecture', href: '#architecture' },
  { id: 'production', label: 'Projets réalisés', href: '#production' },
  { id: 'skills', label: 'Compétences', href: '#skills' },
  { id: 'experience', label: 'Parcours', href: '#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const;

export const heroContent = {
  eyebrow: 'Développeur fullstack & mobile — produits publiés',
  title: 'Hicham — Fullstack & Mobile Developer',
  description:
    'Je conçois des applications de bout en bout : iOS natif, web et cloud. Reply Fitness, mon app de suivi fitness avec export IA, est disponible sur l’App Store.',
  primaryAction: { label: 'Voir les projets', href: '#production' },
  secondaryAction: { label: 'Me contacter', href: '#contact' },
  metrics: [
    {
      label: 'Mobile',
      value: 'SwiftUI / Swift 6 / iOS',
      detail: 'Apps natives, SwiftData, publication App Store.',
    },
    {
      label: 'Web',
      value: 'React / Next.js / TypeScript',
      detail: 'Interfaces maintenables et expériences produit soignées.',
    },
    {
      label: 'Cloud & Data',
      value: 'Firebase / Node.js / Python',
      detail: 'Auth, sync cloud, APIs et pipelines de données.',
    },
  ],
} as const;

export const positioningContent = {
  eyebrow: 'Positionnement',
  title: 'Approche produit',
  intro:
    'Profil orienté produit : livrer des applications utilisables, de l’interface au cloud. Spécialisation mobile iOS, avec un socle fullstack web et data.',
  blocks: [
    {
      label: 'Produit',
      description:
        'De l’idée à la mise en production : parcours utilisateur, rétention, conformité (RGPD) et publication store.',
    },
    {
      label: 'Mobile',
      description:
        'Applications iOS en SwiftUI / Swift 6, persistance locale (SwiftData) et sync cloud pour une expérience fluide hors ligne.',
    },
    {
      label: 'Cloud',
      description:
        'Firebase Auth, Firestore et backends structurés pour authentifier, synchroniser et sécuriser les données utilisateur.',
    },
    {
      label: 'Web & Data',
      description:
        'Interfaces React / Next.js et pipelines Python pour exposer, analyser et automatiser les flux de données.',
    },
  ],
} as const;

export const architectureNodes = [
  'Client (iOS / Web)',
  'Auth',
  'Cloud / API',
  'Données',
  'Export / IA',
] as const;

export const skillGroups = [
  {
    title: 'Mobile',
    stack: ['SwiftUI', 'Swift 6', 'SwiftData', 'iOS / Xcode'],
  },
  {
    title: 'Web',
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Cloud & Backend',
    stack: ['Firebase', 'Node.js', 'Python', 'Docker'],
  },
] as const;

export const complementarySkills = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'Angular'],
  backend: ['PHP', 'Express.js', 'Microservices'],
  databases: ['Firestore', 'MongoDB', 'MariaDB / MySQL'],
  tools: ['Git', 'Linux', 'Spark', 'Airflow', 'Power BI'],
} as const;

export type ProductionProject = {
  title: string;
  description: string;
  work: string[];
  url: string;
  /** Store / statut public (ex. App Store). */
  badge?: string;
  tagline?: string;
  iconSrc?: string;
  imageSrc?: string;
  ctaLabel?: string;
  repoStatus?: string;
};

export const productionContent = {
  title: 'Projets réalisés',
  description:
    'Produits publiés et projets open source — applications en production ou disponibles sur GitHub.',
} as const;

export const productionProjects: ProductionProject[] = [
  {
    title: 'Reply Fitness',
    tagline: 'Votre contexte fitness, enfin réuni au même endroit',
    description:
      'Carnet de suivi intelligent iOS : nutrition, entraînement, progression et export de contexte structuré vers l’IA de votre choix. Disponible gratuitement sur l’App Store.',
    work: [
      'SwiftUI / Swift 6 / SwiftData',
      'Firebase Auth + Cloud Firestore',
      'Export IA (Markdown / JSON) · RGPD',
      'Publié App Store (V1.0)',
    ],
    url: 'https://apps.apple.com/fr/app/reply-fitness/id6785667481',
    badge: 'App Store',
    ctaLabel: 'Voir sur l’App Store',
    imageSrc: '/projects/reply-fitness/promo.png',
  },
  {
    title: 'OSINTGraph',
    tagline: 'Plateforme desktop d’intelligence relationnelle OSINT',
    description:
      'Application desktop d’investigation OSINT inspirée de Maltego : dossiers, carnets, graphe relationnel, provenance des faits et plugins de transforms (Shodan, Sherlock…).',
    work: [
      'Electron + React 18 + TypeScript + Cytoscape.js',
      'FastAPI + Python 3.11 + SQLite + Socket.IO',
      'Architecture plugins dynamiques & registres d’entités',
      'Open source sur GitHub',
    ],
    url: 'https://github.com/Hicham77500/OSINTGraph',
    badge: 'Open Source',
    ctaLabel: 'Voir sur GitHub',
    imageSrc: '/projects/osintgraph/promo.png',
    repoStatus:
      'Pas en production — disponible en open source sur mon profil GitHub.',
  },
];

export const experience: ExperienceItem[] = [
  {
    org: 'SN SociaNova',
    role: 'Développeur Fullstack (alternance)',
    period: '2025 -> aujourd\'hui',
    summary: 'Maintenance et évolution d\'un logiciel médico-social.',
    stack: ['PHP', 'Angular', 'JavaScript'],
  },
  {
    org: 'Indépendant',
    role: 'Développeur produit — Reply Fitness',
    period: '2026',
    summary:
      'Conception, développement et publication d’une app iOS de suivi fitness avec sync cloud et export de contexte pour IA externe.',
    stack: ['SwiftUI', 'Firebase', 'SwiftData'],
  },
  {
    org: 'Medissimo',
    role: 'Revenue Operations',
    period: '2024',
    summary: 'Suivi data des ventes en pharmacies et automatisation Salesforce, HubSpot, Power BI.',
    stack: ['Salesforce', 'HubSpot', 'Power BI'],
  },
  {
    org: 'Armée de Terre',
    role: "Caporal-chef d\'équipe",
    period: '2017 -> 2021',
    summary: 'Gestion d\'équipe et prise de décision en environnement exigeant.',
  },
];

export const education: EducationItem[] = [
  {
    school: 'IPSSI',
    program: 'Mastère Big Data & IA',
    period: '2024 -> 2026',
  },
  {
    school: 'AFPA',
    program: 'Concepteur Développeur d\'Applications',
    period: '2022 -> 2023',
  },
  {
    school: 'AFPA',
    program: 'Développeur Web & Web Mobile',
    period: '2021 -> 2022',
  },
];

export const contactLinks = {
  github: 'https://github.com/Hicham77500',
  linkedin: 'https://www.linkedin.com/in/hicham-guendouz-578759125/',
};
