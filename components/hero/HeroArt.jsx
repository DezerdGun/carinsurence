import { useLang } from "../i18n/LangContext";
import { CheckCircleIcon, WalletIcon, BoltIcon } from "../icons";

// Правая часть героя: большая авто-иллюстрация + плавающие карточки-акценты.
const HeroArt = () => {
  const { t } = useLang();
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="absolute inset-0 m-auto w-80 h-80 rounded-full bg-white/15 blur-3xl" />

      <img
        src="/auto-osago__hero-banner-new-3.svg"
        alt=""
        className="relative w-full drop-shadow-2xl animate-float-slow"
      />

      <div className="absolute -left-3 top-6 animate-float">
        <div className="flex items-center gap-3 p-3 pr-5 bg-white shadow-card rounded-xl">
          <span className="grid w-10 h-10 rounded-lg place-items-center bg-brand-50 text-brand">
            <WalletIcon className="w-5 h-5" />
          </span>
          <div>
            <div className="text-[11px] text-ink-muted leading-none">{t.hero.floatPriceLabel}</div>
            <div className="text-base font-extrabold text-ink font-display">{t.hero.floatPriceVal}</div>
          </div>
        </div>
      </div>

      <div className="absolute -right-2 top-16 animate-float [animation-delay:1.4s]">
        <div className="flex items-center gap-3 p-3 pr-5 bg-white shadow-card rounded-xl">
          <span className="grid w-10 h-10 rounded-lg place-items-center bg-accent-soft text-accent">
            <CheckCircleIcon className="w-5 h-5" />
          </span>
          <div>
            <div className="text-[11px] text-ink-muted leading-none">{t.hero.floatStatusLabel}</div>
            <div className="text-sm font-extrabold text-ink">{t.hero.floatStatusVal}</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-6 animate-float [animation-delay:0.7s]">
        <div className="flex items-center gap-3 p-3 pr-5 bg-white shadow-card rounded-xl">
          <span className="grid w-10 h-10 rounded-lg place-items-center bg-gold-soft text-gold">
            <BoltIcon className="w-5 h-5" />
          </span>
          <div>
            <div className="text-[11px] text-ink-muted leading-none">{t.hero.floatSpeedLabel}</div>
            <div className="text-sm font-extrabold text-ink">{t.hero.floatSpeedVal}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArt;
