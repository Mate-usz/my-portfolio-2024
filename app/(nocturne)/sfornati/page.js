import SfornatiView from "@/components/nocturne/SfornatiView";
import it from "@/content/it";

export const metadata = {
  title: it.archive.metaTitle,
  description: it.archive.metaDescription,
  alternates: { canonical: "https://mateuszrodz.com/sfornati" },
  openGraph: {
    title: `${it.archive.title} — Mateusz Rodz`,
    description: it.archive.metaDescription,
    url: "https://mateuszrodz.com/sfornati",
    siteName: "Mateusz Rodz",
    images: [{ url: "https://mateuszrodz.com/og-image.png", width: 1200, height: 630 }],
    locale: "it_IT",
    type: "website",
  },
};

export default function SfornatiPage() {
  return <SfornatiView />;
}
