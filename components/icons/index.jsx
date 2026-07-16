// Набор инлайн-SVG иконок в едином линейном стиле (stroke=currentColor).
// Управляются размером через className (w/h) и цветом через text-*.

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const ShieldIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <path d="M12 2.5 4.5 5.3v6c0 4.7 3.2 8.3 7.5 9.9 4.3-1.6 7.5-5.2 7.5-9.9v-6L12 2.5Z" />
    <path d="m8.7 12 2.2 2.2 4.4-4.5" />
  </svg>
);

export const CarIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <path d="M3 13.5 4.7 8a2 2 0 0 1 1.9-1.4h10.8A2 2 0 0 1 19.3 8L21 13.5" />
    <path d="M3 13.5h18V18a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-1H6.5v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4.5Z" />
    <circle cx="7" cy="16" r="0.4" />
    <circle cx="17" cy="16" r="0.4" />
  </svg>
);

export const DocIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <path d="M6 3h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
    <path d="M14 3v4h4" />
    <path d="M8.5 12h7M8.5 15.5h7M8.5 8.5h2" />
  </svg>
);

export const SupportIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <path d="M4 12a8 8 0 0 1 16 0" />
    <rect x="3" y="12" width="3.5" height="6" rx="1.2" />
    <rect x="17.5" y="12" width="3.5" height="6" rx="1.2" />
    <path d="M20 18v.8a3 3 0 0 1-3 3h-2.5" />
    <circle cx="12" cy="21" r="0.4" />
  </svg>
);

export const BoltIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13l0-8Z" />
  </svg>
);

export const CheckIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <path d="M4 12.5 9 17.5 20 6.5" />
  </svg>
);

export const CheckCircleIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.3 12 2.5 2.5 4.9-5" />
  </svg>
);

export const StarIcon = ({ className = "w-5 h-5", filled = true }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinejoin="round"
  >
    <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.6 1-5.8-4.3-4.1 5.9-.9L12 3.5Z" />
  </svg>
);

export const PhoneIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <path d="M6.5 3.5 9 4l1 3.5-1.7 1.4a11 11 0 0 0 5.4 5.4L15 12l3.5 1 .5 2.5a2 2 0 0 1-2 2.3A13.5 13.5 0 0 1 4.2 5.5a2 2 0 0 1 2.3-2Z" />
  </svg>
);

export const ClockIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const WalletIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <path d="M4 7a2 2 0 0 1 2-2h11a1 1 0 0 1 1 1v2" />
    <rect x="3" y="7" width="18" height="12" rx="2.5" />
    <path d="M16 12h3v3h-3a1.5 1.5 0 0 1 0-3Z" />
  </svg>
);

export const RefreshIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <path d="M20 8a8 8 0 0 0-14.5-2M4 5v4h4" />
    <path d="M4 16a8 8 0 0 0 14.5 2M20 19v-4h-4" />
  </svg>
);

export const SearchIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.2-3.2" />
  </svg>
);

export const ChatIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9A1.5 1.5 0 0 1 18.5 16H9l-4 3.5V16H5.5A1.5 1.5 0 0 1 4 14.5v-9Z" />
    <path d="M8.5 9.5h7M8.5 12.5h4" />
  </svg>
);

export const TelegramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.9 4.3 18.7 19.4c-.24 1.06-.87 1.32-1.76.82l-4.86-3.58-2.35 2.26c-.26.26-.48.48-.98.48l.35-4.94 9-8.13c.39-.35-.09-.54-.6-.19L4.8 12.9l-4.79-1.5c-1.04-.32-1.06-1.04.22-1.54L20.5 2.9c.87-.32 1.63.2 1.4 1.4Z" />
  </svg>
);

export const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

export const MapPinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <path d="M12 21c4.5-4.2 7-7.5 7-11a7 7 0 1 0-14 0c0 3.5 2.5 6.8 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const MailIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const MenuIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const ArrowRightIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ChevronDownIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const FamilyIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <circle cx="8" cy="8" r="2.5" />
    <circle cx="16" cy="8" r="2.5" />
    <path d="M3.5 19c0-2.8 2-4.5 4.5-4.5s4.5 1.7 4.5 4.5M12 19c.3-2.4 2-4.5 4.5-4.5S20.5 16.2 20.5 19" />
  </svg>
);

export const HospitalIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <path d="M5 21V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v15" />
    <path d="M3 21h18M12 8v5M9.5 10.5h5" />
  </svg>
);

export const PlaneIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <path d="M10.5 13.5 3 11l1-2 8 1 5-5.5a2 2 0 0 1 3 3L14.5 12l1 8-2 1-2.5-7.5-3.5 3v3l-2 1-1-4-4-1 1-2 3 .5" />
  </svg>
);

export const HeartIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <path d="M12 20s-7-4.5-9.3-9C1 7.5 3 4.5 6 4.5c2 0 3.2 1.2 4 2.4.8-1.2 2-2.4 4-2.4 3 0 5 3 3.3 6.5C19 15.5 12 20 12 20Z" />
  </svg>
);

export const HomeIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <path d="M4 11 12 4l8 7" />
    <path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9" />
    <path d="M10 20v-5h4v5" />
  </svg>
);

