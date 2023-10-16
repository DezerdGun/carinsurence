const CalcSelect = ({ options, handleChange }) => {
  return (
    <select handleChange={handleChange}>
      {options.map((option) => (
        <option value={option.value}>{option.title}</option>
      ))}
    </select>
  );
};

export default CalcSelect;
