import { Phase } from '@/types';
import StatusBadge from '@/components/shared/StatusBadge';
import ContactButton from '@/components/shared/ContactButton';

interface PhaseCardProps {
  phase: Phase;
}

export default function PhaseCard({ phase }: PhaseCardProps) {
  const getPhaseIcon = (phaseId: number) => {
    switch (phaseId) {
      case 0:
        return '📋';
      case 1:
        return '📐';
      case 2:
        return '🔧';
      case 3:
        return '🚀';
      default:
        return '📄';
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{getPhaseIcon(phase.id)}</span>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Phase {phase.id} – {phase.name}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{phase.description}</p>
          </div>
        </div>
        <StatusBadge status={phase.status} />
      </div>
      {phase.status === 'available' && (
        <div className="mt-4">
          <ContactButton />
        </div>
      )}
    </div>
  );
}
