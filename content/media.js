/*
 * Immagini del sito nuovo. Sono tutte già in /public: il ritratto, le foto
 * degli impasti (prese dall'archivio /sfornati) e gli screenshot dei progetti.
 * Le didascalie stanno nei file di lingua e sono allineate per indice.
 */

export const portrait = {
  src: "/profile_pic.jpg",
  width: 1280,
  height: 1280,
};

/* Cucina — prima riga: tre foto grandi (la prima è la più larga) */
export const galleryLead = [
  { src: "/Sfornati/2026/03/20260328_202118.jpg" },
  { src: "/Sfornati/2026/05/20260514_125750.jpg" },
  { src: "/Sfornati/2026/02/20260205_215551.jpg" },
];

/* Cucina — seconda riga: cinque foto piccole */
export const galleryRest = [
  { src: "/Sfornati/2026/03/20260328_190050.jpg" },
  { src: "/Sfornati/2026/03/20260328_200958.jpg" },
  { src: "/Sfornati/2025/11/20251103_215124.jpg" },
  { src: "/Sfornati/2026/02/20260208_111935.jpg" },
  { src: "/Sfornati/2025/12/20251213_202401.jpg" },
];

/* Servizi — tre lavori recenti */
export const serviceJobs = [
  { src: "/rsvmotori.png", href: "https://rsvmotorisrl.it" },
  { src: "/Kobo.jpg", href: "https://kobocraft.xyz" },
  { src: "/heyhuby.png", href: "https://heyhuby.com" },
];

/* Percorso — tre screenshot in apertura */
export const workShots = [
  { src: "/heyhuby.png", href: "https://heyhuby.com", caption: "heyHuby", spec: "Next.js" },
  { src: "/rsvmotori.png", href: "https://rsvmotorisrl.it", caption: "RSVmotori", spec: "Shopify" },
  { src: "/Kobo.jpg", href: "https://kobocraft.xyz", caption: "Kobocraft", spec: "Stripe" },
];

export const cvPdf = "/Mateusz_Rodz_resume_eng.pdf";
