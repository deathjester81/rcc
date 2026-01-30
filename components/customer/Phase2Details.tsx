import Link from 'next/link';
import { Phase2Element } from '@/types';

interface Phase2DetailsProps {
  elements: Phase2Element[];
  customerId: string;
}

export default function Phase2Details({ elements, customerId }: Phase2DetailsProps) {
  const getElementIcon = (elementId: string) => {
    switch (elementId) {
      case 'prozessboard':
        return '📋';
      case 'umsetzungssession':
        return '📝';
      case 'kernteam-review':
        return '👥';
      case 'gruppencoaching':
        return '💼';
      default:
        return '📄';
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Phase 2 – Umsetzung im Detail</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {elements.map((element) => {
          const content = (
            <div
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                element.status === 'completed'
                  ? 'border-green-200 bg-green-50'
                  : 'border-gray-200 bg-gray-50'
              } ${element.isLink ? 'hover:shadow-md cursor-pointer hover:border-rcc-blue-dark' : ''}`}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{getElementIcon(element.id)}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{element.name}</h3>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        element.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {element.status === 'completed' ? 'Erledigt' : 'Offen'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{element.description}</p>
                  <ul className="space-y-1">
                    {element.details.map((detail, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-gray-400 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  {element.isLink && (
                    <div className="mt-3 text-sm text-rcc-blue-dark font-medium">
                      → Details anzeigen
                    </div>
                  )}
                </div>
              </div>
            </div>
          );

          if (element.isLink && element.linkPath) {
            return (
              <Link key={element.id} href={element.linkPath}>
                {content}
              </Link>
            );
          }

          return <div key={element.id}>{content}</div>;
        })}
      </div>
    </div>
  );
}
