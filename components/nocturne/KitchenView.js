"use client";

import Link from "next/link";
import { contacts } from "@/content";
import { galleryLead, galleryRest } from "@/content/media";
import { useLang } from "./LangProvider";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { ContactCells } from "./Contacts";
import { ArrowRight, Bullets, Photo, SectionHead } from "./Bits";

export default function KitchenView() {
  const { t } = useLang();
  const k = t.kitchen;

  return (
    <div className="nocturne">
      <div className="nc-page">
        <SiteHeader current="kitchen" cta={k.cta} sticky />

        <section className="nc-hero">
          <div>
            <h1>{k.title}</h1>
            <p className="nc-hero-lead nc-t76 nc-pretty">{k.lead}</p>
          </div>
          <div className="nc-rail">
            <h6>{k.availTitle}</h6>
            <p className="nc-t66">{k.avail}</p>
          </div>
        </section>

        <div className="nc-hero-cta">
          <a className="nc-btn nc-btn-block" href={contacts.mailto}>
            {k.cta}
          </a>
        </div>

        {/* 01 — mosaico volutamente non uniforme: tre foto grandi, poi cinque piccole */}
        <section className="nc-block">
          <SectionHead n="01" title={k.gallery} mb={16} />
          <div className="nc-gallery-lead">
            {galleryLead.map((photo, i) => (
              <Photo
                key={photo.src}
                src={photo.src}
                caption={k.galleryLead[i].c}
                spec={k.galleryLead[i].s}
                sizes="(max-width: 899px) 100vw, 40vw"
              />
            ))}
          </div>
          <div className="nc-gallery-rest">
            {galleryRest.map((photo, i) => (
              <Photo
                key={photo.src}
                src={photo.src}
                caption={k.galleryRest[i].c}
                small
                sizes="(max-width: 899px) 50vw, 20vw"
              />
            ))}
          </div>
        </section>

        {/* 02 */}
        <section className="nc-block-md">
          <SectionHead n="02" title={k.what} mb={26} />
          <div className="nc-cols-3">
            {k.cats.map((cat) => (
              <div key={cat.title} className="nc-topcard">
                <h3>{cat.title}</h3>
                <p className="nc-topcard-body nc-pretty">{cat.body}</p>
                <p className="nc-spec">{cat.spec}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 03 — il registro vero e proprio */}
        <section className="nc-block-lg">
          <SectionHead n="03" title={k.log} mb={8} />
          <p className="nc-note">
            {k.logNote}
          </p>
          <div className="nc-log">
            {k.logRows.map((row, i) => (
              <div key={`${row.date}-${i}`} className="nc-log-row">
                <span className="nc-log-date">{row.date}</span>
                <span className="nc-log-name">{row.name}</span>
                <span className="nc-log-dough">{row.dough}</span>
                <span className="nc-log-note">{row.note}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="nc-pad" style={{ paddingTop: 14 }}>
          <p className="nc-handnote">
            <span>{k.logFoot}</span>
          </p>
          <div>
            <Link href={k.archiveHref} className="nc-archive">
              {k.archiveCta} <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* 04 */}
        <div className="nc-close">
          <div className="nc-close-main">
            <SectionHead n="04" title={k.ask} mb={12} />
            <p className="nc-close-body nc-pretty">{k.askBody}</p>
            <a className="nc-btn" href={contacts.mailto}>
              {k.cta}
            </a>
          </div>
          <div className="nc-close-side">
            <h6>{k.skills}</h6>
            <Bullets items={k.skillsList} />
          </div>
        </div>

        <div className="nc-contacts-block">
          <ContactCells third="linkedin" />
        </div>

        <SiteFooter />
      </div>
    </div>
  );
}
