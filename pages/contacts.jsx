import { useState } from "react";
import Head from "next/head";
import { Reveal } from "@/components";
import { BRAND } from "@/consts";
import { useLang } from "@/components/i18n/LangContext";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  TelegramIcon,
  InstagramIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@/components/icons";

const Contacts = () => {
  const { t } = useLang();
  const c = t.contacts;
  const [sent, setSent] = useState(false);

  const cards = [
    { icon: PhoneIcon, title: c.cards.phone.title, value: BRAND.phone, href: BRAND.phoneHref, note: c.cards.phone.note },
    { icon: MailIcon, title: c.cards.email.title, value: BRAND.email, href: `mailto:${BRAND.email}`, note: c.cards.email.note },
    { icon: TelegramIcon, title: c.cards.telegram.title, value: "@carfresh", href: BRAND.telegram, note: c.cards.telegram.note },
    { icon: MapPinIcon, title: c.cards.address.title, value: c.cards.address.value, href: "#map", note: c.cards.address.note },
  ];

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Head>
        <title>{`${c.badge} — ${BRAND.name}`}</title>
      </Head>

      <section className="container-c pt-10 pb-4">
        <div className="relative overflow-hidden text-center bg-hero-gradient rounded-3xl px-7 py-14 shadow-lift">
          <div className="absolute top-[-30%] left-[-5%] w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <span className="chip bg-white/15 text-white border border-white/20">{c.badge}</span>
            <h1 className="mt-5 text-4xl font-extrabold text-white font-display sm:text-5xl">{c.title}</h1>
            <p className="max-w-xl mx-auto mt-4 text-lg text-white/85">{c.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="container-c py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={i * 100}>
                <a href={card.href} className="flex flex-col h-full p-6 bg-white card-c hover:-translate-y-1.5 hover:shadow-card hover:border-brand-200 transition-all duration-300">
                  <span className="grid w-12 h-12 rounded-xl place-items-center bg-brand-50 text-brand">
                    <Icon className="w-6 h-6" />
                  </span>
                  <div className="mt-4 text-sm font-semibold text-ink-muted">{card.title}</div>
                  <div className="mt-1 font-bold text-ink">{card.value}</div>
                  <div className="mt-2 text-xs text-ink-faint">{card.note}</div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="container-c pb-16 lg:pb-20">
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <Reveal>
            <div className="p-6 bg-white sm:p-8 card-c">
              <h2 className="text-2xl font-extrabold font-display text-ink">{c.formTitle}</h2>
              <p className="mt-2 text-sm text-ink-muted">{c.formSubtitle}</p>

              {sent ? (
                <div className="flex items-center gap-3 p-5 mt-6 border rounded-2xl bg-accent-soft border-accent/30">
                  <CheckCircleIcon className="w-8 h-8 text-accent shrink-0" />
                  <div>
                    <div className="font-bold text-ink">{c.sentTitle}</div>
                    <div className="text-sm text-ink-muted">{c.sentText}</div>
                  </div>
                </div>
              ) : (
                <form onSubmit={submit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label={c.fName} placeholder={c.fNamePh} required />
                    <Field label={c.fPhone} type="tel" placeholder="+998 __ ___ __ __" required />
                  </div>
                  <Field label={c.fEmail} type="email" placeholder="you@example.com" />
                  <div>
                    <label className="block mb-1.5 text-sm font-semibold text-ink">{c.fMessage}</label>
                    <textarea
                      required
                      rows={4}
                      placeholder={c.fMessagePh}
                      className="w-full px-4 py-3 text-sm transition-colors border rounded-xl border-line bg-surface outline-none focus:border-brand focus:bg-white resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary shine">
                    {c.send}
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={120} className="space-y-4">
            <div className="p-6 text-white bg-brand-gradient rounded-2xl shadow-card">
              <div className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5" />
                <span className="font-bold">{c.hoursTitle}</span>
              </div>
              <p className="mt-2 text-white/85">{c.hoursVal}</p>
              <div className="pt-4 mt-4 border-t border-white/15">
                <div className="text-sm text-white/70">{c.hotline}</div>
                <a href={BRAND.phoneHref} className="text-xl font-extrabold font-display">{BRAND.phone}</a>
              </div>
            </div>

            <div className="p-6 bg-white card-c">
              <div className="font-bold text-ink">{c.social}</div>
              <div className="flex gap-3 mt-4">
                <a href={BRAND.telegram} aria-label="Telegram" className="grid w-11 h-11 rounded-full place-items-center bg-brand-50 text-brand hover:bg-brand hover:text-white transition-colors">
                  <TelegramIcon className="w-5 h-5" />
                </a>
                <a href={BRAND.instagram} aria-label="Instagram" className="grid w-11 h-11 rounded-full place-items-center bg-brand-50 text-brand hover:bg-brand hover:text-white transition-colors">
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a href={BRAND.phoneHref} aria-label="phone" className="grid w-11 h-11 rounded-full place-items-center bg-brand-50 text-brand hover:bg-brand hover:text-white transition-colors">
                  <PhoneIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-6">
          <div id="map" className="relative overflow-hidden border h-72 rounded-3xl border-line bg-surface">
            <div
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "linear-gradient(#dbe6f2 1px, transparent 1px), linear-gradient(90deg, #dbe6f2 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="absolute inset-0 grid place-items-center">
              <div className="flex items-center gap-2.5 px-5 py-3 bg-white rounded-full shadow-card">
                <MapPinIcon className="w-5 h-5 text-brand" />
                <span className="font-semibold text-ink">{c.addressVal}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
};

const Field = ({ label, type = "text", placeholder, required }) => (
  <div>
    <label className="block mb-1.5 text-sm font-semibold text-ink">{label}</label>
    <input
      type={type}
      required={required}
      placeholder={placeholder}
      className="w-full px-4 py-3 text-sm transition-colors border rounded-xl border-line bg-surface outline-none focus:border-brand focus:bg-white"
    />
  </div>
);

export default Contacts;
