const CalcTabs = ({ options, selected, handleChange }) => {
  return (
    <div className="inline-flex items-center gap-1 p-1 border rounded-xl bg-surface border-line">
      {options.map((option) => (
        <div
          key={option.value}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
            selected === option.value
              ? "bg-white text-brand shadow-soft cursor-default"
              : "cursor-pointer text-ink-muted hover:text-brand hover:bg-white/60 border-transparent"
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
