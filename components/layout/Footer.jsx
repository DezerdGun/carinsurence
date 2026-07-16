import Link from "next/link";
import { LINKS, BRAND } from "@/consts";
import { useLang } from "../i18n/LangContext";
import {
  Logo,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  TelegramIcon,
  InstagramIcon,
} from "../icons";
import {
  PaymeLogo,
  ClickLogo,
  UzumLogo,
  UzcardLogo,
  HumoLogo,
  VisaLogo,
} from "../payments";

const payLogos = [PaymeLogo, ClickLogo, UzumLogo, UzcardLogo, HumoLogo, VisaLogo];

const Footer = () => {
  const { t } = useLang();
  const L = t.footer.links;

  const columns = [
    {
      title: t.footer.colInsurance,
      links: [
        { label: L.osagoOnline, href: LINKS.OSAGO },
        { label: L.kasko, href: LINKS.KASKO },
        { label: L.calcOsago, href: LINKS.OSAGO_CALC },
        { label: L.calcKasko, href: LINKS.KASKO_CALC },
      ],
    },
    {
      title: t.footer.colServices,
      links: [
        { label: L.extend, href: "/#services" },
        { label: L.pay, href: "/#services" },
        { label: L.check, href: "/#services" },
        { label: L.activate, href: "/#services" },
      ],
    },
    {
      title: t.footer.colCompany,
      links: [
        { label: L.about, href: LINKS.ABOUT },
        { label: L.faq, href: "/#faq" },
        { label: L.partners, href: "/#partners" },
        { label: L.contacts, href: LINKS.CONTACTS },
      ],
    },
  ];

  return (
    <footer className="mt-4 text-white bg-brand-900">
      <div className="container-c py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo light />
            <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-xs">{t.footer.desc}</p>
            <div className="flex gap-3 mt-6">
              <a href={BRAND.telegram} aria-label="Telegram" className="grid w-10 h-10 rounded-full place-items-center bg-white/10 hover:bg-brand text-white transition-colors">
                <TelegramIcon className="w-5 h-5" />
              </a>
              <a href={BRAND.instagram} aria-label="Instagram" className="grid w-10 h-10 rounded-full place-items-center bg-white/10 hover:bg-brand text-white transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href={BRAND.phoneHref} aria-label="phone" className="grid w-10 h-10 rounded-full place-items-center bg-white/10 hover:bg-brand text-white transition-colors">
                <PhoneIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold tracking-wide uppercase text-white/50">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-bold tracking-wide uppercase text-white/50">{t.footer.colContacts}</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <PhoneIcon className="w-4 h-4 mt-0.5 text-brand-200" />
                <a href={BRAND.phoneHref} className="hover:text-white">{BRAND.phone}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MailIcon className="w-4 h-4 mt-0.5 text-brand-200" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-white">{BRAND.email}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <ClockIcon className="w-4 h-4 mt-0.5 text-brand-200" />
                <span>{t.footer.workHours}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="w-4 h-4 mt-0.5 text-brand-200" />
                <span>{t.footer.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 pt-8 mt-10 border-t border-white/10">
          <span className="mr-2 text-sm text-white/50">{t.footer.payTitle}</span>
          {payLogos.map((Logo, i) => (
            <span key={i} className="grid px-3 h-9 place-items-center bg-white rounded-lg shadow-soft">
              <Logo className="h-4 w-auto" />
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-c flex flex-col gap-2 py-5 text-xs sm:flex-row sm:items-center sm:justify-between text-white/50">
          <span>© {new Date().getFullYear()} {BRAND.nameFull}. {t.footer.rights}</span>
          <span>{t.footer.disclaimer}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
