import Image from "next/image";

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
      <div className="max-w-page mx-auto px-6 md:px-10 py-16 md:py-24 flex flex-col md:flex-row gap-10 md:gap-16 items-stretch">
        {heroImage ? (
          <div className="w-full md:w-[43%] aspect-[4/3] relative shrink-0">
            <Image
              src={heroImage}
              alt={title}
              fill
              className="object-cover rounded"
            />
          </div>
        ) : (
          <div
            className="placeholder-block w-full md:w-[43%] aspect-[4/3] shrink-0"
            aria-hidden="true"
          />
        )}
        <div className="flex-1 flex flex-col md:items-end md:text-right justify-between">
          <div className="flex-1 flex flex-col md:items-end justify-center">
            <h1 className="font-display text-h1 text-ink mb-4 md:whitespace-nowrap">{title}</h1>
            <p className="text-body text-ink/80">{description}</p>
          </div>
          {heroMetricsSummary && (
            <p className="text-small text-ink/60 mt-6 md:mt-0">{heroMetricsSummary}</p>
          )}
        </div>
      </div>
    </section>
  );
}

