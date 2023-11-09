import { Container, H2, H3 } from "..";
import Calc1 from "./calc1";
import Calc2 from "./calc2";
import useCalcSlice from "@/store/useCalcSlice";

const steps = ["Расчет", "Оформление", "Оплата"];

const CalculatorOsago = ({ title }) => {
  const step = useCalcSlice((store) => store.step);
  const setStep = useCalcSlice((store) => store.setStep);

  const calcPage = () => {
    switch (step) {
      case 1:
        return <Calc1 />;
      case 2:
        return <Calc2 />;
    }
  };

  return (
    <Container>
      <H2 className="mb-5 text-center">Оформить {title} за три шага</H2>

      <div className="flex gap-5 p-8 bg-white rounded-xl">
        <div className="w-3/5">
          <div className="pb-8 border-b border-gray-300">
            <H3 className="mb-4">Выбор авто</H3>

            <div className="flex items-center gap-5">
              {steps.map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 ${step > index + 1 ? "cursor-pointer" : "cursor-auto"}`}
                  onClick={() => step > index + 1 && setStep(index + 1)}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-sm text-white border-2 border-blue-400 ${
                      step === index + 1 ? "bg-blue-600" : "bg-blue-400"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {calcPage()}
        </div>
      </div>
    </Container>
  );
};

export default CalculatorOsago;
