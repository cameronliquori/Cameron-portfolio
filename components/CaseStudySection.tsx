import { CaseStudySectionData } from "@/types/caseStudy";
import ArtifactBlock from "@/components/ArtifactBlock";
import MetricsGrid from "@/components/MetricsGrid";

function SectionBody({ section }: { section: CaseStudySectionData }) {
  return (
    <>
      {section.heading && (
        <h2 className="font-display text-h2 mb-2">{section.heading}</h2>
      )}
      {section.subheading && (
        <p className="text-body text-ink-muted mb-8">{section.subheading}</p>
      )}
      {section.subLists?.map((list, idx) => (
        <div key={list.heading || idx} className="mb-8">
          {list.heading && (
            <p className="text-small font-semibold text-ink mb-3">
              {list.heading}
            </p>
          )}
          <div className="space-y-4">
            {list.items.map((item, i) => (
              <p key={i} className="text-body text-ink-muted">
                {item}
              </p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default function CaseStudySection({ section }: { section: CaseStudySectionData }) {
  const hasImages = !!section.images?.length;
  const textWidthClass = section.fullWidth ? "w-full" : "max-w-reading";

  return (
    <div className="py-16 border-t border-line">
      <div className={hasImages ? "grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16" : ""}>
        <div className={textWidthClass}>
          <SectionBody section={section} />
        </div>
        {hasImages && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start max-w-artifact">
            {section.images!.map((img) => (
              <ArtifactBlock key={img.id} caption={img.caption} />
            ))}
          </div>
        )}
      </div>

      {section.metrics && section.metrics.length > 0 && (
        <div className={hasImages ? "mt-10" : `mt-10 ${textWidthClass}`}>
          <MetricsGrid metrics={section.metrics} />
        </div>
      )}
    </div>
  );
}
