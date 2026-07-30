"use client";

import { serviceJobs } from "@/content/media";
import { useLang } from "./LangProvider";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { ContactStack } from "./Contacts";
import { Photo, SectionHead } from "./Bits";
import BookingBar from "./BookingBar";

/*
 * Servizi. Cinque blocchi numerati: pacchetti a prezzo fisso, prenotazione
 * della call, processo, lavori recenti, cosa non faccio. Le foto arrivano da media.serviceJobs e i
 * testi da services.jobs: sono allineati per indice, come nella cucina.
 */
export default function ServicesView() {
  const { t } = useLang();
  const s = t.services;

  const [leadJob, ...pairJobs] = s.jobs.map((job, i) => ({
    ...job,
    src: serviceJobs[i].src,
    href: serviceJobs[i].href,
  }));

  return (
    <div className="nocturne">
      <div className="nc-page">
        <SiteHeader current="services" cta={s.cta} ctaHref="#prenota" sticky />

        <section className="nc-hero">
          <div>
            <h1>{s.title}</h1>
            <p className="nc-hero-lead nc-t76 nc-pretty">{s.lead}</p>
          </div>
          <div className="nc-rail">
            <h6>{s.railTitle}</h6>
            <p className="nc-t66">{s.rail}</p>
          </div>
        </section>

        {/* Sotto i 900px il CTA dell'header ricompare qui: lo mostra il CSS. */}
        <div className="nc-hero-cta">
          <a className="nc-btn nc-btn-block" href="#prenota">
            {s.cta}
          </a>
        </div>

        <section className="nc-block" style={{ paddingTop: 52 }}>
          <SectionHead n="01" title={s.what} mb={26} />
          <div className="nc-packs">
            {s.packages.map((p) => (
              <div key={p.name} className="nc-topcard nc-pack">
                <div className="nc-pack-top">
                  <div className="nc-pack-name">
                    <h3>{p.name}</h3>
                    {p.premium && <span className="nc-badge">{p.premium}</span>}
                  </div>
                  <span className="nc-price">{p.price}</span>
                </div>
                <p className="nc-topcard-body nc-pretty">{p.body}</p>
                <p className="nc-spec">{p.spec}</p>
                <p className="nc-delivery">
                  {t.labels.delivery} {p.delivery}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="nc-block-lg" id="prenota">
          <SectionHead n="02" title={s.booking.title} mb={8} />
          <p className="nc-note" style={{ maxWidth: 620 }}>
            {s.booking.lead}
          </p>
          <BookingBar />
        </section>

        <section className="nc-block-lg">
          <SectionHead n="03" title={s.how} mb={22} />
          <div className="nc-steps">
            {s.steps.map((step) => (
              <div key={step.n} className="nc-step">
                <span className="nc-step-n">{step.n}</span>
                <h3>{step.title}</h3>
                <p className="nc-pretty">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="nc-block-lg">
          <SectionHead n="04" title={s.proof} mb={8} />
          <p className="nc-note">
            {s.proofNote}
          </p>
          <div className="nc-proof">
            <Photo
              src={leadJob.src}
              href={leadJob.href}
              caption={leadJob.name}
              spec={leadJob.spec}
              alt={leadJob.name}
            />
            {/* Su mobile il CSS trasforma questa coppia nelle due foto piccole. */}
            <div className="nc-proof-pair">
              {pairJobs.map((job) => (
                <Photo
                  key={job.name}
                  src={job.src}
                  href={job.href}
                  caption={job.name}
                  spec={job.spec}
                  alt={job.name}
                  sizes="(max-width: 899px) 50vw, 33vw"
                />
              ))}
            </div>
          </div>
        </section>

        <div className="nc-close">
          <div className="nc-close-main">
            <SectionHead n="05" title={s.no} mb={12} />
            <p className="nc-close-body nc-pretty">{s.noBody}</p>
            <a className="nc-btn" href="#prenota">
              {s.cta}
            </a>
          </div>
          <div className="nc-close-side">
            <h6>{t.nav.contact}</h6>
            <ContactStack items={["email", "phone"]} />
          </div>
        </div>

        <SiteFooter />
      </div>
    </div>
  );
}
