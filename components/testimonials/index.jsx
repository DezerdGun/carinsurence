import { useLang } from "../i18n/LangContext";
import Reveal from "../ui/Reveal";
import { StarIcon } from "../icons";

const avatarColors = ["bg-brand-100 text-brand-700", "bg-accent-soft text-accent", "bg-gold-soft text-gold"];

const initials = (name) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const Testimonials = () => {
  const { t } = useLang();
  return (
    <section id="reviews" className="py-16 bg-surface lg:py-20">
      <div className="container-c">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="eyebrow">{t.testimonials.eyebrow}</span>
          <h2 className="mt-3 text-3xl font-extrabold font-display sm:text-4xl text-ink">{t.testimonials.title}</h2>
          <div className="inline-flex items-center gap-2 mt-4">
            <div className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="w-5 h-5" />
              ))}
            </div>
            <span className="font-bold text-ink">4.9</span>
            <span className="text-ink-muted">{t.testimonials.ratingNote}</span>
          </div>
        </Reveal>

        <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {t.testimonials.reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 120}>
              <figure className="flex flex-col h-full p-6 bg-white card-c">
                <div className="flex text-gold">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <StarIcon key={j} className="w-4 h-4" />
                  ))}
                </div>
                <blockquote className="flex-1 mt-4 text-sm leading-relaxed text-ink">«{r.text}»</blockquote>
                <figcaption className="flex items-center gap-3 pt-5 mt-5 border-t border-line">
                  <span className={`grid w-10 h-10 rounded-full place-items-center text-sm font-bold ${avatarColors[i % 3]}`}>
                    {initials(r.name)}
                  </span>
                  <span className="text-sm font-semibold text-ink">{r.name}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
