import listings from '../../../data/listings';
import Image from 'next/image';

export default function ListingPage({ params }) {
  const item = listings.find((l) => l.slug === params.slug);
  if (!item) {
    return <div className="p-8">Produkt ikke funnet.</div>;
  }
  return (
    <div className="px-6 py-8 max-w-3xl mx-auto">
      <div className="relative w-full h-80">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover rounded"
        />
      </div>
      <h1 className="text-3xl font-serif mt-6">{item.title}</h1>
      <p className="text-gold text-xl mt-2 font-semibold">
        {item.price} {item.currency}
      </p>
      <p className="mt-4 leading-relaxed">{item.description}</p>
      <div className="mt-6">
        <a
          href={`mailto:Frognerduen@outlook.com?subject=Foresp%C3%B8rsel%20om%20${encodeURIComponent(
            item.title
          )}`}
          className="bg-gold text-mocca px-6 py-3 rounded hover:bg-opacity-80"
        >
          Kontakt designer
        </a>
      </div>
    </div>
  );
}