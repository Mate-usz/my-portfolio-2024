# Handoff: Portfolio bilingue Mateusz Rodz (homepage + cucina + servizi + percorso)

## Overview
Redesign completo del sito personale mateuszrodz.com: una homepage che smista il visitatore verso tre destinazioni ("porte") e tre pagine di destinazione. Il sito ha due pubblici molto diversi - chi assume uno sviluppatore frontend e chi assume in un forno o in cucina - e la homepage serve a non far scegliere al visitatore sbagliato la pagina sbagliata. Tutto il sito e' bilingue italiano/inglese con un toggle EN/IT reale nell'header (nessuna redirect, nessun path /it): la lingua e' stato dell'app.

Pagine:
- `/` homepage: ritratto, bio in due paragrafi, "Cosa stai cercando?" e tre porte di pari peso.
- `/kitchen` (Cucina): il portfolio da panificatore. E' la pagina prioritaria del progetto: serve a ottenere un posto o uno stage in un forno.
- `/services` (Servizi): quattro pacchetti a prezzo fisso per piccole attivita', processo, prove, e cosa NON si accetta.
- `/work` (Percorso): il CV vero, in forma di registro.

## About the Design Files
I file in questo bundle sono **riferimenti di design realizzati in HTML**: prototipi che mostrano aspetto e comportamento voluti, **non codice di produzione da copiare**. Il lavoro consiste nel **ricreare questi design nell'ambiente del codebase di destinazione** (React, Next.js, Astro, Vue, o altro) usando i suoi pattern, componenti e convenzioni. Se il codebase non esiste ancora, scegli tu il framework piu' adatto - per un sito di questo tipo (poche pagine, molto contenuto statico, bilingue, ottimo SEO e caricamento veloce) Next.js con App Router o Astro sono le scelte naturali - e implementa i design la'.

Il markup dei prototipi usa un piccolo runtime di template proprietario (`{{ }}`, `<sc-for>`, `<sc-if>`): **non riprodurlo**. Traducilo nei costrutti del framework scelto (map, condizionali, componenti).

## Fidelity
**High-fidelity.** Colori, tipografia, spaziature, stati e testi sono definitivi. Da ricreare fedelmente usando i componenti e le utility del codebase. Due eccezioni dichiarate:
- **Immagini**: tutti i riquadri grigi sono segnaposto. Le foto vere (screenshot dei progetti, foto degli impasti, ritratto) le inserisce l'autore in fase di sviluppo.
- **Contenuti della cucina**: date del registro impasti, idratazioni, temperature e note sono segnaposto plausibili, da sostituire con dati reali. La *struttura* invece e' definitiva.

## Screens / Views

Ogni pagina esiste in due formati nel prototipo: desktop (canvas 1120px, layout pensato per >= 1024px) e mobile (canvas 390px). Nessun breakpoint tablet e' stato disegnato: interpola, o passa al layout mobile sotto 900px.

