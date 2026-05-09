import { WHATSAPP_URL } from '@/lib';
import { Translation } from '@/lib/i18n';

import Link from 'next/link';
import React from 'react'
import WhatsAppIcon from '../Icons/WhatsAppIcon';

type MidCTAProps = {
  t: Translation;
};

const MidCTA = ({ t }: MidCTAProps) => {
    return (
        <section className="px-5 md:px-10 py-12 border-t border-border bg-card/30">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 border border-border rounded-lg bg-background/35 px-6 py-5">
            <div>
              <p className="mono text-xs uppercase tracking-widest text-neon mb-2">Direct line</p>
              <p className="text-2xl md:text-3xl font-display font-semibold">{t.cta.title}</p>
            </div>
            <Link href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 btn-lux btn-lux-primary whitespace-nowrap">
              <WhatsAppIcon className="w-4 h-4" />
              {t.cta.btn}
            </Link>
          </div>
        </section>
      );
}

export default MidCTA