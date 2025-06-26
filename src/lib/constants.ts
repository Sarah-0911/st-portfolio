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
}

// Global
export const SITE: Site = {
  TITLE: 'Sarah Tabet - Portfolio',
  DESCRIPTION: 'Portfolio de Sarah Tabet, développeuse front-end créative et passionnée.',
  AUTHOR: 'Sarah Tabet'
}

// Projects
export const PROJECTS = [
  {
    heading: 'Wonderlive',
    subheading: 'Développement front-end d\'une application mobile pour un réseau social basé sur la blockchain.',
    description: 'Application mobile permettant aux utilisateurs de partager du contenu et d\'interagir sur un réseau social sécurisé, grâce à l\'intégration de la blockchain. Le projet est actuellement en phase de bêta-test.',
    images: [
      "/images/projects/wl-1.png",
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
      "/images/projects/otour2-1.png",
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
      "/images/projects/egg-1.png",
      "/images/projects/egg-2.png",
      "/images/projects/egg-3.png",
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
      "/images/projects/htk-1.png",
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
      "Création du logo et de l'identité visuelle",
      "Élaboration d'un design system cohérent",
      "Choix des polices et palette de couleurs",
      "Optimisation de l'expérience utilisateur",
    ],
    href: 'https://hyteka.com/',
  },
  {
    heading: "Boxy Generator",
    subheading: "Générateur d'ombres CSS personnalisées avec React et Redux.",
    description: "Outil simple et intuitif pour créer des ombres CSS avec paramètres ajustables, pour des designs personnalisés.",
    images: [
      "/images/projects/boxy.png",
    ],
    altText: "Aperçu du projet Boxy Generator",
    technologies: ["React", "Redux", "Tailwind CSS", "Vite"],
    features: [
      "Interface intuitive pour modifier ombres et box",
      "Ajout/suppression dynamique d'ombres",
      "Gestion avancée des états avec Redux",
      "Export rapide du code CSS généré"
    ],
    href: "https://boxy-generator-sigma.vercel.app/",
    category: "perso",
  },
  {
    heading: "Ravenous",
    subheading: "Site de recherche et filtrage de restaurants avec React et l'API Yelp.",
    description: "Application web permettant aux utilisateurs de trouver des restaurants selon leur localisation et leurs préférences culinaires, avec filtrage dynamique et intégration complète de l'API Yelp.",
    images: [
      "/images/projects/ravenous.png",
    ],
    altText: "Aperçu du projet Ravenous",
    technologies: ["React", "CSS", "Yelp API"],
    features: [
      "Recherche de restaurants par lieu et type de cuisine",
      "Filtrage dynamique des résultats en temps réel",
      "Intégration complète de l'API Yelp",
      "Interface utilisateur réactive avec React"
    ],
    href: "https://react-ravenous-17c8d9ae06c1.herokuapp.com/",
    category: "perso",
  },
  {
    heading: "Jammming",
    subheading: "Application React connectée à l'API Spotify pour créer des playlists personnalisées.",
    description: "Application web permettant de rechercher des morceaux et de créer des playlists personnalisées sur Spotify. L'authentification OAuth est gérée via des fonctions serverless déployées avec Netlify.",
    images: [
      "/images/projects/jammming.png",
    ],
    altText: "...",
    technologies: ["React", "Netlify Functions", "Spotify API", "OAuth 2.0"],
    features: [
      "Recherche dynamique de morceaux via l'API Spotify",
      "Authentification sécurisée (OAuth + Client Credentials)",
      "Renouvellement automatique des tokens avec stockage local",
      "Fonctions serverless pour sécuriser les clés API",
      "Interface responsive avec animations fluides"
    ],
    href: "https://jammmingomusic.netlify.app/",
    category: "perso",
  }
];
