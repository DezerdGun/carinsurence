import Head from "next/head";
import Link from "next/link";
import { Stats, Partners, CtaBand, Reveal } from "@/components";
import { LINKS, BRAND } from "@/consts";
import { useLang } from "@/components/i18n/LangContext";
import { BoltIcon, SupportIcon, ShieldIcon, CheckCircleIcon, ArrowRightIcon } from "@/components/icons";

const valueIcons = [BoltIcon, ShieldIcon, SupportIcon];

const About = () => {
  const { t } = useLang();
  const a = t.about;

  return (
    <>
      <Head>
        <title>{`${a.badge} — ${BRAND.name}`}</title>
      </Head>

      <section className="container-c pt-10 pb-4">
        <div className="relative overflow-hidden text-center bg-hero-gradient rounded-3xl px-7 py-16 shadow-lift">
          <div className="absolute top-[-30%] right-[-5%] w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <span className="chip bg-white/15 text-white border border-white/20">{a.badge}</span>
            <h1 className="max-w-3xl mx-auto mt-5 text-4xl font-extrabold text-white font-display sm:text-5xl">{a.title}</h1>
            <p className="max-w-xl mx-auto mt-4 text-lg text-white/85">{a.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="container-c py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">{a.missionEyebrow}</span>
            <h2 className="mt-3 text-3xl font-extrabold font-display sm:text-4xl text-ink">{a.missionTitle}</h2>
            <p className="mt-4 text-ink-muted">{a.missionText}</p>
            <ul className="grid gap-3 mt-6 sm:grid-cols-2">
              {a.missionPoints.map((m) => (
                <li key={m} className="flex items-center gap-2.5 text-sm text-ink">
                  <CheckCircleIcon className="w-5 h-5 text-accent shrink-0" />
                  {m}
                </li>
              ))}
            </ul>
            <Link href={LINKS.OSAGO_CALC} className="mt-8 btn-primary shine">
              {a.missionCta}
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="grid p-8 place-items-center bg-brand-50 rounded-3xl">
              <img src="/kasko.svg" alt="" className="object-contain w-full max-w-md animate-float-slow" />
            </div>
          </Reveal>
        </div>
      </section>

      <Stats />

      <section className="container-c py-16 lg:py-20">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="eyebrow">{a.valuesEyebrow}</span>
          <h2 className="mt-3 text-3xl font-extrabold font-display sm:text-4xl text-ink">{a.valuesTitle}</h2>
        </Reveal>
        <div className="grid gap-6 mt-12 md:grid-cols-3">
          {a.values.map((v, i) => {
            const Icon = valueIcons[i];
            return (
              <Reveal key={v.title} delay={i * 120}>
                <div className="h-full p-7 bg-white card-c hover:-translate-y-1.5 hover:shadow-card transition-all duration-300">
                  <span className="grid w-14 h-14 rounded-2xl place-items-center bg-brand-gradient text-white shadow-glow">
                    <Icon className="w-7 h-7" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink font-display">{v.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{v.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <Partners />
      <CtaBand />
    </>
  );
};

export default About;
