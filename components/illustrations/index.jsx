// Цветные duotone-SVG иллюстрации (синий + светлый + оранжевый акцент) —
// в стиле иллюстраций из /public. Используются вместо линейных иконок в блоках.
// Палитра: base #0E7BE6, deep #0A5DB0, light #EAF3FE / #D6E8FD, accent #FF8A1F.

const C = { base: "#0E7BE6", deep: "#0A5DB0", light: "#D6E8FD", lighter: "#EAF3FE", accent: "#FF8A1F" };

export const IllCar = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="6" y="24" width="36" height="12" rx="4" fill={C.base} />
    <path d="M11 24l3.5-7A4 4 0 0 1 18.2 15h11.6a4 4 0 0 1 3.7 2.4L37 24H11Z" fill={C.deep} />
    <path d="M15 23l2-4.2c.3-.6.9-1 1.5-1H23V23h-8Z" fill={C.lighter} />
    <path d="M25 17.8h4.5c.6 0 1.2.4 1.5 1l2 4.2H25v-5.2Z" fill={C.lighter} />
    <circle cx="15" cy="36" r="4.5" fill="#16202E" />
    <circle cx="15" cy="36" r="1.8" fill={C.lighter} />
    <circle cx="33" cy="36" r="4.5" fill="#16202E" />
    <circle cx="33" cy="36" r="1.8" fill={C.lighter} />
    <rect x="35.5" y="27.5" width="4" height="3" rx="1.5" fill={C.accent} />
  </svg>
);

export const IllShield = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M24 6 10 11v9.5C10 30 16 37 24 40c8-3 14-10 14-19.5V11L24 6Z" fill={C.light} />
    <path d="M24 6 10 11v9.5C10 30 16 37 24 40V6Z" fill={C.lighter} />
    <path d="M17 23.5l4.5 4.5L31 18" stroke={C.base} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="24" cy="12.5" r="2" fill={C.accent} />
  </svg>
);

export const IllPlane = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <circle cx="24" cy="24" r="18" fill={C.lighter} />
    <path d="M22 26 12 23l2-3.4 9 1.4 6.6-6.8a3 3 0 0 1 4.3 4.2L27 25.4l1.6 9.4-3 1.2-3.2-8.6-4 3.2-.2 3.6-2.2.8-1-4.8-4.8-1 .8-2.2 3.6-.2 4.6-4Z" fill={C.base} />
    <path d="m30 15 3.9-.6a3 3 0 0 1-.9 5.2L30 15Z" fill={C.accent} />
  </svg>
);

export const IllHeart = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M24 40S8 31 8 19.5C8 14 12 10 16.5 10c3.2 0 5.6 1.8 7.5 4.4C25.9 11.8 28.3 10 31.5 10 36 10 40 14 40 19.5 40 31 24 40 24 40Z" fill={C.light} />
    <path d="M14 24h5l2-4 3 8 2.5-5H34" stroke={C.base} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="24" cy="14.5" r="2" fill={C.accent} />
  </svg>
);

export const IllHome = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M8 23 24 10l16 13v1.5H8V23Z" fill={C.base} />
    <path d="M11 24h26v14a1.5 1.5 0 0 1-1.5 1.5H12.5A1.5 1.5 0 0 1 11 38V24Z" fill={C.lighter} />
    <rect x="20.5" y="29" width="7" height="10.5" rx="1" fill={C.accent} />
    <rect x="14" y="27" width="4.5" height="4.5" rx="1" fill={C.light} />
    <rect x="29.5" y="27" width="4.5" height="4.5" rx="1" fill={C.light} />
  </svg>
);

export const IllCalendar = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="8" y="12" width="32" height="28" rx="4" fill={C.lighter} />
    <path d="M8 16a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v4H8v-4Z" fill={C.base} />
    <rect x="15" y="8" width="3" height="8" rx="1.5" fill={C.deep} />
    <rect x="30" y="8" width="3" height="8" rx="1.5" fill={C.deep} />
    <circle cx="18" cy="27" r="2.4" fill={C.light} />
    <circle cx="24" cy="27" r="2.4" fill={C.accent} />
    <circle cx="30" cy="27" r="2.4" fill={C.light} />
    <circle cx="18" cy="34" r="2.4" fill={C.light} />
    <circle cx="24" cy="34" r="2.4" fill={C.light} />
  </svg>
);

export const IllHospital = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M10 20 24 12l14 8v18a1.5 1.5 0 0 1-1.5 1.5H11.5A1.5 1.5 0 0 1 10 38V20Z" fill={C.lighter} />
    <path d="M10 20 24 12l14 8v3H10v-3Z" fill={C.base} />
    <path d="M22 26h4v3h3v4h-3v3h-4v-3h-3v-4h3v-3Z" fill={C.accent} />
  </svg>
);

export const IllBriefcase = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="7" y="17" width="34" height="22" rx="4" fill={C.base} />
    <path d="M18 17v-3a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3" stroke={C.deep} strokeWidth="2.4" fill="none" />
    <rect x="7" y="24" width="34" height="6" fill={C.deep} opacity="0.5" />
    <rect x="21" y="24.5" width="6" height="5" rx="1.5" fill={C.accent} />
  </svg>
);

export const IllFamily = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <circle cx="17" cy="16" r="5" fill={C.base} />
    <circle cx="31" cy="16" r="5" fill={C.deep} />
    <path d="M7 38c0-6 4.5-10 10-10s10 4 10 10H7Z" fill={C.lighter} />
    <path d="M21 38c1-5.5 5-9 10-9s9 3.5 10 9H21Z" fill={C.light} />
    <circle cx="24" cy="34" r="2" fill={C.accent} />
  </svg>
);

export const IllDoc = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M12 8h16l8 8v22a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2Z" fill={C.lighter} />
    <path d="M28 8l8 8h-8V8Z" fill={C.light} />
    <path d="M16 22h16M16 27h16M16 32h10" stroke={C.base} strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="34" cy="34" r="6.5" fill={C.accent} />
    <path d="m31 34 2 2 3.5-3.6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const IllWallet = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect x="7" y="13" width="34" height="24" rx="4" fill={C.base} />
    <path d="M7 17a4 4 0 0 1 4-4h22a2 2 0 0 1 2 2v3H7v-1Z" fill={C.deep} />
    <rect x="28" y="22" width="15" height="8" rx="2.5" fill={C.lighter} />
    <circle cx="33.5" cy="26" r="2.2" fill={C.accent} />
  </svg>
);

export const IllSupport = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <path d="M11 26a13 13 0 0 1 26 0" stroke={C.base} strokeWidth="3" strokeLinecap="round" fill="none" />
    <rect x="7" y="24" width="7" height="12" rx="3.5" fill={C.base} />
    <rect x="34" y="24" width="7" height="12" rx="3.5" fill={C.deep} />
    <path d="M37.5 35.5v1.5a4 4 0 0 1-4 4H27" stroke={C.base} strokeWidth="2.6" strokeLinecap="round" fill="none" />
    <circle cx="24" cy="41" r="2.4" fill={C.accent} />
  </svg>
);

export const IllCheck = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <circle cx="24" cy="24" r="16" fill={C.lighter} />
    <circle cx="24" cy="24" r="16" stroke={C.light} strokeWidth="2" />
    <path d="m16 24 5 5 11-11" stroke={C.base} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="35" cy="14" r="2.4" fill={C.accent} />
  </svg>
);
