import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gold bg-mocca">
      <Link href="/" className="flex items-center space-x-2 hover:opacity-90">
        <Image src="/logo.png" alt="Frognerduen logo" width={40} height={40} />
        <span className="font-serif text-2xl">Frognerduen</span>
      </Link>
      <nav className="flex space-x-6 text-lg">
        <Link href="/explore" className="hover:text-gold">Utforsk</Link>
        <Link href="/sell" className="hover:text-gold">Selg</Link>
        <Link href="/vip" className="hover:text-gold">VIP</Link>
        <a href="https://frognerduen.store" target="_blank" rel="noopener noreferrer" className="hover:text-gold">Merch</a>
      </nav>
    </header>
  );
}