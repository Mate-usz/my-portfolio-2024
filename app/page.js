import ServicesLanding from "@/app/ServicesLanding";

export const metadata = {
  title:
    "Sviluppo Web, Landing Pages e Servizi per Freelance | Mateusz Developer",
  description:
    "Sviluppo landing page performanti, servizi per migliorare la presenza online e soluzioni SaaS su misura. Perfetto per professionisti e piccole aziende.",
  keywords: [
    "sviluppo web",
    "landing page",
    "freelance website",
    "sviluppatore web",
    "saas developer",
    "creazione siti web",
    "programmatore web",
  ],
  openGraph: {
    title: "Servizi Web per Freelance e Piccole Imprese",
    description:
      "Landing page performanti, micro SaaS e sviluppo su misura per piccole attività e professionisti.",
    url: "https://mateuszrodz.com/#services",
    siteName: "Mateusz Developer",
    images: [
      {
        url: "https://mateuszrodz.com/og-image.jpg",
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
  name: "Mateusz Rodz — Sviluppatore Web Freelance",
  url: "https://mateuszrodz.com",
  description:
    "Sviluppo landing page professionali per freelance e piccole attività in 48-72 ore. Fix bug, ottimizzazione performance e soluzioni web su misura.",
  areaServed: { "@type": "Country", name: "Italy" },
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
