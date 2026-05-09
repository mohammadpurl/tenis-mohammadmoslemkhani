import { Lang, Translation } from "@/lib/i18n";
import { getArticlesByLang } from "@/lib/articles";
import { Activity, Flame, HeartPulse, Timer } from "lucide-react";
import Link from "next/link";

type ArticlesSectionProps = {
  lang: Lang;
  t: Translation;
};

const ArticlesSection = ({ lang, t }: ArticlesSectionProps) => {
  const isRtl = t.dir === "rtl";
  const items = getArticlesByLang(lang).slice(0, 4);
  const cardIcons = [Timer, Activity, HeartPulse, Flame] as const;

  return (
    <section id="articles" className="py-24 md:py-32 px-5 md:px-10 border-t border-border bg-card/25 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-12 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className={`max-w-3xl ${isRtl ? "text-right" : "text-left"}`}>
            <span className="section-kicker">{t.articles.tag}</span>
            <h2 className="mt-4 font-display font-bold text-4xl md:text-6xl tracking-tight leading-[0.95]">{t.articles.title}</h2>
            <p className="mt-4 text-foreground/80 text-base md:text-lg">{t.articles.sub}</p>
          </div>
          <div>
            <Link
              href={`/${lang}/articles`}
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/50 px-5 py-2.5 text-sm text-foreground/90 hover:border-neon hover:text-neon transition"
            >
              {t.articles.browseAll}
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((article, index) => {
            const Icon = cardIcons[index % cardIcons.length];
            return (
            <article
              key={article.slug}
              className={`group rounded-2xl border border-border/80 bg-background/80 p-5 md:p-6 flex min-h-[285px] flex-col backdrop-blur-[2px] hover:border-neon/45 transition ${isRtl ? "text-right" : "text-left"}`}
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="mono text-xs uppercase tracking-[0.14em] text-foreground/55">{article.readingMinutes} min read</span>
                <span className="h-7 w-7 rounded-md border border-border/80 text-neon/90 inline-flex items-center justify-center">
                  <Icon className="h-3.5 w-3.5" />
                </span>
              </div>

              <h3 className="font-display text-[1.65rem] md:text-[1.8rem] font-semibold leading-[1.2] text-foreground">
                {article.localized.title}
              </h3>
              <p className="mt-4 text-foreground/75 text-sm leading-7 flex-1">{article.localized.excerpt}</p>

              <div className="mt-5 border-t border-border/70 pt-4">
                <Link href={`/${lang}/articles/${article.slug}`} className="text-neon/90 text-sm font-medium hover:underline">
                  {t.articles.read}
                </Link>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
