import { INSTAGRAM_URL, WHATSAPP_URL } from '@/lib';
import { Translation } from '@/lib/i18n';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import ContactForm from './ContactForm';
import InstagramIcon from '../Icons/InstagramIcon';
import WhatsAppIcon from '../Icons/WhatsAppIcon';

type FinalCTAProps = {
  t: Translation;
};

const FinalCTA = ({ t }: FinalCTAProps) => {
    return (
        <section id="contact" className="py-24 md:py-36 px-5 md:px-10 border-t border-border relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 50% 50%, var(--neon) 0%, transparent 60%)" }} />
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-7xl tracking-tight leading-[0.95]">
                {t.cta.title}
              </h2>
              <p className="mt-6 text-foreground/65 text-lg max-w-md">{t.cta.sub}</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 btn-lux btn-lux-primary"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  {t.cta.btn}
                </Link>
                <Link
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 btn-lux btn-lux-ghost"
                >
                  <InstagramIcon className="w-6 h-6 text-pink-500" />
                  {t.cta.instagram}
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-2 text-sm mono uppercase tracking-wider text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-neon" /> Dubai
              </div>
            </div>
            <div className="border border-border rounded-lg bg-card/60 backdrop-blur p-6 md:p-8">
              <p className="mono text-xs uppercase tracking-widest text-neon mb-4">{t.cta.formLabel}</p>
              <ContactForm t={t} />
            </div>
          </div>
        </section>
      );
}

export default FinalCTA