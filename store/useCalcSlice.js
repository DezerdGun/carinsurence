const { create } = require("zustand");

const useCalcSlice = create((set) => ({
  step: 1,
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
}));

export default useCalcSlice;
