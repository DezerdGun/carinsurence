import Link from "next/link";
import { LINKS } from "@/consts";
import { useLang } from "../i18n/LangContext";
import Reveal from "../ui/Reveal";
import { CarIcon, ShieldIcon, CheckIcon, ArrowRightIcon } from "../icons";

const Products = () => {
  const { t } = useLang();

  const products = [
    {
      key: "osago",
      icon: CarIcon,
      illus: "/osago.svg",
      badgeClass: "bg-brand-50 text-brand",
      price: "160 000",
      data: t.products.osago,
      link: LINKS.OSAGO,
      calc: LINKS.OSAGO_CALC,
      accent: false,
    },
    {
      key: "kasko",
      icon: ShieldIcon,
      illus: "/kasko.svg",
      badgeClass: "bg-accent-soft text-accent",
      price: "1 200 000",
      data: t.products.kasko,
      link: LINKS.KASKO,
      calc: LINKS.KASKO_CALC,
      accent: true,
    },
  ];

  return (
    <section id="products" className="container-c py-16 lg:py-20">
      <Reveal className="max-w-2xl mx-auto text-center">
        <span className="eyebrow">{t.products.eyebrow}</span>
        <h2 className="mt-3 text-3xl font-extrabold font-display sm:text-4xl text-ink">{t.products.title}</h2>
        <p className="mt-3 text-ink-muted">{t.products.subtitle}</p>
      </Reveal>

      <div className="grid gap-6 mt-12 md:grid-cols-2">
        {products.map((p, i) => {
          const Icon = p.icon;
          return (
            <Reveal key={p.key} delay={i * 120}>
              <div
                className={`group relative h-full overflow-hidden rounded-3xl border p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card ${
                  p.accent ? "border-brand-200 bg-brand-50/40" : "border-line bg-white shadow-soft"
                }`}
              >
                <div className="relative flex items-center justify-center h-40 mb-6 overflow-hidden -mx-7 -mt-7 sm:-mx-8 sm:-mt-8 bg-brand-50/70">
                  <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-brand-100/60 blur-2xl transition-transform duration-500 group-hover:scale-125" />
                  <img
                    src={p.illus}
                    alt=""
                    className="relative object-contain h-32 transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className={`chip absolute top-4 right-4 ${p.badgeClass}`}>{p.data.badge}</span>
                </div>

                <div className="relative flex items-center gap-3">
                  <span className="grid w-11 h-11 rounded-xl place-items-center bg-brand-gradient text-white shadow-glow shrink-0">
                    <Icon className="w-6 h-6" />
                  </span>
                  <h3 className="text-2xl font-extrabold leading-none font-display text-ink">{p.data.title}</h3>
                </div>
                <p className="relative mt-3 text-sm text-ink-muted">{p.data.subtitle}</p>

                <div className="relative flex items-baseline gap-1.5 mt-5">
                  <span className="text-sm text-ink-muted">{t.common.from}</span>
                  <span className="text-3xl font-extrabold font-display text-brand-600">{p.price}</span>
                  <span className="text-sm text-ink-muted">{t.common.sum}</span>
                </div>

                <ul className="relative mt-6 space-y-3">
                  {p.data.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-ink">
                      <span className="grid mt-0.5 w-5 h-5 rounded-full place-items-center bg-accent-soft text-accent shrink-0">
                        <CheckIcon className="w-3.5 h-3.5" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="relative flex flex-col gap-3 mt-8 sm:flex-row">
                  <Link href={p.calc} className="btn-primary flex-1">
                    {t.common.calculate}
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                  <Link href={p.link} className="btn-ghost flex-1">
                    {t.common.more}
                  </Link>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
