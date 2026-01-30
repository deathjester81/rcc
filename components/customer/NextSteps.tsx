import ContactButton from '@/components/shared/ContactButton';

interface NextStepsProps {
  nextSteps: string;
  showContactButton?: boolean;
}

export default function NextSteps({ nextSteps, showContactButton = false }: NextStepsProps) {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Nächste sinnvolle Schritte</h2>
      <p className="text-gray-700 mb-4">{nextSteps}</p>
      {showContactButton && (
        <div className="mt-4">
          <ContactButton />
        </div>
      )}
    </div>
  );
}
