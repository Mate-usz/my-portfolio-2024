"use client";

import { contacts } from "@/content";
import { useLang } from "./LangProvider";

/*
 * Fascia contatti a tre celle: la griglia con gap 1px su fondo divider disegna
 * i separatori. Sotto i 900px il CSS la ribalta in lista con righe da 46px.
 * `third` sceglie la terza cella: github in homepage, linkedin sulle interne.
 */
export function ContactCells({ third = "github" }) {
  const { t } = useLang();
  const cells = [
    { href: contacts.mailto, label: t.labels.email, value: contacts.email },
    { href: contacts.phoneHref, label: t.labels.phone, value: contacts.phone },
    third === "linkedin"
      ? { href: contacts.linkedin, label: t.labels.linkedin, value: contacts.linkedinLabel, external: true }
      : { href: contacts.github, label: t.labels.github, value: contacts.githubLabel, external: true },
  ];

  return (
    <div className="nc-contacts">
      {cells.map((cell) => (
        <a
          key={cell.label}
          href={cell.href}
          className="nc-contact-cell"
          {...(cell.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          <span className="nc-contact-lbl">{cell.label}</span>
          <span className="nc-contact-val">{cell.value}</span>
        </a>
      ))}
    </div>
  );
}

/* Lista contatti con etichetta a sinistra e valore a destra. */
export function ContactList({ items = ["email", "phone", "linkedin"] }) {
  const { t } = useLang();
  const map = {
    email: { href: contacts.mailto, label: t.labels.email, value: contacts.email },
    phone: { href: contacts.phoneHref, label: t.labels.phone, value: contacts.phone },
    linkedin: { href: contacts.linkedin, label: t.labels.linkedin, value: contacts.linkedinLabel, external: true },
    github: { href: contacts.github, label: t.labels.github, value: contacts.githubLabel, external: true },
  };

  return (
    <div className="nc-contact-list">
      {items.map((key) => {
        const item = map[key];
        return (
          <a
            key={key}
            href={item.href}
            className="nc-contact-row"
            {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <span className="nc-contact-lbl">{item.label}</span>
            <span className="nc-contact-val">{item.value}</span>
          </a>
        );
      })}
    </div>
  );
}

/* Colonna di contatti senza etichette, per le chiusure delle pagine interne. */
export function ContactStack({ items = ["email", "phone"] }) {
  const map = {
    email: { href: contacts.mailto, value: contacts.email },
    phone: { href: contacts.phoneHref, value: contacts.phone },
    linkedin: { href: contacts.linkedin, value: "linkedin.com/in/mateusz-rodz", external: true },
    github: { href: contacts.github, value: "github.com/Mate-usz", external: true },
  };

  return (
    <div className="nc-contact-stack">
      {items.map((key) => {
        const item = map[key];
        return (
          <a
            key={key}
            href={item.href}
            {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {item.value}
          </a>
        );
      })}
    </div>
  );
}
