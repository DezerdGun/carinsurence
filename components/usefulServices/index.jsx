import Link from "next/link";

const UsefulServices = () => {
  return (
    <section className="max-w-6xl px-5 py-10 mx-auto">
      <div className="p-5 bg-white border border-gray-200 rounded-2xl">
        <h2 className="mb-5 text-2xl font-bold text-center md:text-3xl md:mb-8">Полезные сервисы</h2>

        <div className="flex flex-col gap-5 md:flex-row">
          <Link
            href="#"
            className="flex flex-col justify-between gap-3 p-4 bg-gray-100 border border-gray-200 rounded-xl md:w-1/2"
          >
            <div>
              <div className="mb-2 font-semibold">Продлить полис</div>
              <div className="text-gray-500">Сервис быстрого продления полисов, срок которых подходит к концу</div>
            </div>
            <div className="flex items-end justify-between">
              <a className="text-blue-500">Продлить</a>
              <img src="/home-services-1.svg" />
            </div>
          </Link>
          <div className="flex flex-col gap-5 md:w-1/2 lg:flex-row lg:flex-wrap lg:gap-x-[4%]">
            <Link
              href="#"
              className="flex items-center justify-between p-4 bg-gray-100 border border-gray-200 rounded-xl lg:w-[48%]"
            >
              <div className="font-semibold">Оплатить полис</div>
              <img src="/home-services-2.svg" />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-between p-4 bg-gray-100 border border-gray-200 rounded-xl lg:w-[48%]"
            >
              <div className="font-semibold">Проверить полис</div>
              <img src="/home-services-3.svg" />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-between p-4 bg-gray-100 border border-gray-200 rounded-xl lg:w-full"
            >
              <div className="font-semibold">Активировать полис</div>
              <img src="/home-services-4.svg" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsefulServices;
