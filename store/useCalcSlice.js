const { create } = require("zustand");
const { persist, createJSONStorage } = require("zustand/middleware");

const useCalcSlice = create(
  persist(
    (set) => ({
      step: 2,
      setStep: (step) => set({ step }),

      type: "complete",
      setType: (type) => set({ type }),

      numFormat: "gosRF",
      setAnyKey: (key, value) => set({ [key]: value }),

      typeTriple: "sts",
      setTypeTriple: (typeTriple) => set({ typeTriple }),

      typeVin: "vin",
      setTypeVin: (typeVin) => set({ typeVin }),

      typePol: "male",
      setTypePol: (typePol) => set({ typePol }),

      typeDrivCount: "infinite",
      setTypeDrivCount: (typeDrivCount) => set({ typeDrivCount }),

      typePeriod: "12-months",
      setTypePeriod: (typePeriod) => set({ typePeriod }),
    }),
    {
      name: "carfresh-osago-calc",
      storage: createJSONStorage(() =>
        typeof window !== "undefined" ? window.localStorage : undefined
      ),
      // Восстанавливаем вручную в компоненте — чтобы избежать hydration-конфликтов SSR.
      skipHydration: true,
    }
  )
);

export default useCalcSlice;
