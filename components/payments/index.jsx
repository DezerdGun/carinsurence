// SVG-логотипы платёжных систем (брендовые цвета) для блока «Приём оплаты».
// Показ принимаемых способов оплаты — стандартная практика.
const font =
  "'Sora', 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif";

export const PaymeLogo = ({ className = "h-4" }) => (
  <svg viewBox="0 0 78 24" className={className} style={{ overflow: "visible" }}>
    <circle cx="9" cy="12" r="9" fill="#22C7B6" />
    <path d="M5.6 7.5h4.2a3.2 3.2 0 0 1 0 6.4H7.9V17H5.6V7.5Zm2.3 2v2.4h1.6a1.2 1.2 0 0 0 0-2.4H7.9Z" fill="#fff" />
    <text x="22" y="17" fontFamily={font} fontSize="17" fontWeight="700" fill="#0F3B37">payme</text>
  </svg>
);

export const ClickLogo = ({ className = "h-4" }) => (
  <svg viewBox="0 0 66 24" className={className} style={{ overflow: "visible" }}>
    <circle cx="9" cy="12" r="9" fill="#00B4A0" />
    <path d="M7 8l6 4-6 4V8Z" fill="#fff" />
    <text x="22" y="17" fontFamily={font} fontSize="17" fontWeight="700" fill="#0A9E8C">Click</text>
  </svg>
);

export const UzumLogo = ({ className = "h-4" }) => (
  <svg viewBox="0 0 74 24" className={className} style={{ overflow: "visible" }}>
    <rect x="1" y="4" width="16" height="16" rx="5" fill="#7B3FF2" />
    <circle cx="9" cy="9.5" r="1.7" fill="#fff" />
    <path d="M6 13.5c.6 1.4 1.7 2.2 3 2.2s2.4-.8 3-2.2" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    <text x="22" y="17" fontFamily={font} fontSize="17" fontWeight="700" fill="#7B3FF2">uzum</text>
  </svg>
);

export const UzcardLogo = ({ className = "h-4" }) => (
  <svg viewBox="0 0 78 24" className={className} style={{ overflow: "visible" }}>
    <rect x="1" y="6" width="15" height="12" rx="2.5" fill="#1E4EA1" />
    <rect x="1" y="9" width="15" height="2.4" fill="#123E8C" />
    <text x="21" y="17" fontFamily={font} fontSize="16" fontWeight="800" fill="#1E4EA1">Uz</text>
    <text x="38" y="17" fontFamily={font} fontSize="16" fontWeight="800" fill="#3B9BE0">Card</text>
  </svg>
);

export const HumoLogo = ({ className = "h-4" }) => (
  <svg viewBox="0 0 72 24" className={className} style={{ overflow: "visible" }}>
    <path d="M9 3c2 2.6 1.2 5-.3 6.8C7 12 6 13.4 6.6 15.6 4.4 14.4 3 12.2 3 9.8 3 6.9 5.6 4.4 9 3Z" fill="#F26A21" />
    <path d="M10.5 6c1.6 1.8 1.2 3.6.1 5-1 1.3-1.6 2.3-1.2 3.8-1.6-.9-2.6-2.4-2.6-4.1 0-2 1.5-3.7 3.7-4.7Z" fill="#FDB913" />
    <text x="20" y="17" fontFamily={font} fontSize="17" fontWeight="700" fill="#F26A21">humo</text>
  </svg>
);

export const VisaLogo = ({ className = "h-4" }) => (
  <svg viewBox="0 0 62 22" className={className} style={{ overflow: "visible" }}>
    <text
      x="1"
      y="17"
      fontFamily={font}
      fontSize="19"
      fontWeight="800"
      fontStyle="italic"
      letterSpacing="0.5"
      fill="#1A1F71"
    >
      VISA
    </text>
    <rect x="1" y="19" width="56" height="2.4" rx="1.2" fill="#F7A600" />
  </svg>
);
