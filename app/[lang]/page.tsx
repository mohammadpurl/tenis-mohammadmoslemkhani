import Hero from "../components/Hero";
import About from "../components/About";
import Science from "../components/ui/Science";
import Results from "../components/Results";
import Reviews from "../components/Reviews";
import Social from "../components/Social";
import FinalCTA from "../components/FinalCTA";
import Services from "../components/Services";
import ArticlesSection from "../components/ArticlesSection";
import ReadyBar from "../components/ReadyBar";
import CertificationsSection from "../components/CertificationsSection";
import { getLangOrDefault, getTranslations } from "@/lib/i18n";

type HomePageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { lang: rawLang } = await params;
  const lang = getLangOrDefault(rawLang);
  const t = getTranslations(lang);

  return (
    <div className="bg-background text-foreground antialiased overflow-x-hidden">
      <Hero t={t} />
      <Services t={t} />
      <Results t={t} />
      {/* <CertificationsSection t={t} /> */}
      <About t={t} />
      <ReadyBar t={t} />
      <Science t={t} />
      <Reviews t={t} />
      <Social t={t} />
      <ArticlesSection lang={lang} t={t} />
      <FinalCTA t={t} />
    </div>
  );
}