### 1. Homepage - desktop (id `2a`)
- **Purpose**: presentarsi in cinque secondi e mandare il visitatore alla pagina giusta.
- **Layout**: colonna unica, padding orizzontale 60px, contenuto a bandiera sinistra.
  - Header: `display:flex; justify-content:space-between; align-items:center; padding:20px 60px`. A sinistra "MR" (font heading, 500, 13.5px). A destra: tre link di nav (Cucina / Percorso / Servizi, 13px, colore testo al 55%) + toggle EN/IT.
  - Blocco bio: `padding:70px 60px 0; max-width:820px`. Riga con ritratto circolare 64x64 + nome (h1 34px, letter-spacing -.025em) e kicker (13.5px, testo al 52%) in colonna; sotto due paragrafi 17px/1.62, testo al 78%, `text-wrap:pretty`, gap 12px.
  - Blocco porte: `padding:64px 60px 70px`. Titolo h2 20px + sottotitolo 13px (testo al 45%) allineati alla baseline con gap 14px, margin-bottom 22px. Griglia tre colonne uguali realizzata con `gap:1px` su fondo `--color-divider`, bordo 1px divider, radius 8px, `overflow:hidden`: ogni cella e' un `<a>` con `background: var(--color-bg)`, `padding:24px 22px 20px`, `min-height:150px`, colonna con gap 9px.
    - Cella: riga titolo (h3 18px) + meta a destra (11.5px monospace, testo al 45%); corpo 13.5px/1.55 testo al 64%; in fondo (`margin-top:auto`) etichetta 12.5px in `--color-accent-300` con testo del percorso e icona freccia 13px.
    - Hover: `background: var(--color-accent-900)`. Focus: `outline:2px solid var(--color-accent); outline-offset:-2px`.
  - Blocco contatti: `padding:0 60px 60px`, tre celle nella stessa tecnica gap-1px, bordo sopra e sotto. Ogni cella e' un link: etichetta 11px monospace lettera-spaziata (testo al 40%) sopra il valore 14.5px. Hover `background: var(--color-neutral-900)`.
  - Footer: `display:flex; justify-content:space-between; padding:18px 60px; border-top:1px solid divider`, 12px, testo al 42%. A destra Portfolio / LinkedIn / GitHub con gap 14px.
- **Contenuti** (IT / EN): kicker "Perugia - frontend per i clienti, e il sabato in cucina" / "Perugia, Italy - frontend for clients, kitchen on Saturdays". Bio A: consulenza sui portali Unicredit, AXA, BNP, ITAS in team da 3 a 12 persone; dal 2024 in autonomia con webapp, e-commerce Shopify e giochi. Bio B: fuori dal lavoro impasti e GameJam. Porte: Servizi (meta "da EUR 50"), Esperienza (meta "2022 - 2026"), Cucina (meta "dal 2022").

### 2. Homepage - mobile (id `9a`)
- Larghezza 390px, padding orizzontale 20px.
- Header non sticky: "MR" + toggle EN/IT (pulsanti alti 32px).
- Ritratto circolare 96x96, poi h1 27px, kicker 13px, due paragrafi 15px/1.62.
- Porte: colonna, gap 12px. Ogni porta e' un `<a>` con bordo 1px divider, radius 8px, padding 18px, titolo 17px + icona freccia in accento a destra, corpo 13.5px, meta 11.5px monospace in `--color-accent-300`. Hover: bordo `--color-neutral-600` + fondo `--color-neutral-900`. Altezza minima 46px (target tocco).
- Contatti come lista: righe con separatore inferiore, etichetta monospace 11px a sinistra, valore 13.5px a destra, min-height 46px.
- Footer una riga, 11.5px.

### 3. Cucina - desktop (id `4a`)
- **Purpose**: convincere un panificatore o un pizzaiolo che vale la pena farti fare una prova.
- **Layout**: header identico alle altre pagine + CTA outline "Scrivimi" (mailto) nell'header.
  - Hero: griglia `1fr 320px`, gap 48px, `align-items:end`, `padding:60px 60px 0`. A sinistra h1 34px + lead 16px/1.62 (max-width 620px). A destra colonna "Disponibilita'": bordo sinistro 1px `--color-accent-700`, padding-left 16px, h6 in accento + testo 12.5px.
  - **01 Impasti recenti**: numero di sezione 11px monospace in accento + h2 19px. Mosaico volutamente non uniforme: prima riga tre foto `minmax(0,1.6fr) minmax(0,1fr) minmax(0,1fr)` alte 268px con didascalia (nome 12px + spec 11px monospace al 38%); seconda riga cinque foto alte 118px, gap 14px, didascalia breve.
  - **02 Cosa faccio**: tre colonne, gap 38px, ognuna con bordo superiore 1px divider e padding-top 14px: h3 17px, corpo 13.5px/1.58, riga tecnica 11.5px/1.7 monospace in `--color-accent-300`.
  - **03 Registro impasti**: h2 + nota 13.5px (testo al 50%, max 520px). Righe `70px 200px 280px minmax(0,1fr)`, gap 18px, allineate alla baseline, padding 12px 0, separatore inferiore: data 12px monospace, nome 14px heading 500, dati impasto 11.5px monospace in accento-300, nota 13px al 60%.
  - Nota a mano: paragrafo 12px monospace ruotato `-.35deg`, preceduto da un pallino 5px in accento. E' un dettaglio voluto: rende la pagina meno "generata".
  - **04 Cosa cerco**: griglia `minmax(0,1fr) 288px` gap 56px. A sinistra testo 15.5px + bottone primario (outline accento). A destra "Dove sono solido": h6 + lista con pallini 5px in accento, voci 13px.
  - Blocco contatti a tre celle + footer, come la homepage.
