"use client";
import { MapPin, Star } from 'lucide-react';
import { Translation } from '@/lib/i18n';
import { motion } from 'framer-motion';
import React from 'react'

type ReviewsProps = {
  t: Translation;
};

const Reviews = ({ t }: ReviewsProps) => {
  return (
    <section className="py-24 md:py-36 px-5 md:px-10 border-t border-border bg-card/25">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-2xl mx-auto text-center">
          <span className="section-kicker">{t.reviews.tag}</span>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-6xl tracking-tight leading-[0.95]">{t.reviews.title}</h2>
        </div>

        <div className="mb-8 flex items-center justify-center gap-3 text-sm text-foreground/85">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-white text-[#4285F4] font-bold">G</span>
          <span className="inline-flex items-center gap-1 text-[#FBBC05]">
            <Star className="w-4 h-4 fill-current stroke-none" />
            <Star className="w-4 h-4 fill-current stroke-none" />
            <Star className="w-4 h-4 fill-current stroke-none" />
            <Star className="w-4 h-4 fill-current stroke-none" />
            <Star className="w-4 h-4 fill-current stroke-none" />
          </span>
          <span className="font-medium">5.0 (87 Reviews)</span>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {t.reviews.items.map((r, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-border rounded-lg p-6 bg-background/70 hover:border-neon/60 transition relative"
            >
              <div className="text-neon mono text-xs mb-4 tracking-wider">★★★★★</div>
              <blockquote className="text-foreground/85 leading-7 text-[15px] min-h-28">"{r.q}"</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                <div>
                  <div className="font-semibold text-sm">{r.n}</div>
                  <div className="text-[11px] text-muted-foreground mt-1 uppercase tracking-[0.14em] flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {r.r}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews