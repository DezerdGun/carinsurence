import Link from "next/link";
import { LINKS } from "@/consts";
import { useLang } from "../i18n/LangContext";
import Reveal from "../ui/Reveal";
import { NewsIcon, ArrowRightIcon } from "../icons";

const gradients = [
  "from-brand-400 to-brand-600",
  "from-accent to-brand-500",
  "from-brand-500 to-brand-800",
];

const BlogCard = ({ post, i }) => (
  <Link href={LINKS.BLOG} className="flex flex-col h-full overflow-hidden transition-all duration-300 group card-c hover:-translate-y-1.5 hover:shadow-card">
    <div className={`relative grid h-40 place-items-center bg-gradient-to-br ${gradients[i % 3]}`}>
      <NewsIcon className="w-12 h-12 text-white/70" />
      <span className="absolute top-3 left-3 chip bg-white/20 text-white backdrop-blur-sm text-[11px]">{post.tag}</span>
    </div>
    <div className="flex flex-col flex-1 p-5">
      <div className="text-xs text-ink-faint">{post.date}</div>
      <h3 className="mt-2 font-bold leading-snug text-ink group-hover:text-brand transition-colors">{post.title}</h3>
      <p className="flex-1 mt-2 text-sm text-ink-muted line-clamp-2">{post.excerpt}</p>
    </div>
  </Link>
);

const Blog = () => {
  const { t } = useLang();
  const b = t.blog;
  return (
    <section id="blog" className="py-16 bg-surface lg:py-20">
      <div className="container-c">
        <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">{b.eyebrow}</span>
            <h2 className="mt-3 text-3xl font-extrabold font-display sm:text-4xl text-ink">{b.title}</h2>
            <p className="mt-3 text-ink-muted">{b.subtitle}</p>
          </div>
          <Link href={LINKS.BLOG} className="btn-ghost shrink-0">
            {b.all}
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </Reveal>

        <div className="grid gap-6 mt-12 md:grid-cols-3">
          {b.posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 120}>
              <BlogCard post={post} i={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
