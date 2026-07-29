import HomeView from "@/components/nocturne/HomeView";

export const metadata = {
  title: "Mateusz Rodz — frontend developer e panificatore, Perugia",
  description:
    "Sviluppatore frontend a Perugia: portali bancari in consulenza, poi webapp, e-commerce e giochi per conto mio. Fuori dal lavoro impasto. Servizi, percorso e cucina.",
  alternates: { canonical: "https://mateuszrodz.com" },
  openGraph: {
    title: "Mateusz Rodz — frontend developer e panificatore",
    description:
      "Tre porte: servizi per piccole attività, il percorso professionale, il portfolio culinario.",
    url: "https://mateuszrodz.com",
    siteName: "Mateusz Rodz",
    images: [{ url: "https://mateuszrodz.com/og-image.png", width: 1200, height: 630 }],
    locale: "it_IT",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mateusz Rodz",
  url: "https://mateuszrodz.com",
  email: "rodzmateusz@gmail.com",
  telephone: "+393483749656",
  jobTitle: "Frontend developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Perugia",
    addressRegion: "Umbria",
    addressCountry: "IT",
  },
  sameAs: [
    "https://www.linkedin.com/in/mateusz-rodz",
    "https://github.com/Mate-usz",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeView />
    </>
  );
}
