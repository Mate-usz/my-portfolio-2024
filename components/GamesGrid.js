"use client";
import { useState, useEffect, useRef } from "react";
import { X, Play, Maximize2, Minimize2 } from "lucide-react";

export default function GamesGrid({ games }) {
  const [activeGame, setActiveGame] = useState(null);
  const [imgErrors, setImgErrors] = useState({});
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef(null);
  const modalRef = useRef(null);

  const handleIframeLoad = () => {
    try {
      const doc = iframeRef.current?.contentDocument;
      if (!doc) return;
      const style = doc.createElement("style");
      // !important overrides GameMaker's inline canvas sizing
      style.textContent = `
        html, body {
          margin: 0 !important; padding: 0 !important;
          width: 100% !important; height: 100% !important;
          display: flex !important; align-items: center !important; justify-content: center !important;
          background: #000 !important; overflow: hidden !important;
        }
        canvas {
          display: block !important;
          max-width: 100% !important;
          max-height: 100% !important;
          width: auto !important;
          height: auto !important;
        }
      `;
      doc.head.appendChild(style);
    } catch {
      // cross-origin fallback — no-op
    }
  };

  const toggleFullscreen = () => {
    const el = modalRef.current;
    if (!el) return;
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      el.requestFullscreen?.().catch(() => {});
      el.webkitRequestFullscreen?.();
    } else {
      document.exitFullscreen?.().catch(() => {});
      document.webkitExitFullscreen?.();
    }
  };

  const closeGame = () => {
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      document.exitFullscreen?.().catch(() => {});
      document.webkitExitFullscreen?.();
    }
    setActiveGame(null);
  };

  // Sync fullscreen button icon with actual fullscreen state
  useEffect(() => {
    const onFSChange = () => {
      setIsFullscreen(!!(document.fullscreenElement || document.webkitFullscreenElement));
    };
    document.addEventListener("fullscreenchange", onFSChange);
    document.addEventListener("webkitfullscreenchange", onFSChange);
    return () => {
      document.removeEventListener("fullscreenchange", onFSChange);
      document.removeEventListener("webkitfullscreenchange", onFSChange);
    };
  }, []);

  // Prevent body/html scroll when modal is open
  useEffect(() => {
    const html = document.documentElement;
    if (activeGame) {
      document.body.style.overflow = "hidden";
      html.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      html.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      html.style.overflow = "";
    };
  }, [activeGame]);

  // Close on Escape key (only when not in native fullscreen — browser handles that itself)
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape" && !document.fullscreenElement) closeGame(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="mt-4 flex flex-wrap justify-center gap-4">
        {games.map((game, index) => (
          <button
            key={index}
            onClick={() => { setActiveGame(game); window.umami?.track("game-open", { title: game.title }); }}
            className="text-left flex flex-col border border-gray-600 rounded-lg overflow-hidden hover:border-gray-400 transition-colors group w-full max-w-sm"
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
        <div ref={modalRef} className="fixed inset-0 z-50 flex flex-col bg-black">
          {/* Modal header */}
          <div className="flex justify-between items-center px-4 py-2 bg-neutral-900 border-b border-neutral-700 shrink-0">
            <span className="text-white font-semibold">{activeGame.title}</span>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleFullscreen}
                className="text-gray-400 hover:text-white transition-colors p-1 rounded"
                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              >
                {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
              </button>
              <button
                onClick={closeGame}
                className="text-gray-400 hover:text-white transition-colors p-1 rounded"
                aria-label="Close game"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Game iframe — overflow-hidden prevents the fixed-resolution canvas from causing page scroll */}
          <div className="flex-grow relative overflow-hidden">
            <iframe
              ref={iframeRef}
              src={activeGame.path}
              onLoad={handleIframeLoad}
              className="absolute inset-0 w-full h-full border-none"
              allow="autoplay; fullscreen"
              title={activeGame.title}
            />
          </div>
        </div>
      )}
    </>
  );
}
