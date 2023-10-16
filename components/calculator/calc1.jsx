import { useState } from "react";
import useCalcSlice from "@/store/useCalcSlice";
import { CalcTabs, H4 } from "..";
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

  return (
    <div className="py-5">
      <CalcTabs options={tabs} selected={type} handleChange={setType} />

      {type === "complete" ? <CompleteType /> : <ContinueType />}
    </div>
  );
};

export default Calc1;

const CompleteType = () => {
  const numFormat = useCalcSlice((store) => store.numFormat);
  const setAnyKey = useCalcSlice((store) => store.setAnyKey);
  const [selectType, setSelectType] = useState({
    title: "Тип",
    data: transportType,
  });

  const handleChangeSelect = (event) => {
    setSelectType({ title: "Категория", data: event[0].children });
  };

  return (
    <form className="pt-5">
      <H4 className="mb-1">Автомобиль</H4>
      <p className="text-sm text-gray-500">
        Введите регистрационный номер и нажмите "Найти" - данные по авто заполнятся автоматически
      </p>

      <div className="my-5">
        <Stack direction="row" gap="20px">
          <FormControl fullWidth>
            <TextField
              label="Регистрационный номер"
              size="small"
              InputProps={{
                className: "text-base px-2",
                endAdornment: (
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    className="px-5 py-1 normal-case bg-blue-600"
                  >
                    Найти
                  </Button>
                ),
              }}
              required
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel size="small">Формат номера</InputLabel>
            <Select
              value={numFormat}
              label="Формат номера"
              size="small"
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
        id="cashierInfoShopID"
        size="small"
        // value={null}
        options={selectType.data}
        renderInput={(params) => (
          <TextField {...params} label="Характеристики ТС" placeholder={selectType.title} required />
        )}
        onChange={(_, checkedItem) => handleChangeSelect(checkedItem)}
      />

      <Button
        type="submit"
        variant="contained"
        color="success"
        size="small"
        className="block px-4 py-2 mt-8 ml-auto normal-case bg-green-700"
      >
        Продолжить
      </Button>
    </form>
  );
};

const ContinueType = () => {
  return (
    <form className="pt-5">
      <H4 className="mb-1">Предыдущий полис</H4>
      <p className="text-sm text-gray-500">
        Введите номер полиса в формате ХХХ 1234567890 или CL1234567890 Если не можете найти номер полиса, войдите в
        Личный кабинет и продлите полис
      </p>
      <div className="flex items-center gap-5 my-4">
        <FormControl fullWidth>
          <TextField label="Номер полиса" size="small" required />
        </FormControl>
        <FormControl fullWidth>
          <TextField label="Фамилия" size="small" required />
        </FormControl>
      </div>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="small"
        className="block px-4 py-2 ml-auto normal-case bg-blue-600"
      >
        Продлить
      </Button>
    </form>
  );
};
