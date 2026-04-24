export const metadata = {
  title: "Privacy Policy | Mateusz Rodz",
  description:
    "Informativa sul trattamento dei dati personali ai sensi del GDPR (Reg. UE 2016/679).",
  robots: { index: true, follow: false },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-neutral-500 text-sm mb-12">
          Ultimo aggiornamento: aprile 2026
        </p>

        <section className="space-y-10 text-neutral-300 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Titolare del trattamento
            </h2>
            <p>
              Mateusz Rodz, freelance con sede a Perugia (PG), Italia.
              <br />
              Email di contatto:{" "}
              <a
                href="mailto:hello@mateuszrodz.com"
                className="text-blue-400 hover:underline"
              >
                hello@mateuszrodz.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Dati raccolti
            </h2>
            <p>
              Attraverso il modulo di contatto presente sul sito vengono
              raccolti esclusivamente i seguenti dati personali:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-400">
              <li>Nome</li>
              <li>Indirizzo email</li>
              <li>Messaggio libero inserito dall'utente</li>
            </ul>
            <p className="mt-3">
              Non vengono raccolti dati di navigazione, cookie di profilazione o
              dati sensibili. Le statistiche di visita, se presenti, sono
              anonimizzate e non consentono l'identificazione degli utenti.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. Finalità e base giuridica
            </h2>
            <p>
              I dati raccolti sono trattati per rispondere alle richieste di
              contatto o preventivo inviate dall'utente. La base giuridica del
              trattamento è il legittimo interesse del titolare (art. 6, par. 1,
              lett. f, GDPR) nella gestione delle comunicazioni commerciali
              precontrattuali, nonché il consenso espresso dall'utente al
              momento dell'invio del modulo (art. 6, par. 1, lett. a, GDPR).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Modalità di trattamento e conservazione
            </h2>
            <p>
              I dati sono trattati in forma elettronica e conservati unicamente
              nella casella di posta del titolare. Non vengono trasferiti a
              terzi né utilizzati per finalità diverse da quelle indicate.
            </p>
            <p className="mt-3">
              I dati sono conservati per il tempo strettamente necessario a
              evadere la richiesta e, in ogni caso, non oltre 12 mesi dalla
              ricezione del messaggio, salvo obblighi di legge o necessità di
              difesa in giudizio.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Diritti dell'interessato
            </h2>
            <p>
              Ai sensi degli artt. 15–22 del GDPR, l'utente ha il diritto di:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-400">
              <li>Accedere ai propri dati personali</li>
              <li>Richiederne la rettifica o la cancellazione</li>
              <li>Opporsi al trattamento o richiederne la limitazione</li>
              <li>Richiedere la portabilità dei dati</li>
              <li>Revocare il consenso in qualsiasi momento</li>
            </ul>
            <p className="mt-3">
              Per esercitare i propri diritti è sufficiente inviare una email a{" "}
              <a
                href="mailto:hello@mateuszrodz.com"
                className="text-blue-400 hover:underline"
              >
                hello@mateuszrodz.com
              </a>
              . Il titolare risponderà entro 30 giorni dalla ricezione della
              richiesta.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Reclami
            </h2>
            <p>
              L'utente ha il diritto di proporre reclamo al Garante per la
              Protezione dei Dati Personali (
              <a
                href="https://www.garanteprivacy.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                www.garanteprivacy.it
              </a>
              ) qualora ritenga che il trattamento violi la normativa vigente.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. Modifiche
            </h2>
            <p>
              Il titolare si riserva il diritto di aggiornare la presente
              informativa. La versione vigente è sempre disponibile a questo
              indirizzo. Si consiglia di consultarla periodicamente.
            </p>
          </div>
        </section>

        <div className="mt-16 pt-8 border-t border-neutral-800">
          <a href="/" className="text-blue-400 hover:underline text-sm">
            &lt;- Torna alla home
          </a>
        </div>
      </main>
    </div>
  );
}
