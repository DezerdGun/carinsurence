import { createContext, useContext, useEffect, useState } from "react";
import { DICT } from "@/consts/i18n";

const LangContext = createContext({ lang: "ru", setLang: () => {}, t: DICT.ru });

export const LangProvider = ({ children }) => {
  const [lang, setLangState] = useState("ru");

  // Восстанавливаем выбор языка после монтирования (без hydration-конфликтов).
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("carfresh-lang");
      if (saved === "ru" || saved === "uz") {
        setLangState(saved);
        document.documentElement.lang = saved;
      }
    } catch (e) {}
  }, []);

  const setLang = (next) => {
    setLangState(next);
    try {
      window.localStorage.setItem("carfresh-lang", next);
      document.documentElement.lang = next;
    } catch (e) {}
  };

  const t = DICT[lang] || DICT.ru;

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
};

export const useLang = () => useContext(LangContext);
