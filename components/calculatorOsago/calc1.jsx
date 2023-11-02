import { useState } from "react";
import useCalcSlice from "@/store/useCalcSlice";
import { CalcTabs, H3, H4 } from "..";
import {
  Autocomplete,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

const tabs = [
  { title: "Оформить", value: "complete" },
  { title: "Продлить", value: "continue" },
];

const numFormats = [
  {
    title: "Госномер РФ",
    value: "gosRF",
  },
  {
    title: "Авто зарегистрирован не в РФ",
    value: "autoNoRF",
  },
  {
    title: "У меня нет номера",
    value: "noAuto",
  },
  {
    title: "Номер другого формата",
    value: "difFormat",
  },
];

const categories = ["A", "B", "C", "D", "E"];

const transportType = [
  { label: "Мотоциклы", value: "moto", children: [{ label: "A", value: "A" }] },
  {
    label: "Легковые",
    value: "auto",
    children: [
      { label: "B", value: "B" },
      { label: "C", value: "C" },
      { label: "D", value: "D" },
    ],
  },
];

const Calc1 = () => {
  const type = useCalcSlice((store) => store.type);
  const setType = useCalcSlice((store) => store.setType);
  const setStep = useCalcSlice((store) => store.setStep);

  const handleSubmit = (event) => {
    event.preventDefault();
    setStep(2);
  };

  return (
    <div className="py-5">
      <CalcTabs options={tabs} selected={type} handleChange={setType} />

      <div className="pt-4">
        {type === "complete" ? (
          <CompleteForm
            title="Автомобиль"
            description='Введите регистрационный номер и нажмите "Найти" - данные по авто заполнятся автоматически'
            handleSubmit={handleSubmit}
          >
            <CompleteType />
          </CompleteForm>
        ) : (
          <ContinueType />
        )}
      </div>
    </div>
  );
};

export default Calc1;

export const CompleteForm = ({ title, description, handleSubmit, children }) => {
  return (
    <form onSubmit={handleSubmit}>
      <H3 className="mb-1">{title}</H3>
      {description && <p className="text-sm text-gray-500">{description}</p>}
      {children}
    </form>
  );
};

export const CompleteType = () => {
  const numFormat = useCalcSlice((store) => store.numFormat);
  const setAnyKey = useCalcSlice((store) => store.setAnyKey);
  const step = useCalcSlice((store) => store.step);

  const [selectType, setSelectType] = useState({
    title: "Тип",
    data: transportType,
  });

  const handleChangeSelect = (event) => {
    if (event[0]?.children) setSelectType({ title: "Категория", data: event[0].children });
  };

  return (
    <>
      <div className="my-5">
        <Stack direction="row" gap="20px">
          <FormControl fullWidth>
            <TextField
              label="Регистрационный номер"
              InputProps={{
                className: "text-base px-2",
                endAdornment: (
                  <Button variant="contained" color="primary" className="px-5 py-1 normal-case bg-blue-600">
                    Найти
                  </Button>
                ),
              }}
              required
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Формат номера</InputLabel>
            <Select
              value={numFormat}
              label="Формат номера"
              onChange={(event) => setAnyKey("numFormat", event.target.value)}
              required
            >
              {numFormats.map((item) => (
                <MenuItem key={item.title} value={item.value}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <p className="mt-2 text-xs text-gray-500">
          Если авто не стоит на учете, выберите формат номера "У меня нет номера"
        </p>
      </div>

      <Autocomplete
        fullWidth
        multiple={true}
        options={selectType.data}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Характеристики ТС"
            placeholder={selectType.title}
            required={selectType.data?.children?.length}
          />
        )}
        onChange={(_, checkedItem) => handleChangeSelect(checkedItem)}
      />
      {step === 1 && (
        <Button
          type="submit"
          variant="contained"
          color="success"
          className="block px-4 py-2 mt-8 ml-auto normal-case bg-green-700"
        >
          Продолжить
        </Button>
      )}
    </>
  );
};

const ContinueType = () => {
  return (
    <form>
      <H4 className="mb-1">Предыдущий полис</H4>
      <p className="text-sm text-gray-500">
        Введите номер полиса в формате ХХХ 1234567890 или CL1234567890 Если не можете найти номер полиса, войдите в
        Личный кабинет и продлите полис
      </p>
      <div className="flex items-center gap-5 my-4">
        <FormControl fullWidth>
          <TextField label="Номер полиса" required />
        </FormControl>
        <FormControl fullWidth>
          <TextField label="Фамилия" required />
        </FormControl>
      </div>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="block px-4 py-2 ml-auto normal-case bg-blue-600"
      >
        Продлить
      </Button>
    </form>
  );
};
