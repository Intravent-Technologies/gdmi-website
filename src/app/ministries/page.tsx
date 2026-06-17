import type { Metadata } from "next";
import Link from "next/link";
import { Church, GraduationCap, Heart, ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Ministries | GDMI",
  description:
    "Explore the ministries of Gbenga Dahunsi Ministry International — Prophetic Conferences, Campus Outreaches, and Prophetic Prayers.",
};

interface MinistryCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  links: { label: string; href: string }[];
}

const ministryList: MinistryCard[] = [
  {
    icon: <Church className="size-6" />,
    title: "Prophetic Conferences",
    description:
      "Annual gatherings in Lagos and Ibadan where the prophetic mantle is stirred through teaching, impartation, and divine encounter.",
    links: [
      { label: "Lagos Prophetic Conference", href: "/ministries/lagos-prophetic-conference" },
      { label: "Ibadan Prophetic Conference", href: "/ministries/ibadan-prophetic-conference" },
    ],
  },
  {
    icon: <GraduationCap className="size-6" />,
    title: "Campus Outreaches",
    description:
      "Evangelistic outreaches reaching the next generation on university campuses across Nigeria with the prophetic gospel.",
    links: [
      { label: "PLN-UI Outreach", href: "/ministries/pln-ui" },
      { label: "POLY Ibadan Outreach", href: "/ministries/poly-ibadan" },
      { label: "Impact Campus", href: "/ministries/impact-campus" },
    ],
  },
  {
    icon: <Heart className="size-6" />,
    title: "Prophetic Prayers with PG&PY",
    description:
      "Spirit-directed prayer sessions led by Prophet Gbenga Dahunsi, marked by prophetic intercession and breakthrough declarations.",
    links: [
      { label: "Learn More", href: "/ministries/prophetic-prayers" },
    ],
  },
];

export default function MinistriesPage() {
  return (
    <>
      <section className="bg-primary pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden border-b border-border/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.06)_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-gold/60 text-xs font-semibold tracking-[0.2em] uppercase">Our Mandate</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3">Our Ministries</h1>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto leading-relaxed text-sm">
            Reaching nations with the prophetic word through conferences, campus outreaches, and prayer.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ministryList.map((m) => (
              <div
                key={m.title}
                className="group bg-card rounded-2xl p-8 border border-border border-t-4 border-t-gold shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_-8px_rgba(15,29,53,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
              >
                <span className="flex items-center justify-center size-12 rounded-xl bg-primary/5 text-gold group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-5">
                  {m.icon}
                </span>
                <h3 className="text-xl font-bold text-primary mb-3">{m.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{m.description}</p>
                <div className="mt-6 space-y-2">
                  {m.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-gold transition-colors"
                    >
                      {link.label}
                      <ArrowRight className="size-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="size-10 text-gold mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">Upcoming Events</h2>
          <p className="text-muted-foreground text-sm mt-3 leading-relaxed max-w-xl mx-auto">
            Stay connected with our calendar of prophetic conferences, campus outreaches, and prayer meetings.
          </p>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-navy-light transition-all shadow-[0_1px_3px_rgba(15,29,53,0.15)]"
          >
            View All Events
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
