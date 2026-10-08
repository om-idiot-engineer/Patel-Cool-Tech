export interface WorkItem {
  id: string;
  title: string;
  category: 'Installation' | 'Repair' | 'AC Service' | 'Maintenance / AMC' | 'Gas Refilling' | 'Other';
  shortDescription: string;
  image: string;
  videoUrl?: string;
  mediaType?: 'image' | 'video';
  alt: string;
  serviceUrl: string;
  serviceName: string;
  keyPoints: string[];
  isPlaceholder: boolean;
}

export const workItems: WorkItem[] = [
  {
    id: 'work-installation',
    title: 'AC Installation & Precise Mounting',
    category: 'Installation',
    shortDescription: 'Standard wall mounting, vibration-isolated outdoor bracket placement, and leak-tested copper piping for split and window units.',
    image: '/images/work/ac-installation.jpg',
    mediaType: 'image',
    alt: 'Professional split AC indoor unit installation with level alignment in Indore',
    serviceUrl: '/services/ac-installation/',
    serviceName: 'AC Installation Details',
    keyPoints: [
      'Indoor unit mounting & precision level alignment',
      'Outdoor condenser bracket with vibration dampers',
      'Refrigerant copper line flaring & vacuum checks',
    ],
    isPlaceholder: false,
  },
  {
    id: 'work-repair',
    title: 'AC Repair & Electrical Diagnostics',
    category: 'Repair',
    shortDescription: 'On-site troubleshooting for non-cooling units, unexpected tripping, sensor faults, PCB board issues, and fan motor problems.',
    image: '/images/work/ac-repair.jpg',
    mediaType: 'image',
    alt: 'Air conditioner electrical diagnostics and component testing with digital multimeter',
    serviceUrl: '/services/ac-repair/',
    serviceName: 'AC Repair Details',
    keyPoints: [
      'Compressor, capacitor & fan motor diagnosis',
      'PCB electronic circuit & sensor testing',
      'Cooling loss & circuit breaker trip troubleshooting',
    ],
    isPlaceholder: false,
  },
  {
    id: 'work-service',
    title: 'High-Pressure Jet Spray Deep Servicing',
    category: 'AC Service',
    shortDescription: 'High-pressure wet jet coil wash, indoor blower cleaning, and drain tray flush to restore proper cooling airflow and hygiene.',
    image: '/images/work/ac-service.jpg',
    mediaType: 'image',
    alt: 'High pressure water jet power wash on outdoor air conditioner condenser coils',
    serviceUrl: '/services/ac-service/',
    serviceName: 'Deep Servicing Details',
    keyPoints: [
      'High-pressure water jet cleaning for cooling coils',
      'Indoor blower drum & air filter wash',
      'Condensate drainage line clearing & disinfection',
    ],
    isPlaceholder: false,
  },
  {
    id: 'work-gas-refilling',
    title: 'Refrigerant Pressure Testing & Gas Charging',
    category: 'Gas Refilling',
    shortDescription: 'Manifold pressure gauge leak detection, nitrogen pressure testing, flare joint seals, and genuine R32 / R410A / R22 gas recharging.',
    image: '/images/work/ac-gas-charging.jpg',
    mediaType: 'image',
    alt: 'Technician charging refrigerant gas with brass manifold pressure gauge set',
    serviceUrl: '/services/ac-gas-refilling/',
    serviceName: 'Gas Refilling Details',
    keyPoints: [
      'Nitrogen pressure testing for pinhole leaks',
      'R32, R410A & R22 certified refrigerant recharging',
      'Post-charging operating pressure & cooling verification',
    ],
    isPlaceholder: false,
  },
  {
    id: 'work-maintenance',
    title: 'Preventive Maintenance & Commercial AMC',
    category: 'Maintenance / AMC',
    shortDescription: 'Scheduled system checkups, refrigerant pressure evaluations, electrical terminal inspections, and customized AMC agreements.',
    image: '/images/work/ac-installation.jpg',
    mediaType: 'image',
    alt: 'Refrigerant pressure gauge and preventive AC maintenance illustration',
    serviceUrl: '/services/ac-amc/',
    serviceName: 'Maintenance & AMC Details',
    keyPoints: [
      'Operating pressure & compressor load verification',
      'Electrical connection tightness & terminal inspection',
      'Customized residential & commercial AMC contracts',
    ],
    isPlaceholder: false,
  },
];
