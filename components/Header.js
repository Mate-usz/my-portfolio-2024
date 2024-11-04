import Image from "next/image";
import Socials from "./Socials";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row-reverse justify-between text-center p-6 ">
      <Image
        src="/Buffo.png"
        alt="My photo"
        width={150}
        height={150}
        className="rounded-xl"
      />
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-3xl font-bold mt-4 dark:text-gray-400">
          Ciao, sono Mateusz Rodz
        </h1>
        <p className="mt-2 text-gray-700">Breve descrizione su di me.</p>
        <div className="flex space-x-4 mt-4">
          {/* Social links */}
          <Socials />
          {/* Download CV*/}
          <a
            href="/cv.pdf"
            download
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
