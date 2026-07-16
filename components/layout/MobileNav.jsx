import Link from "next/link";
import { useRouter } from "next/router";
import { LINKS } from "@/consts";
import { useLang } from "../i18n/LangContext";
import { HomeIcon, CarIcon, AlertIcon, UserIcon, MenuIcon } from "../icons";

const MobileNav = ({ onSos, onMenu }) => {
  const { t } = useLang();
  const router = useRouter();
  const n = t.mobileNav;
  const isHome = router.pathname === "/";

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t md:hidden bg-white/95 backdrop-blur-md border-line pb-[env(safe-area-inset-bottom)]">
      <div className="grid h-16 grid-cols-5">
        <Link href={LINKS.HOME} className={`flex flex-col items-center justify-center gap-1 ${isHome ? "text-brand" : "text-ink-faint"}`}>
          <HomeIcon className="w-6 h-6" />
          <span className="text-[10px] font-semibold">{n.home}</span>
        </Link>
        <Link href={LINKS.OSAGO_CALC} className="flex flex-col items-center justify-center gap-1 text-ink-faint">
          <CarIcon className="w-6 h-6" />
          <span className="text-[10px] font-semibold">{n.osago}</span>
        </Link>
        <button onClick={onSos} className="flex flex-col items-center justify-center gap-1 text-white">
          <span className="grid -mt-6 rounded-full w-14 h-14 place-items-center bg-[#f14831] shadow-lg shadow-[#f14831]/40 border-4 border-white">
            <AlertIcon className="w-6 h-6" />
          </span>
          <span className="text-[10px] font-bold text-[#f14831] -mt-1">{n.sos}</span>
        </button>
        <Link href="#" className="flex flex-col items-center justify-center gap-1 text-ink-faint">
          <UserIcon className="w-6 h-6" />
          <span className="text-[10px] font-semibold">{n.account}</span>
        </Link>
        <button onClick={onMenu} className="flex flex-col items-center justify-center gap-1 text-ink-faint">
          <MenuIcon className="w-6 h-6" />
          <span className="text-[10px] font-semibold">{n.menu}</span>
        </button>
      </div>
    </nav>
  );
};

export default MobileNav;
