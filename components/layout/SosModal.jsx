import { useEffect, useState } from "react";
import { BRAND } from "@/consts";
import { useLang } from "../i18n/LangContext";
import { CloseIcon, PhoneIcon, TelegramIcon, CheckCircleIcon, AlertIcon } from "../icons";

const SosModal = ({ open, onClose }) => {
  const { t } = useLang();
  const s = t.sos;
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) setSent(false);
    return () => (document.body.style.overflow = "");
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] grid place-items-center p-4 bg-ink/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md p-6 bg-white sm:p-8 rounded-3xl shadow-lift"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute grid w-9 h-9 rounded-full top-4 right-4 place-items-center bg-surface text-ink-muted hover:text-ink"
          aria-label="close"
        >
          <CloseIcon className="w-5 h-5" />
        </button>

        <span className="grid rounded-2xl w-14 h-14 place-items-center bg-[#f14831]/10 text-[#f14831]">
          <AlertIcon className="w-7 h-7" />
        </span>
        <h2 className="mt-4 text-2xl font-extrabold font-display text-ink">{s.title}</h2>
        <p className="mt-2 text-sm text-ink-muted">{s.subtitle}</p>

        {sent ? (
          <div className="flex items-center gap-3 p-5 mt-6 border rounded-2xl bg-accent-soft border-accent/30">
            <CheckCircleIcon className="w-8 h-8 text-accent shrink-0" />
            <div>
              <div className="font-bold text-ink">{s.sentTitle}</div>
              <div className="text-sm text-ink-muted">{s.sentText}</div>
            </div>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="mt-6 space-y-3"
          >
            <input
              required
              placeholder={s.namePh}
              className="w-full px-4 py-3 text-sm border rounded-xl border-line bg-surface outline-none focus:border-brand focus:bg-white"
            />
            <input
              required
              type="tel"
              placeholder={s.phonePh}
              className="w-full px-4 py-3 text-sm border rounded-xl border-line bg-surface outline-none focus:border-brand focus:bg-white"
            />
            <button type="submit" className="w-full btn-primary">{s.callBtn}</button>
          </form>
        )}

        <div className="pt-5 mt-6 border-t border-line">
          <div className="text-sm font-semibold text-ink-muted">{s.contactsTitle}</div>
          <div className="flex gap-3 mt-3">
            <a href={BRAND.phoneHref} className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl bg-brand-50 text-brand hover:bg-brand-100">
              <PhoneIcon className="w-4 h-4" /> {BRAND.phone}
            </a>
            <a href={BRAND.telegram} className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl bg-brand-50 text-brand hover:bg-brand-100">
              <TelegramIcon className="w-4 h-4" /> Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SosModal;
