export default function SupportingTextSection({
  heading,
  groups,
}: {
  heading: string;
  groups: { label: string; items: string[] }[];
}) {
  return (
    <div className="py-16 border-t border-line">
      <div className="max-w-reading">
        <h2 className="font-display text-h2 mb-8">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {groups.map((group) => (
            <div key={group.label}>
              <p className="text-small font-semibold text-ink mb-3">
                {group.label}
              </p>
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
