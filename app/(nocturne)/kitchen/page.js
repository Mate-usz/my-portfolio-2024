import KitchenView from "@/components/nocturne/KitchenView";
import it from "@/content/it";

export const metadata = {
  title: it.kitchen.metaTitle,
  description: it.kitchen.metaDescription,
  keywords: [
    "panificatore perugia",
    "aiuto pizzaiolo perugia",
    "stage forno umbria",
    "portfolio culinario",
    "pizza fatta in casa",
  ],
  alternates: { canonical: "https://mateuszrodz.com/kitchen" },
  openGraph: {
    title: `${it.kitchen.title} — Mateusz Rodz`,
    description: it.kitchen.metaDescription,
    url: "https://mateuszrodz.com/kitchen",
    siteName: "Mateusz Rodz",
    images: [{ url: "https://mateuszrodz.com/og-image.png", width: 1200, height: 630 }],
    locale: "it_IT",
    type: "website",
  },
};

export default function KitchenPage() {
  return <KitchenView />;
}
