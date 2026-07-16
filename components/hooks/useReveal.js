import { useEffect, useRef, useState } from "react";

// Появление элемента при попадании в область видимости (один раз).
// Устойчиво к быстрым/якорным переходам: помимо IntersectionObserver
// есть fallback-проверка положения, чтобы контент никогда не оставался скрытым.
export default function useReveal({ threshold = 0.15, rootMargin = "0px 0px -10% 0px" } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setVisible(true);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    // Fallback: элемент уже в видимой части (или проскочил выше) — показываем.
    const inOrAboveViewport = () => {
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return rect.top < vh * 0.95;
    };
    const onScroll = () => {
      if (inOrAboveViewport()) reveal();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) reveal();
        });
      },
      { threshold, rootMargin }
    );
    observer.observe(node);

    // Первичная проверка + подстраховка на скролл/ресайз.
    if (inOrAboveViewport()) reveal();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [threshold, rootMargin]);

  return { ref, visible };
}
