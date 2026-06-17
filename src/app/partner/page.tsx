import type { Metadata } from "next";
import { PartnerForm } from "@/components/forms/PartnerForm";
import { Heart, Shield, Gift, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Become a Partner | GDMI",
  description:
    "Join the GDMI partnership family. Your monthly or one-time giving fuels prophetic conferences, campus outreaches, and kingdom advancement.",
};

const benefits = [
  {
    icon: <Heart className="size-5" />,
    title: "Prophetic Coverage",
    desc: "Our partners enjoy prophetic covering and are remembered in our prayers and prophetic declarations.",
  },
  {
    icon: <Shield className="size-5" />,
    title: "Partner Community",
    desc: "Access to an exclusive community of partners for fellowship, updates, and shared vision.",
  },
  {
    icon: <Gift className="size-5" />,
    title: "Resource Access",
    desc: "Early access to new books, teachings, and ministry resources before public release.",
  },
];

export default function PartnerPage() {
  return (
    <>
      <section className="bg-primary pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden border-b border-border/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.06)_0%,_transparent_60%)]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/3 rounded-full blur-[120px]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-gold/60 text-xs font-semibold tracking-[0.2em] uppercase">Partnership</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3">Become a Partner</h1>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto leading-relaxed text-sm">
            Join a family of faithful partners who fuel prophetic conferences, campus outreaches, and kingdom advancement through regular giving.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <PartnerForm />
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-bold text-primary mb-4">Why Partner With GDMI?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Your partnership is not just a donation — it is a seed sown into prophetic soil. Every contribution advances the kingdom and changes lives through:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    Prophetic conferences that raise prophetic voices
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    Campus outreaches reaching the next generation
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    Widows and community empowerment programs
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    Media and publishing to reach the nations
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                {benefits.map((b) => (
                  <div
                    key={b.title}
                    className="bg-card rounded-xl p-4 border border-border flex items-start gap-3"
                  >
                    <span className="flex items-center justify-center size-10 rounded-xl bg-gold/10 text-gold shrink-0">
                      {b.icon}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-primary">{b.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-muted rounded-xl p-4 border border-border">
                <h4 className="text-sm font-semibold text-primary mb-2">Prefer Bank Transfer?</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  You can also make a direct transfer to our ministry account. Visit our{" "}
                  <Link href="/give" className="text-gold hover:text-gold-light underline">
                    giving page
                  </Link>{" "}
                  for account details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="size-10 text-gold mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">Not Ready to Partner?</h2>
          <p className="text-muted-foreground text-sm mt-3 leading-relaxed max-w-xl mx-auto">
            You can still support the ministry through prayer, volunteering, or spreading the word about what God is doing through GDMI.
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <Link
              href="/join#volunteer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-navy-light transition-all shadow-[0_1px_3px_rgba(15,29,53,0.15)]"
            >
              Volunteer With Us
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-card text-primary px-7 py-3.5 rounded-xl font-semibold text-sm border border-border hover:border-gold/30 transition-all"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
