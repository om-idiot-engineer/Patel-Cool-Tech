export interface WorkItem {
  id: string;
  title: string;
  category: 'Installation' | 'Repair' | 'AC Service' | 'Maintenance / AMC';
  shortDescription: string;
  image: string;
  alt: string;
  serviceUrl: string;
  serviceName: string;
  keyPoints: string[];
  isPlaceholder: boolean;
}

export const workItems: WorkItem[] = [
  {
    id: 'work-installation',
    title: 'AC Installation',
    category: 'Installation',
    shortDescription: 'Standard wall mounting, vibration-isolated outdoor bracket placement, and leak-tested copper piping for split and window units.',
    image: '/images/work/work-ac-installation.svg',
    alt: 'Air conditioner indoor and outdoor unit installation layout illustration',
    serviceUrl: '/services/ac-installation/',
    serviceName: 'AC Installation Details',
    keyPoints: [
      'Indoor unit mounting & level alignment',
      'Outdoor condenser bracket with vibration dampers',
      'Refrigerant copper line flaring & vacuum checks',
    ],
    isPlaceholder: true,
  },
  {
    id: 'work-repair',
    title: 'AC Repair & Diagnostics',
    category: 'Repair',
    shortDescription: 'On-site troubleshooting for non-cooling units, unexpected tripping, sensor faults, PCB board issues, and fan motor problems.',
    image: '/images/work/work-ac-repair.svg',
    alt: 'Air conditioner electrical diagnostics and component testing illustration',
    serviceUrl: '/services/ac-repair/',
    serviceName: 'AC Repair Details',
    keyPoints: [
      'Compressor, capacitor & fan motor diagnosis',
      'PCB electronic circuit & sensor testing',
      'Cooling loss & circuit breaker trip troubleshooting',
    ],
    isPlaceholder: true,
  },
  {
    id: 'work-service',
    title: 'Deep AC Servicing',
    category: 'AC Service',
    shortDescription: 'High-pressure wet jet coil wash, indoor blower cleaning, and drain tray flush to restore proper cooling airflow and hygiene.',
    image: '/images/work/work-ac-service.svg',
    alt: 'Air conditioner coil cleaning and maintenance illustration',
    serviceUrl: '/services/ac-service/',
    serviceName: 'Deep Servicing Details',
    keyPoints: [
      'High-pressure water jet cleaning for cooling coils',
      'Indoor blower drum & air filter wash',
      'Condensate drainage line clearing & disinfection',
    ],
    isPlaceholder: true,
  },
  {
    id: 'work-maintenance',
    title: 'Preventive Maintenance',
    category: 'Maintenance / AMC',
    shortDescription: 'Scheduled system checkups, refrigerant pressure evaluations, electrical terminal inspections, and customized AMC agreements.',
    image: '/images/work/work-ac-maintenance.svg',
    alt: 'Refrigerant pressure gauge and preventive AC maintenance illustration',
    serviceUrl: '/services/ac-amc/',
    serviceName: 'Maintenance & AMC Details',
    keyPoints: [
      'Operating pressure & compressor load verification',
      'Electrical connection tightness & terminal inspection',
      'Customized residential & commercial AMC contracts',
    ],
    isPlaceholder: true,
  },
];
