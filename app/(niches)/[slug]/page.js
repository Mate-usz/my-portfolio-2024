import { notFound } from "next/navigation";
import { niches } from "@/data/niches";
import ServicesLanding from "@/app/ServicesLanding";

export async function generateStaticParams() {
  return Object.keys(niches).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const niche = niches[params.slug];
  if (!niche) return {};
  return {
    title: niche.title,
    description: niche.description,
  };
}

export default function NichePage({ params }) {
  const niche = niches[params.slug];
  if (!niche) notFound();

  return (
    <div className="relative min-h-screen bg-neutral-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(80,80,255,0.12),transparent_80%)]" />
      <ServicesLanding headline={niche.headline} subheading={niche.subheading} />
    </div>
  );
}
