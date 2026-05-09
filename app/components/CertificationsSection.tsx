import { Translation } from "@/lib/i18n";
import { cert1, cert2 } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";

type CertificationsSectionProps = {
  t: Translation;
};

const certs = [cert1, cert2] as const;

const CertificationsSection = ({ t }: CertificationsSectionProps) => {
  return (
    <section className="py-24 md:py-32 px-5 md:px-10 border-t border-border bg-background/90">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-10 text-center mx-auto">
          <span className="section-kicker">{t.certs.tag}</span>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl leading-tight">{t.certs.title}</h2>
          <p className="mt-4 text-foreground/82">{t.certs.sub}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certs.map((src, index) => (
            <article key={index} className="border border-border rounded-lg bg-card/35 p-3 md:p-4">
              <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-md overflow-hidden border border-border">
                <Image
                  src={src}
                  alt={`ITF certificate ${index + 1}`}
                  fill
                  sizes="(min-width: 768px) 42vw, 90vw"
                  className="object-contain bg-white"
                />
              </div>
              <div className="mt-3 flex justify-end">
                <Link href={src.src} target="_blank" rel="noreferrer" className="text-sm text-neon hover:underline">
                  {t.certs.view}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
