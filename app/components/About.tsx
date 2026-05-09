import { Translation } from "@/lib/i18n";
import { cert1, cert2, coachRacket } from "@/public/assets";
import { BadgeCheck, MapPin, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type AboutProps = {
  t: Translation;
};

const About = ({ t }: AboutProps) => {
  return (
    <section id="about" className="py-24 md:py-36 px-5 md:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div className="relative md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden border border-border bg-card/40">
            <Image src={coachRacket} alt="Coach portrait" className="object-cover" fill sizes="(min-width: 768px) 40vw, 90vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-transparent" />
          </div>
        </div>

        <div className="md:col-span-7 text-start">
          <span className="section-kicker">{t.about.tag}</span>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-6xl tracking-tight leading-[0.95]">{t.about.title}</h2>
          <p className="mt-3 text-neon font-medium text-sm md:text-base">{t.about.role}</p>

          <p className="mt-7 text-foreground/85 leading-8 text-base md:text-lg max-w-2xl">{t.about.bio}</p>

          <div className="mt-8 grid sm:grid-cols-3 gap-3">
            <div className="border border-border bg-background/40 p-4">
              <p className="mono text-xs uppercase tracking-widest text-muted-foreground">Experience</p>
              <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold">
                <Trophy className="w-4 h-4 text-neon" /> {t.about.stats[0].v} {t.about.stats[0].l}
              </p>
            </div>
            <div className="border border-border bg-background/40 p-4">
              <p className="mono text-xs uppercase tracking-widest text-muted-foreground">Sessions</p>
              <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold">
                <BadgeCheck className="w-4 h-4 text-neon" /> {t.about.stats[1].v} {t.about.stats[1].l}
              </p>
            </div>
            <div className="border border-border bg-background/40 p-4">
              <p className="mono text-xs uppercase tracking-widest text-muted-foreground">Location</p>
              <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 text-neon" /> Dubai
              </p>
            </div>
          </div>

          <div className="mt-8">
            <p className="section-kicker mb-3">{t.certs.tag}</p>
            <div className="grid grid-cols-2 gap-3">
              {[cert1, cert2].map((src, index) => (
                <Link
                  key={index}
                  href={src.src}
                  target="_blank"
                  rel="noreferrer"
                  className="relative aspect-[4/5] border border-border rounded-md overflow-hidden bg-white hover:border-neon/70 transition"
                >
                  <Image src={src} alt={`Coach certificate ${index + 1}`} fill sizes="(min-width: 768px) 22vw, 42vw" className="object-contain" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
