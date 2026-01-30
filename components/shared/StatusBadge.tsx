import { PhaseStatus } from '@/types';

interface StatusBadgeProps {
  status: PhaseStatus;
  className?: string;
}

export default function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const baseClasses = 'px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm';
  
  const statusClasses = {
    completed: 'bg-green-500 text-white shadow-green-200',
    'in-progress': 'bg-rcc-blue text-white shadow-blue-200 animate-pulse',
    available: 'bg-slate-200 text-slate-500',
  };

  const statusLabels = {
    completed: 'Erledigt',
    'in-progress': 'Aktiv',
    available: 'Optional',
  };

  return (
    <span className={`${baseClasses} ${statusClasses[status]} ${className}`}>
      {statusLabels[status]}
    </span>
  );
}
