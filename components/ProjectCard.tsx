import Link from "next/link";
import { ProjectCardData } from "@/types/caseStudy";

export default function ProjectCard({ project }: { project: ProjectCardData }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block rounded-lg border border-line p-6 hover:border-ink/30 hover:-translate-y-0.5 transition-all duration-200 ease-smooth"
    >
      <p className="text-eyebrow uppercase text-ink-muted mb-4">
        {project.eyebrow}
      </p>

      <div
        className="placeholder-block w-full aspect-[4/3] mb-4"
        aria-hidden="true"
      />

      <h3 className="font-display text-h3 underline decoration-1 underline-offset-4 group-hover:text-sage-600 transition-colors duration-200 ease-smooth mb-1">
        {project.title}
      </h3>
      <p className="text-small font-medium text-ink-muted mb-2">
        {project.company}
      </p>
      <p className="text-small text-ink-muted">{project.subtitle}</p>
    </Link>
  );
}
