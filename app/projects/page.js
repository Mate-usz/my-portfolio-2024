import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

import data from "@/data/projects.json";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col mx-auto max-w-3xl px-8">
      <Navbar />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4">Tutti i Progetti</h1>
        <Projects projects={data.projects} />
      </main>
      <Footer />
    </div>
  );
}
