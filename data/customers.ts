import { Customer, Phase2Element } from '@/types';
import { phaseDefinitions } from './phases';

const phase2Elements: Phase2Element[] = [
  {
    id: 'prozessboard',
    name: 'Prozessboard',
    description: 'Abweichungsmanagement und Clustering',
    details: [
      'Abweichungs-management',
      'Clustering der Störungskarten',
    ],
    status: 'completed',
  },
  {
    id: 'umsetzungssession',
    name: 'Umsetzungs-Session',
    description: 'Arbeitspakete definieren und Aktionen ableiten',
    details: [
      'Arbeitspakete im Phasenplan definieren',
      'Aktionen und Massnahmen ableiten und umsetzen',
    ],
    status: 'completed',
  },
  {
    id: 'kernteam-review',
    name: 'Kernteam - Review',
    description: 'Status- und Zielerreichungs-Abgleich',
    details: [
      'Abgleich von Status und Zielerreichung',
    ],
    status: 'pending',
  },
  {
    id: 'gruppencoaching',
    name: 'Gruppencoaching',
    description: 'Weiterentwicklung PL+ und Entscheider durch RCC',
    details: [
      'Weiterentwicklung PL +',
      'Entscheider durch RCC',
    ],
    status: 'pending',
    isLink: true,
    linkPath: '/customers/tenbrink/gruppencoaching',
  },
];

const phase2ElementsTobler: Phase2Element[] = [
  {
    id: 'prozessboard',
    name: 'Prozessboard',
    description: 'Abweichungsmanagement und Clustering',
    details: [
      'Abweichungs-management',
      'Clustering der Störungskarten',
    ],
    status: 'pending',
  },
  {
    id: 'umsetzungssession',
    name: 'Umsetzungs-Session',
    description: 'Arbeitspakete definieren und Aktionen ableiten',
    details: [
      'Arbeitspakete im Phasenplan definieren',
      'Aktionen und Massnahmen ableiten und umsetzen',
    ],
    status: 'pending',
  },
  {
    id: 'kernteam-review',
    name: 'Kernteam - Review',
    description: 'Status- und Zielerreichungs-Abgleich',
    details: [
      'Abgleich von Status und Zielerreichung',
    ],
    status: 'pending',
  },
  {
    id: 'gruppencoaching',
    name: 'Gruppencoaching',
    description: 'Weiterentwicklung PL+ und Entscheider durch RCC',
    details: [
      'Weiterentwicklung PL +',
      'Entscheider durch RCC',
    ],
    status: 'pending',
    isLink: true,
    linkPath: '/customers/tobler/gruppencoaching',
  },
];

const phase2ElementsMIVA: Phase2Element[] = [
  {
    id: 'prozessboard',
    name: 'Prozessboard',
    description: 'Abweichungsmanagement und Clustering',
    details: [
      'Abweichungs-management',
      'Clustering der Störungskarten',
    ],
    status: 'completed',
  },
  {
    id: 'umsetzungssession',
    name: 'Umsetzungs-Session',
    description: 'Arbeitspakete definieren und Aktionen ableiten',
    details: [
      'Arbeitspakete im Phasenplan definieren',
      'Aktionen und Massnahmen ableiten und umsetzen',
    ],
    status: 'completed',
  },
  {
    id: 'kernteam-review',
    name: 'Kernteam - Review',
    description: 'Status- und Zielerreichungs-Abgleich',
    details: [
      'Abgleich von Status und Zielerreichung',
    ],
    status: 'completed',
  },
  {
    id: 'gruppencoaching',
    name: 'Gruppencoaching',
    description: 'Weiterentwicklung PL+ und Entscheider durch RCC',
    details: [
      'Weiterentwicklung PL +',
      'Entscheider durch RCC',
    ],
    status: 'completed',
    isLink: true,
    linkPath: '/customers/miva/gruppencoaching',
  },
];

