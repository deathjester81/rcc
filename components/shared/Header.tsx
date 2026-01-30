import Link from 'next/link';
import Logo from './Logo';
import ContactButton from './ContactButton';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/50 backdrop-blur-xl border-b border-white/20">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-7xl">
        <Logo />
        <div className="hidden md:block">
          <ContactButton />
        </div>
      </div>
    </header>
  );
}
