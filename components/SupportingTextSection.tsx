export default function SupportingTextSection({
  heading,
  groups,
}: {
  heading?: string;
  groups: { label?: string; items: string[] }[];
}) {
  const visibleGroups = groups.filter((g) => g.items.length > 0);

  if (!heading && visibleGroups.length === 0) return null;

  return (
    <div className="py-16 border-t border-line">
      <div className="max-w-reading">
        {heading && <h2 className="font-display text-h2 mb-8">{heading}</h2>}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {visibleGroups.map((group, idx) => (
            <div key={group.label || idx}>
              {group.label && (
                <p className="text-small font-semibold text-ink mb-3">
                  {group.label}
                </p>
              )}
              <div className="space-y-4">
                {group.items.map((item, i) => (
                  <p key={i} className="text-body text-ink-muted">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
