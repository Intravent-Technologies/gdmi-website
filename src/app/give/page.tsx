import type { Metadata } from "next";
import { projects as staticProjects } from "@/data/projects";
import { getProjects } from "@/lib/sanity";
import { ProjectCard } from "@/components/common/ProjectCard";
import { DonationForm } from "@/components/common/DonationForm";

export const metadata: Metadata = {
  title: "Partner With Us | GDMI",
  description:
    "Support the prophetic vision through giving. Partner with Gbenga Dahunsi Ministry International to reach nations.",
};

const testimonies = [
  {
    quote: "Partnering with this ministry has opened my eyes to the power of prophetic giving. God has multiplied my seed beyond measure.",
    author: "— Brother Tunde",
  },
  {
    quote: "I started partnering with just ₦1,000 monthly. Today, my business has grown exponentially. The prophetic covering works!",
    author: "— Sister Funke",
  },
  {
    quote: "When I gave to the widows' outreach, I didn't expect anything back. But God blessed my family in ways I cannot describe.",
    author: "— Mr. Adebayo",
  },
];

export default async function GivePage() {
  const wpProjects = await getProjects();
  const projects = wpProjects.length > 0
    ? wpProjects.map((wp) => {
        const st = staticProjects.find((s) => s.slug === wp.slug);
        return {
          ...wp,
          image: wp.image || st?.image || "/gdmi-logo.png",
          gallery: wp.gallery.length > 0 ? wp.gallery : st?.gallery || [],
        };
      })
    : staticProjects;
  return (
    <>
      <section className="bg-primary pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden border-b border-border/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.06)_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-gold/60 text-xs font-semibold tracking-[0.2em] uppercase">Giving</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3">Partner With Us</h1>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto leading-relaxed text-sm">
            Your giving is not just a donation — it is a seed sown into prophetic soil. Every contribution advances the kingdom and changes lives. Welcome to the family of partners.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase">Projects</p>
            <h2 className="text-3xl font-bold text-primary mt-2">Active Projects</h2>
            <p className="text-muted-foreground mt-2 text-sm">See what your partnership is building</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-primary">Make a Gift</h2>
              <p className="text-muted-foreground text-sm mt-2">Choose where your gift goes and how often you&apos;d like to give.</p>
              <div className="mt-8">
                <DonationForm />
              </div>
            </div>

            <div className="lg:col-span-2 space-y-5">
              <h3 className="text-2xl font-bold text-primary">Why Partner With Us?</h3>
              {testimonies.map((t, i) => (
                <div
                  key={i}
                  className="bg-card rounded-xl p-5 border-l-4 border-gold shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                >
                  <p className="text-gold text-3xl leading-none mb-1">&ldquo;</p>
                  <p className="text-sm text-muted-foreground italic leading-relaxed">{t.quote}</p>
                  <p className="text-xs text-muted-foreground/60 font-semibold mt-2">{t.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
