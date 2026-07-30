"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { contacts } from "@/content";
import data from "@/data/sfornati.json";
import { useLang } from "./LangProvider";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { ArrowRight } from "./Bits";

/*
 * Archivio degli sfornati, ridisegnato con il design system Nocturne.
 * Le foto sono raggruppate per mese (dal più recente) e le note di
 * data/sfornati.json restano dov'erano, come annotazioni a margine.
 */
export default function SfornatiView() {
  const { t } = useLang();
  const a = t.archive;
  const photos = data.photos;
  const [active, setActive] = useState(null);

  /*
   * Ordine cronologico, dal primo mese all'ultimo. Non è una scelta estetica:
   * le note in data/sfornati.json sono ancorate a un mese e guardano avanti
   * ("da qui in poi le pizze cambiano"), quindi hanno senso solo scendendo nel
   * tempo. Chi vuole gli ultimi ha il salto rapido qui sopra.
   */
  const groups = useMemo(() => {
    const map = new Map();
    photos.forEach((photo, index) => {
      const key = photo.date.slice(0, 7);
      if (!map.has(key)) map.set(key, []);
      map.get(key).push({ ...photo, index });
    });
    return [...map.entries()].sort((x, y) => (x[0] < y[0] ? -1 : 1));
  }, [photos]);

  const lastKey = groups.length ? groups[groups.length - 1][0] : null;

  const notesByMonth = useMemo(() => {
    const map = new Map();
    for (const note of data.notes || []) {
      if (!map.has(note.afterMonth)) map.set(note.afterMonth, []);
      map.get(note.afterMonth).push(note.text);
    }
    return map;
  }, []);

  const monthLabel = useCallback(
    (key) => {
      const [year, month] = key.split("-");
      return `${a.months[parseInt(month, 10) - 1]} ${year}`;
    },
    [a.months]
  );

  const dayLabel = useCallback((photo) => {
    const [, month, day] = photo.date.split("-");
    return `${day}.${month} · ${photo.time}`;
  }, []);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => setActive((i) => (i > 0 ? i - 1 : i)), []);
  const next = useCallback(
    () => setActive((i) => (i < photos.length - 1 ? i + 1 : i)),
    [photos.length]
  );

  useEffect(() => {
    if (active === null) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, prev, next]);

  const current = active !== null ? photos[active] : null;

  return (
    <div className="nocturne">
      <div className="nc-page">
        <SiteHeader current="kitchen" cta={t.kitchen.cta} sticky />

        <section className="nc-hero">
          <div>
            <h1>{a.title}</h1>
            <p className="nc-hero-lead nc-t76 nc-pretty">{a.lead}</p>
          </div>
          <div className="nc-rail">
            <h6>{a.railTitle}</h6>
            <p className="nc-t66">{a.rail}</p>
          </div>
        </section>

        <div className="nc-hero-cta">
          <a className="nc-btn nc-btn-block" href={contacts.mailto}>
            {t.kitchen.cta}
          </a>
        </div>

        <div className="nc-pad nc-arch-jump" style={{ paddingTop: 26 }}>
          <Link href="/bakery" className="nc-archive" style={{ marginTop: 0 }}>
            {a.backCta} <ArrowRight size={14} />
          </Link>
          {lastKey && (
            <a href={`#${lastKey}`} className="nc-archive" style={{ marginTop: 0 }}>
              {a.jumpCta} <ArrowRight size={14} />
            </a>
          )}
        </div>

        {groups.map(([key, groupPhotos]) => (
          <section className="nc-block nc-arch-month" id={key} key={key}>
            <div className="nc-arch-head">
              <h2>{monthLabel(key)}</h2>
              <span className="nc-arch-count">
                {groupPhotos.length} {a.photosLabel}
              </span>
            </div>

            <div className="nc-arch-grid">
              {groupPhotos.map((photo) => (
                <button
                  type="button"
                  key={photo.src}
                  className="nc-arch-cell"
                  onClick={() => setActive(photo.index)}
                >
                  <span className="nc-arch-frame">
                    <Image
                      src={photo.src}
                      alt={photo.description || `${a.title} ${photo.date}`}
                      fill
                      sizes="(max-width: 899px) 50vw, 25vw"
                      loading="lazy"
                      style={{ objectFit: "cover" }}
                    />
                  </span>
                  <span className="nc-arch-date">{dayLabel(photo)}</span>
                  {photo.description && (
                    <span className="nc-arch-desc">{photo.description}</span>
                  )}
                </button>
              ))}
            </div>

            {(notesByMonth.get(key) || []).map((text) => (
              <p className="nc-handnote" key={text} style={{ marginTop: 18 }}>
                <span>{text}</span>
              </p>
            ))}
          </section>
        ))}

        {(notesByMonth.get("end") || []).map((text) => (
          <div className="nc-pad" key={text} style={{ paddingTop: 34 }}>
            <p className="nc-handnote">
              <span>{text}</span>
            </p>
          </div>
        ))}

        <div style={{ height: 60 }} />
        <SiteFooter />
      </div>

      {current && (
        <div className="nc-lb" role="dialog" aria-modal="true" onClick={close}>
          <div className="nc-lb-bar" onClick={(e) => e.stopPropagation()}>
            <span className="nc-lb-date">
              {dayLabel(current)} · {monthLabel(current.date.slice(0, 7))}
            </span>
            <span style={{ display: "flex", gap: 8 }}>
              <button
                type="button"
                className="nc-lb-btn"
                onClick={prev}
                disabled={active === 0}
                aria-label={a.prev}
              >
                ←
              </button>
              <button
                type="button"
                className="nc-lb-btn"
                onClick={next}
                disabled={active === photos.length - 1}
                aria-label={a.next}
              >
                →
              </button>
              <button type="button" className="nc-lb-btn" onClick={close} aria-label={a.close}>
                ✕
              </button>
            </span>
          </div>

          <div className="nc-lb-stage" onClick={close}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.src}
              alt={current.description || `${a.title} ${current.date}`}
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {current.description && (
            <p className="nc-lb-cap" onClick={(e) => e.stopPropagation()}>
              {current.description}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
