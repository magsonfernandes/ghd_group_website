export type NavItem = {
  id: 'about' | 'contact' | 'blog'
  label: string
  action: 'open-contact' | 'navigate'
}

export const navItems: NavItem[] = [
  { id: 'about', label: 'About Us', action: 'navigate' },
  { id: 'contact', label: 'Contact Us', action: 'navigate' },
  { id: 'blog', label: 'Blog', action: 'navigate' },
]

export type ContactBrand = {
  id: 'infra' | 'hotels'
  name: string
  enquiry: string
  email: string
}

export const contactBrands: ContactBrand[] = [
  {
    id: 'infra',
    name: 'GHD Infra',
    enquiry: '0832 2913236',
    email: 'info@ghdinfra.com',
  },
  {
    id: 'hotels',
    name: 'GHD Hotels',
    enquiry: '83800 08687',
    email: 'info@ghdhotels.in',
  },
]
