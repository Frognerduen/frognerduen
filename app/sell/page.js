export default function Sell() {
  return (
    <div className="px-6 py-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-serif mb-4">Selg dine design</h1>
      <p className="mb-6">
        Vi ønsker å fremme nye talenter innen kunst, interiør og DIY-produkter. Hvis du er en
        designer som ønsker å selge dine egenlagde verk gjennom Frognerduen, kan du sende en
        søknad. Vi vurderer alle søknader individuelt og tar kun inn et begrenset antall designere for
        å sikre kvaliteten.
      </p>
      <p className="mb-6">
        Som designer på Frognerduen får du din egen side hvor du kan presentere og selge produktene
        dine. Det er ingen oppstartskostnad, men vi tar en liten provisjon av hvert salg for å
        dekke drift og markedsføring. Les mer om vilkår når du sender søknad.
      </p>
      <a
        href="mailto:Frognerduen@outlook.com?subject=S%C3%B8knad%20om%20%C3%A5%20selge%20p%C3%A5%20Frognerduen"
        className="bg-gold text-mocca px-6 py-3 rounded hover:bg-opacity-80"
      >
        Send e-post
      </a>
    </div>
  );
}