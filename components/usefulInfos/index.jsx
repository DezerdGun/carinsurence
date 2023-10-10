import { useState } from "react";
import FAQ from "../faq";

const UsefulInfos = () => {
  const [checked, setChecked] = useState("faq");
  const data = [
    {
      label: "Вопросы и ответы",
      value: "faq",
    },
    {
      label: "Документы",
      value: "docs",
    },
    {
      label: "Страховой случай",
      value: "insurance",
    },
  ];

  return (
    <>
      <section className="max-w-6xl px-5 py-10 mx-auto">
        <div className="p-5 bg-white border border-gray-200 rounded-2xl">
          <h2 className="mb-5 text-2xl font-bold md:text-3xl md:mb-8">Полезные информация</h2>
          <div className="flex items-stretch gap-1 p-1 bg-gray-100 rounded-xl">
            {data.map((item) => (
              <div
                key={item.value}
                className={`flex items-center border rounded-xl px-3 py-2 text-sm transition-all cursor-pointer ${
                  checked === item.value
                    ? "bg-white border-blue-500 text-blue-500"
                    : "bg-transparent border-transparent text-gray-500"
                }`}
                onClick={() => setChecked(item.value)}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
};

export default UsefulInfos;
