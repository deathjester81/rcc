interface ContactButtonProps {
  className?: string;
}

export default function ContactButton({ className = '' }: ContactButtonProps) {
  return (
    <a
      href="https://r-c-c.ch/termin/"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center px-6 py-3 bg-rcc-navy text-white font-bold rounded-xl hover:bg-rcc-blue transition-all duration-300 shadow-lg hover:shadow-rcc-blue/20 hover:-translate-y-0.5 active:translate-y-0 ${className}`}
    >
      Kontakt aufnehmen
    </a>
  );
}
