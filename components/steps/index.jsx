import { useLang } from "../i18n/LangContext";
import Reveal from "../ui/Reveal";

const imgs = ["/osago-i-order-online.svg", "/osago-i-incident-online.svg", "/home-services-2.svg"];

const Steps = () => {
  const { t } = useLang();
  return (
    <section id="steps" className="container-c py-16 lg:py-20">
      <Reveal className="max-w-2xl mx-auto text-center">
        <span className="eyebrow">{t.steps.eyebrow}</span>
        <h2 className="mt-3 text-3xl font-extrabold font-display sm:text-4xl text-ink">{t.steps.title}</h2>
        <p className="mt-3 text-ink-muted">{t.steps.subtitle}</p>
      </Reveal>

      <div className="relative grid gap-6 mt-12 md:grid-cols-3">
        <div className="absolute left-[16%] right-[16%] top-12 hidden h-0.5 md:block">
          <div className="w-full h-full border-t-2 border-dashed border-brand-200" />
        </div>

        {t.steps.items.map((s, i) => (
          <Reveal key={s.title} delay={i * 140} className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="relative grid w-24 h-24 rounded-2xl place-items-center bg-white border border-line shadow-card">
                <img src={imgs[i]} alt="" className="object-contain w-16 h-16" />
                <span className="absolute grid w-7 h-7 text-sm font-bold text-white rounded-full -right-2 -top-2 place-items-center bg-gold shadow-soft">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink font-display">{s.title}</h3>
              <p className="max-w-xs mt-2 text-sm text-ink-muted">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Steps;
