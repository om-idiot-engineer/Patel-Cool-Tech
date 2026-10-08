export interface Technician {
  name: string;
  role: string;
}

export interface ServiceArea {
  name: string;
  type: 'city' | 'industrial-hub' | 'suburb' | 'extended';
  note?: string;
}

export interface BusinessData {
  name: string;
  tagline: string;
  shortDescription: string;
  city: string;
  state: string;
  country: string;
  postalCode?: string;
  technicians: Technician[];
  phones: {
    primary: string;
    secondary: string;
    primaryFormatted: string;
    secondaryFormatted: string;
    primaryTel: string;
    secondaryTel: string;
    whatsappNumber: string;
    whatsappUrl: string;
  };
  email: string;
  serviceAreas: {
    core: string[];
    featuredAreas: ServiceArea[];
    extendedCoverageNote: string;
  };
  googleBusinessProfile: {
    name: string;
    exists: boolean;
    mapsUrl: string;
  };
  disclaimers: {
    brands: string;
  };
}

export const business: BusinessData = {
  name: 'Patel Cool Tech',
  tagline: 'AC Installation, Repair & Service',
  shortDescription: 'Professional air conditioning installation, repair, servicing, gas refilling, and maintenance across Indore, Rau, Pithampur, and nearby areas.',
  city: 'Indore',
  state: 'Madhya Pradesh',
  country: 'India',
  technicians: [
    {
      name: 'Mahendra Patel',
      role: 'HVAC Technician & Owner',
    },
    {
      name: 'Satyam Patel',
      role: 'HVAC Technician & Owner',
    },
  ],
  phones: {
    primary: '9575664203',
    secondary: '9425166191',
    primaryFormatted: '+91 95756 64203',
    secondaryFormatted: '+91 94251 66191',
    primaryTel: 'tel:+919575664203',
    secondaryTel: 'tel:+919425166191',
    whatsappNumber: '+919575664203',
    whatsappUrl: 'https://wa.me/919575664203?text=Hello%20Patel%20Cool%20Tech%2C%20I%20need%20AC%20service%20in%20Indore',
  },
  email: 'patelcooltech@gmail.com',
  serviceAreas: {
    core: ['Indore', 'Rau', 'Pithampur'],
    featuredAreas: [
      { name: 'Indore', type: 'city', note: 'All major residential & commercial zones' },
      { name: 'Rau', type: 'suburb', note: 'Fast on-site AC repair & service' },
      { name: 'Pithampur', type: 'industrial-hub', note: 'Commercial and residential units' },
    ],
    extendedCoverageNote: 'Service available across Indore and surrounding regions. Larger or out-of-district projects can be arranged based on requirement.',
  },
  googleBusinessProfile: {
    name: 'Patel Cool Tech',
    exists: true,
    mapsUrl: 'https://maps.app.goo.gl/VsAnrAogc2fniLQM9',
  },
  disclaimers: {
    brands: 'AC Service & Repair for Major Brands. All brand names, logos, and trademarks are property of their respective owners.',
  },
};
