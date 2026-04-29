"use client";
import { useState, useEffect } from "react";
import { X, Play } from "lucide-react";

export default function GamesGrid({ games }) {
  const [activeGame, setActiveGame] = useState(null);
  const [imgErrors, setImgErrors] = useState({});

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (activeGame) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeGame]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setActiveGame(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {games.map((game, index) => (
          <button
            key={index}
            onClick={() => setActiveGame(game)}
            className="text-left flex flex-col border border-gray-600 rounded-lg overflow-hidden hover:border-gray-400 transition-colors group"
          >
            {/* Thumbnail */}
            <div className="relative w-full h-44 bg-neutral-800 overflow-hidden flex items-center justify-center">
              {!imgErrors[index] && game.thumbnail ? (
                <img
                  src={game.thumbnail}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={() => setImgErrors((prev) => ({ ...prev, [index]: true }))}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-900" />
              )}
              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold">{game.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm mb-auto">
                {game.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1">
                {game.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold px-1.5 py-0.5 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Fullscreen game modal */}
      {activeGame && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black">
          {/* Modal header */}
          <div className="flex justify-between items-center px-4 py-2 bg-neutral-900 border-b border-neutral-700 shrink-0">
            <span className="text-white font-semibold">{activeGame.title}</span>
            <button
              onClick={() => setActiveGame(null)}
              className="text-gray-400 hover:text-white transition-colors p-1 rounded"
              aria-label="Close game"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Game iframe */}
          <iframe
            src={activeGame.path}
            className="flex-grow w-full border-none"
            allow="autoplay; fullscreen"
            title={activeGame.title}
          />
        </div>
      )}
    </>
  );
}
