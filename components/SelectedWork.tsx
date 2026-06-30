import { caseStudies } from "@/lib/caseStudies";
import ProjectCard from "@/components/ProjectCard";

export default function SelectedWork() {
  return (
    <section id="work" className="max-w-page mx-auto px-6 md:px-10 pb-24">
      <h2 className="font-display text-h2 mb-10">Selected work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {caseStudies.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
