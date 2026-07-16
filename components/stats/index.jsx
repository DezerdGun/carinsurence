import { useEffect, useRef, useState } from "react";
import useReveal from "../hooks/useReveal";
import { useLang } from "../i18n/LangContext";

const values = [
  { value: 120000, suffix: "+" },
  { value: 350000, suffix: "+" },
  { value: 8, suffix: "" },
  { value: 4.9, suffix: "", decimals: 1 },
];

const Counter = ({ value, suffix = "", decimals = 0, run }) => {
  const [n, setN] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!run || started.current) return;
    started.current = true;
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) requestAnimationFrame(tick);
      else setN(value);
    };
    requestAnimationFrame(tick);
  }, [run, value]);

  const formatted = decimals > 0 ? n.toFixed(decimals) : Math.round(n).toLocaleString("ru-RU");

  return (
    <span className="tabular-nums">
      {formatted}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const { t } = useLang();
  const { ref, visible } = useReveal({ threshold: 0.4 });

  return (
    <section ref={ref} className="container-c">
      <div className="relative overflow-hidden bg-brand-gradient rounded-3xl px-6 py-10 sm:px-10 sm:py-12 shadow-lift">
        <div className="absolute top-[-40%] right-[-10%] w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
          {values.map((s, i) => (
            <div key={i} className="text-center text-white">
              <div className="text-3xl font-extrabold font-display sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} run={visible} />
              </div>
              <div className="mt-2 text-sm text-white/75">{t.stats.items[i]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
