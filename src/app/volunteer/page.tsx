import type { Metadata } from "next";
import { VolunteerForm } from "@/components/forms/VolunteerForm";
import { Users, Sparkles, HandHeart, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Volunteer | GDMI",
  description:
    "Join the GDMI volunteer team. Serve in prophetic conferences, campus outreaches, media, prayer, and more.",
};

const reasons = [
  {
    icon: <Sparkles className="size-5" />,
    title: "Be Part of the Move",
    desc: "Join a team that is actively reaching souls and raising prophetic voices across Nigeria.",
  },
  {
    icon: <HandHeart className="size-5" />,
    title: "Use Your Gifts",
    desc: "Whatever your talent — media, administration, prayer, or logistics — there is a place for you to serve.",
  },
  {
    icon: <Users className="size-5" />,
    title: "Community & Growth",
    desc: "Grow spiritually and relationally as you serve alongside passionate believers with a common vision.",
  },
];

export default function VolunteerPage() {
  return (
    <>
      <section className="bg-primary pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden border-b border-border/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.06)_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-gold/60 text-xs font-semibold tracking-[0.2em] uppercase">Serve</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3">Volunteer With Us</h1>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto leading-relaxed text-sm">
            Your time and talent can advance the kingdom. Join our volunteer team and be part of prophetic conferences, campus outreaches, and ministry operations.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <VolunteerForm />
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-muted rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-bold text-primary mb-4">Why Volunteer?</h3>
                <div className="space-y-4">
                  {reasons.map((r) => (
                    <div key={r.title} className="flex items-start gap-3">
                      <span className="flex items-center justify-center size-9 rounded-xl bg-gold/10 text-gold shrink-0">
                        {r.icon}
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-primary">{r.title}</h4>
                        <p className="text-xs text-muted-foreground mt-0.5">{r.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-bold text-primary mb-3">What Volunteers Do</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                    Assist in organizing prophetic conferences and events
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                    Join campus outreach teams for evangelism
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                    Serve in media, prayer, technical, and admin roles
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                    Support community outreach and welfare programs
                  </li>
                </ul>
              </div>

              <div className="bg-muted rounded-xl p-4 border border-border">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-primary">Important:</span> All volunteers will be required to attend a brief orientation session and agree to our volunteer code of conduct before serving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.08)_0%,_transparent_60%)]" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <HandHeart className="size-10 text-gold mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Can&apos;t Volunteer Right Now?</h2>
          <p className="text-white/40 text-sm mt-3 leading-relaxed max-w-xl mx-auto">
            You can still support the ministry through your prayers and financial partnership.
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <Link
              href="/join#partner"
              className="inline-flex items-center gap-2 bg-gold text-primary px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-gold-light transition-all shadow-[0_4px_15px_-5px_rgba(201,168,76,0.3)]"
            >
              Become a Partner
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/give"
              className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/20 transition-all"
            >
              Give One-Time
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
