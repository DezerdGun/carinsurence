import FAQ from "../faq";

const Advantages = () => {
  const data = [
    {
      img: "/avia__drone-i-online-order.svg",
      title: "Полис онлайн",
      description: "Оформление ОСАГО и Каско без визита в офис",
    },
    {
      img: "/benefit-icon__auto-installment-plan.svg",
      title: "Рассрочка",
      description: "Оформление Каско в рассрочку",
    },
    {
      img: "/benefit-icon__support.svg",
      title: "Поддержка 24/7",
      description: "Круглосуточная служба поддержки",
    },
    {
      img: "/useful-services-settlement-icon.svg",
      title: "Урегулирование онлайн",
      description: "Урегулирование страховых случаев онлайн в приложении IngoMobile",
    },
  ];

  return (
    <section className="max-w-6xl px-5 py-10 mx-auto">
      <div className="p-5 bg-white border border-gray-200 rounded-2xl">
        <h2 className="mb-5 text-2xl font-bold text-center md:text-3xl md:mb-8">Преимущества</h2>
        <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:gap-x-[4%] lg:gap-x-0 lg:justify-between">
          {data.map((item) => (
            <div
              key={item.title}
              className="flex flex-col w-full gap-2 p-5 bg-gray-100 border border-gray-200 rounded-xl sm:w-[48%] lg:w-[23%]"
            >
              <img src={item.img} className="object-contain w-auto h-20 mr-auto" />
              <div className="font-semibold">{item.title}</div>
              <div className="text-gray-500">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
