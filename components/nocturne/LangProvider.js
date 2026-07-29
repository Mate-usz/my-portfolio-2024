"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { dictionaries, defaultLanguage } from "@/content";

const LangContext = createContext(null);
const STORAGE_KEY = "mr-lang";

/*
 * Unico stato globale del sito nuovo: la lingua.
 * Default italiano (è anche quello che finisce nell'HTML servito, quindi nei
 * motori di ricerca), scelta memorizzata in localStorage, prima visita decisa
 * dalla lingua del browser.
 */
export function LangProvider({ children }) {
  const [lang, setLang] = useState(defaultLanguage);

  useEffect(() => {
    let stored = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      // storage non disponibile (private browsing): si resta sul default
    }
    if (stored === "it" || stored === "en") {
      setLang(stored);
      return;
    }
    const browser = navigator.language || "";
    setLang(browser.toLowerCase().startsWith("it") ? "it" : "en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const changeLang = useCallback((next) => {
    setLang(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // idem: la scelta vale comunque per questa sessione
    }
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang: changeLang, t: dictionaries[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang va usato dentro <LangProvider>");
  return ctx;
}
