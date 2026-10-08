export interface ServiceProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface ServiceFAQItem {
  question: string;
  answer: string;
}

export interface ServiceBenefitItem {
  title: string;
  description: string;
}

export interface ServiceCoverageItem {
  title: string;
  description: string;
}

export interface ServicePageData {
  slug: string;
  id: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  badge: string;
  shortSummary: string;
  whatItCovers: {
    heading: string;
    intro: string;
    items: ServiceCoverageItem[];
  };
  commonSituations: {
    heading: string;
    intro: string;
    items: string[];
  };
  considerations?: {
    heading: string;
    intro: string;
    items: ServiceCoverageItem[];
  };
  process: {
    heading: string;
    intro: string;
    disclaimer: string;
    steps: ServiceProcessStep[];
  };
  benefits: {
    heading: string;
    intro: string;
    items: ServiceBenefitItem[];
  };
  serviceAreaNotice: string;
  faqs: ServiceFAQItem[];
  relatedSlugs: string[];
}

export const servicePagesData: Record<string, ServicePageData> = {
  'ac-installation': {
    slug: 'ac-installation',
    id: 'ac-installation',
    title: 'AC Installation',
    h1: 'AC Installation in Indore',
    metaTitle: 'AC Installation in Indore | Patel Cool Tech',
    metaDescription: 'Split and window AC installation, uninstallation, and relocation across Indore, Rau, and Pithampur. Direct technician support by Patel Cool Tech.',
    category: 'Split & Window Systems',
    badge: 'Installation & Relocation',
    shortSummary: 'Get in touch with Patel Cool Tech for careful split and window air conditioner installation, uninstallation, and relocation across Indore and nearby areas.',
    whatItCovers: {
      heading: 'What Professional AC Installation Involves',
      intro: 'Air conditioner installation requires proper physical mounting, precise piping connections, and electrical safety checks so your unit runs safely and cools effectively from day one.',
      items: [
        {
          title: 'Split & Window AC Setup',
          description: 'Level wall mounting for indoor split units or secure window cavity fitting with proper insulation to prevent outdoor air leakage.',
        },
        {
          title: 'Outdoor Unit Mounting',
          description: 'Rigid outdoor stand or wall bracket placement with vibration damping pads, ensuring adequate ventilation and safe access.',
        },
        {
          title: 'Refrigerant & Drainage Lines',
          description: 'Neat copper pipe connection, thermal insulation wrapping, and gravity-assisted drain pipe routing to prevent internal water leaks.',
        },
        {
          title: 'Uninstallation & Safe Relocation',
          description: 'Refrigerant pump-down to preserve cooling gas before safely dismantling units during home shifting or building renovations.',
        },
      ],
    },
    commonSituations: {
      heading: 'When Professional AC Installation Is Needed',
      intro: 'Customers across Indore typically contact us for AC installation assistance in the following circumstances:',
      items: [
        'Installing a newly purchased split or window air conditioner at home or office',
        'Shifting to a new apartment, bungalow, or commercial premises in Indore or Rau',
        'Dismantling existing AC units safely before room painting, tiling, or renovation',
        'Relocating an outdoor unit to a cooler, better-ventilated balcony or terrace space',
        'Replacing an older, retired air conditioner with an energy-efficient new model',
      ],
    },
    considerations: {
      heading: 'Preparation & Placement Considerations',
      intro: 'Proper planning before drilling and mounting helps protect your walls and maximizes cooling performance:',
      items: [
        {
          title: 'Wall Strength & Leveling',
          description: 'Indoor units must be securely fastened to a load-bearing wall or solid partition to prevent vibration and ensure condensate water flows freely into the drain pipe.',
        },
        {
          title: 'Balanced Airflow Path',
          description: 'The indoor unit is ideally positioned where air can circulate across the whole room without blowing continuously directly onto sleeping beds or work desks.',
        },
        {
          title: 'Outdoor Ventilation',
          description: 'Outdoor condenser units require unblocked airflow away from enclosed heat traps or direct harsh heat to maintain proper heat dissipation.',
        },
        {
          title: 'Electrical Power Supply',
          description: 'An appropriate dedicated electrical point, MCB, or stabilizer matching the unit tonnage should be accessible near the indoor or outdoor location.',
        },
      ],
    },
    process: {
      heading: 'How AC Installation Works',
      intro: 'Every installation is carried out with care to ensure the safety of your property and the longevity of your cooling system.',
      disclaimer: 'Typical process may include the following steps (sequence may adapt to site layout, unit type, and architectural constraints):',
      steps: [
        {
          stepNumber: 1,
          title: 'Site & Unit Assessment',
          description: 'We review the AC specifications, inspect the designated room layout, confirm wall strength, and discuss indoor and outdoor placement options.',
        },
        {
          stepNumber: 2,
          title: 'Mounting & Bracket Placement',
          description: 'The indoor mounting plate is leveled and firmly fixed. Outdoor heavy-duty brackets or floor stands are anchored securely.',
        },
        {
          stepNumber: 3,
          title: 'Piping & Line Interconnection',
          description: 'Insulated copper refrigerant tubing, drain piping, and interconnecting electrical communication wires are routed through the wall sleeve.',
        },
        {
          stepNumber: 4,
          title: 'Unit Attachment & Flare Connection',
          description: 'Indoor and outdoor units are positioned and fastened. Flare nuts are tightened cleanly to ensure durable, leak-tight connections.',
        },
        {
          stepNumber: 5,
          title: 'Operational & Cooling Checks',
          description: 'The system is powered on, condensate drainage is verified, and operating temperature drop across the indoor coil is checked.',
        },
        {
          stepNumber: 6,
          title: 'Handover & Practical Guidance',
          description: 'We walk you through basic remote controller modes, basic air filter maintenance, and optimal temperature settings.',
        },
      ],
    },
    benefits: {
      heading: 'Why Contact Patel Cool Tech for AC Installation',
      intro: 'When you reach out to Patel Cool Tech, you deal directly with hands-on local technicians committed to careful workmanship.',
      items: [
        {
          title: 'Direct Technician Communication',
          description: 'Speak straight with Mahendra and Satyam Patel rather than navigating automated call centers or third-party broker apps.',
        },
        {
          title: 'Indore & Regional Coverage',
          description: 'We serve residential colonies and commercial establishments across Indore, Rau, Pithampur, and nearby localities.',
        },
        {
          title: 'Multi-Brand Familiarity',
          description: 'Hands-on experience handling split and window air conditioners across leading Indian market brands.',
        },
        {
          title: 'Practical Workmanship',
          description: 'Focus on tidy pipe wrapping, clean wall penetrations, and proper water drainage routing to safeguard your interiors.',
        },
      ],
    },
    serviceAreaNotice: 'Patel Cool Tech serves customers across Indore, including Rau, Pithampur, and nearby areas.',
    faqs: [
      {
        question: 'What does split AC installation involve?',
        answer: 'Split AC installation includes mounting the indoor unit on a level wall plate, installing the outdoor condenser unit on sturdy brackets or a floor stand, connecting insulated copper lines and electrical wiring, setting up the drain pipe, and checking initial airflow and cooling.',
      },
      {
        question: 'Can I contact you for AC uninstallation or relocation?',
        answer: 'Yes. If you are moving homes, remodeling rooms, or repainting walls, we can safely pump down the refrigerant into the outdoor unit, disconnect lines cleanly, and reinstall the system at your new location.',
      },
      {
        question: 'Which AC brands do you install?',
        answer: 'We provide installation support for major air conditioning brands available in India, including Voltas, Daikin, LG, Blue Star, Lloyd, Hitachi, Carrier, Panasonic, Godrej, and Samsung.',
      },
      {
        question: 'What should I keep ready before the technician arrives?',
        answer: 'Having the AC unit, brackets, copper pipes (if supplied with the unit), an active power point/MCB, and clear access to both the indoor wall and outdoor balcony or terrace area helps ensure a smooth installation.',
      },
      {
        question: 'How do I know the best spot for the outdoor unit?',
        answer: 'The outdoor unit should ideally be placed in a well-ventilated, accessible area where hot air can disperse freely away from direct obstructions, allowing easier maintenance access in the future.',
      },
    ],
    relatedSlugs: ['ac-service', 'ac-gas-refilling', 'ac-repair', 'ac-amc'],
  },

  'ac-repair': {
    slug: 'ac-repair',
    id: 'ac-repair',
    title: 'AC Repair',
    h1: 'AC Repair in Indore',
    metaTitle: 'AC Repair in Indore | Patel Cool Tech',
    metaDescription: 'Prompt troubleshooting for AC cooling failure, water leakage, electrical faults, and noise in Indore, Rau, and Pithampur. Call Patel Cool Tech directly.',
    category: 'Troubleshooting & Repairs',
    badge: 'Diagnostics & Repair',
    shortSummary: 'Get in touch with Patel Cool Tech for AC repair support when your cooling system is not cooling properly, leaking water, making unusual noise, or failing to start.',
    whatItCovers: {
      heading: 'Common AC Issues We Inspect & Repair',
      intro: 'Air conditioning systems comprise mechanical, electrical, and refrigeration components. When one element falters, cooling performance drops or stops entirely.',
      items: [
        {
          title: 'Cooling Failure & Low Cooling',
          description: 'Investigating why the AC blows room-temperature air, runs continuously without reaching the thermostat setpoint, or loses cooling effectiveness.',
        },
        {
          title: 'Indoor Water Dripping & Leaks',
          description: 'Clearing choked drain pans, cracked condensate drain pipes, or addressing coil frost melting that causes water to run down interior walls.',
        },
        {
          title: 'Unusual Noise & Excessive Vibration',
          description: 'Diagnosing rattling blower wheels, worn fan motor bearings, vibrating condenser brackets, or abnormal compressor sounds.',
        },
        {
          title: 'Startup & Electrical Problems',
          description: 'Troubleshooting units that refuse to turn on, frequently trip circuit breakers (MCBs), suffer from swollen capacitors, or display PCB error codes.',
        },
      ],
    },
    commonSituations: {
      heading: 'Customer Situations & Reported Symptoms',
      intro: 'Common scenarios where customers in Indore request an on-site AC repair inspection include:',
      items: [
        'AC runs but the air blowing out feels lukewarm or mild instead of chilled',
        'Water starts dripping from the front or bottom of the indoor split unit',
        'Outdoor unit compressor hums loudly or fails to kick on when cooling is requested',
        'The air conditioner trips the household MCB immediately upon powering on',
        'The remote control receives power but the indoor unit does not respond or shows an error light',
        'The indoor fan speed is uneven or producing a distinct clicking or rattling sound',
      ],
    },
    considerations: {
      heading: 'Diagnostic & Repair Approach',
      intro: 'Accurate problem diagnosis comes first. We inspect the root cause rather than making hasty assumptions:',
      items: [
        {
          title: 'Root Cause Identification',
          description: 'A cooling complaint can be caused by dirt buildup, a weakened capacitor, a sensor mismatch, or low refrigerant. We check electrical and physical parameters first.',
        },
        {
          title: 'Clear Explanation Before Repair',
          description: 'We explain what component appears faulty, what repair or part replacement is recommended, and let you make an informed decision.',
        },
        {
          title: 'Post-Repair Operational Testing',
          description: 'After completing any repair, we run the unit through an active cooling cycle to verify stable electrical current draw, steady airflow, and proper cooling response.',
        },
      ],
    },
    process: {
      heading: 'How AC Repair Works',
      intro: 'We follow a systematic on-site inspection routine to diagnose and rectify air conditioning malfunctions.',
      disclaimer: 'Typical process may include the following steps (exact repair sequence depends on the specific fault and unit condition):',
      steps: [
        {
          stepNumber: 1,
          title: 'Understand Reported Symptoms',
          description: 'We listen to your description of the issue—when it started, whether noise or leakage occurred, and how the unit responds to the remote.',
        },
        {
          stepNumber: 2,
          title: 'On-Site Physical & Electrical Inspection',
          description: 'We inspect the indoor blower, air filters, wiring connections, running capacitor, fan motor, and outdoor compressor unit.',
        },
        {
          stepNumber: 3,
          title: 'Identify Likely Fault & Discuss Solutions',
          description: 'We pinpoint the probable cause of failure and explain the practical repair steps or component replacement options needed.',
        },
        {
          stepNumber: 4,
          title: 'Execute Required Repair',
          description: 'Faulty wiring, damaged capacitors, blocked drains, or malfunctioning motors are serviced or replaced carefully.',
        },
        {
          stepNumber: 5,
          title: 'Cooling & Safety Verification',
          description: 'We power the unit back up, monitor running amperage, verify condensation drainage, and confirm that cold air is restored.',
        },
      ],
    },
    benefits: {
      heading: 'Why Contact Patel Cool Tech for AC Repair',
      intro: 'Local, responsive support without unnecessary technical jargon or inflated claims.',
      items: [
        {
          title: 'Direct Access to Technicians',
          description: 'You speak directly with Mahendra and Satyam Patel, ensuring the technician arriving at your door understands your exact complaint.',
        },
        {
          title: 'Prompt On-Site Support',
          description: 'Serving residential colonies and commercial zones across Indore, Rau, and Pithampur with practical appointment coordination.',
        },
        {
          title: 'Multi-Brand Troubleshooting',
          description: 'Familiar with common fault patterns across major split and window AC brands operating in central Indian climate conditions.',
        },
        {
          title: 'Transparent Recommendations',
          description: 'If a simple cleaning or minor wire fix resolves the issue, we tell you openly rather than recommending unnecessary replacements.',
        },
      ],
    },
    serviceAreaNotice: 'Patel Cool Tech serves customers across Indore, including Rau, Pithampur, and nearby areas.',
    faqs: [
      {
        question: 'What should I check before calling for AC repair if my unit stops cooling?',
        answer: 'Check that the remote is set to "Cool" mode rather than "Fan" or "Dry" mode, that the thermostat temperature is set lower than room temperature, that the outdoor unit power switch is ON, and that the main MCB has not tripped.',
      },
      {
        question: 'Why is water leaking from my indoor AC unit?',
        answer: 'Indoor water leakage is most commonly caused by a choked condensate drain pipe, accumulated dirt and algae in the drain tray, or coil icing that melts unevenly. A thorough inspection and cleaning usually clears the blockage.',
      },
      {
        question: 'Which AC brands do you repair?',
        answer: 'We provide repair support for all major brands commonly used in Indore, including Voltas, Daikin, LG, Blue Star, Lloyd, Hitachi, Carrier, Panasonic, Godrej, and Samsung.',
      },
      {
        question: 'Can unusual humming or buzzing noises be inspected?',
        answer: 'Yes. Humming, clicking, or rattling sounds can originate from loose casing screws, a dry fan motor bearing, a struggling compressor, or a weakened run capacitor. We inspect both indoor and outdoor assemblies.',
      },
      {
        question: 'Do you guarantee that every AC issue can be fixed immediately?',
        answer: 'While many common electrical, fan, and drainage issues can be addressed promptly on-site, certain repairs depend on spare part availability, compressor health, or coil condition. We provide an honest assessment before proceeding.',
      },
    ],
    relatedSlugs: ['ac-service', 'ac-gas-refilling', 'ac-installation', 'ac-amc'],
  },

  'ac-service': {
    slug: 'ac-service',
    id: 'ac-service',
    title: 'AC Service',
    h1: 'AC Service in Indore',
    metaTitle: 'AC Service in Indore | Patel Cool Tech',
    metaDescription: 'Routine AC servicing, deep wet jet cleaning, coil washing, and airflow optimization across Indore, Rau, and Pithampur. Book with Patel Cool Tech.',
    category: 'Preventive Care & Deep Cleaning',
    badge: 'Routine Maintenance',
    shortSummary: 'Restore airflow, improve cooling efficiency, and eliminate trapped dust with professional split and window AC servicing by Patel Cool Tech in Indore.',
    whatItCovers: {
      heading: 'What Routine AC Servicing Covers',
      intro: 'Routine servicing is preventive care designed to remove accumulated dust, clear blockages, and maintain cooling efficiency. Servicing focuses on cleaning and inspection, whereas repair resolves broken components.',
      items: [
        {
          title: 'Indoor Coil & Filter Deep Cleaning',
          description: 'Washing air filters and carefully cleaning the cooling evaporator coil fins to remove dust buildup that obstructs airflow.',
        },
        {
          title: 'Blower Wheel Cleaning',
          description: 'Cleaning the cylindrical indoor blower fan to restore smooth, high-volume air distribution throughout your living or work space.',
        },
        {
          title: 'Drain Tray & Drain Pipe Flushing',
          description: 'Clearing slime, dust, and standing water from the internal drain channel to prevent indoor overflow and stale water odors.',
        },
        {
          title: 'Outdoor Condenser Coil Wash',
          description: 'Rinsing dust, dirt, and airborne grime from the outdoor condenser fins so the system can release compressed heat efficiently.',
        },
      ],
    },
    commonSituations: {
      heading: 'When Is AC Servicing Recommended?',
      intro: 'Due to Indore’s dusty summers and humid monsoons, periodic servicing helps your air conditioner maintain peak performance:',
      items: [
        'Pre-summer startup after several months of winter inactivity',
        'Mid-season maintenance when continuous daily cooling leads to heavy dust accumulation',
        'When you notice reduced air throw or musty, stale smells coming from the AC vent',
        'Post-monsoon cleaning to prevent fungal buildup on wet evaporator coils',
        'High-occupancy living rooms, commercial shops, and office cabins requiring clean indoor air',
      ],
    },
    considerations: {
      heading: 'Understanding Service vs. Repair',
      intro: 'Clarifying expectations helps customers understand what routine servicing accomplishes:',
      items: [
        {
          title: 'Service Is Preventive Hygiene',
          description: 'Servicing clears dust barriers and restores heat transfer. It helps an otherwise functional AC cool more efficiently and blow cleaner air.',
        },
        {
          title: 'Service Does Not Replace Component Repair',
          description: 'If an AC has a burnt motor, failed capacitor, or mechanical compressor fault, a standard service alone will not fix it—repair troubleshooting is required.',
        },
        {
          title: 'Air Quality & Efficiency Impact',
          description: 'Clean coils allow the refrigerant to absorb heat effortlessly, reducing compressor strain and helping maintain comfortable indoor room temperatures.',
        },
      ],
    },
    process: {
      heading: 'How Routine AC Servicing Works',
      intro: 'We carry out a thorough multi-point cleaning procedure while protecting surrounding furniture and electrical components.',
      disclaimer: 'Typical service procedure may include the following steps (adjusted as appropriate for split or window configurations):',
      steps: [
        {
          stepNumber: 1,
          title: 'Initial Performance Check',
          description: 'We run the AC to check baseline cooling, listen for abnormal mechanical sounds, and observe blower airflow.',
        },
        {
          stepNumber: 2,
          title: 'Power Isolation & Casing Removal',
          description: 'The electrical supply is safely switched off, and the indoor front cover, air filters, and louvers are carefully dismounted.',
        },
        {
          stepNumber: 3,
          title: 'Indoor Coil & Drain Channel Cleaning',
          description: 'The evaporator coil is treated and washed, the blower wheel is scrubbed, and the drain tray is flushed with clean water.',
        },
        {
          stepNumber: 4,
          title: 'Outdoor Condenser Coil Washing',
          description: 'The outdoor unit fins are washed to dislodge accumulated dry dust, grease, and debris that impede heat dissipation.',
        },
        {
          stepNumber: 5,
          title: 'Reassembly & Cooling Verification',
          description: 'Covers and clean filters are refitted, power is restored, and we measure the temperature drop across the vent to ensure crisp cooling.',
        },
      ],
    },
    benefits: {
      heading: 'Why Contact Patel Cool Tech for AC Servicing',
      intro: 'Dependable on-site servicing delivered with personal care by local Indore technicians.',
      items: [
        {
          title: 'Direct Technician Engagement',
          description: 'Your service is handled directly by Mahendra and Satyam Patel—local professionals who value long-term customer relationships.',
        },
        {
          title: 'Thorough, Unrushed Work',
          description: 'We focus on washing coils thoroughly and clearing drain passages rather than rushing through a superficial wipe-down.',
        },
        {
          title: 'Indore, Rau & Pithampur Service',
          description: 'Reliable on-site visits across key residential colonies, townships, and commercial areas.',
        },
        {
          title: 'Experience with All Major AC Brands',
          description: 'Knowledge of specific disassembly steps for Daikin, Voltas, LG, Blue Star, Lloyd, and other popular units.',
        },
      ],
    },
    serviceAreaNotice: 'Patel Cool Tech serves customers across Indore, including Rau, Pithampur, and nearby areas.',
    faqs: [
      {
        question: 'How is routine AC service different from AC repair?',
        answer: 'AC servicing is routine preventive maintenance focusing on deep cleaning coils, filters, blowers, and drain channels to restore airflow and cooling efficiency. AC repair, on the other hand, involves diagnosing and replacing broken or faulty electrical and mechanical parts.',
      },
      {
        question: 'How often should an AC be serviced in Indore?',
        answer: 'Given Indore’s dry, dusty summer months, servicing your air conditioner at least once before the summer season begins is strongly recommended. For high-usage environments or offices, a mid-season service is also beneficial.',
      },
      {
        question: 'What is included in a routine AC service?',
        answer: 'A standard service includes dismounting and cleaning filters, washing the indoor cooling coil, cleaning the blower wheel, flushing the condensate drain tray and pipe, washing the outdoor condenser coil, and verifying cooling performance upon startup.',
      },
      {
        question: 'Can routine servicing improve weak cooling?',
        answer: 'Yes, if the weak cooling is caused by dust-choked filters or clogged outdoor fins that prevent heat dissipation. If cooling remains weak after cleaning, our technicians will inspect for electrical or refrigerant issues.',
      },
      {
        question: 'Do you service commercial AC units in offices and shops?',
        answer: 'Yes, we provide routine servicing for air conditioners installed in residential apartments, individual homes, shops, clinics, and commercial offices across Indore, Rau, and Pithampur.',
      },
    ],
    relatedSlugs: ['ac-repair', 'ac-gas-refilling', 'ac-installation', 'ac-amc'],
  },

  'ac-gas-refilling': {
    slug: 'ac-gas-refilling',
    id: 'ac-gas-refilling',
    title: 'AC Gas Refilling',
    h1: 'AC Gas Refilling in Indore',
    metaTitle: 'AC Gas Refilling in Indore | Patel Cool Tech',
    metaDescription: 'Refrigerant inspection, leak detection, and gas refilling for split and window ACs in Indore, Rau, and Pithampur. Call Patel Cool Tech.',
    category: 'Refrigerant Service & Diagnostics',
    badge: 'Refrigerant Service',
    shortSummary: 'Get in touch with Patel Cool Tech for refrigerant pressure inspection, leak detection, and appropriate gas recharging for your air conditioner in Indore.',
    whatItCovers: {
      heading: 'Understanding AC Refrigerant & Gas Refilling',
      intro: 'Air conditioning relies on a closed refrigeration cycle to transfer heat out of your room. Gas refilling is only required when refrigerant has escaped through a leak or loose joint—it is not an automatic solution for every cooling issue.',
      items: [
        {
          title: 'Operating Pressure Inspection',
          description: 'Measuring suction and discharge pressures with manifold gauges to determine if refrigerant levels are actually below manufacturer specifications.',
        },
        {
          title: 'Joint & Leak Detection',
          description: 'Inspecting flare connections, service valves, and coil joints for oil traces or micro-cracks before introducing fresh refrigerant.',
        },
        {
          title: 'Joint Tightening & Sealing',
          description: 'Addressing accessible joint seepage or flare nut loosening to ensure new refrigerant does not escape into the atmosphere.',
        },
        {
          title: 'Refrigerant Recharging (R32, R410A, R22)',
          description: 'Carefully charging the system with the exact refrigerant type specified on the manufacturer unit nameplate.',
        },
      ],
    },
    commonSituations: {
      heading: 'When Should Refrigerant Be Inspected?',
      intro: 'Refrigerant-related service may be appropriate if you observe specific signs after checking that air filters and coils are clean:',
      items: [
        'AC runs continuously with clean filters, but the air coming out is only room temperature',
        'Ice or frost formation is visible on the thin copper pipe at the outdoor unit',
        'Indoor cooling coil exhibits partial ice frost lines along the aluminum fins',
        'Hissing sound heard near the indoor flare joints or outdoor service valves',
        'AC was recently relocated or re-installed and lines were opened during transit',
      ],
    },
    considerations: {
      heading: 'Important: Gas Refilling Is Not a Cure-All',
      intro: 'We believe in giving customers honest, practical information rather than treating gas charging as a universal fix:',
      items: [
        {
          title: 'Air Conditioners Do Not "Burn" Gas',
          description: 'Refrigerant circulates in a sealed copper loop. Unlike petrol in a car, an AC does not consume gas through normal operation. If gas is low, there is an escape point.',
        },
        {
          title: 'Refilling Without Leak Check Is Short-Lived',
          description: 'Adding gas into a system without identifying and addressing the leak usually results in the gas leaking out again. Inspection must precede refilling.',
        },
        {
          title: 'Multiple Other Causes for Low Cooling',
          description: 'A dirty outdoor coil, blocked indoor filter, faulty run capacitor, or failing fan motor can cause poor cooling even when gas pressure is completely normal.',
        },
      ],
    },
    process: {
      heading: 'How Refrigerant Inspection & Gas Refilling Works',
      intro: 'We follow a structured diagnostic routine before introducing any refrigerant into your cooling equipment.',
      disclaimer: 'Typical service process may include the following steps (depending on system condition, refrigerant type, and unit location):',
      steps: [
        {
          stepNumber: 1,
          title: 'Review Cooling Complaint & Baseline Run',
          description: 'We run the AC to observe compressor engagement, fan speeds, and vent temperature differential.',
        },
        {
          stepNumber: 2,
          title: 'Pressure Measurement & Physical Inspection',
          description: 'We connect manifold gauges to test suction pressure and inspect service ports, flare nuts, and copper tubing for signs of refrigerant oil seepage.',
        },
        {
          stepNumber: 3,
          title: 'Determine If Gas Service Is Truly Required',
          description: 'If pressure is normal and poor cooling is due to dirty coils or an electrical issue, we advise you accordingly rather than charging gas unnecessarily.',
        },
        {
          stepNumber: 4,
          title: 'Joint Repair & Refrigerant Charging',
          description: 'Where leak repair is feasible, joints are secured and the correct refrigerant (such as R32, R410A, or R22) is charged according to manufacturer guidelines.',
        },
        {
          stepNumber: 5,
          title: 'Operating Current & Cooling Verification',
          description: 'We measure compressor running amperage and confirm that cold air discharge reaches stable, comfortable cooling temperatures.',
        },
      ],
    },
    benefits: {
      heading: 'Why Contact Patel Cool Tech for AC Gas Refilling',
      intro: 'Honest assessments from local technicians who explain the real condition of your cooling system.',
      items: [
        {
          title: 'Honest, Non-Pushy Advice',
          description: 'If your AC simply needs coil servicing or a capacitor change rather than expensive gas refilling, we tell you straight.',
        },
        {
          title: 'Direct Technician Contact',
          description: 'Discuss symptoms directly with Mahendra and Satyam Patel before booking an on-site visit.',
        },
        {
          title: 'Compatible Refrigerants',
          description: 'Experience handling modern eco-refrigerants like R32 and R410A as well as older R22 systems across leading brands.',
        },
        {
          title: 'Indore, Rau & Pithampur Service',
          description: 'Prompt on-site visits across key residential neighborhoods and industrial areas.',
        },
      ],
    },
    serviceAreaNotice: 'Patel Cool Tech serves customers across Indore, including Rau, Pithampur, and nearby areas.',
    faqs: [
      {
        question: 'Does low cooling always mean my AC needs gas refilling?',
        answer: 'No. Low cooling is frequently caused by choked air filters, dirt-encrusted outdoor condenser coils, a weak running capacitor, or a slow blower fan. An on-site diagnostic check is necessary to determine whether refrigerant pressure is actually low.',
      },
      {
        question: 'Why does an AC lose gas if it is a sealed system?',
        answer: 'Refrigerant circulates in a closed copper loop. Gas can escape over time due to flare nut loosening from vibration, micro-cracks in brazed joints, corrosion on coil bends, or physical line damage.',
      },
      {
        question: 'Should an AC be inspected for leaks before refilling gas?',
        answer: 'Yes. Simply topping up gas without inspecting for leaks means the newly charged refrigerant may escape again over days or weeks. Technicians should always inspect accessible joints first.',
      },
      {
        question: 'Can low refrigerant cause ice to form on the AC pipes?',
        answer: 'Yes. When refrigerant pressure drops below normal operating thresholds, the boiling point of the gas changes, which often causes moisture in the surrounding air to freeze as ice on the thin copper line or on the indoor evaporator coil.',
      },
      {
        question: 'Which refrigerant types do you handle?',
        answer: 'We handle common residential and commercial refrigerants matching your unit nameplate specifications, including R32, R410A, and R22 across major brands.',
      },
    ],
    relatedSlugs: ['ac-service', 'ac-repair', 'ac-installation', 'ac-amc'],
  },

  'ac-amc': {
    slug: 'ac-amc',
    id: 'ac-amc',
    title: 'AC AMC & Maintenance',
    h1: 'AC AMC & Maintenance in Indore',
    metaTitle: 'AC AMC & Maintenance in Indore | Patel Cool Tech',
    metaDescription: 'Annual Maintenance Contracts and scheduled AC preventive servicing for homes, offices, and shops in Indore, Rau, and Pithampur. Contact Patel Cool Tech.',
    category: 'Annual Maintenance Contracts',
    badge: 'Contract & Preventive Care',
    shortSummary: 'Plan ahead and protect your air conditioning systems with custom Annual Maintenance Contracts (AMC) for residences, commercial offices, and retail spaces in Indore.',
    whatItCovers: {
      heading: 'What an AC Annual Maintenance Contract Covers',
      intro: 'An Annual Maintenance Contract (AMC) is a planned arrangement where your air conditioning units receive scheduled seasonal servicing and periodic checkups throughout the year to maintain reliability and extend operating lifespan.',
      items: [
        {
          title: 'Scheduled Preventive Servicing',
          description: 'Pre-planned wet and dry servicing visits across the year to keep cooling coils, air filters, and condenser fins consistently clear of dust.',
        },
        {
          title: 'Electrical & Mechanical Inspection',
          description: 'Routine checks of running capacitors, electrical contactors, wiring terminals, and fan motor operation to catch wear before breakdowns happen.',
        },
        {
          title: 'Refrigerant & Performance Monitoring',
          description: 'Periodic checks of operating temperatures, condensate drainage flow, and cooling response to ensure efficient ongoing operation.',
        },
        {
          title: 'Priority Communication for Breakdowns',
          description: 'Direct contact with local technicians when unexpected cooling issues arise during peak summer months.',
        },
      ],
    },
    commonSituations: {
      heading: 'Who Benefits from an AC Maintenance Plan?',
      intro: 'Planned maintenance arrangements are suitable for both residential properties and commercial establishments where dependable cooling is essential:',
      items: [
        'Commercial offices, co-working spaces, and IT setups where air conditioning must run continuously during business hours',
        'Retail showrooms, bank branches, and clinics where customer comfort is a daily necessity',
        'Large homes, multi-story residences, and apartments with multiple split AC units installed across different rooms',
        'Manufacturing units and industrial offices in Rau and Pithampur requiring dependable cooling machinery',
        'Property owners seeking hassle-free scheduled upkeep without worrying about booking one-off visits each season',
      ],
    },
    considerations: {
      heading: 'Tailored AMC Arrangements',
      intro: 'Every property has different cooling equipment, tonnage, and usage intensity. We keep our AMC terms realistic and customized:',
      items: [
        {
          title: 'Customized to Unit Count & Brand',
          description: 'Whether you have 2 split units at home or 15 units across an office floor, we discuss a maintenance schedule that fits your equipment inventory.',
        },
        {
          title: 'Straightforward Scope Discussion',
          description: 'We do not make arbitrary blanket promises regarding free spare parts or instant response times. We review your site and outline a clear, realistic arrangement.',
        },
        {
          title: 'Direct Accountability',
          description: 'You deal directly with Mahendra and Satyam Patel—the technicians who know your units, past service records, and property layout.',
        },
      ],
    },
    process: {
      heading: 'How to Discuss & Setup an AMC',
      intro: 'Arranging an AMC with Patel Cool Tech is simple and transparent.',
      disclaimer: 'Typical AMC arrangement process includes:',
      steps: [
        {
          stepNumber: 1,
          title: 'Initial Discussion & Requirements',
          description: 'Contact us via Call or WhatsApp to share your location, the number of AC units, their approximate age, and types (split or window).',
        },
        {
          stepNumber: 2,
          title: 'Site Visit & Preliminary AC Inspection',
          description: 'We visit your home or business premises in Indore, Rau, or Pithampur to check unit conditions and understand your usage patterns.',
        },
        {
          stepNumber: 3,
          title: 'Maintenance Schedule Proposal',
          description: 'We agree on the frequency of preventive service visits suitable for your cooling needs, especially ahead of peak summer months.',
        },
        {
          stepNumber: 4,
          title: 'Scheduled Maintenance Visits',
          description: 'Our technicians carry out planned deep coil cleanings, filter washes, electrical checks, and operational tests according to schedule.',
        },
        {
          stepNumber: 5,
          title: 'Ongoing Responsive Support',
          description: 'Enjoy direct communication whenever urgent troubleshooting or seasonal guidance is needed during the contract period.',
        },
      ],
    },
    benefits: {
      heading: 'Why Choose Patel Cool Tech for Your AC AMC',
      intro: 'Personalized commercial and residential maintenance from dedicated local HVAC professionals.',
      items: [
        {
          title: 'Direct Technician Access',
          description: 'No third-party call center or changing roster of unknown sub-contractors. You speak with Mahendra and Satyam Patel.',
        },
        {
          title: 'Coverage in Indore, Rau & Pithampur',
          description: 'Proven track record of servicing both urban Indore residences and commercial/industrial sites across Rau and Pithampur.',
        },
        {
          title: 'Experience Across Major Brands',
          description: 'Familiar with managing mixed-brand inventories including Daikin, Voltas, LG, Blue Star, Lloyd, and Carrier.',
        },
        {
          title: 'Preventive Approach',
          description: 'Focused on reducing sudden summertime breakdowns through regular coil care and early detection of minor electrical wear.',
        },
      ],
    },
    serviceAreaNotice: 'Patel Cool Tech serves customers across Indore, including Rau, Pithampur, and nearby areas.',
    faqs: [
      {
        question: 'What is an AC Annual Maintenance Contract (AMC)?',
        answer: 'An AC AMC is an agreement for planned, regular preventive servicing and inspections across the year. It ensures your air conditioners receive systematic cleaning, electrical checks, and performance reviews before and during high-usage seasons.',
      },
      {
        question: 'Who can benefit from an AC AMC in Indore?',
        answer: 'AMCs are beneficial for commercial offices, clinics, retail shops, educational facilities, and residences with multiple AC units where dependable cooling and routine maintenance are desired without booking one-off visits.',
      },
      {
        question: 'What information should I provide to discuss an AMC?',
        answer: 'Sharing the number of AC units, their type (split or window), approximate age, brand, and site address in Indore, Rau, or Pithampur helps us provide practical recommendations for a suitable maintenance schedule.',
      },
      {
        question: 'Can an AMC cover multiple split and window AC units?',
        answer: 'Yes. We cater to homes and offices with mixed inventories of split and window units across different rooms, floors, or branches.',
      },
      {
        question: 'Do you provide AMC support in Rau and Pithampur industrial areas?',
        answer: 'Yes. We regularly serve commercial facilities, office buildings, and residential quarters in Rau, Pithampur, and surrounding zones.',
      },
    ],
    relatedSlugs: ['ac-service', 'ac-repair', 'ac-installation', 'ac-gas-refilling'],
  },
};
