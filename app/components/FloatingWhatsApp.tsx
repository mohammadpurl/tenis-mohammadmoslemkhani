import React from 'react'
import WhatsAppIcon from '../Icons/WhatsAppIcon';
import { WHATSAPP_URL } from '@/lib';
import { Translation } from '@/lib/i18n';
import Link from 'next/link';

type FloatingWhatsAppProps = {
  t: Translation;
};

const FloatingWhatsApp = ({ t }: FloatingWhatsAppProps) => {
    return (
        <Link
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label={t.whatsapp}
          className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition"
        >
          <WhatsAppIcon className="w-7 h-7" />
          <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-20" />
        </Link>
      );
}

export default FloatingWhatsApp