- **Note di contenuto**: il tono e' deliberatamente onesto ("non chiedo di essere pagato per imparare sul vostro tempo"). Da non ammorbidire in fase di sviluppo.

### 4. Cucina - mobile (id `5a`)
- Header **sticky** (`position:sticky; top:0; background: var(--color-bg); z-index:2`, bordo inferiore) con nav e toggle; il CTA scende sotto la hero come bottone a piena larghezza (`min-height:46px`).
- Ordine: hero + disponibilita' + CTA, poi 01 con una foto grande 230px e le altre due per riga a 126px, 02 in colonna, 03 come schede impilate (nome e data sulla stessa riga, dati impasto, nota), nota a mano, 04 con lista competenze e contatti toccabili.

### 5. Servizi - desktop (id `6a`)
- Hero come la cucina, con colonna destra "Come lavoro".
- **01 Cosa puoi affidarmi**: quattro pacchetti in griglia `2x2`, gap `34px 56px`, ogni scheda con bordo superiore: riga titolo 17px + eventuale badge "Premium" (pillola, bordo `--color-accent-700`, testo 10px maiuscolo lettera-spaziato in `--color-accent-200`) e prezzo a destra (14px heading 500 in `--color-accent-200`); corpo 13.5px; riga tecnica monospace in accento-300; riga consegna 11px monospace al 40%.
  - Pacchetti: Fix & Boost da EUR 50 (2 giorni), Landing page da EUR 300 (5 giorni), Landing con prenotazioni da EUR 500 (8 giorni), **Store Shopify da EUR 900 (3 settimane, Premium)**.
- **02 Come funziona**: quattro colonne, gap 30px, ognuna con numero 11px monospace al 34%, titolo 15.5px, corpo 13px.
- **03 Lavori recenti**: tre foto `1.5fr 1fr 1fr` alte 250px con didascalie: RSVmotori (Shopify, form dinamici in registrazione), Kobocraft (Stripe, configuratore della tavola), heyHuby (Next.js, una pagina per cliente).
- **04 Cosa non faccio**: testo + CTA a sinistra, contatti a destra. Footer.

### 6. Servizi - mobile (id `8a`)
Header sticky, CTA a piena larghezza sotto la hero, pacchetti in colonna (badge Premium sotto il titolo), processo come righe `28px 1fr`, prove come una foto grande + due piccole, contatti toccabili.

