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
  eyebrow: 'Développeur fullstack — React, Node.js, Python',
  title: 'Hicham - Fullstack Developer (Data & Automation)',
  description:
    'React / Next.js / Node.js / Python / Data pipelines / Microservices. Développement d\'applications web, de pipelines de données et de systèmes backend scalables.',
  primaryAction: { label: 'Voir les projets', href: '#production' },
  secondaryAction: { label: 'Me contacter', href: '#contact' },
  metrics: [
    {
      label: 'Frontend',
      value: 'React / Next.js / TypeScript',
      detail: 'Interfaces maintenables, composants réutilisables et intégration Tailwind.',
    },
    {
      label: 'Backend',
      value: 'Node.js / Microservices / Docker',
      detail: 'APIs TypeScript structurées et architecture orientée services.',
    },
    {
      label: 'Data',
      value: 'Python / Spark / Airflow',
      detail: 'Pipelines de données, ingestion et visualisation de KPIs.',
    },
  ],
} as const;

export const positioningContent = {
  eyebrow: 'Positionnement',
  title: 'Approche technique',
  intro:
    'Profil fullstack avec une spécialisation data et automatisation. Objectif : concevoir des architectures lisibles reliant ingestion de données, backend et interface utilisateur.',
  blocks: [
    {
      label: 'API',
      description: 'Intégration de sources externes et exposition d\'APIs propres pour les applications frontend et les flux data.',
    },
    {
      label: 'Backend',
      description: 'Services Node.js / TypeScript structurés, logique métier claire et conteneurisation Docker.',
    },
    {
      label: 'Data pipelines',
      description: 'Flux Python / Spark / HDFS pour ingestion, transformation et restitution orientée usages.',
    },
    {
      label: 'UI',
      description: 'Interfaces React / Next.js lisibles, composants réutilisables et cohérence Tailwind.',
    },
  ],
} as const;

export const architectureNodes = ['Données', 'API ingestion', 'Backend', 'Stockage', 'Interface'] as const;

export const skillGroups = [
  {
    title: 'Frontend',
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Backend',
    stack: ['Node.js', 'Python', 'Microservices', 'Docker'],
  },
  {
    title: 'Data & Storage',
    stack: ['Spark', 'Airflow', 'MongoDB', 'MariaDB / MySQL'],
  },
] as const;

export const complementarySkills = {
  frontend: ['HTML', 'CSS', 'JavaScript'],
  backend: ['PHP', 'Express.js'],
  databases: ['MySQL'],
  tools: ['Git', 'Linux'],
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
