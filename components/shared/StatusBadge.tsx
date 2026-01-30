import { PhaseStatus } from '@/types';

interface StatusBadgeProps {
  status: PhaseStatus;
  className?: string;
}

export default function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const baseClasses = 'px-3 py-1 rounded-full text-sm font-medium';
  
  const statusClasses = {
    completed: 'bg-green-100 text-green-800',
    'in-progress': 'bg-yellow-100 text-yellow-800',
    available: 'bg-gray-100 text-gray-800',
  };

  const statusLabels = {
    completed: 'Abgeschlossen',
    'in-progress': 'In Bearbeitung',
    available: 'Verfügbar',
  };

  return (
    <span className={`${baseClasses} ${statusClasses[status]} ${className}`}>
      {statusLabels[status]}
    </span>
  );
}
