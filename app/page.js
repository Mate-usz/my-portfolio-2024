import ServicesLanding from "@/app/ServicesLanding";

export const metadata = {
  title:
    "Sviluppatore Web Freelance a Perugia | Landing Page in 48h | Mateusz Rodz",
  description:
    "Sviluppatore web freelance a Perugia. Creo landing page performanti in 48-72 ore e risolvo bug per freelance e piccole attività in tutta Italia. Preventivo gratuito.",
  keywords: [
    "sviluppatore web freelance perugia",
    "landing page perugia",
    "sviluppo web perugia",
    "creazione siti web perugia",
    "sviluppatore web freelance italia",
    "landing page nextjs",
    "programmatore web freelance",
  ],
  openGraph: {
    title: "Servizi Web per Freelance e Piccole Imprese",
    description:
      "Il tuo sito non porta clienti? Creo landing page professionali in 48 ore. Niente agenzie, parli direttamente con me.",
    url: "https://mateuszrodz.com/#services",
    siteName: "Mateusz Developer",
    images: [
      {
        url: "https://mateuszrodz.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "it_IT",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Mateusz Rodz - Sviluppatore Web Freelance",
  url: "https://mateuszrodz.com",
  description:
    "Sviluppo landing page professionali per freelance e piccole attività in 48-72 ore. Fix bug, ottimizzazione performance e soluzioni web su misura.",
  areaServed: { "@type": "Country", name: "Italy" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Perugia",
    addressRegion: "Umbria",
    addressCountry: "IT",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servizi Web",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Web Fix & Boost" },
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 50,
          maxPrice: 250,
          priceCurrency: "EUR",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Landing Page in 48-72h" },
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 300,
          maxPrice: 450,
          priceCurrency: "EUR",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Landing Page + Prenotazioni" },
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 500,
          maxPrice: 700,
          priceCurrency: "EUR",
        },
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-neutral-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(80,80,255,0.12),transparent_80%)]"></div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesLanding />
    </div>
  );
}
