import Reveal from "../ui/Reveal";
import { CheckCircleIcon } from "../icons";

// Блок преимуществ для внутренних страниц.
// Иллюстрация передаётся как item.img (SVG), либо item.icon как запасной вариант.
const AdvantagesIngos = ({ title, data }) => {
  return (
    <section className="container-c py-14">
      <Reveal className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold font-display sm:text-4xl text-ink">{title}</h2>
      </Reveal>

      <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item, i) => {
          const Icon = item.icon || CheckCircleIcon;
          return (
            <Reveal key={item.title} delay={i * 110}>
              <div className="h-full p-6 transition-all duration-300 bg-white card-c hover:-translate-y-1.5 hover:shadow-card">
                <div className="grid w-20 h-20 place-items-center rounded-2xl bg-brand-50">
                  {item.img ? (
                    <img src={item.img} alt="" className="object-contain w-14 h-14" />
                  ) : (
                    <Icon className="text-brand w-9 h-9" />
                  )}
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink font-display">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default AdvantagesIngos;
