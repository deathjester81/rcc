import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCustomerById } from '@/data/customers';
import CustomerHeader from '@/components/customer/CustomerHeader';
import RoadmapTimeline from '@/components/customer/RoadmapTimeline';
import Phase2Details from '@/components/customer/Phase2Details';
import Achievements from '@/components/customer/Achievements';
import NextSteps from '@/components/customer/NextSteps';

interface CustomerPageProps {
  params: {
    customerId: string;
  };
}

export default function CustomerPage({ params }: CustomerPageProps) {
  const customer = getCustomerById(params.customerId);

  if (!customer) {
    notFound();
  }

  const hasPhase2Purchased = customer.phases.find(p => p.id === 2)?.status !== 'available';
  const hasNextPhaseAvailable = customer.phases.some(p => p.status === 'available');

  return (
    <main className="min-h-screen bg-rcc-blue-light">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <Link
          href="/"
          className="inline-flex items-center text-rcc-blue-dark hover:text-blue-700 mb-6 transition-colors"
        >
          ← Zurück zur Übersicht
        </Link>
        
        <CustomerHeader customer={customer} />
        <RoadmapTimeline phases={customer.phases} />
        
        {hasPhase2Purchased && customer.phase2Elements && (
          <Phase2Details elements={customer.phase2Elements} customerId={customer.id} />
        )}
        
        <Achievements achievements={customer.achievements} />
        <NextSteps nextSteps={customer.nextSteps} showContactButton={hasNextPhaseAvailable} />
      </div>
    </main>
  );
}
