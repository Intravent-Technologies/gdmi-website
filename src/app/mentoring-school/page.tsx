import type { Metadata } from "next";
import { prophetess } from "@/data/team";
import { BookOpen, ArrowRight, GraduationCap, Star, Calendar, CheckCircle, MessageCircle, Mail, MapPin, ChevronDown, Quote } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yemisi Dahunsi Mentoring School | GDMI",
  description:
    "A prophetic mentoring school raised to equip, mentor, and launch women into their divine purpose through prophetic insight and practical life application.",
};

const program = {
  icon: <BookOpen className="size-6" />,
  title: "Prophetic Mentorship Program",
  description:
    "A structured program designed to help women discover their prophetic identity, develop their spiritual gifts, and walk confidently in their calling. Includes teaching sessions, one-on-one mentorship, practical assignments, and a graduation retreat.",
  duration: "3 months",
  price: "₦50,000",
};

const programFeatures = [
  "Weekly prophetic teaching sessions via Zoom",
  "One-on-one mentorship with Prophet Yemisi",
  "Personalized prophetic development plan",
  "Scripture meditation and prayer formation",
  "Practical ministry exposure and activation",
  "Graduation retreat with impartation",
  "Certificate of completion",
  "Lifetime alumni network access",
];

const pillars = [
  { number: "01", title: "Identity Discovery", desc: "Helping women uncover who they are in Christ and their unique prophetic identity." },
  { number: "02", title: "Spiritual Formation", desc: "Deepening prayer life, scripture meditation, and sensitivity to the Holy Spirit." },
  { number: "03", title: "Prophetic Development", desc: "Training in prophecy, discernment, dreams interpretation, and prophetic counsel." },
  { number: "04", title: "Practical Kingdom Living", desc: "Applying spiritual truths to daily life — relationships, career, ministry, and family." },
];

const steps = [
  { step: "01", title: "Pray & Confirm", desc: "Prayerfully consider if this is your season. Confirm the Lord's leading in your heart before applying." },
  { step: "02", title: "Submit Your Application", desc: "Fill out the application form with your details, background, and what you hope to gain from the program." },
  { step: "03", title: "Interview & Selection", desc: "Shortlisted applicants are invited for a brief mentorship interview with Prophet Yemisi or her team." },
  { step: "04", title: "Onboarding & Start", desc: "Selected mentees are onboarded, assigned resources, and begin their prophetic mentorship journey." },
];

const testimonials = [
  {
    quote: "The Yemisi Dahunsi Mentoring School transformed my walk with God. Through Prophet Yemisi's guidance, I discovered my prophetic voice and now minister with confidence.",
    name: "Sister Esther Adebayo",
    role: "Prophetic Mentorship Track Graduate",
  },
  {
    quote: "I came searching for purpose but found so much more. The mentorship opened my eyes to who I am in Christ and gave me practical tools to walk in my calling daily.",
    name: "Mrs. Folake Ogunleye",
    role: "Purpose Discovery Workshop Graduate",
  },
  {
    quote: "Prophet Yemisi carries a genuine mother's heart. Her investment in my life through the Leadership Incubation program has shaped my ministry and character profoundly.",
    name: "Minister Toluwanimi Adegoke",
    role: "Leadership Incubation Graduate",
  },
];

const faqs = [
  {
    q: "Who is eligible to apply?",
    a: "The Mentoring School is open to women of all ages who have a hunger for God, a desire to grow in their prophetic identity, and a commitment to complete the program.",
  },
  {
    q: "Are the programs online or physical?",
    a: "We offer a blended approach — core teaching sessions are delivered online via Zoom, while retreats and special impartation gatherings are held physically at our ministry center.",
  },
  {
    q: "What is the time commitment?",
    a: "Each track has a different duration. Weekly sessions range from 1–2 hours, with additional personal study, assignments, and quarterly gatherings.",
  },
  {
    q: "Can I take more than one track?",
    a: "Yes. Many graduates go on to take additional tracks. We recommend completing the Prophetic Mentorship Track before enrolling in the Leadership Incubation program.",
  },
  {
    q: "Is financial assistance available?",
    a: "We believe finances should not hinder destiny. Limited scholarships are available for genuinely called women who cannot afford the program fee. Please indicate this on your application.",
  },
  {
    q: "What happens after graduation?",
    a: "Graduates become part of the YD Mentoring School alumni network with access to advanced training, ministry opportunities, and ongoing mentorship relationships.",
  },
];

