import WorkView from "@/components/nocturne/WorkView";
import it from "@/content/it";

export const metadata = {
  title: it.work.metaTitle,
  description: it.work.metaDescription,
  alternates: { canonical: "https://mateuszrodz.com/work" },
  openGraph: {
    title: it.work.metaTitle,
    description: it.work.metaDescription,
    url: "https://mateuszrodz.com/work",
    siteName: "Mateusz Rodz",
    images: [{ url: "https://mateuszrodz.com/og-image.png", width: 1200, height: 630 }],
    locale: "it_IT",
    type: "website",
  },
};

export default function WorkPage() {
  return <WorkView />;
}
