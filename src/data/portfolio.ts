export type CaseStudy = {
  title: string;
  context: string;
  architecture: string[];
  stack: string[];
  demonstrates: string;
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
  { id: 'hero', label: 'Hero', href: '#hero', hint: 'Intro' },
  { id: 'positioning', label: 'Positionnement', href: '#positioning', hint: 'Approche' },
  { id: 'architecture', label: 'Architecture', href: '#architecture', hint: 'Systeme' },
  { id: 'projects', label: 'Projets', href: '#projects', hint: 'Cases' },
  { id: 'skills', label: 'Competences', href: '#skills', hint: 'Stack' },
  { id: 'experience', label: 'Experience', href: '#experience', hint: 'Parcours' },
  { id: 'education', label: 'Formation', href: '#education', hint: 'Etudes' },
  { id: 'contact', label: 'Contact', href: '#contact', hint: 'CTA' },
] as const;

export const heroContent = {
  eyebrow: 'Fullstack data / IA',
  title: 'Guendouz Hicham',
  description:
    'Developpeur fullstack oriente data et IA. Je construis des applications web et des systemes data de bout en bout: interface, API, backend, stockage et visualisation.',
  primaryAction: { label: 'Voir les projets', href: '#projects' },
  secondaryAction: { label: 'Me contacter', href: '#contact' },
  metrics: [
    { label: 'Frontend', value: 'React / Next.js', detail: 'Interfaces et design system Tailwind' },
    { label: 'Backend', value: 'Node.js / TypeScript', detail: 'APIs Express, Docker, bases SQL/NoSQL' },
    { label: 'Data', value: 'Python / Spark / HDFS', detail: 'Pipelines data et visualisation Power BI' },
  ],
} as const;

export const positioningContent = {
  eyebrow: 'Positionnement',
  title: 'Approche technique',
  intro:
    'Profil fullstack avec specialisation data et IA. Objectif: concevoir des architectures lisibles qui relient ingestion, traitement backend et interface utilisateur.',
  blocks: [
    {
      label: 'API',
      description: 'Integration de sources externes et exposition d endpoints propres pour le frontend et la data.',
    },
    {
      label: 'Backend',
      description: 'Services Node.js/TypeScript structures, logique metier claire, conteneurisation Docker.',
    },
    {
      label: 'Data pipelines',
      description: 'Flux Python/Spark/HDFS pour ingestion, transformation et restitution orientee usage.',
    },
    {
      label: 'UI',
      description: 'Interfaces React/Next.js lisibles, components reutilisables, accessibilite et coherence Tailwind.',
    },
  ],
} as const;

export const architectureNodes = ['Donnees', 'API ingestion', 'Backend', 'Stockage', 'Interface'] as const;

export const caseStudies: CaseStudy[] = [
  {
    title: 'Pipeline Big Data Binance',
    context: 'Pipeline de traitement de donnees de marche avec ingestion, transformation et visualisation.',
    architecture: [
      'Ingestion des donnees via Python',
      'Traitement distribue avec Spark',
      'Stockage sur HDFS et MongoDB',
      'Visualisation des resultats dans Power BI',
    ],
    stack: ['Python', 'Spark', 'HDFS', 'MongoDB', 'Power BI'],
    demonstrates: 'Construction d un pipeline data complet de l ingestion a la restitution.',
  },
  {
    title: 'Dashboard NASA',
    context: 'Dashboard de visualisation de donnees spatiales via l API NASA.',
    architecture: [
      'Collecte des donnees depuis NASA API',
      'Backend Flask pour normaliser et servir les flux',
      'Stockage des donnees dans MongoDB',
      'Interface dashboard pour consultation des donnees',
    ],
    stack: ['Python', 'Flask', 'MongoDB', 'NASA API'],
    demonstrates: 'Integration API externe et transformation des donnees en interface exploitable.',
  },
  {
    title: 'Delivery Services',
    context: 'Plateforme backend orientee services avec observabilite.',
    architecture: [
      'API backend Node.js/Express en TypeScript',
      'Base de donnees MariaDB Galera',
      'Conteneurisation Docker',
      'Monitoring avec Prometheus et Grafana',
    ],
    stack: ['Node.js', 'TypeScript', 'Express', 'MariaDB Galera', 'Docker', 'Prometheus', 'Grafana'],
    demonstrates: 'Conception d un backend structure et exploitable avec monitoring.',
  },
  {
    title: 'BerserkerCut',
    context: 'Application mobile construite avec React Native et Expo.',
    architecture: [
      'Client mobile React Native (Expo)',
      'Backend Node.js pour la logique applicative',
      'Stockage des donnees avec MongoDB',
      'Synchronisation app et API',
    ],
    stack: ['React Native', 'Expo', 'Node.js', 'MongoDB'],
    demonstrates: 'Mise en place d un systeme mobile connecte a un backend.',
  },
  {
    title: 'Chelloises 2026',
    context: 'Projet web Next.js axe accessibilite et design system Tailwind.',
    architecture: [
      'Application Next.js/React',
      'Components reutilisables via design system Tailwind',
      'Structure orientee accessibilite',
      'Pages optimiseses pour une lecture claire du contenu',
    ],
    stack: ['Next.js', 'React', 'Accessibilite', 'Design system Tailwind'],
    demonstrates: 'Capacite a produire un frontend structure, lisible et maintenable.',
  },
  {
    title: "Ciseaux d'Or",
    context: 'Application React/Vite avec interface Tailwind.',
    architecture: [
      'Frontend React avec Vite',
      'Composants UI structures avec Tailwind',
      'Organisation du contenu orientee consultation',
      'Deploiement web simple',
    ],
    stack: ['React', 'Vite', 'Tailwind'],
    demonstrates: 'Implementation rapide d une interface web claire et responsive.',
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    stack: ['React', 'Next.js', 'Tailwind', 'TypeScript'],
  },
  {
    title: 'Backend',
    stack: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'Docker'],
  },
  {
    title: 'Data',
    stack: ['Python', 'Spark', 'HDFS', 'Power BI', 'API ingestion'],
  },
] as const;

export const experience: ExperienceItem[] = [
  {
    org: 'SN SociaNova',
    role: 'Developpeur Fullstack (alternance)',
    period: '2025 -> aujourd hui',
    summary: 'Maintenance et evolution d un logiciel medico-social.',
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
    org: 'Armee de Terre',
    role: "Caporal chef d equipe",
    period: '2017 -> 2021',
    summary: 'Gestion d equipe et prise de decision en environnement exigeant.',
  },
];

export const education: EducationItem[] = [
  {
    school: 'IPSSI',
    program: 'Mastere Big Data & IA',
    period: '2024 -> 2026',
  },
  {
    school: 'AFPA',
    program: 'Concepteur Developpeur d Applications',
    period: '2022 -> 2023',
  },
  {
    school: 'AFPA',
    program: 'Developpeur Web & Web Mobile',
    period: '2021 -> 2022',
  },
];

export const contactLinks = {
  github: 'https://github.com/Hicham77500',
  linkedin: 'https://www.linkedin.com/in/hicham-guendouz-578759125/',
};
