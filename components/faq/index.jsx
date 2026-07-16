import { useState } from "react";
import { useLang } from "../i18n/LangContext";
import Reveal from "../ui/Reveal";
import { ChevronDownIcon } from "../icons";

const Answer = ({ item }) => (
  <>
    {item.intro && <p>{item.intro}</p>}
    {item.list && (
      <ul className="mt-2 space-y-1 list-disc list-inside">
        {item.list.map((li) => (
          <li key={li}>{li}</li>
        ))}
      </ul>
    )}
    {item.paras &&
      item.paras.map((p, i) => (
        <p key={i} className={i > 0 ? "mt-2" : ""}>
          {p}
        </p>
      ))}
  </>
);

const FAQ = () => {
  const { t } = useLang();
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="container-c py-16 lg:py-20">
      <Reveal className="max-w-2xl mx-auto text-center">
        <span className="eyebrow">{t.faq.eyebrow}</span>
        <h2 className="mt-3 text-3xl font-extrabold font-display sm:text-4xl text-ink">{t.faq.title}</h2>
        <p className="mt-3 text-ink-muted">{t.faq.subtitle}</p>
      </Reveal>

      <div className="max-w-3xl mx-auto mt-10 space-y-3">
        {t.faq.items.map((item, index) => {
          const active = open === index;
          return (
            <Reveal key={item.q} delay={index * 80}>
              <div className={`overflow-hidden transition-colors border rounded-2xl ${active ? "border-brand-200 bg-brand-50/40" : "border-line bg-white"}`}>
                <button
                  className="flex items-center justify-between w-full gap-4 px-5 py-4 text-left"
                  onClick={() => setOpen(active ? null : index)}
                  aria-expanded={active}
                >
                  <span className={`font-semibold ${active ? "text-brand-600" : "text-ink"}`}>{item.q}</span>
                  <span className={`grid w-9 h-9 rounded-full place-items-center shrink-0 transition-all ${active ? "bg-brand text-white rotate-180" : "bg-surface text-ink-muted"}`}>
                    <ChevronDownIcon className="w-5 h-5" />
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 text-sm leading-relaxed text-ink-muted">
                      <Answer item={item} />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
