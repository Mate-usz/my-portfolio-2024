/*
 * Contenuti italiani. Lingua di default del sito.
 *
 * ⚠️ DA VERIFICARE prima di andare online (vedi anche en.js, stessi punti):
 *   - kitchen.cats[].spec e kitchen.skills: descrivono cosa sai fare in cucina.
 *     Sono scritti a partire dalle note vere delle foto in data/sfornati.json,
 *     ma vanno confermati da te.
 *   - kitchen.log[].dough: la colonna tecnica del registro (idratazione, farina,
 *     tempi, temperature). È vuota di proposito: i dati veri non sono nel
 *     progetto e non li ho inventati. Compilala e la colonna compare da sola.
 *     Esempio di formato: "65% idr · 72h freddo · Nuvola".
 */

export const contacts = {
  email: "hello@mateuszrodz.com",
  phone: "+39 348 3749656",
  phoneHref: "tel:+393483749656",
  mailto: "mailto:hello@mateuszrodz.com",
  linkedin: "https://www.linkedin.com/in/mateusz-rodz",
  linkedinLabel: "mateusz-rodz",
  github: "https://github.com/Mate-usz",
  githubLabel: "Mate-usz",
  portfolio: "https://mateuszrodz.com/portfolio",
};

const it = {
  nav: {
    kitchen: "Cucina",
    work: "Percorso",
    services: "Servizi",
    contact: "Contatti",
  },
  labels: {
    email: "EMAIL",
    phone: "TELEFONO",
    github: "GITHUB",
    linkedin: "LINKEDIN",
    delivery: "consegna",
    team: "team",
    client: "cliente",
    via: "per",
  },
  footer: "© 2026 mateuszrodz.com",

  home: {
    name: "Mateusz Rodz",
    kicker: "Perugia - software developer per i clienti, e il sabato in cucina",
    bioA: "Sviluppatore a Perugia. Due anni in consulenza sui portali di Unicredit, AXA, BNP e ITAS, in team dalle tre alle dodici persone. Dal 2024 lavoro per conto mio: webapp, e-commerce su Shopify e qualche gioco.",
    bioB: "Fuori dal lavoro impasto e programmo giochi. Pizza il sabato, GameJam quando capita. La stessa abitudine in tutto: curare i dettagli e consegnare finito.",
    seekTitle: "Cosa stai cercando?",
    seekSub: "Tre porte. Prendi quella che ti serve.",
    doors: [
      {
        title: "Servizi",
        body: "Correzione bug, performance e landing page, consegnate in 48-72 ore.",
        meta: "da €50",
        href: "/services",
      },
      {
        title: "Esperienza",
        body: "Portali bancari e assicurativi in consulenza, poi progetti miei dal 2024.",
        meta: "2022 - 2026",
        href: "/work",
      },
      {
        title: "Cucina",
        body: "Pizza, cornetti e pane, annotati impasto per impasto. Disponibile per lavoro in cucina.",
        meta: "dal 2023",
        href: "/bakery",
      },
    ],
  },

  kitchen: {
    metaTitle: "Cucina",
    metaDescription:
      "Portfolio culinario di Mateusz Rodz: pizza, cornetti, pan brioche e pane fatti in casa dal 2023, con il registro degli impasti. Disponibile per lavoro o stage in forno o in cucina a Perugia.",
    title: "Pane, pizza e sfogliati",
    lead: "Impasto a casa da fine 2023, da autodidatta: pizza soprattutto, poi cornetti, pan brioche e pane. Fotografo e annoto quasi ogni infornata, quella venuta bene e quella no. Cerco una cucina dove imparare il mestiere per davvero.",
    availTitle: "Disponibilità",
    avail: "Part time o full time possibile · Perugia e dintorni",
    cta: "Scrivimi",
    gallery: "Impasti recenti",
    galleryLead: [
      { c: "Pizza margherita", s: "03.2026" },
      { c: "Cornetti", s: "05.2026" },
      { c: "Primo pane casareccio", s: "02.2026" },
    ],
    galleryRest: [
      { c: "Pan brioche" },
      { c: "Pizza salame piccante" },
      { c: "Giga cornetto alla crema" },
      { c: "Mini cornetti" },
      { c: "Pizza tonno e cipolla" },
    ],
    what: "Cosa faccio",
    cats: [
      {
        title: "Pizza",
        body: "L'impasto che faccio più spesso, dal 2023. Margherita, tonno e cipolla, quattro formaggi: cambio le farciture e tengo fisso l'impasto finché non viene come voglio.",
        spec: "Tonda e in teglia · pietra refrattaria · forno di casa",
      },
      {
        title: "Sfogliati e lievitati dolci",
        body: "Cornetti normali e cornetti giganti, pan brioche semplici o ripieni di cioccolato. È la parte che mi ha insegnato la pazienza sui tempi di lievitazione.",
        spec: "Cornetti · pan brioche · brioche ripiene",
      },
      {
        title: "Pane",
        body: "Il capitolo più recente: il primo pane casareccio è di febbraio 2026. Ogni infornata annotata con quello che non ha funzionato, per non ripeterlo.",
        spec: "Pane casareccio · panini · focaccia",
      },
    ],
    log: "Registro impasti",
    logNote:
      "Annoto ogni infornata: cosa ho fatto, com'è venuta, cosa è andato storto. Questi sono gli ultimi mesi.",
    logFoot:
      "Il quaderno completo parte da novembre 2023: ogni infornata fotografata.",
    archiveCta: "Apri l'archivio degli sfornati",
    archiveHref: "/sfornati",
    // dough: vedi la nota in cima al file — compila quando hai i dati veri sottomano
    logRows: [
      {
        date: "14.05.26",
        name: "Cornetti",
        dough: "",
        note: "Erano squisiti, cresciuti bene in cottura",
      },
      {
        date: "28.03.26",
        name: "Serata pizza",
        dough: "",
        note: "Margherita, formaggi, salame piccante e patatine",
      },
      {
        date: "28.03.26",
        name: "Pan brioche",
        dough: "",
        note: "Pan brioche e brioche nella stessa giornata",
      },
      {
        date: "15.03.26",
        name: "Brioche",
        dough: "",
        note: "Semplici, non mi andava di fare gli strati",
      },
      {
        date: "09.03.26",
        name: "Panini",
        dough: "",
        note: "Buoni solo caldi, sfortunatamente",
      },
      {
        date: "05.02.26",
        name: "Pane casareccio",
        dough: "",
        note: "Il primo. Da rifare con più cottura",
      },
    ],
    ask: "Cosa cerco",
    askBody:
      "Un posto in un forno, in pizzeria o in pasticceria. Non chiedo di essere pagato per imparare sul vostro tempo: arrivo presto, pulisco mentre lavoro e so già gestire un impasto e una tabella di marcia. Vengo dal software, quindi volentieri vi sistemo anche il sito.",
    skills: "Dove sono solido",
    skillsList: [
      "Impasti a mano, dall'inizio alla teglia",
      "Leggere una lievitazione",
      "Formatura e stesura",
      "Cottura su pietra refrattaria",
      "Lavorare pulito, mise en place",
      "Pesare e scalare le ricette",
    ],
  },

  archive: {
    metaTitle: "Sfornati",
    metaDescription:
      "L'archivio completo degli impasti di Mateusz Rodz: ogni infornata fotografata da novembre 2023, mese per mese, con le note di quello che è andato bene e di quello che no.",
    title: "Sfornati",
    lead: "Ogni infornata, dalla prima all'ultima. Non è una vetrina: ci sono anche i tentativi venuti male, perché sono quelli da cui ho imparato di più. Clicca una foto per vederla intera.",
    railTitle: "Come leggerlo",
    rail: "Si parte da novembre 2023 e si scende fino a oggi, mese per mese. Le note a margine segnano i cambi di attrezzatura o di metodo: sono i punti in cui i risultati cambiano.",
    backCta: "Torna alla cucina",
    jumpCta: "Salta agli ultimi sfornati",
    photosLabel: "foto",
    close: "Chiudi",
    prev: "Precedente",
    next: "Successiva",
    months: [
      "Gennaio",
      "Febbraio",
      "Marzo",
      "Aprile",
      "Maggio",
      "Giugno",
      "Luglio",
      "Agosto",
      "Settembre",
      "Ottobre",
      "Novembre",
      "Dicembre",
    ],
  },

  services: {
    metaTitle: "Servizi",
    metaDescription:
      "Sviluppo web per piccole attività: correzione bug, landing page, prenotazioni e store Shopify. Prezzo fisso concordato prima, consegna in 2 giorni - 3 settimane.",
    title: "Siti e web app per piccole attività",
    lead: "Costruisco e sistemo siti per chi ha un'attività e nessuno in casa che lo faccia. Parli con me dall'inizio alla fine. I lavori piccoli sono pronti in due o tre giorni.",
    railTitle: "Come lavoro",
    rail: "Rispondo entro un giorno. Dopo una call breve ti do un prezzo fisso, scritto. Fattura con P.IVA.",
    cta: "Chiedi un preventivo",
    what: "Cosa puoi affidarmi",
    packages: [
      {
        name: "Fix & Boost",
        price: "da €50",
        body: "Qualcosa è rotto o lento. Trovo la causa, la sistemo e ti spiego cos'era senza giri di parole.",
        spec: "bug, velocità, layout mobile",
        delivery: "2 giorni",
      },
      {
        name: "Landing page",
        price: "da €300",
        body: "Una pagina che spiega cosa fai e porta la gente a chiamare o prenotare. Ti aiuto anche a mettere in ordine i testi.",
        spec: "design e sviluppo, responsive, analytics",
        delivery: "5 giorni",
      },
      {
        name: "Landing con prenotazioni",
        price: "da €500",
        body: "La pagina più un sistema di prenotazione che funziona, collegato al tuo calendario o alla tua mail.",
        spec: "form, calendario, notifiche email",
        delivery: "8 giorni",
      },
      {
        name: "Store Shopify",
        price: "da €900",
        body: "Un negozio che vende davvero. Tema costruito sul tuo marchio, prodotti caricati come si deve, pagamenti e spedizioni configurati. Poi ti insegno a gestirlo da solo.",
        spec: "tema Shopify, import prodotti, pagamenti, spedizioni",
        delivery: "3 settimane",
        premium: "Premium",
      },
    ],
    booking: {
      title: "Prenota una call gratuita",
      lead: "Trenta minuti, senza impegno: mi racconti cosa ti serve e ti dico se posso farlo, quanto costa e in quanto tempo. Se non è roba mia te lo dico subito.",
      serviceLabel: "SERVIZIO",
      servicePlaceholder: "Scegli",
      serviceOther: "Non lo so ancora",
      nameLabel: "NOME E COGNOME",
      namePlaceholder: "Mario Rossi",
      emailLabel: "EMAIL",
      emailPlaceholder: "nome@esempio.it",
      detailsLabel: "DUE RIGHE SUL PROBLEMA · FACOLTATIVO",
      detailsPlaceholder:
        "Es. il sito è lento da quando ho caricato le foto dei prodotti",
      submit: "Prenota la call",
      sending: "Invio…",
      successTitle: "Ricevuto",
      successBody:
        "Ti scrivo entro un giorno lavorativo con due o tre orari possibili. Se nel frattempo ti viene in mente altro, rispondi pure a quella mail.",
      errorRequired: "Servono servizio, nome ed email per poterti richiamare.",
      errorEmail: "Controlla l'indirizzo email, non mi sembra valido.",
      errorSend:
        "Invio non riuscito. Riprova fra poco, oppure scrivimi direttamente a",
      note: "Uso questi dati solo per risponderti: niente newsletter, niente liste.",
      noteLink: "Come tratto i dati",
    },
    how: "Come funziona",
    steps: [
      {
        n: "01",
        title: "Una call di trenta minuti",
        body: "Mi racconti il problema. Ti chiedo cosa deve fare il sito per te. Non serve un brief scritto.",
      },
      {
        n: "02",
        title: "Un prezzo fisso",
        body: "Perimetro scritto e un solo numero, lo stesso giorno. Nessuna sorpresa a ore.",
      },
      {
        n: "03",
        title: "Costruisco, tu lo vedi online",
        body: "Un link che apri dal telefono, aggiornato mentre lavoro.",
      },
      {
        n: "04",
        title: "Consegna",
        body: "Tutto sui tuoi account, non sui miei. Ti spiego come cambiare i testi da solo.",
      },
    ],
    proof: "Lavori recenti",
    proofNote:
      "Lavori veri, non demo: uno shop di macchinari edili su Shopify, uno di skateboard artigianali con pagamenti Stripe, e una webapp che gestisce una pagina per ogni cliente.",
    jobs: [
      { name: "RSVmotori", spec: "Shopify, form dinamici in registrazione" },
      { name: "Kobocraft", spec: "Stripe, configuratore della tavola" },
      { name: "heyHuby", spec: "Next.js, una pagina per cliente" },
    ],
    no: "Cosa non faccio",
    noBody:
      "Niente SEO a canone, niente loghi, niente plugin da scavare su siti fatti da altri. Se è fuori da quello che faccio bene te lo dico e ti mando da qualcuno più adatto. Più veloce per tutti e due.",
  },

  work: {
    metaTitle: "Percorso",
    metaDescription:
      "Il percorso di Mateusz Rodz: portali per Unicredit, AXA, BNP e ITAS in consulenza dal 2022, poi webapp, e-commerce e giochi per conto suo dal 2024.",
    title: "Dai portali bancari ai progetti miei",
    lead: "Ho iniziato in consulenza sui portali di Unicredit, AXA, BNP e ITAS, in team dalle tre alle dodici persone. Dal 2024 lavoro per conto mio: webapp, e-commerce e qualche gioco. Vivo a Perugia, disponibile da remoto.",
    railTitle: "Dati",
    rail: "Perugia. Italiano madrelingua, polacco lingua etnica, inglese B1-B2. Disponibile per contratti di sviluppo, da remoto o qui.",
    cta: "Scrivimi",
    own: "Per conto mio, dal 2024",
    ownList: [
      {
        when: "12.2025 - in corso",
        name: "heyHuby",
        kind: "individuale",
        body: "Webapp che raccoglie in un unico posto le informazioni importanti di un cliente, di un brand o di una società. Ogni cliente ha la sua pagina, la può puntare sul proprio dominio e personalizzarne interamente il contenuto.",
        stack: "Next.js, TypeScript, Supabase",
      },
      {
        when: "04.2026 - 05.2026",
        name: "Blog AI",
        kind: "individuale",
        body: "App che aggancia domini diversi con controlli sui record DNS e genera il certificato SSL con certbot. Tema personalizzabile e articoli scritti a mano o generati dando un argomento alle API di OpenAI.",
        stack: "Next.js, Node, OpenAI, certbot",
      },
      {
        when: "03.2026 - 04.2026",
        name: "DailyUs",
        kind: "progetto personale",
        body: "App mobile pensata per dare qualcosa in più alle coppie. Ho usato l'IA per capire la direzione da prendere e per implementare alcune soluzioni.",
        stack: "mobile, IA",
      },
      {
        when: "07.2025 - 08.2025",
        name: "RSVmotori",
        kind: "individuale",
        body: "Shop di macchinari edili su Shopify, con elementi custom e una app con form dinamici per raccogliere in registrazione informazioni che Shopify di base non permette.",
        stack: "Shopify, Liquid, app custom",
      },
      {
        when: "02.2025 - 06.2025",
        name: "Advergame",
        kind: "individuale",
        body: "Adventure puzzle 2D breve per l'uscita di un disco, con quattro easter egg per i fan che rimandano ai vecchi album.",
        stack: "game dev 2D",
      },
      {
        when: "03.2024 - 05.2024",
        name: "Kobocraft",
        kind: "individuale",
        body: "Shop di skateboard artigianali dove il cliente personalizza la tavola con drag and drop di sticker e il codice dei propri NFT. Ho migliorato stabilità e tempi di caricamento, integrato Stripe e sistemato parte della user experience senza stravolgere il design del cliente.",
        stack: "frontend, React, Nodejs, Stripe",
      },
      {
        when: "02.2024 - 03.2024",
        name: "Tetris mobile multiplayer",
        kind: "individuale",
        body: "Ho lavorato al gioco mobile in Unity3D: risoluzione di bug e comunicazione con i server rivista per abbassare la latenza.",
        stack: "Unity3D",
      },
    ],
    clients: "In consulenza, dal 2022 al 2024",
    clientList: [
      {
        when: "10.2023 - 05.2024",
        name: "Portale Unicredit",
        team: "12",
        client: "Unicredit Czechia",
        via: "Be",
        body: "Portale con più tipi di utente, messaggistica interna, gestione clienti e un sistema di notifiche e messaggi push multilingua.",
      },
      {
        when: "05.2023 - 09.2023",
        name: "Migrazione portale",
        team: "5",
        client: "ITAS / Reply",
        via: "Lipari Technology",
        body: "Parte del team che ha migrato il portale su un frontend nuovo in React.",
      },
      {
        when: "02.2023 - 09.2023",
        name: "Sistema notifiche",
        team: "3",
        client: "AXA / Reply",
        via: "Lipari Technology",
        body: "Sviluppo frontend del sistema di notifiche, insieme alla manutenzione dell'intero codice.",
      },
      {
        when: "02.2022 - 09.2023",
        name: "TPV",
        team: "3",
        client: "BNP / Reply",
        via: "Lipari Technology",
        body: "CRM per la gestione e la compilazione di anagrafiche, clienti e contratti. La parte più tosta è stata una sezione con compilazione dinamica dei beneficiari, da uno a N, ognuno con la propria validazione a runtime dentro un form a più sezioni.",
      },
    ],
    stack: "Stack",
    stacks: [
      {
        t: "Frontend",
        items: [
          "React, Next.js",
          "Angular",
          "TypeScript, JavaScript",
          "CSS, SCSS, TailwindCSS",
        ],
      },
      {
        t: "Backend",
        items: [
          "C#, Node.js",
          "Java, Spring Boot",
          "REST API",
          "MySQL, MongoDB, Supabase",
        ],
      },
      {
        t: "Strumenti e metodo",
        items: ["Git, GitHub", "CI/CD", "Agile, Scrum", "Unity3D, GameMaker"],
      },
    ],
    off: "Fuori dal lavoro",
    offList: [
      {
        t: "Videogiochi",
        body: "Nel tempo libero programmo giochi, miei o rifacendo meccaniche che mi hanno colpito. Partecipo alle GameJam quando posso, quarantotto ore per fare un gioco da zero su un tema dato all'ultimo. Ho pubblicato vari titoli sugli store mobile e su itch.io, con Unity3D o GameMaker, e da poco ho ripreso il C++ per farmi un piccolo engine 2D.",
      },
      {
        t: "Creator",
        body: "Quando mi viene un'idea che vale la pena raccontare, ne faccio un video su YouTube.",
      },
      {
        t: "Carte collezionabili",
        body: "Da tre anni ho un piccolo store dove vendo le mie vecchie collezioni di Pokémon e qualche box di Magic.",
      },
    ],
    close:
      "Il curriculum completo è in PDF, se ti serve. Altrimenti scrivimi e rispondo entro un giorno.",
    cvLabel: "Scarica il CV (PDF)",
  },
};

export default it;
