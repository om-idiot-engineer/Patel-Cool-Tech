export interface NavItem {
  label: string;
  href: string;
  isAction?: boolean;
}

export interface SiteConfig {
  name: string;
  titleTemplate: string;
  defaultTitle: string;
  defaultDescription: string;
  siteUrl: string;
  locale: string;
  navItems: NavItem[];
  footerNavItems: NavItem[];
}

export const siteConfig: SiteConfig = {
  name: 'Patel Cool Tech',
  titleTemplate: '%s | Patel Cool Tech',
  defaultTitle: 'AC Installation, Repair & Service in Indore | Patel Cool Tech',
  defaultDescription: 'Patel Cool Tech provides professional AC installation, repair, servicing, gas refilling and AMC support for homes and businesses across Indore and nearby areas.',
  siteUrl: 'https://patelcooltech.in',
  locale: 'en_IN',
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/' },
    { label: 'Our Work', href: '/our-work/' },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
  ],
  footerNavItems: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/' },
    { label: 'Our Work', href: '/our-work/' },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
  ],
};
