"use client";
import { WHATSAPP_URL } from "@/lib";
import type { Lang, Translation } from "@/lib/i18n";
import { locales } from "@/lib/i18n";
import { coachPortrait } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
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

const navLinkClass = (lang: Lang) =>
  lang === "en"
    ? "text-[13px] md:text-sm font-semibold uppercase tracking-[0.08em] text-foreground/90 hover:text-foreground transition"
    : "text-[14px] md:text-[15px] font-semibold text-foreground/92 hover:text-foreground transition";

const mobileNavLinkClass = (lang: Lang) =>
  lang === "en"
    ? "py-3.5 px-1 text-sm font-semibold uppercase tracking-[0.08em] text-foreground/95 border-b border-border hover:text-neon transition"
    : "py-3.5 px-1 text-[15px] font-semibold text-foreground/95 border-b border-border hover:text-neon transition";

const Navbar = ({ lang, t }: NavbarProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(72);

  const switchLanguage = (nextLang: Lang) => {
    if (!pathname) return;
    const segments = pathname.split("/");
    segments[1] = nextLang;
    router.push(segments.join("/") || `/${nextLang}`);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const sync = () => setHeaderHeight(el.getBoundingClientRect().height);
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = (
    <>
      <Link href={`/${lang}`} className={mobileNavLinkClass(lang)} onClick={closeMenu}>
        {t.nav.home}
      </Link>
      <Link href={`/${lang}#about`} className={mobileNavLinkClass(lang)} onClick={closeMenu}>
        {t.nav.about}
      </Link>
      <Link href={`/${lang}#services`} className={mobileNavLinkClass(lang)} onClick={closeMenu}>
        {t.nav.training}
      </Link>
      <Link href={`/${lang}#results`} className={mobileNavLinkClass(lang)} onClick={closeMenu}>
        {t.nav.results}
      </Link>
      <Link href={`/${lang}/articles`} className={mobileNavLinkClass(lang)} onClick={closeMenu}>
        {t.nav.articles}
      </Link>
      <Link href={`/${lang}#contact`} className={mobileNavLinkClass(lang)} onClick={closeMenu}>
        {t.nav.contact}
      </Link>
    </>
  );

  return (
    <header ref={headerRef} className="fixed top-0 inset-x-0 z-40 glass pt-[env(safe-area-inset-top,0px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-10 min-h-[72px] flex items-center justify-between gap-2 md:gap-4 py-2 md:py-0">
        <Link href={`/${lang}`} className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 md:flex-initial">
          <Image
            src={coachPortrait}
            alt="Coach portrait"
            width={42}
            height={42}
            className="rounded-full border border-border object-cover shrink-0 w-9 h-9 sm:w-[42px] sm:h-[42px]"
          />
          <div className="min-w-0">
            <p className="font-display font-bold tracking-tight text-sm sm:text-[15px] leading-tight truncate">
              Mohammad Moslemkhani
            </p>
            <p className="text-xs text-foreground/80 leading-snug mt-0.5 line-clamp-2 sm:line-clamp-2 max-w-[55vw] sm:max-w-none">
              {t.header.subLabel}
            </p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link href={`/${lang}`} className={navLinkClass(lang)}>
            {t.nav.home}
          </Link>
          <Link href={`/${lang}#about`} className={navLinkClass(lang)}>
            {t.nav.about}
          </Link>
          <Link href={`/${lang}#services`} className={navLinkClass(lang)}>
            {t.nav.training}
          </Link>
          <Link href={`/${lang}#results`} className={navLinkClass(lang)}>
            {t.nav.results}
          </Link>
          <Link href={`/${lang}/articles`} className={navLinkClass(lang)}>
            {t.nav.articles}
          </Link>
          <Link href={`/${lang}#contact`} className={navLinkClass(lang)}>
            {t.nav.contact}
          </Link>
        </nav>
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button
            type="button"
            className="md:hidden p-2 rounded-md border border-border text-foreground hover:border-neon/50 hover:text-neon transition"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="w-5 h-5" strokeWidth={2} /> : <Menu className="w-5 h-5" strokeWidth={2} />}
            <span className="sr-only">{menuOpen ? t.header.closeMenu : t.header.openMenu}</span>
          </button>
          <div className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-[13px] font-semibold">
            {locales.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => switchLanguage(code)}
                className={`min-w-[2.25rem] sm:min-w-[2.5rem] px-2 sm:px-3 py-1.5 sm:py-2 rounded-md border transition ${
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
            className="hidden sm:inline-flex items-center gap-2 btn-lux btn-lux-primary whitespace-nowrap"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden lg:inline">{t.header.whatsapp}</span>
            <span className="lg:hidden sr-only">{t.header.whatsapp}</span>
          </Link>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-nav-panel"
          className="md:hidden fixed inset-x-0 bottom-0 z-[100] flex flex-col bg-background/97 backdrop-blur-lg border-t border-border"
          style={{ top: headerHeight }}
        >
          <nav className="flex flex-col px-4 sm:px-5 py-4 overflow-y-auto overscroll-contain" aria-label="Mobile">
            {navLinks}
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 btn-lux btn-lux-primary"
              onClick={closeMenu}
            >
              <WhatsAppIcon className="w-4 h-4" />
              {t.header.whatsapp}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
