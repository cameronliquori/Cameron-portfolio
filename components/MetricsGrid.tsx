import { Metric } from "@/types/caseStudy";

export default function MetricsGrid({ metrics }: { metrics: Metric[] }) {
  if (metrics.length === 0) return null;

  // 4 (or any even count that isn't 3): even 2-column grid
  if (metrics.length !== 3) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {metrics.map((metric) => (
          <div
            key={`${metric.value}-${metric.label}`}
            className="border border-line rounded-lg px-6 py-6 text-center"
          >
            <p className="font-display text-h3 text-ink">
              {metric.value}{" "}
              <span className="font-body text-body font-medium">
                {metric.label}
              </span>
            </p>
            {metric.detail && (
              <p className="text-small text-ink-muted mt-1">{metric.detail}</p>
            )}
          </div>
        ))}
      </div>
    );
  }

  // 3 metrics: full-width first tile, then two side by side
  const [first, ...rest] = metrics;

  return (
    <div className="space-y-4">
      <div className="border border-line rounded-lg px-6 py-6 text-center">
        <p className="font-display text-h3 text-ink">
          {first.value}{" "}
          <span className="font-body text-body font-medium">
            {first.label}
          </span>
        </p>
        {first.detail && (
          <p className="text-small text-ink-muted mt-1">{first.detail}</p>
        )}
      </div>
      {rest.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rest.map((metric) => (
            <div
              key={`${metric.value}-${metric.label}`}
              className="border border-line rounded-lg px-6 py-6 text-center"
            >
              <p className="font-display text-h3 text-ink">
                {metric.value}{" "}
                <span className="font-body text-body font-medium">
                  {metric.label}
                </span>
              </p>
              {metric.detail && (
                <p className="text-small text-ink-muted mt-1">{metric.detail}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
