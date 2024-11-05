"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

import data from "@/data/projects.json";
import { useEffect, useState } from "react";

const filters = ["all", "web", "games"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState(data.projects);

  useEffect(() => {
    if (filter === "all") {
      setProjects(data.projects);
    } else {
      setProjects(data.projects.filter((p) => p.category === filter));
    }
  }, [filter]);

  return (
    <div className="min-h-screen flex flex-col mx-auto max-w-3xl px-8">
      <Navbar />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4">All Projects</h1>
        <div className="flex space-x-2 items-center justify-center">
          {filters.map((f) => (
            <button
              key={f}
              className={`border border-gray-400 ${
                filter === f
                  ? "bg-gray-700 dark:bg-gray-200 text-white dark:text-black"
                  : "bg-transparent"
              } px-4 py-2 rounded`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <Projects projects={projects} />
      </main>
      <Footer />
    </div>
  );
}
