"use client";

import Image from "next/image";
import Link from "next/link";
import { portrait } from "@/content/media";
import { useLang } from "./LangProvider";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { ContactCells } from "./Contacts";
import { ArrowRight } from "./Bits";

export default function HomeView() {
  const { t } = useLang();
  const home = t.home;

  return (
    <div className="nocturne">
      <div className="nc-page">
        <SiteHeader />

        <section className="nc-bio">
          <div className="nc-bio-row">
            <div className="nc-portrait">
              <Image
                src={portrait.src}
                alt={home.name}
                fill
                sizes="96px"
                priority
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <h1>{home.name}</h1>
              <div className="nc-kicker">{home.kicker}</div>
            </div>
          </div>
          <p className="nc-pretty">{home.bioA}</p>
          <p className="nc-pretty">{home.bioB}</p>
        </section>

        <section className="nc-doors-block">
          <div className="nc-doors-head">
            <h2>{home.seekTitle}</h2>
            <span>{home.seekSub}</span>
          </div>
          <div className="nc-doors">
            {home.doors.map((door) => (
              <Link key={door.href} href={door.href} className="nc-door">
                <div className="nc-door-top">
                  <h3>{door.title}</h3>
                  <span className="nc-door-meta">{door.meta}</span>
                  <ArrowRight size={16} className="nc-door-arrow" color="var(--color-accent)" />
                </div>
                <p className="nc-door-body nc-pretty">{door.body}</p>
                <span className="nc-door-go">
                  {door.href} <ArrowRight />
                </span>
                <span className="nc-door-meta-m">{door.meta}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="nc-contacts-block">
          <ContactCells third="github" />
        </section>

        <SiteFooter withPortfolio={false} />
      </div>
    </div>
  );
}
