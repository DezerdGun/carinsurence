import Link from "next/link";
import { LINKS } from "@/consts";
import { useLang } from "../i18n/LangContext";
import { useEntity } from "../context/EntityContext";
import Reveal from "../ui/Reveal";
import { ArrowRightIcon } from "../icons";
import {
  IllCar,
  IllShield,
  IllPlane,
  IllHeart,
  IllHome,
  IllCalendar,
  IllHospital,
  IllBriefcase,
  IllFamily,
} from "../illustrations";

const iconByKey = {
  osago: IllCar,
  kasko: IllShield,
  travel: IllPlane,
  health: IllHeart,
  property: IllHome,
  mini: IllCalendar,
  dms: IllHospital,
  cargo: IllBriefcase,
  osgor: IllFamily,
};

const hrefByKey = {
  osago: LINKS.OSAGO,
  kasko: LINKS.KASKO,
};

const MoreProducts = () => {
  const { t } = useLang();
  const { entity } = useEntity();
  const m = t.moreProducts;
  const items = entity === "legal" ? m.legal : m.personal;

  return (
    <section id="all-products" className="container-c py-16 lg:py-20">
      <Reveal className="max-w-2xl mx-auto text-center">
        <span className="eyebrow">{m.eyebrow}</span>
        <h2 className="mt-3 text-3xl font-extrabold font-display sm:text-4xl text-ink">{m.title}</h2>
        <p className="mt-3 text-ink-muted">{m.subtitle}</p>
      </Reveal>

      <div className="grid gap-4 mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => {
          const Icon = iconByKey[item.key] || ShieldIcon;
          const href = !item.soon ? hrefByKey[item.key] || "#" : null;
          const Wrapper = href ? Link : "div";
          const wrapperProps = href ? { href } : {};
          return (
            <Reveal key={`${item.key}-${i}`} delay={(i % 3) * 90}>
              <Wrapper
                {...wrapperProps}
                className={`group flex items-center gap-4 h-full p-5 card-c transition-all duration-300 ${
                  item.soon ? "opacity-90" : "hover:-translate-y-1 hover:shadow-card hover:border-brand-200 cursor-pointer"
                }`}
              >
                <span className="grid w-14 h-14 rounded-xl place-items-center bg-brand-50/60 shrink-0">
                  <Icon className="w-10 h-10" />
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-ink">{item.title}</span>
                    {item.soon && (
                      <span className="chip bg-gold-soft text-gold text-[10px] px-2 py-0.5">{m.soon}</span>
                    )}
                  </div>
                  <div className="text-xs text-ink-muted">{item.desc}</div>
                </div>
                {!item.soon && (
                  <ArrowRightIcon className="w-5 h-5 transition-transform text-ink-faint group-hover:text-brand group-hover:translate-x-1" />
                )}
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default MoreProducts;
