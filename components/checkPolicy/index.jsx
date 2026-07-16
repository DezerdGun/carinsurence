import { useState } from "react";
import { useLang } from "../i18n/LangContext";
import Reveal from "../ui/Reveal";
import { SearchIcon, CheckCircleIcon, ArrowRightIcon } from "../icons";
import { IllDoc } from "../illustrations";

const CheckPolicy = () => {
  const { t } = useLang();
  const c = t.checkPolicy;
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <section id="check-policy" className="container-c py-16 lg:py-20">
      <Reveal>
        <div className="relative overflow-hidden bg-white border shadow-card rounded-3xl border-line">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-12">
              <span className="eyebrow">{c.eyebrow}</span>
              <h2 className="mt-3 text-3xl font-extrabold font-display sm:text-4xl text-ink">{c.title}</h2>
              <p className="mt-3 text-ink-muted max-w-md">{c.subtitle}</p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setChecked(true);
                }}
                className="flex flex-col gap-2 p-2 mt-7 border shadow-soft rounded-2xl border-line sm:flex-row sm:items-center max-w-lg"
              >
                <div className="flex items-center flex-1 gap-2 px-3">
                  <SearchIcon className="w-5 h-5 text-ink-faint" />
                  <input
                    value={value}
                    onChange={(e) => setValue(e.target.value.toUpperCase())}
                    placeholder={c.placeholder}
                    className="w-full py-3 text-ink placeholder:text-ink-faint bg-transparent outline-none text-[15px]"
                  />
                </div>
                <button type="submit" className="btn-primary whitespace-nowrap">
                  {c.button}
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </form>

              {checked && (
                <div className="flex items-start gap-3 p-4 mt-4 border max-w-lg rounded-2xl bg-brand-50 border-brand-100 animate-fade-in">
                  <CheckCircleIcon className="w-6 h-6 text-brand shrink-0" />
                  <div>
                    <div className="font-bold text-ink">{c.resultTitle}</div>
                    <div className="text-sm text-ink-muted">{c.resultText}</div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative hidden lg:grid place-items-center bg-brand-50/50">
              <div className="p-8">
                <div className="grid w-40 h-40 mx-auto rounded-full place-items-center bg-white shadow-card animate-float">
                  <IllDoc className="w-24 h-24" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default CheckPolicy;
