import useCalcSlice from "@/store/useCalcSlice";
import { CompleteType } from "./calc1";
import { CalcTabs } from "..";
import { Autocomplete, Button, Checkbox, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const tabsTriple = [
  { title: "СТС", value: "sts" },
  { title: "ПТС", value: "pts" },
  { title: "ЭПТС", value: "epts" },
];

const tabsVin = [
  { title: "VIN", value: "vin" },
  { title: "Кузов", value: "kuzov" },
  { title: "Шасси", value: "shassi" },
];

const target = [
  {
    label: "Личные",
    value: "personal",
  },
  {
    label: "Такси",
    value: "taxi",
  },
  {
    label: "Учебная езда",
    value: "student",
  },
  {
    label: "Прокат/краткосрочная аренда",
    value: "prokat",
  },
  {
    label: "Перевозка опасных и легко восал. грузов",
    value: "perevozka",
  },
  {
    label: "Дорожные и специальные ТС",
    value: "dorojniye",
  },
  {
    label: "Прочие",
    value: "prochiye",
  },
];

const Calc2 = () => {
  const setStep = useCalcSlice((store) => store.setStep);

  const typeTriple = useCalcSlice((store) => store.typeTriple);
  const setTypeTriple = useCalcSlice((store) => store.setTypeTriple);

  const typeVin = useCalcSlice((store) => store.typeVin);
  const setTypeVin = useCalcSlice((store) => store.setTypeVin);

  return (
    <>
      <div className="py-5 border-b border-gray-400">
        <CompleteType />
        <div className="pt-4">
          <CalcTabs options={tabsTriple} selected={typeTriple} handleChange={setTypeTriple} />
        </div>
        <div className="flex items-center gap-5 pt-4">
          <TextField sx={{ width: "50%" }} label={typeTriple === "epts" ? "Номер" : "Серия и номер"} required />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Дата выдачи" sx={{ width: "50%" }} required />
          </LocalizationProvider>
        </div>
        <div className="pt-4">
          <CalcTabs options={tabsVin} selected={typeVin} handleChange={setTypeVin} />
        </div>
        <div className="pt-4">
          <TextField sx={{ width: "49%" }} label={tabsVin.find((item) => item.value === typeVin).title} required />
        </div>
        <div className="flex items-center gap-5 pt-4">
          <Autocomplete
            fullWidth
            options={target}
            renderInput={(params) => <TextField {...params} label="Цель использования" required />}
            // onChange={(_, checkedItem) => handleChangeSelect(checkedItem)}
            sx={{ width: "50%" }}
          />
          <div className="flex items-center w-1/2">
            <Checkbox />
            Использование с прицепом
          </div>
        </div>
      </div>
      <div className="flex items-baseline justify-between">
        <a
          className="flex items-baseline text-blue-700 cursor-pointer hover:underline hover:underline-offset-4"
          onClick={() => setStep(1)}
        >
          {"<"} Назад
        </a>
        <Button
          variant="contained"
          color="primary"
          size="small"
          className="block px-5 py-2 mt-8 ml-auto normal-case bg-blue-700"
        >
          Продолжить
        </Button>
      </div>
    </>
  );
};

export default Calc2;