### 7. Percorso - desktop (id `7a`)
- **Purpose**: il CV navigabile, per recruiter e clienti.
- Hero: h1 34px + lead; colonna destra "Dati" (residenza, lingue, disponibilita').
- Riga di tre screenshot `1.5fr 1fr 1fr` alti 236px (heyHuby, RSVmotori, Kobocraft).
- **01 Per conto mio, dal 2024** e **02 In consulenza, dal 2022 al 2024**: stesso pattern di righe `132px 224px minmax(0,1fr)`, gap 26px, bordo superiore, padding 20px 0: periodo 12px monospace al 42%; nome 16px + qualifica/dimensione team 11.5px monospace al 44%; descrizione 13.5px/1.58 al 72% + riga tecnologie o cliente/tramite 11.5px monospace in accento-300.
- **03 Stack**: tre gruppi (Frontend / Backend / Strumenti e metodo) in colonne, liste con pallini 5px in accento.
- **04 Fuori dal lavoro**: tre colonne (giochi e GameJam, creator YouTube, store di carte).
- Chiusura: paragrafo + CTA a sinistra, contatti (email, telefono, LinkedIn, GitHub) a destra. Footer.

### 8. Percorso - mobile (id `8b`)
Header sticky, CTA sotto la hero, due screenshot per riga, le voci del CV come schede impilate (periodo e tipo sulla stessa riga sopra il titolo), stack e "fuori dal lavoro" in colonna, contatti come lista.

## Interactions & Behavior
- **Toggle lingua**: due pulsanti EN / IT nell'header, uniti in un contenitore con bordo 1px divider e radius 8px, `overflow:hidden`. Attivo: fondo `--color-accent`, testo `#161826`. Inattivo: fondo trasparente, testo al 55%. Cambia ogni stringa della pagina senza ricaricare. In produzione: default italiano, memorizza la scelta (localStorage o cookie) e rifletti la lingua nell'attributo `lang` dell'html; valuta `Accept-Language` per la prima visita.
- **Navigazione**: header con i tre link alle pagine; la pagina corrente e' in `--color-text` pieno, le altre al 50%.
- **Hover**: definito su ogni elemento interattivo - celle contatto `--color-neutral-900`, porte homepage `--color-accent-900`, link footer e liste `--color-accent-200`. Nessuno stato di default del browser.
- **Focus da tastiera**: `outline:2px solid var(--color-accent); outline-offset:2px` (le celle interne usano offset -2px per non uscire dal bordo). Obbligatorio: e' l'unico indicatore di focus previsto.
- **CTA**: tutti i bottoni "Scrivimi" / "Chiedi un preventivo" aprono `mailto:rodzmateusz@gmail.com`. Il telefono usa `tel:+393483749656`.
- **Target tocco**: minimo 46px di altezza su mobile (righe contatto, pulsanti lingua, bottoni a piena larghezza).
- **Immagini**: nel prototipo sono aree droppabili. In produzione: `<img>` con dimensioni intrinseche, `loading="lazy"` sotto la piega, radius 8px, `object-fit:cover`. Il design system prevede l'involucro `.lighten` (`mix-blend-mode:lighten`) per le foto su fondo scuro: usalo per le foto di cibo scattate su fondo nero.
- **Nessuna animazione**: il design non ne prevede, a parte le transizioni di colore su hover (150-200ms ease e' adeguato).

## State Management
- `lang: 'it' | 'en'` - unico stato globale, default `'it'`, persistito lato client.
- Nessuna chiamata di rete, nessun form, nessuno stato di caricamento o errore: il sito e' statico. Se in futuro si aggiunge un form di contatto, servira' validazione e stato di invio, oggi non previsti.
- Contenuti (pacchetti, voci di CV, registro impasti, porte) sono dati strutturati: tienili in file di contenuto per lingua (JSON, MDX o simili), non nel markup. Vedi le strutture nel prototipo: ogni voce di CV ha `{ periodo, nome, tipo o team, descrizione, stack, cliente, tramite }`; ogni pacchetto `{ nome, prezzo, corpo, riga tecnica, consegna, premium }`.

## Design Tokens
Dal design system **Nocturne** (`styles.css` incluso nel bundle). Non introdurre valori fuori da questa lista.

Colori base: `--color-bg #161826`, `--color-surface #232532`, `--color-text #e9e9ed`, `--color-accent #9184d9`, `--color-divider color-mix(in srgb, #e9e9ed 16%, transparent)`.

Rampa accento: 100 #f5f4ff, 200 #e7e5fe, 300 #d2cefd, 400 #b5abfc, 500 #968ae0, 600 #796cbf, 700 #5d5294, 800 #423a6a, 900 #2b2741.

Rampa neutra: 100 #f3f5fe, 200 #e4e7f5, 300 #cfd3e5, 400 #b2b6ca, 500 #9397ab, 600 #75798c, 700 #595d6c, 800 #3f424d, 900 #292b31.

Trasparenze di testo usate nel design (sempre come `color-mix(in srgb, var(--color-text) N%, transparent)`): 78% e 76% per il corpo principale, 72% e 74% per i corpi secondari, 66% e 64% per il testo di supporto, 56%-58% per le voci attenuate, 50%, 45%, 42%, 40% per note e metadati, 34% per i numeri di passo.

Tipografia: Inter per titoli e corpo (`--font-heading`, `--font-body`), peso titoli 500 - **non usare 600 o 700**. Scala usata: h1 34px desktop / 25-27px mobile, h2 19-20px / 17px, h3 15.5-17px / 15-16px, corpo 15.5-17px / 14.5-15px, secondario 13-13.5px, metadati 11-12.5px. Letter-spacing negativo solo sui titoli grandi (-.02em / -.025em). Line-height 1.55-1.64 sui testi, 1.18-1.22 sui titoli mobile. Le righe tecniche e i metadati usano un monospace di sistema (`ui-monospace, Menlo, monospace`).

Spaziature: scala densa 0.7x (`--space-1 2.8px` ... `--space-8 22.4px`); nel design i padding di pagina sono 60px desktop / 20px mobile e le distanze fra sezioni 40-74px.

Radius: `--radius-sm 4px`, `--radius-md 8px` (predefinito, usato per foto, celle e pulsanti), `--radius-lg 14px`; pillole a 99px.

Ombre: `--shadow-sm 0 0 0 1px #3f424d`, `--shadow-md`, `--shadow-lg`. Il design **non le usa**: l'elevazione qui e' un bordo hairline, non un'ombra. Non aggiungerne.

Regole del sistema da rispettare: mai nero o bianco puri; l'accento vive come linea, bordo e glow, mai come campitura larga; niente gradienti decorativi; layout a bandiera sinistra e asimmetrici; i bottoni primari sono outline con bordo accento su fondo trasparente, non pieni.

## Assets
- Nessun asset fornito. Tutte le immagini sono segnaposto da riempire: 8 foto impasti (cucina), 3 screenshot progetti (servizi), 3 screenshot progetti (percorso), 1 ritratto (homepage). Le posizioni e le proporzioni sono indicate nei prototipi.
- Icone: **Phosphor** (phosphoricons.com). Nel design e' usata solo `arrow-right`, inline in SVG 12-16px con `fill="currentColor"`. Usa la libreria Phosphor del codebase per le eventuali icone future.
- Font: Inter (Google Fonts o self-hosted, pesi 400 e 500).
- Il curriculum in PDF (`MateuszRodz_CurriculumVitae.pdf`) e' la fonte dei contenuti della pagina Percorso; valuta di offrirlo in download da quella pagina - il design non lo prevede ancora.

## Files
- `Portfolio hub.dc.html` - **il design finale**: le otto schermate, nell'ordine Homepage desktop, Homepage mobile, Cucina desktop, Cucina mobile, Servizi desktop, Servizi mobile, Percorso desktop, Percorso mobile. Ogni schermata ha un id (`2a`, `9a`, `4a`, `5a`, `6a`, `8a`, `7a`, `8b`) usato dai link di navigazione interni. Aprilo in un browser per vederlo.
- `Portfolio hub - esplorazioni.dc.html` - archivio delle direzioni scartate. Solo contesto storico, **non implementare da qui**.
- `nocturne/styles.css` - il foglio di stile del design system con tutti i token.
- `nocturne/readme.md` - le regole del design system (colore, tipografia, stati, cosa fare e non fare).
- `MateuszRodz_CurriculumVitae.pdf` - il CV, fonte dei contenuti della pagina Percorso.

## Contatti reali usati nel design
Email rodzmateusz@gmail.com - telefono +39 348 3749656 - linkedin.com/in/mateusz-rodz - github.com/Mate-usz - portfolio mateuszrodz.com/portfolio.
