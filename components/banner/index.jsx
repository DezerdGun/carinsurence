import Link from "next/link";

const Banner = () => {
  return (
    <section className="max-w-6xl py-10 mx-auto">
      <div className="relative px-8 py-10 flex items-end overflow-hidden bg-white border-gray-200 rounded-2xl min-h-[380px]">
        <div className="relative z-10 w-[40%]">
          <h1 className="mb-3 text-4xl font-bold">Полис ОСАГО онлайн</h1>
          <p className="mb-10 font-medium">
            Узнайте стоимость за несколько минут, оформите полис через интернет без осмотра авто. Получите кешбэк при
            оплате картой Ингосстрах Бонус
          </p>
          <div className="flex items-center gap-3">
            <Link href="#" className="px-5 py-3 font-medium text-white bg-blue-500 border border-blue-500 rounded-xl">
              Рассчитать ОСАГО
            </Link>
            <Link href="#" className="px-5 py-3 font-medium text-blue-500 border border-blue-500 rounded-xl">
              Продлить
            </Link>
          </div>
        </div>
        <img src="/auto-osago__hero-banner-new-3.svg" className="absolute z-0 -bottom-5 -right-[20%]" />
      </div>
    </section>
  );
};

export default Banner;
