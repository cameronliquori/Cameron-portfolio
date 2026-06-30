import { ContentSection } from "@/types/caseStudy";
import ArtifactBlock from "@/components/ArtifactBlock";

export default function DecisionSection({ section }: { section: ContentSection }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 py-16 border-t border-line">
      <div className="max-w-reading">
        <h3 className="font-display text-h2 mb-2">{section.heading}</h3>
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
      </div>

      {section.images && section.images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start max-w-artifact">
          {section.images.map((img) => (
            <ArtifactBlock key={img.id} caption={img.caption} />
          ))}
        </div>
      )}
    </div>
  );
}
