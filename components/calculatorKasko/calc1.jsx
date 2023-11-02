import { useState } from "react";
import useCalcSlice from "@/store/useCalcSlice";
import { CalcTabs, H3, H4 } from "..";
import {
  Autocomplete,
  Button,
  Checkbox,
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

const driverType = [
  {
    label: "Мужской",
    value: "male",
    children: [
      { label: "22", value: "22" },
      { label: "23", value: "23" },
      { label: "24", value: "24" },
      { label: "25", value: "25" },
      { label: "26", value: "26" },
      { label: "27", value: "27" },
      { label: "28", value: "28" },
      { label: "29", value: "29" },
      { label: "30", value: "30" },
      { label: "31", value: "31" },
      { label: "32", value: "32" },
      { label: "33", value: "33" },
      { label: "34", value: "34" },
    ],
  },
  {
    label: "Женский",
    value: "female",
    children: [
      { label: "22", value: "22" },
      { label: "23", value: "23" },
      { label: "24", value: "24" },
      { label: "25", value: "25" },
      { label: "26", value: "26" },
      { label: "27", value: "27" },
      { label: "28", value: "28" },
      { label: "29", value: "29" },
      { label: "30", value: "30" },
      { label: "31", value: "31" },
      { label: "32", value: "32" },
      { label: "33", value: "33" },
      { label: "34", value: "34" },
    ],
  },
];

const Calc1 = () => {
  const type = useCalcSlice((store) => store.type);
  const setType = useCalcSlice((store) => store.setType);
  const setStep = useCalcSlice((store) => store.setStep);

  const [selectType, setSelectType] = useState({
    title: "Пол",
    data: driverType,
  });

  const handleChangeSelect = (event) => {
    if (event[0]?.children) setSelectType({ title: "Категория", data: event[0].children });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStep(2);
  };

  return (
    <div className="py-5">
      <CalcTabs options={tabs} selected={type} handleChange={setType} />

      <div className="py-4 border-b border-gray-400">
        {type === "complete" ? (
          <CompleteForm
            title="Автомобиль"
            description="Введите госномер и данные об авто заполнятся автоматически"
            handleSubmit={handleSubmit}
          >
            <CompleteType />
          </CompleteForm>
        ) : (
          <ContinueType />
        )}
      </div>

      <div className="py-4 border-b border-gray-400">
        <CompleteForm title="Водитель">
          <div className="pt-4">
            <Autocomplete
              fullWidth
              multiple={true}
              options={selectType.data}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Данные водителя"
                  placeholder={selectType.title}
                  required={selectType.data?.children?.length}
                />
              )}
              className="pb-4"
              onChange={(_, checkedItem) => handleChangeSelect(checkedItem)}
            />
            <Button
              variant="outlined"
              size="large"
              color="primary"
              sx={{
                width: "100%",
                textTransform: "none",
                backgroundColor: "#1976D244",
                color: "#1976D2",
                marginBottom: "16px",
                border: "none",
              }}
            >
              Добавить другого водителя
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{
                width: "100%",
                textTransform: "none",
              }}
            >
              Далее
            </Button>
          </div>
        </CompleteForm>
      </div>

      <div className="py-4 border-b border-gray-400">
        <CompleteForm title="Страхователь">
          <div className="flex items-center gap-5 pt-4">
            <TextField sx={{ width: "50%" }} label="ФИО" placeholder="Иванов Петр Ильич" required />
            <TextField
              sx={{ width: "50%" }}
              type="tel"
              label="Номер телефона"
              placeholder="+7 (XXX) XXX-XX-XX"
              required
            />
          </div>
          <div className="flex items-center gap-5 pt-4">
            <TextField fullWidth label="Город/Населенный пункт регистрации" placeholder="г Москва ..." required />
          </div>
        </CompleteForm>
      </div>

      <div className="flex items-center gap-5 pt-4">
        <div className="flex items-center w-full">
          <Checkbox />
          Даю согласие на обработку персональных данных.
        </div>
        <Button
          variant="contained"
          size="large"
          sx={{
            textTransform: "none",
          }}
        >
          Рассчитать
        </Button>
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
  const [selectType, setSelectType] = useState({
    title: "Тип",
    data: transportType,
  });

  const handleChangeSelect = (event) => {
    if (event[0]?.children) setSelectType({ title: "Категория", data: event[0].children });
  };

  return (
    <>
      <div className="flex items-center gap-5 py-4">
        <TextField sx={{ width: "50%" }} label="Госномер" placeholder="X 000 XX | 000" required />
        <div className="flex items-center w-1/2">
          <Checkbox />
          Нет номера
        </div>
      </div>
      <Button variant="contained" color="primary" size="large" sx={{ width: "100%", textTransform: "none" }}>
        Заполнить
      </Button>
      <div className="flex items-center gap-5 pt-4">
        <Autocomplete
          fullWidth
          multiple={true}
          options={selectType.data}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Характеристики"
              placeholder={selectType.title}
              required={selectType.data?.children?.length}
            />
          )}
          onChange={(_, checkedItem) => handleChangeSelect(checkedItem)}
        />
      </div>
      <div className="flex items-center pt-2">
        <Checkbox />
        Автомобиль находится в кредите
      </div>
      <div className="pt-4">
        <TextField fullWidth label="Рыносная стоимость" required />
      </div>
      <div className="flex items-center gap-5 py-4">
        <TextField sx={{ width: "50%" }} label="Приблизительный пробег авто" required />
        <TextField sx={{ width: "50%" }} label="Регион эксплуатации" required />
      </div>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        sx={{ width: "100%", textTransform: "none" }}
      >
        Далее
      </Button>
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
