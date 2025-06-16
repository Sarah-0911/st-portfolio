import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/Sarah-0911',
  linkedin: 'https://www.linkedin.com/in/sarah-tabet-',
  mail: 'mailto:sarah.tabet69@gmail.com',
  // discord: 'https://discordapp.com/users/163300027618295808',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Projects
export const PROJECTS = [
  {
    heading: 'Wonderlive',
    subheading: 'Développement front-end d\'une application mobile pour un réseau social basé sur la blockchain.',
    description: 'Application mobile permettant aux utilisateurs de partager du contenu et d\'interagir sur un réseau social sécurisé, grâce à l\'intégration de la blockchain. Le projet est actuellement en phase de bêta-test.',
    images: [
      "/images/projects/wl_main.png",
      "/images/projects/wl_thumbnail_1.png",
      "/images/projects/wl_thumbnail_2.png",
    ],
    altText: 'Aperçu de l\'application Wonderlive',
    technologies: [
      "React Native",
      "Expo",
      "TypeScript"
    ],
    features: [
      "Intégration de modales dynamiques",
      "Onboarding complet du service marketplace",
      "Éditeur photo avec filtres et rognage",
      "Messagerie intégrée avec chat par conversation",
      "Architecture front propre et conforme à la maquette Figma"
    ],
    href: 'https://wonderlive.io/',
  },
  {
    heading: 'Otour2',
    subheading: 'Refonte front-end complète d\'un site e-commerce avec Tailwind CSS.',
    description: 'Site e-commerce permettant de commander des emballages alimentaires personnalisés. L\'interface a été repensée pour une navigation plus moderne et intuitive.',
    images: [
      "/images/projects/otour2_main.png",
      "/images/sad_cat.jpg",
      "/images/sad_cat.jpg",
    ],
    altText: 'Aperçu du site Otour2',
    technologies: [
      "Tailwind CSS",
      "JavaScript",
      "Figma"
    ],
    features: [
      "Reprise complète du front avec Tailwind CSS",
      "Intégration pixel-perfect à partir d'une maquette Figma",
      "Carrousels et slides dynamiques en JavaScript",
      "Refonte responsive à partir d'un site existant"
    ],
    href: 'https://www.otour2.com/',
  },
  {
    heading: 'Empowered Geeky Girl',
    subheading: 'Conception et réalisation d\'un site/blog WordPress pour une coach indépendante.',
    description: 'Site WordPress conçu pour mettre en valeur l\'activité d\'une coach indépendante à travers un blog professionnel.',
    images: [
      "/images/sad_cat.jpg",
      "/images/sad_cat.jpg",
      "/images/sad_cat.jpg",
    ],
    altText: 'Aperçu du site Empowered Geeky Girl',
    technologies: [
      "Figma",
      "WordPress",
      "CSS",
    ],
    features: [
      "Conception de maquettes et prototypes sur Figma",
      "Intégration WordPress (thème personnalisé)",
      "Optimisation SEO",
      "Architecture éditoriale du site",
      "Adaptation du site aux besoins spécifiques du client",
    ],
  },
  {
    heading: 'Hyteka',
    subheading: 'Webdesign, création de logo et design system pour une boutique en ligne.',
    description: 'Création de l\'identité visuelle d\'une boutique en ligne, assurant une expérience utilisateur cohérente et attractive.',
    images: [
      "/images/sad_cat.jpg",
      "/images/sad_cat.jpg",
      "/images/sad_cat.jpg",
    ],
    altText: 'Aperçu du site Hyteka',
    technologies: [
      "Figma",
      "Adobe Illustrator",
      "DevTools",
    ],
    features: [
      "Création du logo et de l\'identité visuelle",
      "Élaboration d\'un design system cohérent",
      "Choix des polices et palette de couleurs",
      "Optimisation de l\'expérience utilisateur",
    ],
    href: 'https://hyteka.com/',
  },
  {
    heading: 'Portfolio V1',
    subheading: 'Astro, Tailwind',
    description: 'Un portfolio construit avec Astro et Tailwind CSS.',
    images: [
      "/images/sad_cat.jpg",
      "/images/sad_cat.jpg",
      "/images/sad_cat.jpg",
    ],
    altText: 'Aperçu du portfolio V1',
    technologies: [
      "React Native",
      "Expo",
    ],
    features: [
      "Design responsive",
      "Mode sombre",
      "Animations personnalisées",
    ],
    // href: 'https://www.otour2.com/',
  },
];
