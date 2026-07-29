"use client";

import { contacts } from "@/content";
import { cvPdf, workShots } from "@/content/media";
import { useLang } from "./LangProvider";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { ContactStack } from "./Contacts";
import { Bullets, Photo, SectionHead } from "./Bits";

/*
 * Percorso — il CV navigabile (design 7a desktop / 8b mobile).
 * Le righe del CV hanno DOM piatto: periodo, tipo, nome, corpo. Desktop e mobile
 * piazzano le celle esplicitamente nella griglia .nc-cv-row, così su mobile
 * periodo e tipo finiscono sulla stessa riga sopra il titolo senza markup doppio.
 */
export default function WorkView() {
  const { t } = useLang();
  const w = t.work;

  return (
    <div className="nocturne">
      <div className="nc-page">
        <SiteHeader current="work" cta={w.cta} sticky />

        <section className="nc-hero">
          <div>
            <h1>{w.title}</h1>
            <p className="nc-hero-lead nc-t76 nc-pretty">{w.lead}</p>
          </div>
          <div className="nc-rail">
            <h6>{w.railTitle}</h6>
            <p className="nc-t66">{w.rail}</p>
          </div>
        </section>

        {/* visibile solo sotto i 900px: su desktop il CTA sta nell'header */}
        <div className="nc-hero-cta">
          <a className="nc-btn nc-btn-block" href={contacts.mailto}>
            {w.cta}
          </a>
        </div>

        <section className="nc-block">
          <div className="nc-shots">
            {workShots.map((shot) => (
              <Photo
                key={shot.src}
                src={shot.src}
                alt={shot.caption}
                caption={shot.caption}
                spec={shot.spec}
                href={shot.href}
              />
            ))}
          </div>
        </section>

        <section className="nc-block" style={{ paddingTop: 60 }}>
          <SectionHead n="01" title={w.own} mb={18} />
          <div className="nc-cv">
            {w.ownList.map((p) => (
              <div key={p.name} className="nc-cv-row">
                <span className="nc-cv-when">{p.when}</span>
                <span className="nc-cv-kind">{p.kind}</span>
                <h3>{p.name}</h3>
                <div className="nc-cv-main">
                  <p className="nc-cv-body nc-pretty">{p.body}</p>
                  <p className="nc-cv-stack">{p.stack}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="nc-block-md">
          <SectionHead n="02" title={w.clients} mb={18} />
          <div className="nc-cv">
            {w.clientList.map((c) => (
              <div key={c.name} className="nc-cv-row">
                <span className="nc-cv-when">{c.when}</span>
                <span className="nc-cv-kind">
                  {t.labels.team} {c.team}
                </span>
                <h3>{c.name}</h3>
                <div className="nc-cv-main">
                  <p className="nc-cv-body nc-pretty">{c.body}</p>
                  <p className="nc-cv-stack">
                    {t.labels.client} {c.client}, {t.labels.via} {c.via}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="nc-block-md">
          <SectionHead n="03" title={w.stack} mb={24} />
          <div className="nc-stacks">
            {w.stacks.map((g) => (
              <div key={g.t} className="nc-stack-group">
                <h6>{g.t}</h6>
                <Bullets items={g.items} large />
              </div>
            ))}
          </div>
        </section>

        <section className="nc-block-md">
          <SectionHead n="04" title={w.off} mb={22} />
          <div className="nc-off">
            {w.offList.map((o) => (
              <div key={o.t} className="nc-off-item">
                <h3>{o.t}</h3>
                <p className="nc-pretty">{o.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="nc-close nc-close-end">
          <div className="nc-close-main">
            <p className="nc-close-body nc-pretty">{w.close}</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a className="nc-btn" href={contacts.mailto}>
                {w.cta}
              </a>
              <a className="nc-btn" href={cvPdf} download>
                {w.cvLabel}
              </a>
            </div>
          </div>
          <div className="nc-close-side">
            <h6>{t.nav.contact}</h6>
            <ContactStack items={["email", "phone", "linkedin", "github"]} />
          </div>
        </section>

        <SiteFooter />
      </div>
    </div>
  );
}
