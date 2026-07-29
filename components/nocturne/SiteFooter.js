"use client";

import { contacts } from "@/content";
import { useLang } from "./LangProvider";

export default function SiteFooter({ withPortfolio = true }) {
  const { t } = useLang();
  return (
    <footer className="nc-footer">
      <span>{t.footer}</span>
      <span className="nc-footer-links">
        {withPortfolio && (
          <a href={contacts.portfolio} target="_blank" rel="noopener noreferrer">
            Portfolio
          </a>
        )}
        <a href={contacts.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={contacts.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </span>
    </footer>
  );
}
