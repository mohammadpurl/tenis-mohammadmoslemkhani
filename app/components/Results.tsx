"use client";
import { Translation } from "@/lib/i18n";
import { motion } from "framer-motion";
import Image from "next/image";

type ResultsProps = {
  t: Translation;
};

const Results = ({ t }: ResultsProps) => {
  const isRtl = t.dir === "rtl";
  const cards = (t as any).resultsCards as { title: string; stat: string; desc: string }[] | undefined;
  const items = cards?.length
    ? cards
    : [
        { title: "Weight Loss", stat: "-11 KG", desc: "Improved body composition and better performance." },
        { title: "Performance Boost", stat: "+37%", desc: "Increase in speed, endurance, and match performance." },
        { title: "Mobility Improvement", stat: "+60%", desc: "Better movement, flexibility, and injury prevention." },
      ];

  return (
    <section id="results" className="py-24 md:py-36 px-5 md:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12 text-center mx-auto">
          <span className="section-kicker">{t.results.tag}</span>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-6xl tracking-tight leading-[0.95]">{t.results.title}</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          <div className={`lg:col-span-6 flex flex-col gap-4 ${isRtl ? "lg:order-2" : "lg:order-1"}`}>
            {items.slice(0, 3).map((card, i) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, x: isRtl ? 16 : -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card/40 px-5 md:px-7 py-5 md:py-6"
              >
                <div className={`flex items-center justify-between gap-4 ${isRtl ? "text-right" : "text-left"}`}>
                  <div className="text-sm md:text-base text-foreground/75 leading-7">{card.desc}</div>
                  <div className="shrink-0 font-display text-4xl md:text-5xl font-bold text-gradient-gold leading-none">{card.stat}</div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.figure
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className={`lg:col-span-6 relative min-h-[360px] md:min-h-[430px] overflow-hidden rounded-2xl border border-border bg-card/35 ${isRtl ? "lg:order-1" : "lg:order-2"}`}
          >
            <Image src="/Images/action-shot.jpg" alt="Coach in live tennis training session" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-center">
              <p className="mono text-xs tracking-[0.16em] uppercase text-foreground/70">Live training</p>
              <p className="mt-2 font-display text-2xl md:text-4xl font-bold text-foreground">Match-ready intensity, every session</p>
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
};

export default Results