export type Page = {
  TITLE: string
  DESCRIPTION: string
}

export interface Site extends Page {
  AUTHOR: string
}

export type Links = {
  TEXT: string
  HREF: string
}[]

export type Socials = {
  NAME: string
  ICON: string
  TEXT: string
  HREF: string
}[]

export type Project = {
  heading: string
  subheading: string
  description: string
  images: string[]
  altText: string
  technologies: string[]
  features: string[]
  href?: string
}
