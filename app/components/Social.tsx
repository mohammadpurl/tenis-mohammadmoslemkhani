import { INSTAGRAM_URL } from '@/lib';
import { Translation } from '@/lib/i18n';
import { cert1, cert2, coachRacket, perfCoach, perfHero } from '@/public/assets';
import InstagramIcon from '../Icons/InstagramIcon';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type SocialProps = {
  t: Translation;
};

const SOCIAL_VIDEO_SRC = "/Videos/Therapy_web_optimized.mp4";
const SOCIAL_VIDEO_SRC2 = "/Videos/This is Yonex Muse.mp4";
const SOCIAL_VIDEO_SRC3 = "/Videos/MAY YOUR CHOICESREFLECT.mp4";
const Social = ({ t }: SocialProps) => {
    const mediaItems = [
      { type: "image" as const, src: perfHero },
      { type: "image" as const, src: coachRacket },
      { type: "image" as const, src: perfCoach },
      { type: "video" as const, src: SOCIAL_VIDEO_SRC2 },
      { type: "video" as const, src: SOCIAL_VIDEO_SRC },
      { type: "video" as const, src: SOCIAL_VIDEO_SRC3 },
    ];
    return (
        <section className="py-24 md:py-36 px-5 md:px-10 border-t border-border">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5 text-start">
              <span className="section-kicker">{t.social.tag}</span>
              <h2 className="mt-4 font-display font-bold text-4xl md:text-6xl tracking-tight leading-[0.95]">
                {t.social.title}
              </h2>
              <p className="mt-4 text-neon mono text-sm leading-relaxed">{t.social.handle}</p>
              <Link
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 hover:border-neon hover:text-neon transition"
              >
                <InstagramIcon className="w-6 h-6 text-pink-500" />
                {t.social.cta}
              </Link>
            </div>
            <div className="md:col-span-7 grid grid-cols-3 gap-2">
              {mediaItems.map((item, i) => (
                <div key={i} className="aspect-square overflow-hidden bg-card group relative">
                  {item.type === "image" ? (
                    <Image src={item.src} alt="Training social gallery" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" fill sizes="(min-width: 768px) 22vw, 30vw" />
                  ) : (
                    <video
                      src={item.src}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  )}
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition flex items-center justify-center">
                    <InstagramIcon className="w-5 h-5 text-pink-500 opacity-0 group-hover:opacity-100 transition shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

export default Social