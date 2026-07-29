"use client";

import Link from "next/link";
import { contacts } from "@/content";
import { useLang } from "./LangProvider";

function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="nc-lang">
      <button type="button" onClick={() => setLang("en")} aria-pressed={lang === "en"} aria-label="English">
        EN
      </button>
      <button type="button" onClick={() => setLang("it")} aria-pressed={lang === "it"} aria-label="Italiano">
        IT
      </button>
    </div>
  );
}

/*
 * Header comune. Sulla homepage il marchio sta da solo a sinistra e i tre link
 * si appoggiano al toggle a destra; sulle pagine interne marchio e nav fanno
 * gruppo a sinistra, CTA e toggle a destra. Su mobile le pagine interne hanno
 * l'header sticky e il CTA scende sotto la hero (lo nasconde il CSS).
 */
export default function SiteHeader({ current = null, cta = null, sticky = false }) {
  const { t } = useLang();
  const home = current === null;

  const nav = (
    <nav className={home ? "nc-nav nc-nav-home" : "nc-nav"}>
      <Link href="/kitchen" aria-current={current === "kitchen" ? "page" : undefined}>
        {t.nav.kitchen}
      </Link>
      <Link href="/work" aria-current={current === "work" ? "page" : undefined}>
        {t.nav.work}
      </Link>
      <Link href="/services" aria-current={current === "services" ? "page" : undefined}>
        {t.nav.services}
      </Link>
    </nav>
  );

  return (
    <header className={sticky ? "nc-header nc-header-sticky" : "nc-header"}>
      {home ? (
        <>
          <Link href="/" className="nc-brand">
            MR
          </Link>
          <div className="nc-header-right">
            {nav}
            <LangToggle />
          </div>
        </>
      ) : (
        <>
          <div className="nc-header-left">
            <Link href="/" className="nc-brand">
              MR
            </Link>
            {nav}
          </div>
          <div className="nc-header-right">
            {cta && (
              <a className="nc-btn nc-btn-sm" href={contacts.mailto}>
                {cta}
              </a>
            )}
            <LangToggle />
          </div>
        </>
      )}
    </header>
  );
}
