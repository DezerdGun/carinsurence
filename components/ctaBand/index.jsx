import Link from "next/link";
import { LINKS, BRAND } from "@/consts";
import { useLang } from "../i18n/LangContext";
import Reveal from "../ui/Reveal";
import { ArrowRightIcon, PhoneIcon } from "../icons";

const CtaBand = () => {
  const { t } = useLang();
  return (
    <section className="container-c py-16 lg:py-20">
      <Reveal>
        <div className="relative overflow-hidden text-center bg-hero-gradient rounded-3xl px-6 py-14 sm:px-12 shadow-lift">
          <div className="absolute top-[-30%] left-[-5%] w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-[-40%] right-[-5%] w-96 h-96 rounded-full bg-brand-400/30 blur-3xl" />

          <div className="relative">
            <h2 className="max-w-2xl mx-auto text-3xl font-extrabold text-white font-display sm:text-4xl">{t.cta.title}</h2>
            <p className="max-w-xl mx-auto mt-4 text-white/85">{t.cta.subtitle}</p>
            <div className="flex flex-col items-center justify-center gap-3 mt-8 sm:flex-row">
              <Link href={LINKS.OSAGO_CALC} className="btn-white shine">
                {t.cta.button}
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <a href={BRAND.phoneHref} className="btn px-6 py-3 text-white border border-white/40 hover:bg-white/10">
                <PhoneIcon className="w-4 h-4" />
                {BRAND.phone}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default CtaBand;
