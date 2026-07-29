export default function sitemap() {
  const base = "https://mateuszrodz.com";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/kitchen`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/sfornati`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/portfolio`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/parrucchieri`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/personal-trainer`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/ristoranti`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
