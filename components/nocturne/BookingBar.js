"use client";

import { useState } from "react";
import Link from "next/link";
import { contacts } from "@/content";
import { useLang } from "./LangProvider";
import { ArrowRight } from "./Bits";
import SelectField from "./SelectField";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/*
 * Prenotazione della call. Tre campi obbligatori (servizio, nome, email) e uno
 * facoltativo: il dettaglio non blocca l'invio ma evita un giro di email prima
 * di arrivare alla chiamata. Passa dall'API /api/send-email che già esisteva.
 *
 * Ogni cella è un <label> (o il pulsante della tendina), così il bersaglio del
 * clic è l'intero riquadro e non solo il campo di testo.
 */
export default function BookingBar() {
  const { t } = useLang();
  const b = t.services.booking;

  // nella tendina ogni pacchetto porta con sé il prezzo: si sceglie sapendo già
  // quanto costa, senza risalire al listino
  const options = [
    ...t.services.packages.map((p) => ({ value: p.name, hint: p.price })),
    { value: b.serviceOther },
  ];

  const [form, setForm] = useState({ service: "", name: "", email: "", details: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const [error, setError] = useState(null);
  const [invalid, setInvalid] = useState([]);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    if (status === "sending") return;

    // trappola per i bot: se il campo nascosto è pieno fingiamo di aver inviato
    if (e.target.company?.value) {
      setStatus("done");
      return;
    }

    const missing = ["service", "name", "email"].filter((k) => !form[k].trim());
    if (missing.length) {
      setInvalid(missing);
      setError(b.errorRequired);
      setStatus("error");
      return;
    }
    if (!EMAIL_RE.test(form.email.trim())) {
      setInvalid(["email"]);
      setError(b.errorEmail);
      setStatus("error");
      return;
    }

    setInvalid([]);
    setError(null);
    setStatus("sending");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form: {
            name: form.name.trim(),
            email: form.email.trim(),
            message: form.details.trim(),
            service: form.service,
            source: "Servizi — prenotazione call",
          },
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("done");
    } catch {
      setError(b.errorSend);
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="nc-book-done">
        <h6>{b.successTitle}</h6>
        <p>{b.successBody}</p>
      </div>
    );
  }

  const cellClass = (key, extra = "") =>
    `nc-book-cell ${extra} ${invalid.includes(key) ? "is-invalid" : ""}`.trim();

  return (
    <form onSubmit={submit} noValidate>
      <div className="nc-book">
        <SelectField
          label={b.serviceLabel}
          placeholder={b.servicePlaceholder}
          options={options}
          value={form.service}
          onChange={(value) => setForm((f) => ({ ...f, service: value }))}
          invalid={invalid.includes("service")}
        />

        <label className={cellClass("name")} htmlFor="bk-name">
          <span className="nc-book-lbl">{b.nameLabel}</span>
          <input
            id="bk-name"
            type="text"
            autoComplete="name"
            placeholder={b.namePlaceholder}
            value={form.name}
            onChange={set("name")}
          />
        </label>

        <label className={cellClass("email", "nc-book-email")} htmlFor="bk-email">
          <span className="nc-book-lbl">{b.emailLabel}</span>
          <input
            id="bk-email"
            type="email"
            autoComplete="email"
            placeholder={b.emailPlaceholder}
            value={form.email}
            onChange={set("email")}
          />
        </label>

        <label className="nc-book-cell nc-book-details" htmlFor="bk-details">
          <span className="nc-book-lbl">{b.detailsLabel}</span>
          <textarea
            id="bk-details"
            rows={1}
            placeholder={b.detailsPlaceholder}
            value={form.details}
            onChange={set("details")}
          />
        </label>

        <button type="submit" className="nc-book-submit" disabled={status === "sending"}>
          {status === "sending" ? b.sending : b.submit}
          {status === "sending" ? null : <ArrowRight size={14} />}
        </button>
      </div>

      {/* invisibile agli umani, irresistibile per i bot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

      {error && (
        <p className="nc-book-msg" role="alert">
          {error}
          {error === b.errorSend && (
            <>
              {" "}
              <a href={contacts.mailto}>{contacts.email}</a>.
            </>
          )}
        </p>
      )}

      <p className="nc-book-note">
        {b.note} <Link href="/privacy">{b.noteLink}</Link>
      </p>
    </form>
  );
}
