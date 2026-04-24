import Image from "next/image";
import Socials from "./Socials";

const CAREER_START = new Date(2019, 8, 1); // Sep 2019

function calculateYearsOfExperience() {
  const today = new Date();
  let years = today.getFullYear() - CAREER_START.getFullYear();
  const m = today.getMonth() - CAREER_START.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < CAREER_START.getDate())) years--;
  return years;
}

const t = {
  en: {
    greeting: "Hi, I'm Mateusz Rodz 👋",
    intro: (exp) =>
      `Web developer with ${exp}+ years of experience, based in Italy.`,
    body: "I've worked at enterprise companies, built e-commerce stores, SaaS tools and digital products. Now I work independently, directly with clients who have a project to build.",
    personal:
      "I enjoy building web apps, occasionally make videogames, drink lots of espresso and play chess ♟",
    pizza: "Oh, and I almost forgot — great pizzas every Saturday 🍕",
    cv: "Download CV",
  },
  it: {
    greeting: "Ciao, sono Mateusz Rodz 👋",
    intro: (exp) =>
      `Sviluppatore web con ${exp}+ anni di esperienza, basato in Italia.`,
    body: "Ho lavorato in aziende enterprise, costruito e-commerce, SaaS e prodotti digitali. Ora lavoro in proprio, direttamente con chi ha un progetto da realizzare.",
    personal:
      "Mi piace sviluppare webapp, ogni tanto creo videogiochi, bevo tanti caffe e gioco a scacchi ♟",
    pizza:
      "Ah, quasi dimenticavo: faccio delle buonissime pizze ogni sabato 🍕",
    cv: "Scarica il CV",
  },
};

export default function Header({ locale = "en" }) {
  const exp = calculateYearsOfExperience();
  const s = t[locale];

  return (
    <header className="flex flex-col items-start md:flex-row md:items-center justify-between text-center pt-6 md:p-6">
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
          {s.greeting}
        </h1>
        <p className="mt-4 text-left text-gray-700 dark:text-gray-400">
          {s.intro(exp)}
        </p>
        <p className="mt-2 text-left text-gray-700 dark:text-gray-400">
          {s.body}
        </p>
        <p className="mt-2 text-left text-gray-700 dark:text-gray-400">
          {s.personal}
        </p>
        <p className="mt-2 text-sm overline text-left text-gray-700 dark:text-gray-400">
          {s.pizza}
        </p>
        <div className="flex flex-col md:flex-row space-x-4 mt-4">
          <Socials />
          <a
            href="/Mateusz_Rodz_resume_eng.pdf"
            download
            className="mt-4 border border-green-400 bg-transparent opacity-80 hover:opacity-100 hover:bg-green-500 px-4 py-2 rounded transition-all ease-in-out"
          >
            {s.cv}
          </a>
        </div>
      </div>
    </header>
  );
}