const phase2ElementsLIF: Phase2Element[] = [
  {
    id: 'prozessboard',
    name: 'Prozessboard',
    description: 'Abweichungsmanagement und Clustering',
    details: [
      'Abweichungs-management',
      'Clustering der Störungskarten',
    ],
    status: 'pending',
  },
  {
    id: 'umsetzungssession',
    name: 'Umsetzungs-Session',
    description: 'Arbeitspakete definieren und Aktionen ableiten',
    details: [
      'Arbeitspakete im Phasenplan definieren',
      'Aktionen und Massnahmen ableiten und umsetzen',
    ],
    status: 'pending',
  },
  {
    id: 'kernteam-review',
    name: 'Kernteam - Review',
    description: 'Status- und Zielerreichungs-Abgleich',
    details: [
      'Abgleich von Status und Zielerreichung',
    ],
    status: 'pending',
  },
  {
    id: 'gruppencoaching',
    name: 'Gruppencoaching',
    description: 'Weiterentwicklung PL+ und Entscheider durch RCC',
    details: [
      'Weiterentwicklung PL +',
      'Entscheider durch RCC',
    ],
    status: 'pending',
    isLink: true,
    linkPath: '/customers/lif/gruppencoaching',
  },
];

export const customers: Customer[] = [
  {
    id: 'tenbrink',
    name: 'Tenbrink',
    industry: 'Produktion',
    overallStatus: 'in-progress',
    currentPhase: 2,
    phases: [
      { ...phaseDefinitions[0], status: 'completed' },
      { ...phaseDefinitions[1], status: 'completed' },
      { ...phaseDefinitions[2], status: 'in-progress' },
      { ...phaseDefinitions[3], status: 'available' },
    ],
    phase2Elements,
    achievements: [
      'Strategieworkshop erfolgreich abgeschlossen',
      'IST-Analyse und Prozessvisualisierung erstellt',
      'Zielprozesse definiert und dokumentiert',
      'Prozessboard Modul implementiert',
    ],
    nextSteps: 'Die nächsten sinnvollen Schritte umfassen die Umsetzung der verbleibenden Module in Phase 2 sowie die Vorbereitung auf Phase 3.',
  },
  {
    id: 'tobler',
    name: 'Tobler',
    industry: 'Handel',
    overallStatus: 'in-progress',
    currentPhase: 1,
    phases: [
      { ...phaseDefinitions[0], status: 'completed' },
      { ...phaseDefinitions[1], status: 'in-progress' },
      { ...phaseDefinitions[2], status: 'available' },
      { ...phaseDefinitions[3], status: 'available' },
    ],
    phase2Elements: phase2ElementsTobler,
    achievements: [
      'Strategieworkshop erfolgreich abgeschlossen',
      'Quick Wins identifiziert und umgesetzt',
    ],
    nextSteps: 'Nach Abschluss der Analyse & Design Phase können Sie mit der Umsetzung beginnen. Kontaktieren Sie uns für weitere Informationen.',
  },
  {
    id: 'miva',
    name: 'MIVA',
    industry: 'Dienstleistung',
    overallStatus: 'completed',
    currentPhase: 3,
    phases: [
      { ...phaseDefinitions[0], status: 'completed' },
      { ...phaseDefinitions[1], status: 'completed' },
      { ...phaseDefinitions[2], status: 'completed' },
      { ...phaseDefinitions[3], status: 'available' },
    ],
    phase2Elements: phase2ElementsMIVA,
    achievements: [
      'Alle Phasen bis Phase 2 erfolgreich abgeschlossen',
      'Prozessboard und Dokumentation implementiert',
      'Gruppencoaching durchgeführt',
      'Kernteam-Review etabliert',
    ],
    nextSteps: 'Phase 3 bietet weitere Möglichkeiten zur Vertiefung und Weiterentwicklung Ihrer Prozesse.',
  },
  {
    id: 'lif',
    name: 'LIF',
    industry: 'Produktion',
    overallStatus: 'in-progress',
    currentPhase: 1,
    phases: [
      { ...phaseDefinitions[0], status: 'completed' },
      { ...phaseDefinitions[1], status: 'completed' },
      { ...phaseDefinitions[2], status: 'available' },
      { ...phaseDefinitions[3], status: 'available' },
    ],
    phase2Elements: phase2ElementsLIF,
    achievements: [
      'Strategieworkshop erfolgreich abgeschlossen',
      'IST-Analyse und Prozessvisualisierung erstellt',
      'Zielprozesse definiert',
    ],
    nextSteps: 'Sie können nun mit Phase 2 - Umsetzung beginnen. Kontaktieren Sie uns für weitere Informationen zu den verfügbaren Modulen.',
  },
];

export function getCustomerById(id: string): Customer | undefined {
  return customers.find(c => c.id === id);
}
