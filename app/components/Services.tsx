"use client";
import { SERVICE_ICONS, WHATSAPP_URL } from '@/lib';
import { defaultLang, getTranslations, Translation } from '@/lib/i18n';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'

type ServicesProps = {
  t?: Translation;
};

const Services = ({ t }: ServicesProps) => {
    const copy = t ?? getTranslations(defaultLang);
    const items = copy.services.items.slice(0, 4);
    return (
        <section id="services" className="py-24 md:py-36 px-5 md:px-10 border-t border-border relative">
          <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto">
            <div className="max-w-2xl mb-12 text-center mx-auto">
              <span className="section-kicker">{copy.services.tag}</span>
              <h2 className="mt-4 font-display font-bold text-4xl md:text-6xl tracking-tight leading-[0.95]">
                {copy.services.title}
              </h2>
              <p className="mt-4 text-foreground/80">{copy.services.sub}</p>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {items.map((s, i) => {
                const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
                return (
                  <motion.div
                    key={s.t}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="border border-border bg-background/70 p-7 hover:border-neon/60 transition relative"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <Icon className="w-7 h-7 text-neon" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display font-semibold text-lg md:text-xl mb-2">{s.t}</h3>
                    <p className="text-foreground/80 leading-7 text-sm">{s.d}</p>
                    <div className="mt-5">
                      <Link href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs text-neon mono uppercase tracking-wider hover:underline">
                        Book <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8">
              <Link href="#contact" className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-background/40 hover:border-neon hover:text-neon transition">
                View all programs <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      );
}

export default Services