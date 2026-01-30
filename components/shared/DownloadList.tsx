import { Document } from '@/types';

interface DownloadListProps {
  documents: Document[];
}

export default function DownloadList({ documents }: DownloadListProps) {
  const getFileIcon = (type: Document['type']) => {
    switch (type) {
      case 'pdf':
        return '📄';
      case 'worksheet':
        return '📝';
      case 'template':
        return '📋';
      case 'summary':
        return '📊';
      default:
        return '📄';
    }
  };

  return (
    <div className="space-y-3">
      {documents.map((doc) => (
        <a
          key={doc.id}
          href={doc.downloadUrl}
          download
          className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md hover:border-rcc-blue-dark transition-all"
        >
          <span className="text-2xl">{getFileIcon(doc.type)}</span>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900">{doc.name}</h3>
            <p className="text-sm text-gray-500 capitalize">{doc.type}</p>
          </div>
          <span className="text-rcc-blue-dark">↓</span>
        </a>
      ))}
    </div>
  );
}
