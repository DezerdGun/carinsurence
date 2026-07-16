import Link from "next/link";
import { useLang } from "../i18n/LangContext";
import Reveal from "../ui/Reveal";
import { ArrowRightIcon } from "../icons";

const imgs = [
  "/home-services-2.svg",
  "/home-services-3.svg",
  "/home-services-4.svg",
  "/useful-services-settlement-icon.svg",
];

const ServiceCard = ({ item, img }) => (
  <Link
    href="#"
    className="flex items-center justify-between gap-4 p-5 transition-all duration-300 bg-white group card-c hover:-translate-y-1 hover:shadow-card hover:border-brand-200"
  >
    <div className="flex items-center gap-3">
      <img src={img} alt="" className="object-contain w-12 h-12 shrink-0" />
      <div>
        <div className="font-semibold text-ink">{item.title}</div>
        <div className="text-xs text-ink-muted">{item.text}</div>
      </div>
    </div>
    <ArrowRightIcon className="w-5 h-5 transition-transform text-ink-faint group-hover:text-brand group-hover:translate-x-1" />
  </Link>
);

const UsefulServices = () => {
  const { t } = useLang();
  return (
    <section id="services" className="py-16 bg-surface lg:py-20">
      <div className="container-c">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="eyebrow">{t.services.eyebrow}</span>
          <h2 className="mt-3 text-3xl font-extrabold font-display sm:text-4xl text-ink">{t.services.title}</h2>
          <p className="mt-3 text-ink-muted">{t.services.subtitle}</p>
        </Reveal>

        <div className="grid gap-5 mt-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-1">
            <Link
              href="#"
              className="relative flex flex-col justify-between h-full p-6 overflow-hidden text-white transition-all duration-300 group bg-brand-gradient rounded-2xl shadow-card hover:-translate-y-1 hover:shadow-lift"
            >
              <img src="/home-services-1.svg" alt="" className="absolute object-contain w-32 h-32 opacity-90 -bottom-2 -right-2" />
              <div className="relative">
                <h3 className="text-xl font-bold font-display">{t.services.extendTitle}</h3>
                <p className="max-w-[70%] mt-2 text-sm text-white/80">{t.services.extendText}</p>
              </div>
              <span className="relative inline-flex items-center gap-2 mt-6 font-semibold">
                {t.services.extendCta}
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            {t.services.items.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <ServiceCard item={s} img={imgs[i]} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsefulServices;
