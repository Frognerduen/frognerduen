import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-sm px-6 py-6 border-t border-gold bg-mocca flex flex-col sm:flex-row justify-between items-start">
      <div>
        <p>Org.nr. 924&nbsp;007&nbsp;567</p>
        <p>
          <a href="mailto:Frognerduen@outlook.com" className="underline">Frognerduen@outlook.com</a>
        </p>
      </div>
      <div className="mt-4 sm:mt-0 flex space-x-4">
        <Link href="/terms" className="underline hover:text-gold">Vilkår</Link>
        <Link href="/privacy" className="underline hover:text-gold">Personvern</Link>
      </div>
    </footer>
  );
}