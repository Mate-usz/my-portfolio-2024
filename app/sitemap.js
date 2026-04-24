export default function sitemap() {
  const base = "https://mateuszrodz.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/portfolio`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/parrucchieri`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/personal-trainer`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/ristoranti`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
