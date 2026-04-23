import Image from "next/image";
import Socials from "./Socials";

const MATEUSZ_BIRTHDAY = new Date(1996, 5, 1); // June 1, 1996

function calculateAge() {
  const today = new Date();
  let age = today.getFullYear() - MATEUSZ_BIRTHDAY.getFullYear();
  const m = today.getMonth() - MATEUSZ_BIRTHDAY.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < MATEUSZ_BIRTHDAY.getDate())) age--;
  return age;
}

export default function Header() {
  return (
    <header className="flex flex-col items-start md:flex-row md:items-center justify-between text-center pt-6 md:p-6 ">
      <Image
        src="/profile_dark.jpg"
        alt="Mateusz photo"
        width={200}
        height={200}
        className="hidden dark:block rounded-xl"
      />
      <Image
        src="/profile_pic.jpg"
        alt="Mateusz photo"
        width={200}
        height={200}
        className="rounded-xl dark:hidden"
      />
      <div className="flex flex-col items-center md:items-start md:pl-4">
        <h1 className="text-3xl font-bold mt-4 dark:text-gray-200">
          Hi, I am Mateusz Rodz 👋
        </h1>
        <p className="mt-4 text-left text-gray-700 dark:text-gray-400">
          I am a {calculateAge()} years old
          software developer from Italy.
        </p>
        <p className="mt-2 text-left text-gray-700 dark:text-gray-400">
          I like to develop webapps, from time to time I develop some
          videogames, drink espresso coffees and play chess ♟
        </p>
        <p className="mt-2 text-sm overline text-left text-gray-700 dark:text-gray-400">
          Oh, and I almost forgot, I make great pizzas every Saturday 🍕
        </p>
        <div className="flex flex-col md:flex-row space-x-4 mt-4">
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
