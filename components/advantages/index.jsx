import { useLang } from "../i18n/LangContext";
import Reveal from "../ui/Reveal";

const imgs = [
  "/osago-i-order-online.svg",
  "/osago-i-support.svg",
  "/benefit-icon__auto-installment-plan.svg",
  "/osago-i-incident-online.svg",
];

const Advantages = () => {
  const { t } = useLang();
  return (
    <section id="about" className="container-c py-16 lg:py-20">
      <Reveal className="max-w-2xl mx-auto text-center">
        <span className="eyebrow">{t.advantages.eyebrow}</span>
        <h2 className="mt-3 text-3xl font-extrabold font-display sm:text-4xl text-ink">{t.advantages.title}</h2>
        <p className="mt-3 text-ink-muted">{t.advantages.subtitle}</p>
      </Reveal>

      <div className="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-4">
        {t.advantages.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 100}>
            <div className="h-full p-6 transition-all duration-300 bg-white card-c hover:-translate-y-1.5 hover:shadow-card">
              <div className="grid w-20 h-20 place-items-center rounded-2xl bg-brand-50">
                <img src={imgs[i]} alt="" className="object-contain w-14 h-14" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink font-display">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
