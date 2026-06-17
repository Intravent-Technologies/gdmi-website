"use client";

import { useState, useEffect } from "react";
import { PartnerForm } from "@/components/forms/PartnerForm";
import { VolunteerForm } from "@/components/forms/VolunteerForm";
import { Heart, Users } from "lucide-react";

export default function JoinPage() {
  const [tab, setTab] = useState<"partner" | "volunteer">("partner");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash === "volunteer") setTab("volunteer");
  }, []);

  function switchTab(t: "partner" | "volunteer") {
    setTab(t);
    window.location.hash = t;
  }

  return (
    <>
      <section className="bg-primary pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden border-b border-border/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.06)_0%,_transparent_60%)]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/3 rounded-full blur-[120px]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-gold/60 text-xs font-semibold tracking-[0.2em] uppercase">Get Involved</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3">Partner & Volunteer</h1>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto leading-relaxed text-sm">
            Whether through financial partnership or serving with your time and talent, there&apos;s a place for you in the GDMI family.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-10">
            <div className="bg-muted p-1 rounded-xl border border-border inline-flex">
              <button
                onClick={() => switchTab("partner")}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
                  tab === "partner"
                    ? "bg-background text-primary shadow-sm"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <Heart className="size-4" />
                Partner
              </button>
              <button
                onClick={() => switchTab("volunteer")}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
                  tab === "volunteer"
                    ? "bg-background text-primary shadow-sm"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <Users className="size-4" />
                Volunteer
              </button>
            </div>
          </div>

          {tab === "partner" ? (
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-8 max-w-2xl mx-auto">
                <span className="flex items-center justify-center size-10 rounded-xl bg-gold/10 text-gold shrink-0">
                  <Heart className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-primary">Partner With Us</p>
                  <p className="text-xs text-muted-foreground">Join our family of faithful partners fueling prophetic ministry worldwide.</p>
                </div>
              </div>
              <PartnerForm />
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-8 max-w-2xl mx-auto">
                <span className="flex items-center justify-center size-10 rounded-xl bg-gold/10 text-gold shrink-0">
                  <Users className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-primary">Volunteer With Us</p>
                  <p className="text-xs text-muted-foreground">Serve in conferences, campus outreaches, media, prayer, and administration.</p>
                </div>
              </div>
              <VolunteerForm />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
