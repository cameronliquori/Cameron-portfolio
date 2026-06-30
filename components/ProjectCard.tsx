import Link from "next/link";
import { ProjectCardData } from "@/types/caseStudy";

export default function ProjectCard({ project }: { project: ProjectCardData }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex gap-6 sm:gap-8 rounded-2xl border border-sage-600/40 p-6 sm:p-8 hover:border-sage-600 hover:bg-sage-50/50 transition-colors duration-200 ease-smooth"
    >
      <div
        className="placeholder-block w-[35%] shrink-0 aspect-[3/4]"
        aria-hidden="true"
      />

      <div className="flex flex-col min-w-0">
        <p className="text-eyebrow uppercase text-ink-muted mb-3">
          {project.eyebrow}
        </p>

        <h3 className="font-display text-h3 text-ink mb-1">
          {project.title}
        </h3>
        <p className="text-small font-semibold text-ink mb-3">
          {project.company}
        </p>
        <p className="text-small text-ink-muted">{project.subtitle}</p>
      </div>
    </Link>
  );
}

