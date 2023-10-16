const { create } = require("zustand");

const useCalcSlice = create((set) => ({
  step: 1,
  setStep: (step) => set({ step }),

  type: "complete",
  setType: (type) => set({ type }),

  numFormat: "gosRF",
  setAnyKey: (key, value) => set({ [key]: value }),
}));

export default useCalcSlice;
