import { Customer } from '@/types';
import StatusBadge from '@/components/shared/StatusBadge';

interface CustomerHeaderProps {
  customer: Customer;
}

export default function CustomerHeader({ customer }: CustomerHeaderProps) {
  return (
    <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{customer.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{customer.industry}</p>
          <div className="flex items-center gap-4">
            <div>
              <span className="text-sm text-gray-500">Gesamtstatus:</span>
              <StatusBadge status={customer.overallStatus} className="ml-2" />
            </div>
            <div>
              <span className="text-sm text-gray-500">Aktuelle Phase:</span>
              <span className="ml-2 text-sm font-medium text-gray-900">
                Phase {customer.currentPhase}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
