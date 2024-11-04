import Image from "next/image";
import Socials from "./Socials";

const MATEUSZ_BIRTH_YEAR = 1996;

export default function Header() {
  return (
    <header className="flex flex-col items-start md:flex-row-reverse md:items-center justify-between text-center p-6 ">
      <Image
        src="/Buffo.png"
        alt="Mateusz photo"
        width={200}
        height={200}
        className="rounded-xl "
      />
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-3xl font-bold mt-4 dark:text-gray-200">
          Hi, I am Mateusz Rodz 👋
        </h1>
        <p className="mt-4 text-gray-700 dark:text-gray-400">
          I am a {new Date().getFullYear() - MATEUSZ_BIRTH_YEAR} years old
          software developer from Italy.
        </p>
        <p className="mt-2 text-left text-gray-700 dark:text-gray-400">
          I like to develop webapps, from time to time I develop some
          videogames, drink expressos and play chess ♟
        </p>
        <p className="mt-2 text-sm overline text-left text-gray-700 dark:text-gray-400">
          Oh, and I almost forgot, I make great pizzas every Saturday 🍕
        </p>
        <div className="flex space-x-4 mt-4">
          {/* Social links */}
          <Socials />
          {/* Download CV*/}
          <a
            href="/Mateusz_Rodz_resume_eng.pdf"
            download
            className="mt-4 border border-green-400 bg-transparent opacity-80 hover:opacity-100 hover:bg-green-500  px-4 py-2 rounded transition-all ease-in-out"
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
