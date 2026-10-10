export interface BrandItem {
  id: string;
  name: string;
  tag: string;
  gradient: string;
  category: 'residential' | 'commercial' | 'both';
  iconType?: string;
}

export const brandSectionHeadline = 'Trusted Service for All Major AC Brands';
export const brandSectionSubtext = 'Precision diagnosis, genuine spare parts & expert service for all split, inverter & commercial units.';
export const brandDisclaimer = 'Independent multi-brand service provider. All brand names and logos belong to their respective owners.';

export const brandsRow1: BrandItem[] = [
  { id: 'daikin', name: 'Daikin', tag: 'Inverter & VRV Specialist', gradient: 'from-cyan-500 to-blue-600', category: 'both' },
  { id: 'mitsubishi-heavy', name: 'Mitsubishi Heavy', tag: 'Heavy Duty & Inverter', gradient: 'from-rose-500 to-red-600', category: 'both' },
  { id: 'o-general', name: 'O General', tag: 'Tropical Inverter', gradient: 'from-amber-500 to-orange-600', category: 'both' },
  { id: 'voltas', name: 'Voltas', tag: 'All Split & Window', gradient: 'from-blue-600 to-indigo-700', category: 'both' },
  { id: 'blue-star', name: 'Blue Star', tag: 'Precision Inverter', gradient: 'from-sky-600 to-blue-700', category: 'both' },
  { id: 'hitachi', name: 'Hitachi', tag: 'Expandable Inverter', gradient: 'from-red-600 to-rose-700', category: 'both' },
  { id: 'carrier', name: 'Carrier', tag: 'Ester & Durafresh', gradient: 'from-blue-500 to-cyan-600', category: 'both' },
];

export const brandsRow2: BrandItem[] = [
  { id: 'lg', name: 'LG', tag: 'AI Dual Inverter', gradient: 'from-pink-600 to-rose-600', category: 'both' },
  { id: 'panasonic', name: 'Panasonic', tag: 'nanoe™ X Smart Care', gradient: 'from-blue-600 to-indigo-700', category: 'both' },
  { id: 'samsung', name: 'Samsung', tag: 'WindFree™ Digital Inverter', gradient: 'from-indigo-600 to-blue-700', category: 'both' },
  { id: 'lloyd', name: 'Lloyd', tag: 'Rapid Cool & Golden Fin', gradient: 'from-purple-600 to-indigo-600', category: 'both' },
  { id: 'godrej', name: 'Godrej', tag: 'Eco Green Inverter', gradient: 'from-emerald-500 to-teal-700', category: 'both' },
  { id: 'whirlpool', name: 'Whirlpool', tag: '6th Sense Turbo Cool', gradient: 'from-amber-600 to-orange-600', category: 'both' },
  { id: 'haier', name: 'Haier', tag: 'Triple Inverter Self-Clean', gradient: 'from-cyan-600 to-blue-700', category: 'both' },
];

export const brands: BrandItem[] = [...brandsRow1, ...brandsRow2];

