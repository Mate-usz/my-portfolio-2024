import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SfornatiGrid from "@/components/SfornatiGrid";
import data from "@/data/sfornati.json";

export const metadata = {
  title: "Sfornati",
  description: "Pizze e altre sfornate fatte in casa, foto dopo foto.",
};

export default function SfornatiPage() {
  return (
    <div className="min-h-screen flex flex-col mx-auto max-w-3xl px-8">
      <Navbar />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-2">Sfornati 🍕</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
          Un piccolo diario fotografico di quello che sforno, principalmente pizze.
          Un po&apos; hobby, un po&apos; ossessione, un po&apos; CV per fare il pizzaiolo.
        </p>
        <SfornatiGrid photos={data.photos} notes={data.notes} />
      </main>
      <Footer />
    </div>
  );
}
