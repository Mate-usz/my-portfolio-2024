import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col mx-auto max-w-3xl px-8">
      <Navbar />
      <Header />
    </div>
  );
}
