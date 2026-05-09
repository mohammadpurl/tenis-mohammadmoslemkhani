"use client";
import { WHATSAPP_URL } from '@/lib';
import { Translation } from '@/lib/i18n';
import { coachHero } from '@/public/assets';
import { ArrowUpRight, BadgeCheck, MapPin, Timer } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppIcon from '../Icons/WhatsAppIcon';

type HeroProps = {
  t: Translation;
};

const Hero = ({ t }: HeroProps) => {
    return (
        <section id="top" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-25" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

          <div className="relative max-w-7xl mx-auto px-5 md:px-10 pt-12 md:pt-20 pb-14 md:pb-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid md:grid-cols-12 gap-10 items-center">
                <div className="md:col-span-6 lg:col-span-6 text-start">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-10 h-px bg-neon shrink-0" aria-hidden />
                    <span className="section-kicker">{t.hero.eyebrow}</span>
                  </div>

                  <h1 className="font-display font-bold leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] max-w-xl">
                    {t.hero.title1}
                    <br />
                    <span className="text-gradient-neon">{t.hero.title2}</span>
                  </h1>

                  <p className="mt-6 text-base md:text-lg text-foreground/80 max-w-xl leading-relaxed">
                    {t.hero.subtitle}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-7 py-4 bg-neon text-primary-foreground font-semibold hover:opacity-95 transition shadow-[var(--shadow-neon)]"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      {t.hero.cta1}
                    </Link>
                    <Link
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-7 py-4 border border-border bg-background/40 hover:border-neon hover:text-neon transition"
                    >
                      {t.hero.cta2}
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="mt-10 grid grid-cols-3 gap-3 max-w-xl">
                    <div className="border border-border bg-background/40 p-4">
                      <p className="mono text-[10px] uppercase tracking-widest text-muted-foreground">Sessions</p>
                      <p className="mt-2 flex items-center gap-2 text-sm font-semibold"><BadgeCheck className="w-4 h-4 text-neon" /> 500+</p>
                    </div>
                    <div className="border border-border bg-background/40 p-4">
                      <p className="mono text-[10px] uppercase tracking-widest text-muted-foreground">Based</p>
                      <p className="mt-2 flex items-center gap-2 text-sm font-semibold"><MapPin className="w-4 h-4 text-neon" /> Dubai</p>
                    </div>
                    <div className="border border-border bg-background/40 p-4">
                      <p className="mono text-[10px] uppercase tracking-widest text-muted-foreground">Focus</p>
                      <p className="mt-2 flex items-center gap-2 text-sm font-semibold"><Timer className="w-4 h-4 text-neon" /> Performance</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-6 lg:col-span-6">
                  <div className="relative aspect-[4/5] md:aspect-[5/6] border border-border bg-card/40 overflow-hidden">
                    <Image
                      src={coachHero}
                      alt="Coach hero"
                      fill
                      priority
                      sizes="(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 90vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute -bottom-10 -right-10 w-56 h-56 border border-neon/20 pointer-events-none" />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {t.hero.badges.slice(0, 3).map((b) => (
                      <span key={b} className="mono text-[14px] uppercase tracking-wider px-3 py-1.5 border border-border bg-background/35  font-bold text-gradient-gold">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      );
}

export default Hero