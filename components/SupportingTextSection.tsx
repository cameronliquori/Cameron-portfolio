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
              <p className="text-small font-semibold text-ink mb-2">
                {group.label}
              </p>
              <ul className="space-y-1">
                {group.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-small text-ink-muted pl-4 relative before:content-['•'] before:absolute before:left-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
