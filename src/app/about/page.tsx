import type { Metadata } from "next";
import { pastor } from "@/data/team";
import { Flame, Cross, BookOpen, GraduationCap, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { AlbumStack } from "@/components/common/AlbumStack";

const iconMap: Record<string, React.ReactNode> = {
  prophecy: <Flame className="size-6" />,
  evangelism: <Cross className="size-6" />,
  discipleship: <BookOpen className="size-6" />,
  campus: <GraduationCap className="size-6" />,
  women: <Heart className="size-6" />,
};

export const metadata: Metadata = {
  title: "About Us | GDMI",
  description:
    "Learn about Gbenga Dahunsi Ministry International — our vision, mission, and the prophetic mandate driving us.",
};

const milestones = [
  { year: "2018", title: "Ministry Founded", desc: "GDMI was established with a prophetic mandate to raise a set apart generation." },
  { year: "2019", title: "First Crusade", desc: "The first open-air crusade drew over 5,000 souls, marking the beginning of mass evangelism." },
  { year: "2020", title: "Prophetic Conference Launch", desc: "The first Prophetic Conference was held, setting a template for future gatherings." },
  { year: "2022", title: "Campus Outreach Expansion", desc: "Ministry expanded to university campuses, reaching the next generation of prophetic leaders." },
  { year: "2024", title: "Digital Media Launch", desc: "Launched YouTube and Telegram channels to reach a global audience with prophetic content." },
  { year: "2026", title: "The Year of Divine Speed", desc: "Positioned for accelerated growth and impact across Nigeria and beyond." },
];

const visionCards = [
  { title: "Our Vision", desc: "To raise a generation of prophetic voices set apart for God's glory, impacting every sphere of society with the power of the prophetic word." },
  { title: "Our Mission", desc: "To preach the gospel with prophetic precision, disciple believers into prophetic maturity, and demonstrate the love of God through compassion outreaches." },
  { title: "Our Mandate", desc: "To identify, train, and release prophetic voices into the nations — equipping the body of Christ for the end-time harvest." },
];

const ministryArms = [
  { iconKey: "prophecy", title: "Prophecy", desc: "Releasing prophetic words that transform destinies." },
  { iconKey: "evangelism", title: "Evangelism", desc: "Winning souls through prophetic evangelism campaigns." },
  { iconKey: "discipleship", title: "Discipleship", desc: "Raising mature believers through prophetic teaching." },
  { iconKey: "campus", title: "Campus Ministry", desc: "Reaching the next generation on tertiary campuses." },
  { iconKey: "women", title: "Women's Ministry", desc: "Empowering prophetic women for kingdom impact." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden border-b border-border/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.06)_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-gold/60 text-xs font-semibold tracking-[0.2em] uppercase">
            About
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3">
            Gbenga Dahunsi Ministry International
          </h1>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto leading-relaxed text-sm">
            A prophetic ministry raising a generation set apart for God&apos;s glory through prophecy, evangelism, and discipleship.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <AlbumStack />
            </div>
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-primary uppercase">{pastor.name}</h2>
              <p className="text-gold font-semibold text-sm mt-1">{pastor.title}</p>
              <div className="mt-6 text-muted-foreground leading-relaxed space-y-4 text-sm">
                {pastor.fullBio.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visionCards.map((card) => (
              <div
                key={card.title}
                className="bg-card rounded-2xl p-8 border border-border border-t-4 border-t-gold shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_-8px_rgba(15,29,53,0.08)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-primary mb-3">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase">History</p>
            <h2 className="text-3xl font-bold text-primary mt-2">Our Journey</h2>
            <p className="text-muted-foreground mt-2 text-sm">Key milestones in the ministry&apos;s history</p>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-border to-transparent" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div key={m.year} className="relative flex items-start gap-8">
                  <div className="hidden sm:block flex-1 text-right">
                    <span className="text-gold font-bold text-2xl">{m.year}</span>
                  </div>
                  <div className="absolute left-5 sm:left-1/2 top-1 w-3.5 h-3.5 rounded-full bg-gold -translate-x-1/2 ring-4 ring-background z-10" />
                  <div className="flex-1 pl-12 sm:pl-0">
                    <span className="text-gold font-bold text-lg sm:hidden block">{m.year}</span>
                    <h4 className="font-semibold text-primary mt-1">{m.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase">Pillars</p>
            <h2 className="text-3xl font-bold text-primary mt-2">Ministry Arms</h2>
            <p className="text-muted-foreground mt-2 text-sm">The five pillars of our ministry mandate</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {ministryArms.map((arm, i) => (
              <div
                key={arm.title}
                className="group bg-card rounded-2xl p-6 text-center border border-border shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_-8px_rgba(15,29,53,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/40 via-gold to-gold/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="flex items-center justify-center mx-auto mb-4 size-12 rounded-xl bg-primary/5 text-gold group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {iconMap[arm.iconKey]}
                </span>
                <span className="absolute top-3 right-3 text-[10px] font-bold text-muted-foreground/20">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <h4 className="font-semibold text-primary text-sm">{arm.title}</h4>
                <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{arm.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.08)_0%,_transparent_60%)]" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-gold/60 text-xs font-semibold tracking-[0.15em] uppercase">Partner With Us</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">Join the Vision</h2>
          <p className="text-white/40 mt-3 text-sm max-w-xl mx-auto leading-relaxed">
            Every prophetic conference, crusade, and outreach is fueled by partners who believe in the mandate. Your seed brings the prophetic word to nations.
          </p>
          <Link
            href="/give"
            className="inline-flex items-center gap-2 mt-8 bg-gold text-primary px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-gold-light transition-all duration-200 shadow-[0_4px_15px_-5px_rgba(201,168,76,0.3)]"
          >
            Give Now
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
