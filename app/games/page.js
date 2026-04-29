import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GamesGrid from "@/components/GamesGrid";
import gamesData from "@/data/games.json";

export const metadata = {
  title: "Games",
  robots: { index: false, follow: false },
};

export default function GamesPage() {
  return (
    <div className="min-h-screen flex flex-col mx-auto max-w-3xl px-8">
      <Navbar />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-2">Games</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
          Piccoli giochi fatti con GameMaker. Clicca per giocare.
        </p>
        <GamesGrid games={gamesData.games} />
      </main>
      <Footer />
    </div>
  );
}
