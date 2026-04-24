import { headers } from "next/headers";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import data from "@/data/projects.json";

export default async function Portfolio() {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") || "";
  const firstLang = acceptLanguage.split(",")[0].split("-")[0].toLowerCase();
  const locale = firstLang === "it" ? "it" : "en";

  return (
    <div className="min-h-screen flex flex-col mx-auto max-w-3xl px-8">
      <Navbar locale={locale} />
      <Header locale={locale} />
      <Experiences locale={locale} />
      <Projects projects={data.projects.slice(0, 4)} viewMore={true} locale={locale} />
      <Footer />
    </div>
  );
}
