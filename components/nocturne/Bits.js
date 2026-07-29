"use client";

import Image from "next/image";

/* Phosphor arrow-right, l'unica icona prevista dal design. */
export function ArrowRight({ size = 13, className, color }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill={color || "currentColor"}
      aria-hidden="true"
      className={className}
      style={{ flex: "none", verticalAlign: "-2px" }}
    >
      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
    </svg>
  );
}

/*
 * Numero di sezione in accento + titolo. `mb` è lo stacco desktop dal contenuto
 * (8, 12, 16, 18, 22, 24, 26): la classe corrispondente in nocturne.css lo scala
 * anche su mobile, cosa che uno style inline non potrebbe fare.
 */
export function SectionHead({ n, title, mb }) {
  return (
    <div className={mb ? `nc-sec nc-sec-mb-${mb}` : "nc-sec"}>
      <span className="nc-sec-n">{n}</span>
      <h2>{title}</h2>
    </div>
  );
}

/*
 * Foto con didascalia. L'altezza la decide il contenitore (classi .nc-gallery-*,
 * .nc-proof, .nc-shots); qui si passa solo sorgente, alt e didascalia.
 */
export function Photo({ src, alt, caption, spec, sizes = "(max-width: 899px) 100vw, 33vw", priority = false, small = false, href }) {
  const frame = (
    <div className="nc-fig-img">
      <Image
        src={src}
        alt={alt || caption || ""}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        style={{ objectFit: "cover" }}
      />
    </div>
  );

  return (
    <figure className={small ? "nc-fig nc-fig-sm" : "nc-fig"}>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {frame}
        </a>
      ) : (
        frame
      )}
      {(caption || spec) && (
        <figcaption>
          {caption}
          {spec ? <> <span className="nc-fig-spec">{spec}</span></> : null}
        </figcaption>
      )}
    </figure>
  );
}

/* Elenco con pallino in accento. */
export function Bullets({ items, large = false }) {
  return (
    <div className={large ? "nc-bullets nc-bullets-lg" : "nc-bullets"}>
      {items.map((item) => (
        <div key={item} className="nc-bullet">
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
