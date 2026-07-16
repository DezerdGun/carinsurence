import Link from "next/link";
import { useLang } from "../i18n/LangContext";
import { CheckCircleIcon, ArrowRightIcon } from "../icons";

// Универсальный герой внутренних страниц (ОСАГО/КАСКО) в фирменном стиле.
// img — путь к SVG-иллюстрации справа; icon — запасной вариант.
const Banner = ({ title, description, link, linkTitle, img, icon: Icon, points = [] }) => {
  const { t } = useLang();
  return (
    <section className="container-c pt-10 pb-4">
      <div className="relative overflow-hidden bg-hero-gradient rounded-3xl px-7 py-12 sm:px-12 sm:py-16 shadow-lift">
        <div className="absolute top-[-30%] right-[-5%] w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative grid items-center gap-8 lg:grid-cols-2">
          <div className="text-white animate-fade-up">
            <h1 className="text-4xl font-extrabold font-display sm:text-5xl leading-[1.08]">{title}</h1>
            <p className="mt-4 text-lg text-white/85 max-w-md">{description}</p>

            {points.length > 0 && (
              <ul className="grid gap-2.5 mt-6 sm:grid-cols-2 max-w-md">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-white/90">
                    <CheckCircleIcon className="w-5 h-5 text-white shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap items-center gap-3 mt-8">
              <Link href={link} className="btn-white shine">
                {linkTitle}
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link href={link} className="btn px-6 py-3 text-white border border-white/40 hover:bg-white/10">
                {t.common.extend}
              </Link>
            </div>
          </div>

          {/* Иллюстрация */}
          {img ? (
            <div className="relative hidden lg:flex justify-end">
              <img src={img} alt="" className="w-full max-w-md drop-shadow-xl animate-float-slow" />
            </div>
          ) : Icon ? (
            <div className="relative hidden lg:grid place-items-center">
              <div className="grid rounded-full w-60 h-60 place-items-center bg-white/10 border border-white/20 backdrop-blur-sm animate-float">
                <Icon className="text-white w-28 h-28" />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Banner;
