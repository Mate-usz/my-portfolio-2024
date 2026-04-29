import Image from "next/image";
import Link from "next/link";

const t = {
  en: { title: "Projects", showMore: "Show more" },
  it: { title: "Progetti", showMore: "Vedi tutti" },
};

export default function Projects({ projects, viewMore = false, locale = "en" }) {
  const s = t[locale];

  return (
    <section className="p-6">
      {viewMore && (
        <h2 className="text-2xl font-bold flex justify-between items-center">
          {s.title}
          <Link href="/projects" className="text-blue-600 underline text-base font-normal">
            {s.showMore}
          </Link>
        </h2>
      )}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="project-click"
            data-umami-event-title={project.title}
            className="flex flex-col border border-gray-600 rounded-lg p-4 hover:border-gray-400 transition-colors"
          >
            <Image
              src={project.image}
              width={500}
              height={300}
              alt={project.title}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2 mb-auto text-sm">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1">
              {project.technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="inline-flex bg-gray-200 text-gray-800 font-semibold px-1 rounded text-xs"
                >
                  {tech}
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
