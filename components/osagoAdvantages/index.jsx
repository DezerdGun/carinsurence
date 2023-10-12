const OsagoAdvantages = () => {
  const data = [
    {
      title: "Покупка полиса онлайн",
      description:
        "Не нужно ехать в офис страховой компании и сидеть в очереди. Полис можно купить онлайн не выходя из дома",
      img: "/osago-i-order-online.svg",
    },
    {
      title: "Поддержка 24/7",
      description:
        "Мы всегда на связи — можно позвонить по телефону, написать в онлайн-чате на сайте или в мессенджерах",
      img: "/osago-i-support.svg",
    },
    {
      title: "Заявление о происшествии онлайн",
      description: "Сообщить о ДТП и отслеживать статус урегулирования можно в приложении IngoMobile",
      img: "/osago-i-incident-online.svg",
    },
  ];

  return (
    <section className="max-w-6xl px-5 py-10 mx-auto">
      <div className="p-5 bg-white border border-gray-200 rounded-2xl">
        <h2 className="mb-5 text-2xl font-bold text-center md:text-3xl md:mb-8">
          Преимущества полиса ОСАГО в «Ингосстрахе»
        </h2>

        <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:gap-x-[4%] lg:gap-x-0 lg:justify-between">
          {data.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between w-full gap-2 p-5 bg-gray-100 border border-gray-200 rounded-2xl sm:w-[48%] lg:w-[32%]"
            >
              <div>
                <div className="mb-2 font-semibold">{item.title}</div>
                <div className="text-gray-500">{item.description}</div>
              </div>
              <img src={item.img} className="object-contain w-auto h-20 ml-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OsagoAdvantages;
