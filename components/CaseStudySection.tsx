import { CaseStudySectionData } from "@/types/caseStudy";
import ArtifactBlock from "@/components/ArtifactBlock";
import MetricsGrid from "@/components/MetricsGrid";

function SectionBody({ section }: { section: CaseStudySectionData }) {
  return (
    <>
      {section.heading && (
        <h2 className="font-display text-h2 mb-6">{section.heading}</h2>
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
          {list.asList ? (
            <ul className="space-y-2 pl-4">
              {list.items.map((item, i) => (
                <li
                  key={i}
                  className="text-body text-ink-muted relative before:content-['•'] before:absolute before:-left-4"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
          ) : (
            <div className="space-y-4">
              {list.items.map((item, i) => (
                <p key={i} className="text-body text-ink-muted" dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default function CaseStudySection({ section }: { section: CaseStudySectionData }) {
  const hasImages = !!section.images?.length;
  const hasBody = !!section.subLists?.length;
  const hasMetrics = !!section.metrics?.length;
  const textWidthClass = section.fullWidth ? "w-full" : "max-w-reading";

  // Layout A: body text + images → side-by-side
  if (hasBody && hasImages) {
    return (
      <div className="py-16 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className={textWidthClass}>
            <SectionBody section={section} />
          </div>
          <div className="grid grid-cols-2 gap-4 content-start">
            {section.images!.map((img) => (
              <ArtifactBlock key={img.id} src={img.src} caption={img.caption} aspect="aspect-[9/19]" />
            ))}
          </div>
        </div>
        {hasMetrics && (
          <div className="mt-10">
            <MetricsGrid metrics={section.metrics!} />
          </div>
        )}
      </div>
    );
  }

  // Layout B: images only → full-width grid above metrics
  if (hasImages && !hasBody) {
    return (
      <div className="py-16 border-t border-line">
        {section.heading && (
          <h2 className="font-display text-h2 mb-8">{section.heading}</h2>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
  {section.images!.map((img) => (
    <div key={img.id} className="max-w-[200px] mx-auto">
      <img
        src={img.src || ""}
        alt={img.caption || ""}
        className="w-full h-auto"
      />
    </div>
  ))}
</div>
        {hasMetrics && <MetricsGrid metrics={section.metrics!} />}
      </div>
    );
  }

  // Layout C: body text only
  return (
    <div className="py-16 border-t border-line">
      <div className={textWidthClass}>
        <SectionBody section={section} />
      </div>
      {hasMetrics && (
        <div className="mt-10">
          <MetricsGrid metrics={section.metrics!} />
        </div>
      )}
    </div>
  );
}



