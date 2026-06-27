import type { Metadata } from "next";
import { pastor } from "@/data/team";
import { BookOpen, ArrowRight, GraduationCap, Star, Calendar, CheckCircle, MessageCircle, Mail, MapPin, Quote } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentorship with PG | GDMI",
  description:
    "Prophetic mentorship under Prophet Gbenga Dahunsi — equipping prophetic voices and raising leaders for the end-time harvest.",
};

const program = {
  title: "Prophetic Mentorship Program",
  description:
    "A structured program designed to raise prophetic voices through teaching, impartation, and practical ministry exposure under the guidance of Prophet Gbenga Dahunsi.",
  duration: "3 months",
  price: "₦50,000",
};

const features = [
  "Weekly prophetic teaching sessions",
  "One-on-one mentorship with Prophet Gbenga",
  "Personalized prophetic development plan",
  "Scripture meditation and prayer formation",
  "Practical ministry exposure and activation",
  "Graduation retreat with impartation",
  "Certificate of completion",
  "Lifetime alumni network access",
];

export default function MentorshipPGPage() {
  return (
    <>
      <section className="bg-primary pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden border-b border-border/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.06)_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-gold/60 text-xs font-semibold tracking-[0.2em] uppercase">
            Mentorship with PG
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3">
            Prophetic Mentorship Program
          </h1>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto leading-relaxed text-sm">
            Raised to raise — equipping prophetic voices for the end-time harvest
          </p>
        </div>
      </section>

      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-border shadow-lg">
                  <img
                    src="/prophet-pics.jpg"
                    alt={pastor.name}
                    className="size-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 size-24 bg-gold/10 rounded-2xl border border-gold/20 -z-10" />
              </div>
            </div>
            <div className="lg:col-span-3">
              <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase">Meet Your Mentor</p>
              <h2 className="text-3xl font-bold text-primary mt-2">{pastor.name}</h2>
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
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase">Program</p>
            <h2 className="text-3xl font-bold text-primary mt-2">What You Get</h2>
            <p className="text-muted-foreground mt-2 text-sm">A comprehensive prophetic mentorship experience</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl p-8 sm:p-10 border border-border border-t-4 border-t-gold shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="flex items-start gap-5">
                <span className="flex items-center justify-center size-14 rounded-xl bg-primary/5 text-gold shrink-0">
                  <BookOpen className="size-6" />
                </span>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary">{program.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{program.description}</p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-2 text-xs text-gold font-semibold">
                      <Calendar className="size-3.5" />
                      {program.duration}
                    </div>
                    <span className="text-lg font-bold text-primary">{program.price}</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">What&apos;s included</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="size-4 text-gold shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <GraduationCap className="size-10 text-gold mx-auto mb-4" />
            <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase">Get Started</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3">Ready to Apply?</h2>
            <p className="text-muted-foreground mt-3 text-sm max-w-xl mx-auto leading-relaxed">
              Take the first step toward being raised as a prophetic voice for this generation.
            </p>
            <Link
              href="/mentoring-school/apply"
              className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-navy-light transition-all shadow-[0_1px_3px_rgba(15,29,53,0.15)]"
            >
              Apply for Mentorship
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
