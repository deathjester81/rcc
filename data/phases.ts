import { Phase } from '@/types';

export const phaseDefinitions: Omit<Phase, 'status'>[] = [
  {
    id: 0,
    name: 'Strategieworkshop',
    description: 'Orientierung schaffen und Potenziale identifizieren',
  },
  {
    id: 1,
    name: 'Analyse & Design',
    description: 'Klarheit über IST- und SOLL-Prozesse schaffen',
  },
  {
    id: 2,
    name: 'Umsetzung',
    description: 'Prozesse in die reale Ausführung bringen',
  },
  {
    id: 3,
    name: 'Vertiefung & Weiterentwicklung',
    description: 'Weitere Professionalisierung und Spezialisierung',
  },
];
