import { CalcTabs } from "..";
import { CompleteType } from "./calc1";

const Calc3 = () => {
  const type = useCalcSlice((store) => store.type);
  const setType = useCalcSlice((store) => store.setType);

  return (
    <div className="py-5">
      <CompleteType />
    </div>
  );
};

export default Calc3;
