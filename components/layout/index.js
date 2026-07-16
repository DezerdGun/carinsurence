import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SosModal from "./SosModal";
import MobileNav from "./MobileNav";
import { useLang } from "../i18n/LangContext";
import { OperatorAvatar } from "../icons";

export const Layout = ({ children }) => {
  const { t } = useLang();
  const [sosOpen, setSosOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(0); // счётчик-триггер для открытия меню в Header

  return (
    <>
      <Header openMenuSignal={mobileMenu} />
      <main className="min-h-screen overflow-x-hidden bg-white pb-16 md:pb-0">{children}</main>
      <Footer />

      {/* Плавающий виджет поддержки (десктоп) */}
      <button
        onClick={() => setSosOpen(true)}
        className="fixed z-40 hidden md:grid bottom-8 right-8 w-16 h-16 place-items-center rounded-full bg-brand-gradient text-white shadow-glow hover:shadow-lift hover:-translate-y-0.5 transition-all"
        aria-label={t.sos.trigger}
      >
        <span className="absolute inset-0 rounded-full bg-brand" style={{ animation: "sos-pulse 2.6s ease-out infinite" }} />
        <OperatorAvatar className="relative w-11 h-11" />
        {/* индикатор «онлайн» */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-accent border-2 border-white" />
      </button>

      <MobileNav onSos={() => setSosOpen(true)} onMenu={() => setMobileMenu((v) => v + 1)} />
      <SosModal open={sosOpen} onClose={() => setSosOpen(false)} />
    </>
  );
};

export { Header, Footer };
