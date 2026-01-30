import Link from 'next/link';
import { Customer } from '@/types';
import StatusBadge from '@/components/shared/StatusBadge';

interface CustomerCardProps {
  customer: Customer;
}

export default function CustomerCard({ customer }: CustomerCardProps) {
  const statusColorMap = {
    completed: 'border-green-500',
    'in-progress': 'border-yellow-500',
    available: 'border-gray-300',
  };

  return (
    <Link
      href={`/customers/${customer.id}`}
      className={`block p-6 bg-white rounded-lg border-2 ${statusColorMap[customer.overallStatus]} hover:shadow-lg transition-all duration-200`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{customer.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{customer.industry}</p>
        </div>
        <StatusBadge status={customer.overallStatus} />
      </div>
      <div className="text-sm text-gray-500">
        Phase {customer.currentPhase} von 3
      </div>
    </Link>
  );
}
