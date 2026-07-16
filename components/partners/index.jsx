import { useLang } from "../i18n/LangContext";
import Reveal from "../ui/Reveal";
import { ShieldIcon } from "../icons";

const partners = [
  "Kapital Sug'urta",
  "Gross Insurance",
  "Kafolat",
  "Uzbekinvest",
  "Apex Insurance",
  "Inson",
  "EuroAsia",
  "Kafil Sug'urta",
];

const Logo = ({ name }) => (
  <div className="flex items-center gap-2.5 px-7 shrink-0">
    <ShieldIcon className="w-6 h-6 text-brand-300" />
    <span className="text-lg font-bold whitespace-nowrap text-ink-faint font-display">{name}</span>
  </div>
);

const Partners = () => {
  const { t } = useLang();
  return (
    <section id="partners" className="container-c py-14">
      <Reveal className="text-center">
        <p className="text-sm font-semibold tracking-wide uppercase text-ink-faint">{t.partners.title}</p>
      </Reveal>

      <Reveal className="mt-8 overflow-hidden marquee-mask" delay={120}>
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...partners, ...partners].map((name, i) => (
            <Logo key={i} name={name} />
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Partners;
