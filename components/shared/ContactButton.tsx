interface ContactButtonProps {
  className?: string;
}

export default function ContactButton({ className = '' }: ContactButtonProps) {
  return (
    <a
      href="https://r-c-c.ch/termin/"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center px-4 py-2 bg-rcc-blue-dark text-white rounded-lg hover:bg-blue-700 transition-colors ${className}`}
    >
      Kontakt aufnehmen
    </a>
  );
}
