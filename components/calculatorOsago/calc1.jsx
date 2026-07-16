import { useRef, useState } from "react";
import useCalcSlice from "@/store/useCalcSlice";
import { CalcTabs, H3, H4 } from "..";
import InputMask from "react-input-mask";

import { Autocomplete, Button, FormControl, Stack, TextField } from "@mui/material";

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
  // { label: "Мотоциклы", value: "moto", children: [{ label: "A", value: "A" }] },
  {
    label: "Легковые",
    value: "auto",
    children: [
      {
        label: "Tracker 2",
        value: "tracker-2",
        children: [
          {
            label: "2022",
            value: "2022",
            children: [
              { label: "1200 КУБ. СМ.", value: "1200", children: [{ label: "СЕРЕБРИСТЫЙ", value: "silver" }] },
            ],
          },
        ],
      },
    ],
    // children: [
    //   { label: "B", value: "B" },
    //   { label: "C", value: "C" },
    //   { label: "D", value: "D" },
    // ],
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
          <CompleteForm
            title="Предыдущий полис"
            description="Введите номер полиса в формате ХХХ 1234567890 или CL1234567890 Если не можете найти номер полиса, войдите в
            Личный кабинет и продлите полис"
            handleSubmit={handleSubmit}
          >
            <ContinueType />
          </CompleteForm>
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
  const step = useCalcSlice((store) => store.step);
  // const regNumber = useRef();

  const [selectType, setSelectType] = useState({
    title: "Тип",
    data: transportType,
  });

  const handleChangeSelect = (event) => {
    switch (event.length) {
      case 0:
        return setSelectType({
          title: "Тип",
          data: transportType,
        });
      case 1:
        return setSelectType({ title: "Модель", data: event[0].children });
      case 2:
        return setSelectType({ title: "Год", data: event[1].children });
      case 3:
        return setSelectType({ title: "Объем", data: event[2].children });
      case 4:
        return setSelectType({ title: "Цвет", data: event[3].children });
      case 5:
        return setSelectType({ title: "", data: [] });
    }
  };

  return (
    <>
      <div className="my-5">
        <Stack direction="row" gap="20px">
          <InputMask
            // ref={regNumber}
            name="reg-number"
            mask="99 a 999 aa"
            maskChar=""
            placeholder="00 X 000 XX"
            required
            minLength={12}
          >
            {(inputProps) => (
              <TextField
                {...inputProps}
                label="Регистрационный номер"
                inputProps={{
                  style: { textTransform: "uppercase" },
                }}
                InputProps={{
                  className: "text-base px-2",
                  endAdornment: (
                    <Button variant="contained" color="primary" className="px-5 py-1 normal-case bg-brand">
                      Найти
                    </Button>
                  ),
                }}
                sx={{ width: "50%" }}
                required
              />
            )}
          </InputMask>

          <Stack direction="row" gap="10px" sx={{ width: "50%" }}>
            <InputMask
              // ref={regNumber}
              name="serial"
              mask="aaa"
              maskChar="_"
              placeholder="XXX"
              required
              minLength={3}
            >
              {(inputProps) => (
                <TextField
                  {...inputProps}
                  inputProps={{
                    style: { textTransform: "uppercase" },
                  }}
                  label="Серия"
                  sx={{ width: "120px" }}
                  required
                />
              )}
            </InputMask>
            <InputMask
              // ref={regNumber}
              name="number"
              mask="9999999"
              maskChar="_"
              placeholder="1234567"
              required
              minLength={7}
            >
              {(inputProps) => <TextField {...inputProps} label="Номер" required />}
            </InputMask>
          </Stack>
        </Stack>
        <p className="mt-2 text-xs text-gray-500">
          Если авто не стоит на учете, выберите формат номера "У меня нет номера"
        </p>
      </div>

      <Autocomplete
        fullWidth
        multiple={true}
        disableCloseOnSelect
        clearText="Очистить"
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
          className="block px-5 py-2 mt-8 ml-auto normal-case bg-accent"
        >
          Продолжить
        </Button>
      )}
    </>
  );
};

const ContinueType = () => {
  return (
    <>
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
        className="block px-5 py-2 ml-auto normal-case bg-brand"
      >
        Продлить
      </Button>
    </>
  );
};
