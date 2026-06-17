import Link from "next/link";
import { Heart, Users, HandHeart } from "lucide-react";

const ctas = [
  {
    icon: <Heart className="size-5" />,
    title: "Become a Partner",
    desc: "Join our family of monthly and annual partners fueling prophetic ministry worldwide.",
    href: "/join#partner",
    cta: "Partner With Us",
  },
  {
    icon: <Users className="size-5" />,
    title: "Volunteer",
    desc: "Serve in conferences, campus outreaches, media, prayer, or administration.",
    href: "/join#volunteer",
    cta: "Apply to Serve",
  },
  {
    icon: <HandHeart className="size-5" />,
    title: "Give",
    desc: "Make a one-time gift to support prophetic conferences, outreaches, and community programs.",
    href: "/give",
    cta: "Give Now",
  },
];

export function GlobalCTA() {
  return (
    <section className="bg-primary relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.06)_0%,_transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="text-center mb-10">
          <p className="text-gold/60 text-xs font-semibold tracking-[0.2em] uppercase">Get Involved</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Join the Vision</h2>
          <p className="text-white/40 text-sm mt-2 max-w-xl mx-auto">
            Every prophetic conference, crusade, and outreach is fueled by partners and volunteers who believe in the mandate.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {ctas.map((item) => (
            <div
              key={item.title}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 text-center hover:bg-white/[0.08] transition-all duration-300 group"
            >
              <span className="flex items-center justify-center mx-auto mb-4 size-12 rounded-xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-primary transition-all duration-300">
                {item.icon}
              </span>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-white/40 text-sm mt-2 leading-relaxed">{item.desc}</p>
              <Link
                href={item.href}
                className="inline-flex items-center gap-1.5 mt-5 text-gold hover:text-gold-light text-sm font-semibold transition-colors"
              >
                {item.cta}
                <span className="text-lg leading-none">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
