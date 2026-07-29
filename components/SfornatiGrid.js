"use client";
import { useState, useEffect, useMemo, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const MONTHS_IT = [
  "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
  "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre",
];

function formatGroupLabel(dateStr) {
  const [year, month] = dateStr.split("-");
  return `${MONTHS_IT[parseInt(month, 10) - 1]} ${year}`;
}

function formatDate(dateStr) {
  const [year, month, day] = dateStr.split("-");
  return `${day} ${MONTHS_IT[parseInt(month, 10) - 1]} ${year}`;
}

export default function SfornatiGrid({ photos, notes = [] }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const groups = useMemo(() => {
    const map = new Map();
    for (const photo of photos) {
      const key = photo.date.slice(0, 7);
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(photo);
    }
    return [...map.entries()].sort((a, b) => (a[0] < b[0] ? -1 : 1));
  }, [photos]);

  const notesByMonth = useMemo(() => {
    const map = new Map();
    for (const note of notes) {
      if (!map.has(note.afterMonth)) map.set(note.afterMonth, []);
      map.get(note.afterMonth).push(note.text);
    }
    return map;
  }, [notes]);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i > 0 ? i - 1 : i)),
    []
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i < photos.length - 1 ? i + 1 : i)),
    [photos.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, closeLightbox, showPrev, showNext]);

  const activePhoto = activeIndex !== null ? photos[activeIndex] : null;

  return (
    <div className="mt-4">
      {groups.map(([key, groupPhotos]) => (
        <div key={key}>
          <section className="mb-10">
            <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
              {formatGroupLabel(key)}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {groupPhotos.map((photo) => {
                const index = photos.indexOf(photo);
                return (
                  <button
                    key={photo.src}
                    onClick={() => setActiveIndex(index)}
                    className="relative aspect-square overflow-hidden rounded-lg border border-gray-600 group"
                  >
                    <img
                      src={photo.src}
                      alt={photo.description || `Sfornato del ${formatDate(photo.date)}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {photo.description && (
                      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="text-white text-xs p-2 whitespace-pre-line">
                          {photo.description}
                        </p>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </section>
          {(notesByMonth.get(key) || []).map((text, i) => (
            <p
              key={i}
              className="mb-10 -mt-6 pl-3 border-l-2 border-gray-400 dark:border-gray-600 text-sm italic text-gray-600 dark:text-gray-400"
            >
              {text}
            </p>
          ))}
        </div>
      ))}

      {(notesByMonth.get("end") || []).map((text, i) => (
        <p
          key={i}
          className="mb-10 pl-3 border-l-2 border-gray-400 dark:border-gray-600 text-sm italic text-gray-600 dark:text-gray-400"
        >
          {text}
        </p>
      ))}

      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-black/95"
          onClick={closeLightbox}
        >
          <div className="flex justify-between items-center px-4 py-3 shrink-0">
            <span className="text-white text-sm">{formatDate(activePhoto.date)}</span>
            <button
              onClick={closeLightbox}
              className="text-gray-300 hover:text-white transition-colors p-1"
              aria-label="Chiudi"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-grow flex items-center justify-center relative px-4 pb-4 min-h-0">
            {activeIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); showPrev(); }}
                className="absolute left-2 md:left-6 text-gray-300 hover:text-white p-2 bg-black/40 rounded-full"
                aria-label="Foto precedente"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}
            <img
              src={activePhoto.src}
              alt={activePhoto.description || `Sfornato del ${formatDate(activePhoto.date)}`}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-full object-contain rounded"
            />
            {activeIndex < photos.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); showNext(); }}
                className="absolute right-2 md:right-6 text-gray-300 hover:text-white p-2 bg-black/40 rounded-full"
                aria-label="Foto successiva"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {activePhoto.description && (
            <p
              onClick={(e) => e.stopPropagation()}
              className="text-center text-gray-300 text-sm px-6 pb-4"
            >
              {activePhoto.description}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
