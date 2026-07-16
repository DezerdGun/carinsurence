import { createContext, useContext, useEffect, useState } from "react";

// Тип клиента: personal (физлица) / legal (юрлица).
const EntityContext = createContext({ entity: "personal", setEntity: () => {} });

export const EntityProvider = ({ children }) => {
  const [entity, setEntityState] = useState("personal");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("carfresh-entity");
      if (saved === "personal" || saved === "legal") setEntityState(saved);
    } catch (e) {}
  }, []);

  const setEntity = (next) => {
    setEntityState(next);
    try {
      window.localStorage.setItem("carfresh-entity", next);
    } catch (e) {}
  };

  return <EntityContext.Provider value={{ entity, setEntity }}>{children}</EntityContext.Provider>;
};

export const useEntity = () => useContext(EntityContext);
