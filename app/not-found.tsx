import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-rcc-blue-light flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-gray-600 mb-8">Kunde nicht gefunden</p>
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 bg-rcc-blue-dark text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Zurück zur Übersicht
        </Link>
      </div>
    </main>
  );
}
