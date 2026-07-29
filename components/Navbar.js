"use client";
import Link from "next/link";
import { ArrowLeft, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const t = {
  en: { services: "Services", home: "Home", projects: "Projects", contact: "Contact me", light: "Light Mode", dark: "Dark Mode", sfornati: "Baked" },
  it: { services: "Servizi", home: "Home", projects: "Progetti", contact: "Contattami", light: "Tema Chiaro", dark: "Tema Scuro", sfornati: "Sfornati" },
};

export default function Navbar({ locale = "en" }) {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
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

  const links = [
    { href: "/services", label: <><ArrowLeft className="w-4 h-4 inline mr-1" />{s.services}</>, className: "text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition" },
    { href: "/portfolio", label: s.home },
    { href: "/projects", label: s.projects },
    { href: "/sfornati", label: s.sfornati },
    { href: "/contact", label: s.contact },
  ];

  return (
    <div>
      <nav className="flex justify-between items-center pt-4 md:p-4">
        <button
          onClick={toggleTheme}
          className="bg-gray-700 dark:bg-gray-200 text-gray-200 dark:text-gray-700 px-2 md:px-4 md:py-2 rounded text-sm"
        >
          {theme === "dark" ? s.light : s.dark}
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-4">
          {links.map(({ href, label, className }) => (
            <Link key={href} href={href} className={className}>
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-700 dark:text-gray-300"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden flex flex-col items-end px-4 pb-4 pt-2 space-y-4 border-t border-gray-200 dark:border-gray-800"
          >
            {links.map(({ href, label, className }) => (
              <Link
                key={href}
                href={href}
                className={className ?? "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
