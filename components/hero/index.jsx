import { useState } from "react";
import { useRouter } from "next/router";
import { LINKS } from "@/consts";
import { useLang } from "../i18n/LangContext";
import { BoltIcon, CheckCircleIcon, SearchIcon, ArrowRightIcon, StarIcon } from "../icons";
import HeroArt from "./HeroArt";

const Hero = () => {
  const { t } = useLang();
  const router = useRouter();
  const [plate, setPlate] = useState("");

  const submit = (e) => {
    e.preventDefault();
    router.push(LINKS.OSAGO_CALC);
  };

  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div className="absolute top-[-10%] right-[-5%] w-[520px] h-[520px] rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-[-30%] left-[-10%] w-[480px] h-[480px] rounded-full bg-brand-400/30 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="container-c relative grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
        <div className="text-white animate-fade-up">
          <span className="chip bg-white/15 text-white backdrop-blur-sm border border-white/20">
            <BoltIcon className="w-4 h-4 text-gold" />
            {t.hero.badge}
          </span>

          <h1 className="mt-5 font-display font-extrabold text-4xl sm:text-5xl lg:text-[54px] leading-[1.05] tracking-tight">
            {t.hero.titleA} <br className="hidden sm:block" />
            <span className="text-gold">{t.hero.accent}</span> {t.hero.titleB}
          </h1>

          <p className="mt-5 text-lg text-white/85 max-w-md">{t.hero.subtitle}</p>

          <form
            onSubmit={submit}
            className="flex flex-col gap-2 p-2 mt-8 bg-white shadow-card rounded-2xl sm:flex-row sm:items-center max-w-lg"
          >
            <div className="flex items-center flex-1 gap-2 px-3">
              <SearchIcon className="w-5 h-5 text-ink-faint" />
              <input
                value={plate}
                onChange={(e) => setPlate(e.target.value.toUpperCase())}
                placeholder={t.hero.placeholder}
                className="w-full py-3 text-ink placeholder:text-ink-faint bg-transparent outline-none text-[15px]"
              />
            </div>
            <button type="submit" className="btn-primary shine whitespace-nowrap">
              {t.common.calculate}
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </form>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-7 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4" />
                ))}
              </div>
              <span className="text-white/85">{t.hero.rating}</span>
            </div>
            <div className="flex items-center gap-2 text-white/85">
              <CheckCircleIcon className="w-5 h-5 text-accent" />
              {t.hero.official}
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <HeroArt />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
