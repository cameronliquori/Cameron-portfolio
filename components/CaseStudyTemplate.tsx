import { CaseStudyData } from "@/types/caseStudy";
import CaseStudyHero from "@/components/CaseStudyHero";
import SupportingTextSection from "@/components/SupportingTextSection";
import DecisionSection from "@/components/DecisionSection";
import MetricsGrid from "@/components/MetricsGrid";
import ArtifactBlock from "@/components/ArtifactBlock";
import Button from "@/components/Button";

export default function CaseStudyTemplate({ caseStudy }: { caseStudy: CaseStudyData }) {
  const h = caseStudy.headings ?? {};

  return (
    <article>
      <CaseStudyHero
        title={caseStudy.title}
        description={caseStudy.heroDescription}
      />

      <div className="max-w-page mx-auto px-6 md:px-10">
        <SupportingTextSection
          heading={h.overviewHeading}
          groups={[
            { label: h.needLabel, items: caseStudy.overview.need },
            { label: h.goalLabel, items: caseStudy.overview.goal },
            { label: h.planLabel, items: caseStudy.overview.plan },
          ]}
        />

        <SupportingTextSection
          heading={h.challengeHeading}
          groups={[
            { label: h.limitationsLabel, items: caseStudy.challenge.limitations },
            { label: h.teamLabel, items: caseStudy.challenge.team },
            { label: h.timelineLabel, items: caseStudy.challenge.timeline },
          ]}
        />

        {caseStudy.decisionSections.map((section) => (
          <DecisionSection key={section.id} section={section} />
        ))}

        <div className="py-16 border-t border-line">
          {h.outcomeHeading && (
            <h2 className="font-display text-h2 mb-8">{h.outcomeHeading}</h2>
          )}

          {caseStudy.outcome.images.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-artifact">
              {caseStudy.outcome.images.map((img) => (
                <ArtifactBlock key={img.id} caption={img.caption} />
              ))}
            </div>
          )}

          <MetricsGrid metrics={caseStudy.outcome.metrics} />
        </div>
      </div>

      <section className="bg-sage-400">
        <div className="max-w-page mx-auto px-6 md:px-10 py-16 md:py-24">
          {h.reflectionHeading && (
            <h2 className="font-display text-h2 mb-4">{h.reflectionHeading}</h2>
          )}
          <p className="text-body text-ink/80 max-w-reading">
            {caseStudy.reflection}
          </p>
        </div>
      </section>

      <div className="max-w-page mx-auto px-6 md:px-10 py-16 flex justify-center">
        <Button href="/#work" variant="secondary">
          View more work
        </Button>
      </div>
    </article>
  );
}

