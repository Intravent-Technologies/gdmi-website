import type { Metadata } from "next";
import { MentorshipForm } from "@/components/forms/MentorshipForm";
import { GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Apply | Yemisi Dahunsi Mentoring School | GDMI",
  description:
    "Apply to the Yemisi Dahunsi Mentoring School and take the first step toward discovering your prophetic identity.",
};

export default function ApplyPage() {
  return (
    <>
      <section className="bg-primary pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden border-b border-border/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.06)_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-gold/60 text-xs font-semibold tracking-[0.2em] uppercase">
            Apply Now
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3">
            Mentorship Application
          </h1>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto leading-relaxed text-sm">
            Take the first step toward your prophetic destiny
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <MentorshipForm />
        </div>
      </section>
    </>
  );
}
