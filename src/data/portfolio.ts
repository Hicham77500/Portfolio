export type CaseStudy = {
  title: string;
  context: string;
  architecture: string[];
  stack: string[];
  demonstrates: string;
  repoUrl?: string;
};

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
  { id: 'projects', label: 'Projets', href: '#projects' },
  { id: 'production', label: 'Production', href: '#production' },
  { id: 'skills', label: 'Compétences', href: '#skills' },
  { id: 'experience', label: 'Parcours', href: '#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const;

export const heroContent = {
  eyebrow: 'Développeur full stack - React, Node.js, Python',
  title: 'Hicham - Fullstack Developer (Data & Automation)',
  description:
    'React / Next.js / Node.js / Python / Data pipelines / Microservices. Développement d\'applications web, de pipelines de données et de systèmes backend scalables.',
  primaryAction: { label: 'Voir les projets', href: '#projects' },
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
    'Profil full stack avec une spécialisation data et automatisation. Objectif : concevoir des architectures lisibles reliant ingestion de données, backend et interface utilisateur.',
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

export const caseStudies: CaseStudy[] = [
  {
    title: 'Big Data Pipeline - Binance Market Data',
    context: 'Pipeline de traitement de données crypto conçu pour analyser les marchés en quasi temps réel.',
    architecture: [
      'Ingestion des données via l\'API Binance',
      'Stockage distribué sur HDFS',
      'Traitements Apache Spark (agrégats prix / volume)',
      'Stockage des résultats dans MongoDB',
      'Visualisation des KPIs dans Power BI',
    ],
    stack: ['Python', 'Apache Spark', 'HDFS', 'MongoDB', 'Power BI'],
    demonstrates: 'Conception d\'un pipeline data complet : ingestion, traitement et restitution de KPIs.',
    repoUrl: 'https://github.com/Hicham77500/binance',
  },
  {
    title: 'Delivery Services - Microservices Backend',
    context: 'Architecture backend d\'une plateforme de livraison construite en microservices.',
    architecture: [
      'Domain Driven Design (DDD)',
      'Test Driven Development (TDD)',
      'Architecture orientée services',
      'Cluster MariaDB Galera pour la haute disponibilité',
      'Conteneurisation Docker',
      'API Node.js / TypeScript',
    ],
    stack: ['Node.js', 'TypeScript', 'MariaDB Galera', 'Docker'],
    demonstrates: 'Conception d\'un backend microservices structuré, testé et conteneurisé.',
    repoUrl: 'https://github.com/Hicham77500/delivery-services',
  },
  {
    title: 'Dashboard NASA',
    context: 'Dashboard de visualisation de données spatiales via l\'API NASA.',
    architecture: [
      'Collecte des données via NASA API',
      'Backend Flask pour normaliser les flux',
      'Stockage dans MongoDB',
      'Interface de visualisation des données',
    ],
    stack: ['Python', 'Flask', 'MongoDB', 'NASA API'],
    demonstrates: 'Intégration API externe et transformation des données en interface exploitable.',
    repoUrl: 'https://github.com/Hicham77500/Dashboard_Nasa',
  },
  {
    title: 'BerserkerCut',
    context: 'Application mobile construite avec React Native et Expo.',
    architecture: [
      'Client mobile React Native (Expo)',
      'Backend Node.js pour la logique applicative',
      'Stockage des données avec MongoDB',
      'Synchronisation app et API',
    ],
    stack: ['React Native', 'Expo', 'Node.js', 'MongoDB'],
    demonstrates: 'Développement d\'une application mobile connectée à un backend.',
    repoUrl: 'https://github.com/Hicham77500/BerserkerCut',
  },
];

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
  frontend: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
  backend: ['PHP', 'Express.js'],
  databases: ['MySQL', 'MongoDB', 'MariaDB'],
  tools: ['Git', 'Docker', 'Linux'],
} as const;

export type ProductionProject = {
  title: string;
  description: string;
  work: string[];
  url: string;
  repoStatus?: string;
};

export const productionProjects: ProductionProject[] = [
  {
    title: 'Ciseauxdor',
    description: 'Maintenance et évolution d\'un site web en production.',
    work: ['Optimisation SEO', 'Amélioration des performances', 'Nouvelles fonctionnalités'],
    url: 'https://ciseauxdor.ovh/',
    repoStatus: 'Repository privé (non public)',
  },
  {
    title: 'Chellois-es 2026',
    description: 'Refonte et maintenance d\'un site web sous Next.js.',
    work: [
      'Développement React / Next.js',
      'Intégration Tailwind',
      'Optimisation UX/UI',
      'Accessibilité',
    ],
    url: 'https://chellois-es2026.fr/',
    repoStatus: 'Repository privé (non public)',
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