const cohorts = [
  { season: "Q3 2026", title: "Cohort 3", start: "July 2026", status: "Applications Open" },
  { season: "Q4 2026", title: "Cohort 4", start: "October 2026", status: "Coming Soon" },
  { season: "2027", title: "Women of Impact Retreat", start: "January 2027", status: "Coming Soon" },
];

export default function MentoringSchoolPage() {
  return (
    <>
      <section className="bg-primary pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden border-b border-border/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.06)_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-gold/60 text-xs font-semibold tracking-[0.2em] uppercase">
            Mentoring School
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3">
            Yemisi Dahunsi Mentoring School
          </h1>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto leading-relaxed text-sm">
            Equipping, mentoring, and launching prophetic women into their divine purpose
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
                    src="/prophet-pics2.jpg"
                    alt={prophetess.name}
                    className="size-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 size-24 bg-gold/10 rounded-2xl border border-gold/20 -z-10" />
              </div>
            </div>
            <div className="lg:col-span-3">
              <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase">Meet Your Mentor</p>
              <h2 className="text-3xl font-bold text-primary mt-2">{prophetess.name}</h2>
              <p className="text-gold font-semibold text-sm mt-1">{prophetess.title}</p>
              <div className="mt-6 text-muted-foreground leading-relaxed space-y-4 text-sm">
                {prophetess.fullBio.split("\n\n").map((para, i) => (
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
            <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase">Programs</p>
            <h2 className="text-3xl font-bold text-primary mt-2">Our Tracks</h2>
            <p className="text-muted-foreground mt-2 text-sm">Structured mentorship programs designed for every season</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl p-8 sm:p-10 border border-border border-t-4 border-t-gold shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="flex items-start gap-5">
                <span className="flex items-center justify-center size-14 rounded-xl bg-primary/5 text-gold shrink-0">
                  {program.icon}
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
                  {programFeatures.map((f) => (
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

      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase">Foundation</p>
            <h2 className="text-3xl font-bold text-primary mt-2">Our Pillars</h2>
            <p className="text-muted-foreground mt-2 text-sm">The four pillars of prophetic mentorship</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="group bg-card rounded-2xl p-6 text-center border border-border shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_-8px_rgba(15,29,53,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/40 via-gold to-gold/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-4xl font-bold text-gold/20 group-hover:text-gold/30 transition-colors duration-300">
                  {p.number}
                </span>
                <h4 className="font-semibold text-primary text-sm mt-3">{p.title}</h4>
                <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase">Process</p>
            <h2 className="text-3xl font-bold text-primary mt-2">How It Works</h2>
            <p className="text-muted-foreground mt-2 text-sm">Your journey from application to transformation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="bg-card rounded-2xl p-6 border border-border relative">
                <span className="text-5xl font-bold text-gold/10 absolute top-3 right-4">{s.step}</span>
                <span className="flex items-center justify-center size-10 rounded-lg bg-gold/10 text-gold font-bold text-sm mb-4">
                  {s.step}
                </span>
                <h4 className="font-semibold text-primary text-sm">{s.title}</h4>
                <p className="text-muted-foreground text-xs mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase">Upcoming</p>
            <h2 className="text-3xl font-bold text-primary mt-2">Cohorts & Events</h2>
            <p className="text-muted-foreground mt-2 text-sm">Plan your mentorship journey</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {cohorts.map((c) => (
              <div
                key={c.title}
                className="bg-card rounded-2xl p-6 border border-border flex items-center justify-between hover:shadow-[0_4px_15px_-8px_rgba(15,29,53,0.08)] transition-shadow"
              >
                <div>
                  <p className="text-xs text-gold font-semibold tracking-wider">{c.season}</p>
                  <h4 className="text-lg font-bold text-primary mt-1">{c.title}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Starts: {c.start}</p>
                </div>
                <span className="text-xs font-bold text-white bg-primary px-4 py-2 rounded-lg">
                  {c.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase">Testimonials</p>
            <h2 className="text-3xl font-bold text-primary mt-2">What Our Graduates Say</h2>
            <p className="text-muted-foreground mt-2 text-sm">Lives transformed through prophetic mentorship</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-card rounded-2xl p-8 border border-border relative"
              >
                <Quote className="size-8 text-gold/20 absolute top-6 right-6" />
                <p className="text-muted-foreground text-sm leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-sm font-bold text-primary">{t.name}</p>
                  <p className="text-xs text-gold mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase">FAQ</p>
            <h2 className="text-3xl font-bold text-primary mt-2">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mt-2 text-sm">Everything you need to know before applying</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-card rounded-xl border border-border overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer text-sm font-semibold text-primary list-none hover:bg-muted/50 transition-colors">
                  {faq.q}
                  <ChevronDown className="size-4 text-gold shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase">Contact</p>
            <h2 className="text-3xl font-bold text-primary mt-2">Get in Touch</h2>
            <p className="text-muted-foreground mt-2 text-sm">Have questions? We&apos;d love to hear from you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-6 border border-border text-center">
              <MessageCircle className="size-8 text-gold mx-auto mb-3" />
              <h4 className="font-semibold text-primary text-sm">WhatsApp</h4>
              <p className="text-xs text-muted-foreground mt-1">+234 800 GDMI MENTOR</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border text-center">
              <Mail className="size-8 text-gold mx-auto mb-3" />
              <h4 className="font-semibold text-primary text-sm">Email</h4>
              <p className="text-xs text-muted-foreground mt-1">mentorship@gdmi.org</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border text-center">
              <MapPin className="size-8 text-gold mx-auto mb-3" />
              <h4 className="font-semibold text-primary text-sm">Location</h4>
              <p className="text-xs text-muted-foreground mt-1">Ibadan, Nigeria</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase">Join Us</p>
              <h2 className="text-3xl font-bold text-primary mt-2">Become a Mentee</h2>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                Are you a woman seeking to discover your prophetic identity, grow in your spiritual gifts,
                and walk in your God-given purpose? The Yemisi Dahunsi Mentoring School is your platform.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Personal mentorship from Prophet Yemisi Dahunsi",
                  "Access to exclusive teaching resources and materials",
                  "Community of like-minded prophetic women",
                  "Opportunities for ministry exposure and activation",
                  "Certificate of completion upon graduation",
                  "Lifetime access to alumni network and events",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="size-4 text-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/mentoring-school/apply"
                className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-navy-light transition-all shadow-[0_1px_3px_rgba(15,29,53,0.15)]"
              >
                Apply for Mentorship
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-border shadow-lg">
                <img
                  src="/prophet-pics3.jpg"
                  alt="Yemisi Dahunsi Mentoring School"
                  className="size-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 size-32 bg-gold/10 rounded-2xl border border-gold/20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.08)_0%,_transparent_60%)]" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <GraduationCap className="size-10 text-gold mx-auto mb-4" />
          <p className="text-gold/60 text-xs font-semibold tracking-[0.15em] uppercase">Get Started</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">Ready to Rise?</h2>
          <p className="text-white/40 mt-3 text-sm max-w-xl mx-auto leading-relaxed">
            Take the first step toward discovering your prophetic identity and walking in your divine purpose.
            Join the Yemisi Dahunsi Mentoring School today.
          </p>
          <Link
            href="/mentoring-school/apply"
            className="inline-flex items-center gap-2 mt-8 bg-gold text-primary px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-gold-light transition-all duration-200 shadow-[0_4px_15px_-5px_rgba(201,168,76,0.3)]"
          >
            Apply Now
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
