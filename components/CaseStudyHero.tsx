export default function CaseStudyHero({
  title,
  description,
  heroMetricsSummary,
  heroImage,
}: {
  title: string;
  description: string;
  heroMetricsSummary?: string;
  heroImage?: string;
}) {
  return (
    <section className="bg-sage-400">
      <div className="max-w-page mx-auto px-6 md:px-10 py-16 md:py-24 flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        {heroImage ? (
          <img
            src={heroImage}
            alt={title}
            className="w-full md:w-[35%] aspect-[4/3] object-cover rounded shrink-0"
          />
        ) : (
          <div
            className="placeholder-block w-full md:w-[35%] aspect-[4/3] shrink-0"
            aria-hidden="true"
          />
        )}
        <div className="flex-1">
          <h1 className="font-display text-h1 text-ink mb-4">{title}</h1>
          <p className="text-body text-ink/80 mb-6">{description}</p>
          {heroMetricsSummary && (
            <p className="text-small text-ink/60">{heroMetricsSummary}</p>
          )}
        </div>
      </div>
    </section>
  );
}
