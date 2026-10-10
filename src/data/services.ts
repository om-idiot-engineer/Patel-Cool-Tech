export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: 'residential' | 'commercial' | 'both';
  iconName: string;
  imagePlaceholder: string;
  features: string[];
  tags: string[];
}

export const services: ServiceItem[] = [
  {
    id: 'ac-installation',
    slug: 'ac-installation',
    title: 'AC Installation',
    shortDescription: 'Split & window installation, uninstallation & safe precision shifting.',
    category: 'both',
    iconName: 'wrench',
    imagePlaceholder: '/images/services/ac-installation.jpg',
    tags: ['Split & Window', 'Relocation', 'Safe Mounting'],
    features: [
      'Split and Window AC installation',
      'Safe outdoor unit mounting and bracket fitting',
      'Copper piping and drainage line setup',
      'Pre-run pressure testing and cooling checks',
    ],
  },
  {
    id: 'ac-repair',
    slug: 'ac-repair',
    title: 'AC Repair',
    shortDescription: 'Fast troubleshooting for cooling issues, gas leaks, noise & PCB faults.',
    category: 'both',
    iconName: 'tool',
    imagePlaceholder: '/images/services/ac-repair.jpg',
    tags: ['Cooling Fix', 'Water Leakage', 'PCB Repair'],
    features: [
      'Accurate fault diagnosis',
      'Compressor and fan motor troubleshooting',
      'Water leakage and drainage blockage fix',
      'PCB and electrical wiring repair',
    ],
  },
  {
    id: 'ac-service',
    slug: 'ac-service',
    title: 'AC Service',
    shortDescription: 'Deep jet-pump wet wash & coil cleaning to restore ice-cold airflow.',
    category: 'both',
    iconName: 'refresh-cw',
    imagePlaceholder: '/images/services/ac-service.jpg',
    tags: ['Jet Power Wash', 'Coil Cleaning', 'Filter Sanitizing'],
    features: [
      'Deep filter, cooling coil, and blower cleaning',
      'Outdoor condenser unit power wash',
      'Drain tray cleanup and disinfection',
      'Operating temperature and airflow assessment',
    ],
  },
  {
    id: 'ac-gas-refilling',
    slug: 'ac-gas-refilling',
    title: 'AC Gas Refilling',
    shortDescription: 'Nitrogen leak testing & 100% genuine refrigerant gas top-up.',
    category: 'both',
    iconName: 'gauge',
    imagePlaceholder: '/images/services/ac-gas-refilling.jpg',
    tags: ['Leak Detection', 'R32 / R410A / R22', 'Pressure Test'],
    features: [
      'Nitrogen pressure testing for leak detection',
      'Refrigerant gas top-up and complete charging',
      'Safe brazing and valve joint sealing',
      'Post-charging performance & amperage verification',
    ],
  },
  {
    id: 'ac-amc',
    slug: 'ac-amc',
    title: 'AC AMC & Maintenance',
    shortDescription: 'Year-round preventive maintenance contracts for homes & corporate offices.',
    category: 'both',
    iconName: 'shield-check',
    imagePlaceholder: '/images/services/ac-amc.jpg',
    tags: ['Periodic Visits', 'Priority Breakdown', 'Homes & Offices'],
    features: [
      'Scheduled seasonal preventive servicing',
      'Priority breakdown call assistance',
      'Inspection of electrical contacts and refrigerant levels',
      'Custom maintenance plans for homes and commercial facilities',
    ],
  },
];
