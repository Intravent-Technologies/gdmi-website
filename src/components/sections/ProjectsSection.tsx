"use client";

import Link from "next/link";
import { ProjectCard } from "@/components/common/ProjectCard";
import { projects as staticProjects } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import { useProjects } from "@/lib/use-data";

export function ProjectsSection() {
  const { data: wpProjects } = useProjects();
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
    <section className="py-20 sm:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase">
              Impact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-2">
              Projects We&apos;re Working On
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl text-sm">
              Every project is a story of faith in action. Partner with us and be part of what God is doing.
            </p>
          </div>
          <Link
            href="/give"
            className="group inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm font-medium transition-colors whitespace-nowrap"
          >
            View All Projects
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-16 relative overflow-hidden rounded-2xl bg-primary p-10 sm:p-14 text-center shadow-[0_4px_20px_-8px_rgba(15,29,53,0.2)]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.08)_0%,_transparent_60%)]" />
          <p className="relative text-white/40 text-sm max-w-lg mx-auto">
            Join thousands of believers partnering with this prophetic vision to reach the nations.
          </p>
          <Link
            href="/give"
            className="relative inline-flex items-center gap-2 mt-6 bg-gold text-primary px-8 py-3 rounded-xl font-bold text-sm hover:bg-gold-light transition-all duration-200 shadow-[0_4px_15px_-5px_rgba(201,168,76,0.3)]"
          >
            Become a Partner
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
