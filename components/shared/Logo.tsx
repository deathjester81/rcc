import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
      <Image
        src="/logo.jpg"
        alt="RCC Logo"
        width={120}
        height={40}
        className="h-auto w-auto"
        priority
      />
    </Link>
  );
}
