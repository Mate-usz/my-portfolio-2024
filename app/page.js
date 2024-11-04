import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Experiences from "../components/Experiences";
import Projects from "@/components/Projects";

import data from "@/data/projects.json";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col mx-auto max-w-3xl px-8">
      <Navbar />
      <Header />
      <Experiences />
      <Projects projects={data.projects.slice(0, 2)} viewMore={true} />
    </div>
  );
}
