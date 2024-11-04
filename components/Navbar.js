"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("light");

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
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
      <div className="space-x-2 md:space-x-4">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact me</Link>
      </div>
    </nav>
  );
}
