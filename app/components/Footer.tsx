import { INSTAGRAM_URL, WHATSAPP_URL } from '@/lib';
import { Lang, Translation } from '@/lib/i18n';
import { coachPortrait } from '@/public/assets';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import InstagramIcon from '../Icons/InstagramIcon';
import WhatsAppIcon from '../Icons/WhatsAppIcon';

type FooterProps = {
  lang: Lang;
  t: Translation;
};

const Footer = ({ lang, t }: FooterProps) => {
    return (
        <footer className="border-t border-border bg-card/40 py-12 px-5 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 pb-8 border-b border-border">
              <div className="md:col-span-6">
                <div className="flex items-center gap-3">
                  <Image src={coachPortrait} alt="Coach portrait" width={52} height={52} className="rounded-full object-cover border border-border" />
                  <div>
                    <p className="font-display text-lg font-bold">Mohammad Moslemkhani</p>
                    <p className="text-sm text-neon">{t.footer.tag}</p>
                  </div>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{t.footer.aboutTitle}</h3>
                <p className="mt-3 text-foreground/80 leading-7 max-w-xl">{t.footer.aboutText}</p>
              </div>

              <div className="md:col-span-3">
                <p className="mono text-xs uppercase tracking-widest text-neon">{t.footer.quickLinks}</p>
                <div className="mt-4 space-y-2 text-sm leading-relaxed">
                  <Link href={`/${lang}#about`} className="block hover:text-neon transition">{t.nav.about}</Link>
                  <Link href={`/${lang}#services`} className="block hover:text-neon transition">{t.nav.training}</Link>
                  <Link href={`/${lang}#results`} className="block hover:text-neon transition">{t.nav.results}</Link>
                  <Link href={`/${lang}/articles`} className="block hover:text-neon transition">{t.nav.articles}</Link>
                </div>
              </div>

              <div className="md:col-span-3">
                <p className="mono text-xs uppercase tracking-widest text-neon">{t.footer.contactTitle}</p>
                <div className="mt-4 space-y-3">
                  <Link href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-border bg-background/35 hover:border-neon hover:text-neon transition">
                    <WhatsAppIcon className="w-4 h-4" /> {t.header.whatsapp}
                  </Link>
                  <Link href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-border bg-background/35 hover:border-neon hover:text-neon transition">
                    <InstagramIcon className="w-6 h-6 text-pink-500 shrink-0" /> {t.footer.instagram}: {t.social.handle}
                  </Link>
                  <p className="inline-flex items-center gap-2 text-sm text-foreground/80 px-3 py-2 rounded-md border border-border bg-background/35"><MapPin className="w-4 h-4 text-neon" /> {t.header.location}</p>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground mono">
              <div className="font-display font-bold text-foreground tracking-tight">MOSLEMKHANI<span className="text-neon">.</span></div>
              <div>© {new Date().getFullYear()} · {t.footer.rights}</div>
            </div>
          </div>
        </footer>
      );
}

export default Footer