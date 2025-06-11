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

// Projects Page
export const PROJECTS = [
  {
    heading: 'Clone Netflix',
    subheading: 'React, TMDB API',
    imagePath: '/images/sad_cat.jpg',
    altText: 'Aperçu du clone Netflix',
    href: 'https://www.otour2.com/',
  },
  {
    heading: 'Portfolio V1',
    subheading: 'Astro, Tailwind',
    imagePath: '/images/sad_cat.jpg',
    altText: 'Aperçu du portfolio V1',
    // href: 'https://www.otour2.com/',
  },
  {
    heading: 'Clone Netflix',
    subheading: 'React, TMDB API',
    imagePath: '/images/sad_cat.jpg',
    altText: 'Aperçu du clone Netflix',
    href: 'https://www.otour2.com/',
  },
  {
    heading: 'Portfolio V1',
    subheading: 'Astro, Tailwind',
    imagePath: '/images/sad_cat.jpg',
    altText: 'Aperçu du portfolio V1',
    // href: 'https://www.otour2.com/',
  },
  {
    heading: 'Portfolio V1',
    subheading: 'Astro, Tailwind',
    imagePath: '/images/sad_cat.jpg',
    altText: 'Aperçu du portfolio V1',
    // href: 'https://www.otour2.com/',
  },
];
