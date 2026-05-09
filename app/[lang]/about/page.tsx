import About from "@/app/components/About";
import { getTranslations } from "@/lib/i18n";

type AboutPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params;
  return <About t={getTranslations(lang)} />;
}

export default AboutPage;