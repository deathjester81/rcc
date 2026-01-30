import { customers } from '@/data/customers';
import CustomerList from '@/components/customer/CustomerList';

export default function Home() {
  return (
    <main className="min-h-screen bg-rcc-blue-light">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            RCC - Rossetti Coaching & Consulting
          </h1>
          <p className="text-gray-600">Kundenübersicht</p>
        </div>
        <CustomerList customers={customers} />
      </div>
    </main>
  );
}
