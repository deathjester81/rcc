export type PhaseStatus = 'completed' | 'in-progress' | 'available';

export type OverallStatus = 'completed' | 'in-progress' | 'available';

export interface Phase {
  id: number;
  name: string;
  description: string;
  status: PhaseStatus;
}

export interface Phase2Element {
  id: string;
  name: string;
  description: string;
  details: string[];
  status: 'completed' | 'pending';
  isLink?: boolean;
  linkPath?: string;
}

export interface Customer {
  id: string;
  name: string;
  industry: string;
  overallStatus: OverallStatus;
  currentPhase: number;
  phases: Phase[];
  phase2Elements?: Phase2Element[];
  achievements: string[];
  nextSteps: string;
}

export interface Document {
  id: string;
  name: string;
  type: 'pdf' | 'worksheet' | 'template' | 'summary';
  downloadUrl: string;
}
