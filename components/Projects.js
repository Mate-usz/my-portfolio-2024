import Image from "next/image";
import Link from "next/link";

export default function Projects({ projects, viewMore = false }) {
  return (
    <section className="p-6">
      {viewMore && (
        <h2 className="text-2xl font-bold flex justify-between items-center">
          Projects
          <a href="/projects" className="text-blue-600 underline">
            Show more
          </a>
        </h2>
      )}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col border border-gray-600 rounded-lg p-4"
          >
            <Link href={project.href}>
              <Image
                src={project.image}
                width={500}
                height={300}
                alt={project.title}
                className="w-full h-40 object-cover rounded"
              />
            </Link>
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
          </div>
        ))}
      </div>
    </section>
  );
}
