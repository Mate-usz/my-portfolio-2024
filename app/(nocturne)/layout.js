import "../nocturne.css";
import { LangProvider } from "@/components/nocturne/LangProvider";

/*
 * Guscio delle quattro pagine del redesign (/, /bakery, /services, /work).
 * Le pagine vecchie restano fuori da questo gruppo e continuano a usare
 * globals.css: nocturne.css è tutto scoped sotto .nocturne.
 */
export default function NocturneLayout({ children }) {
  return <LangProvider>{children}</LangProvider>;
}
