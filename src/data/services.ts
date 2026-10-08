export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: 'residential' | 'commercial' | 'both';
  iconName: string;
  imagePlaceholder: string;
  features: string[];
}

export const services: ServiceItem[] = [
  {
    id: 'ac-installation',
    slug: 'ac-installation',
    title: 'AC Installation',
    shortDescription: 'Professional split and window air conditioner installation, uninstallation, and precision relocation for homes and offices.',
    category: 'both',
    iconName: 'wrench',
    imagePlaceholder: '/images/services/ac-installation.jpg',
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
    shortDescription: 'Prompt diagnostics and troubleshooting for cooling failure, water leakage, electrical issues, compressor problems, and noise.',
    category: 'both',
    iconName: 'tool',
    imagePlaceholder: '/images/services/ac-repair.jpg',
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
    shortDescription: 'Comprehensive wet and dry deep servicing to restore cooling efficiency, improve airflow, and clean filters and coils.',
    category: 'both',
    iconName: 'refresh-cw',
    imagePlaceholder: '/images/services/ac-service.jpg',
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
    shortDescription: 'Leak detection, pressure testing, and refrigerant recharging (R32, R410A, R22) for restored peak cooling.',
    category: 'both',
    iconName: 'gauge',
    imagePlaceholder: '/images/services/ac-gas-refilling.jpg',
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
    shortDescription: 'Annual Maintenance Contracts for residential apartments, corporate offices, shops, and commercial facilities.',
    category: 'both',
    iconName: 'shield-check',
    imagePlaceholder: '/images/services/ac-amc.jpg',
    features: [
      'Scheduled seasonal preventive servicing',
      'Priority breakdown call assistance',
      'Inspection of electrical contacts and refrigerant levels',
      'Custom maintenance plans for homes and commercial facilities',
    ],
  },
];
