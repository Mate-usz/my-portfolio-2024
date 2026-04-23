"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesLanding() {
  const [formStatus, setFormStatus] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setFormStatus("sending");
    const form = {
      name: event.target[0].value,
      email: event.target[1].value,
      message: event.target[2].value,
    };
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ form }),
    });
    const data = await res.json();
    setFormStatus(res.ok ? data.message : "Invio fallito. Riprova più tardi.");
  }
  // bg-neutral-950 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.07),_transparent_70%)]
  // bg-gradient-to-b from-neutral-950 via-indigo-950/30 to-neutral-950
  return (
    <main className="min-h-screen text-white">
      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-6 py-24 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-sans">
          Realizzo Landing Page Professionali per Freelance e Piccole Attività
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10">
          Risolvo bug, ottimizzo le performance del tuo sito e creo landing page
          moderne in 48-72 ore. Risultati rapidi, chiari e professionali.
        </p>
        <a
          href="#contatti"
          className="inline-block bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl text-lg font-semibold shadow-lg scroll-smooth"
        >
          Prenota una call gratuita
        </a>
      </motion.section>

      {/* TRUST BAR */}
      <motion.section
        className="max-w-3xl mx-auto px-6 pb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-8">
          Esperienza maturata in aziende enterprise
        </p>
        <div className="flex justify-center items-center gap-10 flex-wrap">
          <Image
            src="/BE_logo.png"
            alt="Be Shaping the Future"
            width={120}
            height={32}
            className="h-8 w-auto brightness-0 invert opacity-50 hover:opacity-80 transition"
          />
          <Image
            src="/blue-reply.png"
            alt="Blue Reply"
            width={120}
            height={32}
            className="h-8 w-auto brightness-0 invert opacity-50 hover:opacity-80 transition"
          />
          <Image
            src="/LT_white.png"
            alt="Lipari Technology"
            width={120}
            height={32}
            className="h-8 w-auto brightness-0 invert opacity-50 hover:opacity-80 transition"
          />
        </div>
        <a
          href="/portfolio"
          className="inline-block mt-8 text-sm text-neutral-500 hover:text-neutral-300 transition"
        >
          Scopri il mio percorso →
        </a>
      </motion.section>

      {/* PROGETTI */}
      <motion.section
        className="max-w-5xl mx-auto px-6 pb-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs text-neutral-500 uppercase tracking-widest text-center mb-10">
          Alcuni progetti realizzati
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "MajestiCards",
              description:
                "E-commerce completo per la vendita di carte da gioco con pagamenti Stripe e gestione inventario.",
              image: "/MajestiCards.png",
              href: "https://majesticards.com",
              tech: ["Next.js", "Stripe", "MySQL"],
            },
            {
              title: "KŌBŌ",
              description:
                "Shop online per skateboard artigianali con carrello, checkout e pagamenti integrati.",
              image: "/Kobo.jpg",
              href: "https://kobocraft.xyz",
              tech: ["Next.js", "MongoDB", "Stripe"],
            },
            {
              title: "Alphacut",
              description:
                "Tool SaaS per rimuovere sfondi solidi dalle immagini in un click. Veloce, pulito e ottimizzato per il web.",
              image: "/alphacut.png",
              href: "https://alphacut.pics",
              tech: ["Next.js", "Tailwind"],
              wip: false,
            },
            {
              title: "heyhuby",
              description:
                "Nuovo prodotto digitale per una startup, sviluppato in collaborazione con So-Synergy.",
              image: "/heyhuby.png",
              href: "https://heyhuby.com",
              tech: ["Next.js", "Tailwind"],
              wip: true,
            },
          ].map(({ title, description, image, href, tech, wip }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-600 transition-colors"
            >
              {wip && (
                <span className="absolute top-3 right-3 z-10 text-xs px-2 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  In sviluppo
                </span>
              )}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-neutral-800 text-neutral-400 px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      {/* SERVIZI */}
      <motion.section
        id="servizi"
        className="max-w-5xl mx-auto px-6 py-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-sans">
          Servizi Disponibili
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* SERVIZIO A */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-4 font-sans">
              Web Fix & Boost
            </h3>
            <p className="text-neutral-300 mb-6">
              Risolvo bug, miglioro la velocità del sito e ottimizzo UX/UI.
              Intervento rapido entro 24-48 ore con report finale.
            </p>
            <ul className="space-y-2 text-neutral-400 mb-6">
              <li>• Correzione bug (JS, CSS, layout, form)</li>
              <li>• Ottimizzazione performance (Lighthouse)</li>
              <li>• Migliorie UX/UI</li>
            </ul>
            <p className="text-white font-semibold mb-4">Da €50 a €250</p>
            <a
              href="#contatti"
              className="text-blue-500 hover:underline font-semibold"
            >
              Richiedi un fix veloce →
            </a>
          </motion.div>

          {/* SERVIZIO C */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-4 font-sans">
              Landing Page in 48-72h
            </h3>
            <p className="text-neutral-300 mb-6">
              Creo landing page moderne, ottimizzate e veloci usando Next.js e
              Tailwind. Perfette per freelance, attività locali e lanci
              prodotto.
            </p>
            <ul className="space-y-2 text-neutral-400 mb-6">
              <li>• Design pulito e professionale</li>
              <li>• Next.js + Tailwind</li>
              <li>• Testi e struttura ottimizzati</li>
            </ul>
            <p className="text-white font-semibold mb-4">Da €300 a €450</p>
            <a
              href="#contatti"
              className="text-blue-500 hover:underline font-semibold"
            >
              Prenota la tua landing →
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* COME LAVORO */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-sans">
          Come Lavoro
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-2 font-sans">1. Analisi</h3>
            <p className="text-neutral-400">
              Audit gratuito e definizione chiara del problema o del progetto.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-2 font-sans">2. Sviluppo</h3>
            <p className="text-neutral-400">
              Fix o landing page sviluppati in 24-72 ore.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-2 font-sans">3. Consegna</h3>
            <p className="text-neutral-400">
              Revisione, report finale e deploy incluso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <motion.section
        className="max-w-3xl mx-auto px-6 py-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-sans">
          Domande Frequenti
        </h2>
        <div className="space-y-6">
          {[
            {
              q: "Quanto costa creare una landing page?",
              a: "Da €300 a €450 tutto incluso: design, sviluppo, testi ottimizzati e deploy. Il prezzo esatto dipende dalla complessità della pagina.",
            },
            {
              q: "In quanto tempo viene consegnata?",
              a: "48–72 ore dalla conferma del progetto e ricezione dei materiali. Per i fix tecnici, 24–48 ore.",
            },
            {
              q: "Cosa mi serve per iniziare?",
              a: "Solo un brief: obiettivo della pagina, target clienti e materiali disponibili (logo, foto, testi). Mi occupo io della struttura e del copywriting di base.",
            },
            {
              q: "Sono incluse revisioni dopo la consegna?",
              a: "Sì, includo una sessione di revisioni nel prezzo. Modifiche successive rientrano nel servizio Web Fix & Boost.",
            },
            {
              q: "Lavori solo con Next.js o anche con WordPress?",
              a: "Principalmente Next.js e React, che garantiscono performance e velocità superiori. Posso valutare WordPress su richiesta.",
            },
            {
              q: "Lavori con clienti in tutta Italia?",
              a: "Sì, lavoro completamente da remoto con clienti in tutta Italia. La comunicazione avviene via email, WhatsApp o call.",
            },
            {
              q: "Posso vedere esempi del tuo lavoro?",
              a: "Certo, puoi vedere i progetti realizzati nel mio portfolio su mateuszrodz.com/portfolio.",
            },
            {
              q: "Come funziona il pagamento?",
              a: "50% all'avvio del progetto, 50% alla consegna. Accetto bonifico bancario e PayPal.",
            },
          ].map(({ q, a }) => (
            <details
              key={q}
              className="group bg-neutral-900 border border-neutral-800 rounded-2xl px-6 py-5 cursor-pointer"
            >
              <summary className="font-semibold text-lg list-none flex justify-between items-center">
                {q}
                <span className="ml-4 text-neutral-400 group-open:rotate-45 transition-transform duration-200 text-2xl leading-none">
                  +
                </span>
              </summary>
              <p className="mt-4 text-neutral-400 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </motion.section>

      {/* CTA FINALE */}
      <motion.section
        id="contatti"
        className="max-w-2xl mx-auto px-6 py-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-sans">
          Parliamone in 15 minuti
        </h2>
        <p className="text-neutral-300 mb-10 text-center max-w-xl mx-auto">
          Fammi sapere di cosa hai bisogno. Rispondo entro poche ore e preparo
          subito un audit gratuito.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nome"
              required
              className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition"
            />
          </div>
          <textarea
            placeholder="Descrivi brevemente di cosa hai bisogno..."
            required
            rows={5}
            className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition resize-none"
          />
          <button
            type="submit"
            disabled={formStatus === "sending"}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 transition px-6 py-3 rounded-xl text-lg font-semibold shadow-lg"
          >
            {formStatus === "sending" ? "Invio in corso…" : "Invia messaggio"}
          </button>
        </form>
        {formStatus && formStatus !== "sending" && (
          <p className="mt-6 text-center text-neutral-300">{formStatus}</p>
        )}
      </motion.section>
      {/* WHATSAPP STICKY */}
      <a
        href="https://wa.me/393483749656?text=Ciao%20Mateusz%2C%20vorrei%20informazioni%20sui%20tuoi%20servizi"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contattami su WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 transition text-white font-semibold px-4 py-3 rounded-full shadow-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.885a.5.5 0 0 0 .608.608l6.04-1.471A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.7-.502-5.253-1.382l-.376-.217-3.898.949.968-3.773-.233-.389A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
        WhatsApp
      </a>
    </main>
  );
}
