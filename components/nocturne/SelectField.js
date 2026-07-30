"use client";

import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";

function Chevron() {
  return (
    <svg
      className="nc-book-chev"
      width="12"
      height="12"
      viewBox="0 0 256 256"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
    </svg>
  );
}

/*
 * Tendina su misura. La select nativa non si può stilare (il popup lo disegna
 * il sistema operativo), quindi qui c'è un listbox vero: tutto il riquadro è il
 * pulsante che la apre, e il pannello segue i token del design system.
 *
 * Il pannello sta in position:fixed e si posiziona misurando il trigger, perché
 * .nc-book ha overflow:hidden per gli angoli e altrimenti lo taglierebbe.
 */
export default function SelectField({ label, placeholder, options, value, onChange, invalid }) {
  const id = useId();
  const triggerRef = useRef(null);
  const panelRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [rect, setRect] = useState(null);

  const selectedIndex = options.findIndex((o) => o.value === value);
  const selected = selectedIndex >= 0 ? options[selectedIndex] : null;

  const place = useCallback(() => {
    const el = triggerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const panelH = panelRef.current?.offsetHeight || Math.min(288, options.length * 40 + 10);
    const below = window.innerHeight - r.bottom;
    const flip = below < panelH + 12 && r.top > below;
    setRect({
      left: r.left,
      width: r.width,
      top: flip ? r.top - panelH - 4 : r.bottom + 4,
    });
  }, [options.length]);

  useLayoutEffect(() => {
    if (!open) return undefined;
    place();
    window.addEventListener("scroll", place, true);
    window.addEventListener("resize", place);
    return () => {
      window.removeEventListener("scroll", place, true);
      window.removeEventListener("resize", place);
    };
  }, [open, place]);

  useEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => {
      if (triggerRef.current?.contains(e.target) || panelRef.current?.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const openAt = (index) => {
    setActive(index < 0 ? 0 : index);
    setOpen(true);
  };

  const choose = (index) => {
    onChange(options[index].value);
    setOpen(false);
    triggerRef.current?.focus();
  };

  const onKeyDown = (e) => {
    if (!open) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        openAt(selectedIndex);
      }
      return;
    }
    if (e.key === "Escape" || e.key === "Tab") {
      setOpen(false);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % options.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i - 1 + options.length) % options.length);
    } else if (e.key === "Home") {
      e.preventDefault();
      setActive(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActive(options.length - 1);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      choose(active);
    }
  };

  return (
    <>
      <button
        type="button"
        ref={triggerRef}
        id={`${id}-trigger`}
        className={`nc-book-cell nc-book-trigger${invalid ? " is-invalid" : ""}`}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-list`}
        aria-labelledby={`${id}-label ${id}-trigger`}
        aria-activedescendant={open ? `${id}-opt-${active}` : undefined}
        onClick={() => (open ? setOpen(false) : openAt(selectedIndex))}
        onKeyDown={onKeyDown}
      >
        <span className="nc-book-lbl" id={`${id}-label`}>
          {label}
        </span>
        <span className={`nc-book-value${selected ? "" : " is-empty"}`}>
          {selected ? selected.value : placeholder}
        </span>
        <Chevron />
      </button>

      {open && rect && (
        <ul
          ref={panelRef}
          id={`${id}-list`}
          className="nc-book-panel"
          role="listbox"
          aria-labelledby={`${id}-label`}
          style={{ top: rect.top, left: rect.left, width: rect.width }}
        >
          {options.map((option, i) => (
            <li
              key={option.value}
              id={`${id}-opt-${i}`}
              role="option"
              aria-selected={i === selectedIndex}
              className={`nc-book-opt${i === active ? " is-active" : ""}${
                i === selectedIndex ? " is-selected" : ""
              }`}
              onMouseEnter={() => setActive(i)}
              onClick={() => choose(i)}
            >
              <span>{option.value}</span>
              {option.hint && <span className="nc-book-opt-hint">{option.hint}</span>}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
