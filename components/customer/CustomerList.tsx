import { Customer } from '@/types';
import CustomerCard from './CustomerCard';

interface CustomerListProps {
  customers: Customer[];
}

export default function CustomerList({ customers }: CustomerListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {customers.map((customer, index) => (
        <CustomerCard key={customer.id} customer={customer} index={index} />
      ))}
    </div>
  );
}