export const AlertIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <path d="M10.3 3.9 2.4 17.2A2 2 0 0 0 4.1 20h15.8a2 2 0 0 0 1.7-2.8L13.7 3.9a2 2 0 0 0-3.4 0Z" />
    <path d="M12 9v4M12 16.5v.5" />
  </svg>
);

export const NewsIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h9A1.5 1.5 0 0 1 16 5.5V18a2 2 0 0 0 2 2H6a2 2 0 0 1-2-2V5.5Z" />
    <path d="M16 8h2.5A1.5 1.5 0 0 1 20 9.5V18a2 2 0 0 1-2 2M7.5 8h5M7.5 11.5h5M7.5 15h3" />
  </svg>
);

export const BriefcaseIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <rect x="3" y="7.5" width="18" height="12" rx="2" />
    <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5M3 12.5h18" />
  </svg>
);

export const UserIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
  </svg>
);

// Аватар оператора поддержки (голова + наушники) для плавающего виджета
export const OperatorAvatar = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
    {/* плечи */}
    <path d="M6.5 27c0-4.4 4-7.5 9.5-7.5S25.5 22.6 25.5 27" fill="#EAF3FE" />
    {/* голова */}
    <circle cx="16" cy="12.5" r="5.6" fill="#FFFFFF" />
    {/* волосы */}
    <path d="M10.6 12a5.6 5.6 0 0 1 10.8 0c-1-1.3-2.7-1.7-5.4-1.7s-4.4.4-5.4 1.7Z" fill="#CFE0F5" />
    {/* дужка наушников */}
    <path d="M9 13.2a7 7 0 0 1 14 0" stroke="#FFFFFF" strokeWidth="1.7" strokeLinecap="round" />
    {/* чашки наушников */}
    <rect x="7.4" y="12.4" width="3" height="5" rx="1.5" fill="#FFFFFF" />
    <rect x="21.6" y="12.4" width="3" height="5" rx="1.5" fill="#FFFFFF" />
    {/* микрофон */}
    <path d="M8.9 17.4c0 3 1.4 4.6 3.9 4.9" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <circle cx="13.4" cy="22.4" r="1.4" fill="#FF8A1F" />
  </svg>
);

// Логотип Carfresh: щит с авто-глифом + янтарная фара + wordmark
export const LogoMark = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 44 44" className={className} fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="cf-badge" x1="4" y1="2" x2="40" y2="42" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#2E9BF5" />
        <stop offset="0.55" stopColor="#0E7BE6" />
        <stop offset="1" stopColor="#0A5DB0" />
      </linearGradient>
      <linearGradient id="cf-shield" x1="22" y1="9" x2="22" y2="35" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FFFFFF" />
        <stop offset="1" stopColor="#D6E8FD" />
      </linearGradient>
    </defs>

    {/* Бейдж */}
    <rect x="2" y="2" width="40" height="40" rx="12" fill="url(#cf-badge)" />
    {/* Верхний блик */}
    <path d="M14 2h28a0 0 0 0 1 0 0v0a12 12 0 0 1-12 12H2a0 0 0 0 1 0 0v0A12 12 0 0 1 14 2Z" fill="#FFFFFF" opacity="0.10" />

    {/* Щит */}
    <path
      d="M22 8.5 12 12.1v6.2c0 6.2 4.3 10.7 10 12.7 5.7-2 10-6.5 10-12.7v-6.2L22 8.5Z"
      fill="url(#cf-shield)"
    />

    {/* Дорога под авто */}
    <path d="M15.5 25.5c3.4-1.1 9.6-1.1 13 0" stroke="#C3D3E4" strokeWidth="1.4" strokeLinecap="round" />

    {/* Авто (вид спереди) */}
    <g>
      <path d="M15 23.4c.2-1.3.5-3.2 1-3.9.5-.7 1.5-1 6-1s5.5.3 6 1c.5.7.8 2.6 1 3.9v.3c0 .5-.4.9-.9.9h-12.2c-.5 0-.9-.4-.9-.9v-.3Z" fill="#0E7BE6" />
      <path d="M16.7 20.1c.3-.7.6-1.3.9-1.5.4-.3 1.4-.4 4.4-.4s4 .1 4.4.4c.3.2.6.8.9 1.5.2.5-.1.9-.6.9h-9.4c-.5 0-.8-.4-.6-.9Z" fill="#EAF3FE" />
      <rect x="15.4" y="22.1" width="2.7" height="1.5" rx="0.7" fill="#FF8A1F" />
      <rect x="25.9" y="22.1" width="2.7" height="1.5" rx="0.7" fill="#8FBFF3" />
    </g>

    {/* Верхний акцент-искра */}
    <circle cx="22" cy="13.6" r="1.5" fill="#FF8A1F" />
  </svg>
);

export const Logo = ({ className = "", light = false }) => {
  const text = light ? "#FFFFFF" : "#1A2431";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="w-10 h-10 shrink-0 drop-shadow-[0_6px_16px_rgba(14,123,230,0.35)]" />
      <span className="font-display font-extrabold text-xl leading-none tracking-tight" style={{ color: text }}>
        Car<span className="text-brand">fresh</span>
      </span>
    </span>
  );
};
