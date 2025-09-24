import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4">
      <Image src="/logo.png" alt="Frognerduen Logo" width={200} height={200} />
      <h1 className="mt-6 text-5xl font-serif">Frognerduen</h1>
      <p className="mt-4 text-xl max-w-xl">
        Frognerduen – scenen for Norges skjulte designtalenter
      </p>
      <div className="mt-8 flex space-x-4">
        <Link href="/explore" className="bg-gold text-mocca px-6 py-3 rounded hover:bg-opacity-80">
          Utforsk
        </Link>
        <Link href="/sell" className="border border-gold text-gold px-6 py-3 rounded hover:bg-gold hover:text-mocca">
          Selg
        </Link>
      </div>
    </div>
  );
}