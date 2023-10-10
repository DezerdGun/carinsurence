import { useState } from "react";

const FAQ = () => {
  const [checked, setChecked] = useState(null);
  const data = [
    {
      title: "Какие документы нужны для оформления полиса?",
      description: (
        <>
          <p>Для оформления полиса вам потребуются:</p>
          <ul>
            <li>паспорт страхователя (того, кто заключает договор)</li>
            <li>паспорт транспортного средства (ПТС)</li>
            <li>водительские права всех, кто будет управлять автомобилем</li>
            <li>документы, подтверждающие стоимость транспортного средства</li>
          </ul>
        </>
      ),
    },
    {
      title: "От каких рисков можно застраховать автомобиль?",
      description: (
        <>
          <p>Основные риски, которые можно включить в полис Каско: повреждения, гибель, угон автомобиля.</p>

          <p>Еще есть дополнительных опции: Шины-Диски, Сигнализация, Техническая помощь на дороге и т.д.</p>

          <p>
            Полисы ОСАГО и Зеленая карта покрывают риски причинения ущерба имуществу, жизни и здоровью третьих лиц
            (гражданская ответственность).
          </p>
        </>
      ),
    },
    {
      title: "Какие документы нужны для оформления полиса?",
      description: (
        <>
          <p>Для оформления полиса вам потребуются:</p>
          <ul>
            <li>паспорт страхователя (того, кто заключает договор)</li>
            <li>паспорт транспортного средства (ПТС)</li>
            <li>водительские права всех, кто будет управлять автомобилем</li>
            <li>документы, подтверждающие стоимость транспортного средства</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section className="max-w-6xl px-5 py-10 mx-auto">
      <div className="flex flex-col gap-5 p-5 bg-white border border-gray-200 rounded-2xl">
        {data.map((item, index) => (
          <div key={index} className="px-5 bg-gray-100 border border-gray-200 cursor-pointer rounded-3xl">
            <div
              className="flex items-center justify-between py-3"
              onClick={() => setChecked(checked === index ? null : index)}
            >
              <div
                className={`font-medium pr-5 transition-colors ${
                  checked === index ? "text-blue-500" : "text-gray-500"
                }`}
              >
                {item.title}
              </div>
              <span
                className={`flex items-center justify-center w-10 h-10 p-3 bg-white rounded-full leading-[100%] transition-transform ${
                  checked === index ? "rotate-[135deg]" : "rotate-0"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
              </span>
            </div>
            <div className={checked === index ? "block pb-5" : "hidden"}>{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
