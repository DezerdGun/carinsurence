import useReveal from "../hooks/useReveal";

// Обёртка: плавно проявляет содержимое при скролле.
// delay — задержка в мс (для «ступенчатого» появления карточек).
const Reveal = ({ children, className = "", delay = 0, as: Tag = "div" }) => {
  const { ref, visible } = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
