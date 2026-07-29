import ServicesView from "@/components/nocturne/ServicesView";
import it from "@/content/it";

/*
 * /services eredita il SEO della vecchia landing dei servizi (app/page.js):
 * stesse keyword e stesso JSON-LD ProfessionalService, aggiornati con il
 * quarto pacchetto (Store Shopify) e con l'URL definitivo della pagina.
 */
export const metadata = {
  title: it.services.metaTitle,
  description: it.services.metaDescription,
  keywords: [
    "sviluppatore web freelance perugia",
    "landing page perugia",
    "sviluppo web perugia",
    "creazione siti web perugia",
    "sviluppatore web freelance italia",
    "landing page nextjs",
    "programmatore web freelance",
  ],
  alternates: { canonical: "https://mateuszrodz.com/services" },
  openGraph: {
    title: "Servizi web per piccole attività — Mateusz Rodz",
    description: it.services.metaDescription,
    url: "https://mateuszrodz.com/services",
    siteName: "Mateusz Rodz",
    images: [{ url: "https://mateuszrodz.com/og-image.png", width: 1200, height: 630 }],
    locale: "it_IT",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Mateusz Rodz - Sviluppatore Web Freelance",
  url: "https://mateuszrodz.com/services",
  description:
    "Sviluppo landing page professionali per freelance e piccole attività in 48-72 ore. Fix bug, ottimizzazione performance, prenotazioni e store Shopify.",
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
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Store Shopify" },
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 900,
          priceCurrency: "EUR",
        },
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesView />
    </>
  );
}
