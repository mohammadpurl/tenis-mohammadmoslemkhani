import type { Metadata } from "next";
import { getLangOrDefault, getTranslations } from "@/lib/i18n";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Mohammad Moslemkhani",
  description: "Tennis and performance conditioning specialist",
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/svg+xml", sizes: "any" }],
    shortcut: "/favicon.ico",
    apple: [{ url: "/favicon.ico", type: "image/svg+xml" }],
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang: rawLang } = await params;
  const lang = getLangOrDefault(rawLang);
  const t = getTranslations(lang);

  return (
    <div lang={lang} dir={t.dir} className="min-h-screen flex flex-col">
      <Navbar lang={lang} t={t} />
      <main className="flex-1 pt-[calc(5.75rem+env(safe-area-inset-top,0px))] md:pt-[calc(4.5rem+env(safe-area-inset-top,0px))]">
        {children}
      </main>
      <Footer lang={lang} t={t} />
      <FloatingWhatsApp t={t} />
    </div>
  );
}
