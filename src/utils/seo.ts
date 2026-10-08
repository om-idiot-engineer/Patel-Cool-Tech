import { business } from '../data/business';
import { siteConfig } from '../data/site';

export interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  noindex?: boolean;
}

export function buildPageTitle(title?: string): string {
  if (!title || title === 'AC Installation, Repair & Service in Indore') {
    return siteConfig.defaultTitle;
  }
  if (title.includes(siteConfig.name)) {
    return title;
  }
  return `${title} | ${siteConfig.name}`;
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    name: business.name,
    description: business.shortDescription,
    url: `${siteConfig.siteUrl}/`,
    telephone: business.phones.primaryFormatted,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.city,
      addressRegion: business.state,
      addressCountry: 'IN',
    },
    areaServed: business.serviceAreas.core.map((area) => ({
      '@type': 'AdministrativeArea',
      name: area,
    })),
    founder: business.technicians.map((tech) => ({
      '@type': 'Person',
      name: tech.name,
      jobTitle: tech.role,
    })),
    knowsAbout: [
      'AC Installation',
      'AC Repair',
      'AC Servicing',
      'AC Gas Refilling',
      'HVAC Maintenance',
      'Split AC Service',
      'Window AC Service',
    ],
  };
}
