import Link from "next/link";
import { YouTubeBackground } from "./YouTubeBackground";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden bg-primary pt-36 md:pt-44">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.06)_0%,_transparent_60%)]" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gold/3 rounded-full blur-[100px]" />

      <YouTubeBackground
        videoId={process.env.NEXT_PUBLIC_YOUTUBE_HERO_VIDEO_ID || "N_hpOwSI2qU"}
        startSeconds={process.env.NEXT_PUBLIC_YOUTUBE_HERO_START ? Number(process.env.NEXT_PUBLIC_YOUTUBE_HERO_START) : 2030}
        endSeconds={process.env.NEXT_PUBLIC_YOUTUBE_HERO_END ? Number(process.env.NEXT_PUBLIC_YOUTUBE_HERO_END) : 2275}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-gold/60" />
            <span className="text-gold/80 text-xs font-medium tracking-[0.2em] uppercase">
              Gbenga Dahunsi Ministry International
            </span>
            <span className="h-px w-8 bg-gold/60" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight">
            Raising a Generation of{" "}
            <span className="text-gold">Prophetic Voices</span>
          </h1>

          <p className="mt-6 text-white/40 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Called to raise a people set apart for God&apos;s glory — a prophetic
            generation carrying the fire of the Holy Spirit and the wisdom of the
            Word to impact nations.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
          <Link
            href={process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_URL || "https://youtube.com/@gdmichannel"}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gold text-primary px-8 py-3.5 rounded-xl font-bold text-sm overflow-hidden transition-all duration-200 hover:bg-gold-light shadow-[0_4px_15px_-5px_rgba(201,168,76,0.3)]"
          >
            Watch Latest Service
          </Link>
          <Link
            href="/give"
            className="border border-white/20 text-white/70 px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-white/10 hover:border-white/40 transition-all duration-200"
          >
            Partner With Us
          </Link>
        </div>

        <div className="mt-16 flex items-center justify-center gap-3 animate-fade-in">
          <span className="h-px w-12 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          <span className="text-gold/30 text-xl">✦</span>
          <span className="h-px w-12 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
