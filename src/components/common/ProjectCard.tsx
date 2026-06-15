import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-card border border-border shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_-8px_rgba(15,29,53,0.1)] hover:-translate-y-0.5 transition-all duration-300">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={project.image || "/gdmi-logo.png"}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-6 space-y-4">
        <div>
          <span className="text-xs text-gold font-semibold uppercase tracking-wider">
            {project.category}
          </span>
          <h3 className="text-lg font-bold text-primary mt-1">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        <Link
          href="/give"
          className="group/btn flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-3 rounded-xl text-sm font-semibold hover:bg-navy-light transition-all duration-200 shadow-[0_1px_3px_rgba(15,29,53,0.15)]"
        >
          Give to This Project
          <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
