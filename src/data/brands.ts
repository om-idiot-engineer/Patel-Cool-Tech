export interface BrandItem {
  id: string;
  name: string;
  logoPlaceholder?: string;
  category: 'residential' | 'commercial' | 'both';
}

export const brandSectionHeadline = 'AC Service & Repair for Major Brands';
export const brandSectionSubtext = 'Our technicians have hands-on experience troubleshooting, installing, and servicing leading air conditioner manufacturers.';
export const brandDisclaimer = 'All brand names, trademarks, and logos displayed are the property of their respective owners. Patel Cool Tech provides independent repair and maintenance services.';

export const brands: BrandItem[] = [
  { id: 'daikin', name: 'Daikin', category: 'both' },
  { id: 'voltas', name: 'Voltas', category: 'both' },
  { id: 'blue-star', name: 'Blue Star', category: 'both' },
  { id: 'hitachi', name: 'Hitachi', category: 'both' },
  { id: 'lg', name: 'LG', category: 'both' },
  { id: 'panasonic', name: 'Panasonic', category: 'both' },
  { id: 'mitsubishi-heavy', name: 'Mitsubishi Heavy Industries', category: 'both' },
];
