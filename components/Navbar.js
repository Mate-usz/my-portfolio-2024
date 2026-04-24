"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

const t = {
  en: { services: "Services", home: "Home", projects: "Projects", contact: "Contact me", light: "Light Mode", dark: "Dark Mode" },
  it: { services: "Servizi", home: "Home", projects: "Progetti", contact: "Contattami", light: "Tema Chiaro", dark: "Tema Scuro" },
};

export default function Navbar({ locale = "en" }) {
  const [theme, setTheme] = useState("light");
  const s = t[locale];

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.add(storedTheme);
  }, []);

  return (
    <nav className="flex justify-between items-center pt-4 md:p-4">
      <button
        onClick={toggleTheme}
        className="bg-gray-700 dark:bg-gray-200 text-gray-200 dark:text-gray-700 px-2 md:px-4 md:py-2 rounded"
      >
        {theme === "dark" ? s.light : s.dark}
      </button>
      <div className="space-x-2 md:space-x-4">
        <Link href="/" className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition"><ArrowLeft className="w-4 h-4 inline mr-1" />{s.services}</Link>
        <Link href="/portfolio">{s.home}</Link>
        <Link href="/projects">{s.projects}</Link>
        <Link href="/contact">{s.contact}</Link>
      </div>
    </nav>
  );
}
