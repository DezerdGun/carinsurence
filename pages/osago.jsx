import { Banner, CalculatorOsago, AdvantagesIngos } from "@/components";

const Osago = () => {
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
    <main>
      <Banner
        title="Полис ОСАГО онлайн"
        description=" Узнайте стоимость за несколько минут, оформите полис через интернет без осмотра авто. Получите кешбэк при оплате картой Ингосстрах Бонус"
        linkTitle="Рассчитать ОСАГО"
        img="/auto-osago__hero-banner-new-3.svg"
      />
      <AdvantagesIngos title="Преимущества полиса ОСАГО в «Ингосстрахе»" data={data} />
      <CalculatorOsago />
    </main>
  );
};

export default Osago;
