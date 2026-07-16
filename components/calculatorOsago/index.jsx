import { useEffect } from "react";
import Calc1 from "./calc1";
import Calc2 from "./calc2";
import useCalcSlice from "@/store/useCalcSlice";
import { useLang } from "../i18n/LangContext";
import { CheckIcon, ShieldIcon, SupportIcon } from "../icons";
import { BRAND } from "@/consts";

const CalculatorOsago = ({ title }) => {
  const { t } = useLang();
  const c = t.calc;
  const step = useCalcSlice((store) => store.step);
  const setStep = useCalcSlice((store) => store.setStep);

  useEffect(() => {
    useCalcSlice.persist?.rehydrate?.();
  }, []);

  const calcPage = () => (step === 1 ? <Calc1 /> : <Calc2 />);

  return (
    <section className="container-c py-10 lg:py-12">
      <div className="max-w-2xl">
        <span className="eyebrow">{c.eyebrow}</span>
        <h1 className="mt-3 text-3xl font-extrabold font-display sm:text-4xl text-ink">
          {c.titlePrefix} {title} {c.titleSuffix}
        </h1>
        <p className="mt-2 text-ink-muted">{c.subtitle}</p>
      </div>

      <div className="grid gap-6 mt-8 lg:grid-cols-[1fr_320px]">
        <div className="p-6 bg-white border sm:p-8 card-c">
          <div className="pb-6 border-b border-line">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {c.steps.map((item, index) => {
                const done = step > index + 1;
                const active = step === index + 1;
                return (
                  <div
                    key={item}
                    className={`flex items-center gap-2.5 ${done ? "cursor-pointer" : "cursor-default"}`}
                    onClick={() => done && setStep(index + 1)}
                  >
                    <div
                      className={`grid w-8 h-8 rounded-full place-items-center text-sm font-bold transition-colors ${
                        active ? "bg-brand text-white shadow-glow" : done ? "bg-accent text-white" : "bg-surface text-ink-faint border border-line"
                      }`}
                    >
                      {done ? <CheckIcon className="w-4 h-4" /> : index + 1}
                    </div>
                    <span className={`text-sm font-semibold ${active ? "text-ink" : "text-ink-muted"}`}>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-2">{calcPage()}</div>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="p-6 text-white bg-brand-gradient rounded-2xl shadow-card">
            <div className="flex items-center gap-2 text-white/80">
              <ShieldIcon className="w-5 h-5" />
              <span className="text-sm font-semibold">{c.sideTitle} {title}</span>
            </div>
            <div className="mt-4 text-sm text-white/70">{c.sideCostLabel}</div>
            <div className="text-3xl font-extrabold font-display">{c.sideCostVal}</div>
            <ul className="mt-5 space-y-2.5 text-sm">
              {c.sidePoints.map((tt) => (
                <li key={tt} className="flex items-center gap-2 text-white/90">
                  <CheckIcon className="w-4 h-4" /> {tt}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-3 p-4 bg-white border card-c">
            <span className="grid w-10 h-10 rounded-lg place-items-center bg-brand-50 text-brand shrink-0">
              <SupportIcon className="w-5 h-5" />
            </span>
            <div className="text-sm">
              <div className="font-semibold text-ink">{t.common.needHelp}</div>
              <a href={BRAND.phoneHref} className="text-brand hover:underline">{BRAND.phone}</a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default CalculatorOsago;
