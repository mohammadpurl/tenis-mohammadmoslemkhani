"use client";
import { WHATSAPP_URL } from "@/lib";
import { Translation } from "@/lib/i18n";
import Link from "next/link";
import WhatsAppIcon from "../Icons/WhatsAppIcon";

type ReadyBarProps = {
  t: Translation;
};

const ReadyBar = ({ t }: ReadyBarProps) => {
  return (
    <section id="contact" className="py-24 md:py-36 px-5 md:px-10 border-t border-border relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-35"
        style={{ background: "radial-gradient(circle at 50% 50%, var(--neon) 0%, transparent 58%)" }}
      />
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="font-display font-extrabold text-5xl md:text-7xl tracking-tight text-foreground">
          {t.ready.title}
        </h2>
        <p className="mt-5 text-foreground/75 text-lg">{t.ready.sub}</p>
        <Link
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-9 inline-flex items-center gap-3 px-9 py-4 bg-neon text-primary-foreground font-semibold rounded-md border border-black/20 hover:brightness-105 transition shadow-[var(--shadow-neon)] text-lg"
        >
          <WhatsAppIcon className="w-5 h-5 shrink-0" />
          {t.ready.btn}
        </Link>
      </div>
    </section>
  );
};

export default ReadyBar;

