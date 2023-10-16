const CalcTabs = ({ options, selected, handleChange }) => {
  return (
    <div className="flex items-center gap-1 p-1 border border-gray-400 rounded-lg w-fit">
      {options.map((option) => (
        <div
          key={option.value}
          className={`px-3 py-1 border rounded-md text-sm transition-all ${
            selected === option.value
              ? "border-blue-600 text-blue-500 cursor-default"
              : "cursor-pointer hover:bg-blue-200 border-transparent text-gray-500"
          }`}
          onClick={() => selected !== option.value && handleChange(option.value)}
        >
          {option.title}
        </div>
      ))}
    </div>
  );
};

export default CalcTabs;
