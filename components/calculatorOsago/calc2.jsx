import useCalcSlice from "@/store/useCalcSlice";
import { CompleteForm, CompleteType } from "./calc1";
import { CalcTabs } from "..";
import { Autocomplete, Button, Checkbox, Stack, Switch, TextField } from "@mui/material";
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

const tabsPol = [
  { title: "Мужчина", value: "male" },
  { title: "Женщина", value: "female" },
];

const tabsDrivCount = [
  { title: "Без ограничений", value: "infinite" },
  { title: "До 5 лиц", value: "up-to-5" },
];

const tabsPeriod = [
  { title: "1 год", value: "12-months" },
  { title: "6 месяцев", value: "6-months" },
];

const Calc2 = () => {
  const setStep = useCalcSlice((store) => store.setStep);

  const typeTriple = useCalcSlice((store) => store.typeTriple);
  const setTypeTriple = useCalcSlice((store) => store.setTypeTriple);

  const typeVin = useCalcSlice((store) => store.typeVin);
  const setTypeVin = useCalcSlice((store) => store.setTypeVin);

  const typePol = useCalcSlice((store) => store.typePol);
  const setTypePol = useCalcSlice((store) => store.setTypePol);

  const typeDrivCount = useCalcSlice((store) => store.typeDrivCount);
  const setTypeDrivCount = useCalcSlice((store) => store.setTypeDrivCount);

  const typePeriod = useCalcSlice((store) => store.typePeriod);
  const setTypePeriod = useCalcSlice((store) => store.setTypePeriod);

  const handleSubmit = (event) => {
    event.preventDefault();
    setStep(2);
  };

  return (
    <>
      <div className="py-5 border-b border-gray-400">
        <CompleteForm
          title="Автомобиль"
          description='Введите регистрационный номер и нажмите "Найти" - данные по авто заполнятся автоматически'
          handleSubmit={handleSubmit}
        >
          <CompleteType />
        </CompleteForm>

        <div className="flex items-center gap-5 pt-4">
          {/* <TextField sx={{ width: "50%" }} label={typeTriple === "epts" ? "Номер" : "Серия и номер"} required /> */}
          <TextField sx={{ width: "49%" }} label="VIN" required />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Дата выдачи" sx={{ width: "50%" }} required />
          </LocalizationProvider>
        </div>

        {/* <div className="pt-4">
          <TextField sx={{ width: "49%" }} label='VIN' required />
        </div> */}

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

      <div className="py-5 border-b border-gray-400">
        <CompleteForm title="Страхователь" description="тот, кто оформляет полис" handleSubmit={handleSubmit}>
          <div className="flex items-center gap-5 pt-4">
            <TextField
              sx={{ width: "50%" }}
              type="email"
              label="Электронная почта"
              placeholder="ivan@test.com"
              required
            />
            <TextField
              sx={{ width: "50%" }}
              type="tel"
              label="Номер телефона"
              placeholder="+7 (951) 546-09-29"
              required
            />
          </div>
        </CompleteForm>

        <div className="pt-4">
          <TextField fullWidth label="ПИНФЛ" required />
        </div>

        <div className="flex items-center gap-5 pt-4">
          <Stack direction="row" gap="10px" sx={{ width: "50%" }}>
            <TextField label="Серия" sx={{ width: "120px" }} placeholder="XX" required />
            <TextField label="Номер" placeholder="1234567" required />
          </Stack>

          <CalcTabs options={tabsPol} selected={typePol} handleChange={setTypePol} />
        </div>

        <div className="pt-4">
          <TextField fullWidth label="ИНН" required />
        </div>

        {/* <div className="flex items-center gap-2 pt-4">
          <Switch defaultChecked />
          Документ иностранного государства
        </div>

        <div className="flex items-center gap-5 pt-4">
          <Autocomplete
            fullWidth
            options={target}
            renderInput={(params) => <TextField {...params} label="Цель использования" required />}
            // onChange={(_, checkedItem) => handleChangeSelect(checkedItem)}
            sx={{ width: "50%" }}
          />
          <TextField sx={{ width: "50%" }} label={typeTriple === "epts" ? "Номер" : "Серия и номер"} required />
        </div>

        <div className="flex items-start pt-4">
          <Checkbox />
          <div>
            Указать СНИЛС
            <br />
            <span className="text-sm text-gray-500">Не обязательно для заполнения</span>
          </div>
        </div> */}

        <div className="flex items-center pt-2">
          <Checkbox defaultChecked />
          Страхователь является собственником авто
        </div>
        <div className="flex items-center">
          <Checkbox defaultChecked />
          Страхователь является водителем
        </div>
      </div>

      <div className="py-5 border-b border-gray-400">
        <CompleteForm title="Водители" handleSubmit={handleSubmit}>
          <div className="pt-4">
            <div className="mb-2">Количество водителей</div>
            <CalcTabs options={tabsDrivCount} selected={typeDrivCount} handleChange={setTypeDrivCount} />
          </div>

          <div className="pt-4">
            <div className="mb-2">Период страхования</div>
            <CalcTabs options={tabsPeriod} selected={typePeriod} handleChange={setTypePeriod} />
          </div>

          <div className="pt-4">
            <TextField fullWidth label="Стоимость полиса" value="168 000,00 сум" required />
          </div>

          {/* <div className="flex items-start gap-2 pt-4">
            <Switch defaultChecked />
            <div>
              <span className="font-medium">Мультидрайв (ОСАГО без ограничения по количеству водителей)</span>
              <br />
              <span className="text-sm text-gray-500">Стоимость полиса увеличится</span>
            </div>
          </div> */}
        </CompleteForm>
      </div>

      <div className="flex items-baseline justify-between pt-5">
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
