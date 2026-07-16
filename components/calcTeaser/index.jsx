import Link from "next/link";
import { LINKS } from "@/consts";
import { useLang } from "../i18n/LangContext";
import Reveal from "../ui/Reveal";
import { CheckCircleIcon, ArrowRightIcon } from "../icons";
import { IllShield } from "../illustrations";

const CalcTeaser = () => {
  const { t } = useLang();
  const c = t.calcTeaser;

  return (
    <section className="container-c py-16 lg:py-20">
      <Reveal>
        <div className="relative overflow-hidden bg-white border shadow-card rounded-3xl border-line">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12">
              <span className="eyebrow">{c.eyebrow}</span>
              <h2 className="mt-3 text-3xl font-extrabold font-display sm:text-4xl text-ink">
                {c.titleA} <span className="text-brand">{c.accent}</span>
              </h2>
              <p className="mt-3 text-ink-muted max-w-md">{c.subtitle}</p>

              <ul className="grid gap-3 mt-6 sm:grid-cols-2">
                {c.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-ink">
                    <CheckCircleIcon className="w-5 h-5 text-accent shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 mt-8 sm:flex-row">
                <Link href={LINKS.OSAGO_CALC} className="btn-primary shine">
                  {c.calcOsago}
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <Link href={LINKS.KASKO_CALC} className="btn-ghost">
                  {c.calcKasko}
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block bg-hero-gradient">
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                }}
              />
              <div className="relative grid h-full place-items-center p-10">
                <div className="w-full max-w-sm p-6 bg-white shadow-lift rounded-2xl animate-float">
                  <div className="flex items-center justify-between">
                    <span className="chip bg-brand-50 text-brand">{c.cardBadge}</span>
                    <span className="chip bg-accent-soft text-accent">{c.cardReady}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-5">
                    <span className="grid w-12 h-12 rounded-xl place-items-center bg-brand-50">
                      <IllShield className="w-9 h-9" />
                    </span>
                    <div>
                      <div className="text-xs text-ink-muted">{c.cardCostLabel}</div>
                      <div className="text-2xl font-extrabold font-display text-ink">{c.cardCostVal}</div>
                    </div>
                  </div>
                  <div className="pt-4 mt-5 space-y-2 border-t border-line">
                    {c.rows.map((r) => (
                      <div key={r.l} className="flex items-center justify-between text-sm">
                        <span className="text-ink-muted">{r.l}</span>
                        <span className="font-semibold text-ink">{r.v}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 btn-primary w-full pointer-events-none">{c.pay}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default CalcTeaser;
