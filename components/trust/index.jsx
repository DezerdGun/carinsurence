import { useLang } from "../i18n/LangContext";
import Reveal from "../ui/Reveal";
import { IllCheck, IllShield, IllWallet, IllSupport } from "../illustrations";

const arts = [IllCheck, IllShield, IllWallet, IllSupport];

const Trust = () => {
  const { t } = useLang();
  return (
    <section className="container-c -mt-2">
      <Reveal>
        <div className="grid gap-3 p-3 bg-white border sm:grid-cols-2 lg:grid-cols-4 card-c">
          {t.trust.items.map((item, i) => {
            const Art = arts[i];
            return (
              <div key={item} className="flex items-center gap-3 px-3 py-2 rounded-xl">
                <Art className="w-11 h-11 shrink-0" />
                <span className="text-sm font-semibold text-ink">{item}</span>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
};

export default Trust;
