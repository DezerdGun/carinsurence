import { Banner, AdvantagesIngos } from "@/components";
import { LINKS } from "@/consts";

const Kasko = () => {
  const data = [
    {
      title: "Осмотр авто в приложении",
      description: "Не придется ехать в офис — осмотр автомобиля можно провести самостоятельно в приложении IngoMobile",
      img: "/kasko-adv-osmotr.svg",
    },
    {
      title: "Оплата по частям",
      description: "Необязательно сразу оплачивать всю стоимость полиса. Платеж можно разбить на 3 или 12 месяцев",
      img: "/kasko-adv-monthly.svg",
    },
    {
      title: "Направление на ремонт за 1 час",
      description: "Заявите о происшествии в мобильном приложении и получите направление на ремонт за 1 рабочий час",
      img: "/kasko-adv-repair.svg",
    },
  ];

  return (
    <main>
      <Banner
        title="Полис Каско"
        description="Узнайте стоимость, оформите полис без визита в офис и получите кешбэк при оплате картой Ингосстрах Бонус"
        link={LINKS.KASKO_CALC}
        linkTitle="Рассчитать"
        img="/kasko-key-visual.svg"
      />
      <AdvantagesIngos title="Преимущества полиса Каско в «Ингосстрахе»" data={data} />
    </main>
  );
};

export default Kasko;
