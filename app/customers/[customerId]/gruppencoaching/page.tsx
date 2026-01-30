import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCustomerById } from '@/data/customers';
import DownloadList from '@/components/shared/DownloadList';
import { Document } from '@/types';

interface GruppencoachingPageProps {
  params: {
    customerId: string;
  };
}

// Mock-Dokumente für Gruppencoaching
const mockDocuments: Document[] = [
  {
    id: '1',
    name: 'Coaching Session 1 - Einführung',
    type: 'pdf',
    downloadUrl: '#',
  },
  {
    id: '2',
    name: 'Arbeitsblatt - Reflexion',
    type: 'worksheet',
    downloadUrl: '#',
  },
  {
    id: '3',
    name: 'Template - Zielsetzung',
    type: 'template',
    downloadUrl: '#',
  },
  {
    id: '4',
    name: 'Zusammenfassung Session 1',
    type: 'summary',
    downloadUrl: '#',
  },
  {
    id: '5',
    name: 'Coaching Session 2 - Vertiefung',
    type: 'pdf',
    downloadUrl: '#',
  },
];

export default function GruppencoachingPage({ params }: GruppencoachingPageProps) {
  const customer = getCustomerById(params.customerId);

  if (!customer) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-rcc-blue-light">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link
          href={`/customers/${customer.id}`}
          className="inline-flex items-center text-rcc-blue-dark hover:text-blue-700 mb-6 transition-colors"
        >
          ← Zurück zu {customer.name}
        </Link>

        <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Gruppencoaching</h1>
          <p className="text-gray-600 mb-8">
            Hier finden Sie alle Dokumente aus den Gruppencoaching-Sessions, an denen Sie
            teilgenommen haben.
          </p>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Verfügbare Dokumente</h2>
            <DownloadList documents={mockDocuments} />
          </div>
        </div>
      </div>
    </main>
  );
}
