import Link from 'next/link';
import Image from 'next/image';
import listings from '../../data/listings';

export default function Explore() {
  return (
    <div className="px-6 py-8">
      <h1 className="text-3xl font-serif mb-6">Utforsk</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map((item) => (
          <Link
            key={item.slug}
            href={`/listing/${item.slug}`}
            className="block border border-gold rounded overflow-hidden hover:bg-gold hover:text-mocca transition"
          >
            <div className="relative w-full h-52">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gold font-medium">{item.price} {item.currency}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}