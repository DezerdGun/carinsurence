import { useEffect, useRef, useState } from "react";
import { useLang } from "../i18n/LangContext";

const A11yIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9.5" />
    <circle cx="12" cy="7" r="1.2" fill="currentColor" stroke="none" />
    <path d="M7 9.5c3 1 7 1 10 0M12 10v4M12 14l-2 4M12 14l2 4" />
  </svg>
);

const applyContrast = (mode) => {
  const el = document.documentElement;
  el.classList.remove("a11y-grayscale", "a11y-high");
  if (mode === "grayscale") el.classList.add("a11y-grayscale");
  if (mode === "high") el.classList.add("a11y-high");
};

const A11yMenu = () => {
  const { t } = useLang();
  const a = t.a11y;
  const [open, setOpen] = useState(false);
  const [contrast, setContrast] = useState("normal");
  const [font, setFont] = useState(100);
  const ref = useRef(null);

  useEffect(() => {
    try {
      const c = window.localStorage.getItem("carfresh-a11y-contrast") || "normal";
      const f = parseInt(window.localStorage.getItem("carfresh-a11y-font") || "100", 10);
      setContrast(c);
      setFont(f);
      applyContrast(c);
      document.documentElement.style.fontSize = `${f}%`;
    } catch (e) {}
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const setC = (mode) => {
    setContrast(mode);
    applyContrast(mode);
    try {
      window.localStorage.setItem("carfresh-a11y-contrast", mode);
    } catch (e) {}
  };
  const setF = (val) => {
    const v = Math.max(90, Math.min(150, val));
    setFont(v);
    document.documentElement.style.fontSize = `${v}%`;
    try {
      window.localStorage.setItem("carfresh-a11y-font", String(v));
    } catch (e) {}
  };
  const reset = () => {
    setC("normal");
    setF(100);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="grid rounded-lg w-9 h-9 place-items-center text-ink-muted hover:text-brand hover:bg-brand-50"
        aria-label={a.title}
        aria-haspopup="true"
      >
        <A11yIcon className="w-5 h-5" />
      </button>

      {open && (
        <div className="absolute right-0 z-50 p-4 mt-2 bg-white border shadow-card w-60 rounded-2xl border-line animate-fade-in">
          <div className="text-xs font-bold tracking-wide uppercase text-ink-faint">{a.view}</div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {[
              { k: "normal", label: a.normal, cls: "bg-white text-ink border-line" },
              { k: "grayscale", label: a.grayscale, cls: "bg-gray-200 text-gray-600 border-line" },
              { k: "high", label: a.high, cls: "bg-black text-yellow-300 border-black" },
            ].map((o) => (
              <button
                key={o.k}
                onClick={() => setC(o.k)}
                className={`py-2 text-xs font-bold rounded-lg border ${o.cls} ${contrast === o.k ? "ring-2 ring-brand ring-offset-1" : ""}`}
              >
                {o.label}
              </button>
            ))}
          </div>

          <div className="mt-4 text-xs font-bold tracking-wide uppercase text-ink-faint">
            {a.fontSize} · {font}%
          </div>
          <div className="flex items-center gap-2 mt-2">
            <button onClick={() => setF(font - 10)} className="grid w-8 h-8 text-lg font-bold rounded-lg place-items-center bg-surface text-ink hover:bg-line">
              −
            </button>
            <input
              type="range"
              min="90"
              max="150"
              step="10"
              value={font}
              onChange={(e) => setF(parseInt(e.target.value, 10))}
              className="flex-1 accent-brand"
            />
            <button onClick={() => setF(font + 10)} className="grid w-8 h-8 text-lg font-bold rounded-lg place-items-center bg-surface text-ink hover:bg-line">
              +
            </button>
          </div>

          <button onClick={reset} className="w-full py-2 mt-4 text-xs font-semibold rounded-lg text-ink-muted bg-surface hover:bg-line">
            {a.reset}
          </button>
        </div>
      )}
    </div>
  );
};

export default A11yMenu;
