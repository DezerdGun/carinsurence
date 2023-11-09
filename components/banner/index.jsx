import Link from "next/link";

const Banner = ({ title, description, img, link, linkTitle }) => {
  return (
    <section className="max-w-6xl py-10 mx-auto">
      <div className="relative px-8 py-10 flex items-end overflow-hidden bg-white border-gray-200 rounded-2xl min-h-[380px]">
        <div className="relative z-10 w-[40%]">
          <h1 className="mb-3 text-4xl font-bold">{title}</h1>
          <p className="mb-10 font-medium">{description}</p>
          <div className="flex items-center gap-3">
            <Link
              href={link}
              className="px-5 py-3 font-medium text-white bg-blue-500 border border-blue-500 rounded-xl"
            >
              {linkTitle}
            </Link>
            <Link href={link} className="px-5 py-3 font-medium text-blue-500 border border-blue-500 rounded-xl">
              Продлить
            </Link>
          </div>
        </div>
        <img src={img} className="absolute z-0 -bottom-5 -right-[20%]" />
      </div>
    </section>
  );
};

export default Banner;
