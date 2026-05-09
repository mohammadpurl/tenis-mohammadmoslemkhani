'use client'
import { WHATSAPP_URL } from '@/lib';
import { Translation } from '@/lib/i18n';
import React, { useState } from 'react'
import WhatsAppIcon from '../Icons/WhatsAppIcon';

type ContactFormProps = {
  t: Translation;
};

const ContactForm = ({ t }: ContactFormProps) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [msg, setMsg] = useState("");
    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = encodeURIComponent(`Hi Mohammad,\nName: ${name}\nPhone: ${phone}\n${msg}`);
        window.open(`${WHATSAPP_URL.split("?")[0]}?text=${text}`, "_blank");
    };
    return (
        <form onSubmit={submit} className="space-y-3">
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-[var(--neon)] focus:outline-none transition"
          />
          <input
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="WhatsApp number"
            className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-[var(--neon)] focus:outline-none transition"
          />
          <textarea
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Goals (optional)"
            rows={3}
            className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-[var(--neon)] focus:outline-none transition resize-none"
          />
          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[var(--neon)] text-primary-foreground font-semibold hover:opacity-90 transition">
            <WhatsAppIcon className="w-4 h-4" />
            {t.cta.btn}
          </button>
        </form>
      );
}

export default ContactForm