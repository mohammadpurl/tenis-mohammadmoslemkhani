"use client";
import { WHATSAPP_URL } from "@/lib";
import type { Lang, Translation } from "@/lib/i18n";
import { locales } from "@/lib/i18n";
import { MessageCircle } from "lucide-react";
import { coachPortrait } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import WhatsAppIcon from "../Icons/WhatsAppIcon";

type NavbarProps = {
  lang: Lang;
  t: Translation;
};

const labels: Record<Lang, string> = {
  fa: "فا",
  en: "EN",
  ar: "AR",
};

const Navbar = ({ lang, t }: NavbarProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (nextLang: Lang) => {
    if (!pathname) return;
    const segments = pathname.split("/");
    segments[1] = nextLang;
    router.push(segments.join("/") || `/${nextLang}`);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-40 glass">
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-[72px] flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center gap-3 min-w-0">
          <Image src={coachPortrait} alt="Coach portrait" width={42} height={42} className="rounded-full border border-border object-cover" />
          <div className="min-w-0">
            <p className="font-display font-bold tracking-tight text-[15px] leading-none">Mohammad Moslemkhani</p>
            <p className="text-[11px] text-foreground/80 leading-tight mt-1">{t.header.subLabel}</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-[12px] uppercase tracking-[0.12em] text-foreground/80">
          <Link href={`/${lang}`} className="hover:text-foreground transition">{t.nav.home}</Link>
          <Link href={`/${lang}#about`} className="hover:text-foreground transition">{t.nav.about}</Link>
          <Link href={`/${lang}#services`} className="hover:text-foreground transition">{t.nav.training}</Link>
          <Link href={`/${lang}#results`} className="hover:text-foreground transition">{t.nav.results}</Link>
          <Link href={`/${lang}/articles`} className="hover:text-foreground transition">{t.nav.articles}</Link>
          <Link href={`/${lang}#contact`} className="hover:text-foreground transition">{t.nav.contact}</Link>
        </nav>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs">
            {locales.map((code) => (
              <button
                key={code}
                onClick={() => switchLanguage(code)}
                className={`px-2.5 py-1.5 rounded-md border transition ${
                  lang === code
                    ? "text-neon border-neon bg-background/70 font-semibold"
                    : "text-foreground/75 border-border hover:text-foreground hover:border-neon/50"
                }`}
              >
                {labels[code]}
              </button>
            ))}
          </div>
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 btn-lux btn-lux-primary"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            {t.header.whatsapp}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;