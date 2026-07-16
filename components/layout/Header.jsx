import { useEffect, useState } from "react";
import Link from "next/link";
import { LINKS, BRAND } from "@/consts";
import { useLang } from "../i18n/LangContext";
import { useEntity } from "../context/EntityContext";
import A11yMenu from "./A11yMenu";
import { Logo, PhoneIcon, MenuIcon, CloseIcon, ArrowRightIcon } from "../icons";

const LangSwitch = ({ className = "" }) => {
  const { lang, setLang } = useLang();
  return (
    <div className={`inline-flex items-center p-0.5 rounded-lg bg-surface border border-line ${className}`}>
      {["ru", "uz"].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2.5 py-1 text-xs font-bold uppercase rounded-md transition-colors ${
            lang === l ? "bg-brand text-white shadow-soft" : "text-ink-muted hover:text-brand"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
};

const EntitySwitch = () => {
  const { t } = useLang();
  const { entity, setEntity } = useEntity();
  return (
    <div className="inline-flex items-center gap-4 text-sm">
      {[
        { k: "personal", label: t.entity.personal },
        { k: "legal", label: t.entity.legal },
      ].map((o) => (
        <button
          key={o.k}
          onClick={() => setEntity(o.k)}
          className={`font-semibold transition-colors ${
            entity === o.k ? "text-ink" : "text-ink-faint hover:text-ink-muted"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
};

const Header = ({ openMenuSignal = 0 }) => {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const nav = [
    { label: t.nav.home, href: LINKS.HOME },
    { label: t.nav.osago, href: LINKS.OSAGO },
    { label: t.nav.kasko, href: LINKS.KASKO },
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.about, href: LINKS.ABOUT },
    { label: t.nav.contacts, href: LINKS.CONTACTS },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  // Открытие мобильного меню по сигналу из нижней навигации
  useEffect(() => {
    if (openMenuSignal > 0) setOpen(true);
  }, [openMenuSignal]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-soft" : "bg-white"
      } border-b border-line`}
    >
      {/* Верхняя полоса: Физ/Юр (десктоп) */}
      <div className="hidden border-b lg:block border-line/70 bg-surface/40">
        <div className="container-c flex items-center justify-between h-9">
          <EntitySwitch />
          <a href={BRAND.phoneHref} className="flex items-center gap-1.5 text-xs font-semibold text-ink-muted hover:text-brand">
            <PhoneIcon className="w-3.5 h-3.5" /> {BRAND.phone}
          </a>
        </div>
      </div>

      <div className="container-c flex items-center justify-between h-16 md:h-[68px]">
        <Link href={LINKS.HOME} aria-label="Carfresh">
          <Logo />
        </Link>

        <nav className="items-center hidden gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3.5 py-2 text-sm font-semibold text-ink-muted rounded-lg hover:text-brand hover:bg-brand-50 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="items-center hidden gap-2 md:flex">
          <A11yMenu />
          <LangSwitch className="hidden lg:inline-flex" />
          <Link href={LINKS.OSAGO_CALC} className="btn-primary shine py-2.5 px-5 text-sm">
            {t.common.calculate}
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <A11yMenu />
          <LangSwitch />
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid w-10 h-10 rounded-lg place-items-center text-ink hover:bg-brand-50"
            aria-label="menu"
          >
            {open ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      <div
        className={`md:hidden overflow-hidden border-t border-line bg-white transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[30rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-c flex flex-col py-4">
          <div className="pb-3 mb-1 border-b border-line">
            <EntitySwitch />
          </div>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-semibold border-b text-ink border-line last:border-0"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-4">
            <a href={BRAND.phoneHref} className="flex items-center gap-2 font-bold text-brand">
              <PhoneIcon className="w-4 h-4" /> {BRAND.phone}
            </a>
            <Link href={LINKS.OSAGO_CALC} onClick={() => setOpen(false)} className="btn-primary w-full">
              {t.common.calculate}
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
