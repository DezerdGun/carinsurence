import Head from "next/head";
import Link from "next/link";
import { BRAND, LINKS } from "@/consts";
import { useLang } from "@/components/i18n/LangContext";
import { Reveal } from "@/components";
import { NewsIcon, ArrowRightIcon } from "@/components/icons";

const gradients = [
  "from-brand-400 to-brand-600",
  "from-accent to-brand-500",
  "from-brand-500 to-brand-800",
];

const Blog = () => {
  const { t } = useLang();
  const b = t.blog;

  return (
    <>
      <Head>
        <title>{`${b.title} — ${BRAND.name}`}</title>
      </Head>

      <section className="container-c pt-10 pb-4">
        <div className="relative overflow-hidden text-center bg-hero-gradient rounded-3xl px-7 py-14 shadow-lift">
          <div className="absolute top-[-30%] right-[-5%] w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <span className="chip bg-white/15 text-white border border-white/20">{b.eyebrow}</span>
            <h1 className="mt-5 text-4xl font-extrabold text-white font-display sm:text-5xl">{b.title}</h1>
            <p className="max-w-xl mx-auto mt-4 text-lg text-white/85">{b.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="container-c py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {b.posts.map((post, i) => (
            <Reveal key={post.title} delay={(i % 3) * 120}>
              <Link href="#" className="flex flex-col h-full overflow-hidden transition-all duration-300 group card-c hover:-translate-y-1.5 hover:shadow-card">
                <div className={`relative grid h-44 place-items-center bg-gradient-to-br ${gradients[i % 3]}`}>
                  <NewsIcon className="w-12 h-12 text-white/70" />
                  <span className="absolute top-3 left-3 chip bg-white/20 text-white backdrop-blur-sm text-[11px]">{post.tag}</span>
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <div className="text-xs text-ink-faint">{post.date}</div>
                  <h3 className="mt-2 font-bold leading-snug text-ink group-hover:text-brand transition-colors">{post.title}</h3>
                  <p className="flex-1 mt-2 text-sm text-ink-muted">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-brand">
                    {b.readMore}
                    <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link href={LINKS.HOME} className="btn-ghost">← {t.nav.home}</Link>
        </div>
      </section>
    </>
  );
};

export default Blog;
