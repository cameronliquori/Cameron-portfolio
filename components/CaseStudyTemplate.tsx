import { CaseStudyData } from "@/types/caseStudy";
import CaseStudyHero from "@/components/CaseStudyHero";
import CaseStudySection from "@/components/CaseStudySection";
import Button from "@/components/Button";

export default function CaseStudyTemplate({ caseStudy }: { caseStudy: CaseStudyData }) {
  return (
    <article>
      <CaseStudyHero title={caseStudy.title} description={caseStudy.heroDescription} />

      <div className="max-w-page mx-auto px-6 md:px-10">
        {caseStudy.sections.map((section) => (
          <CaseStudySection key={section.id} section={section} />
        ))}
      </div>

      {caseStudy.reflection && (
        <section className="bg-sage-400">
          <div className="max-w-page mx-auto px-6 md:px-10 py-16 md:py-24">
            {caseStudy.reflection.heading && (
              <h2 className="font-display text-h2 mb-4">{caseStudy.reflection.heading}</h2>
            )}
            <p className="text-body text-ink/80 max-w-reading">{caseStudy.reflection.text}</p>
          </div>
        </section>
      )}

      <div className="max-w-page mx-auto px-6 md:px-10 py-16 flex justify-center">
        <Button href="/#work" variant="secondary">
          View more work
        </Button>
      </div>
    </article>
  );
}

