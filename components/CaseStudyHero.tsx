export default function CaseStudyHero({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="bg-sage-400">
      <div className="max-w-page mx-auto px-6 md:px-10 py-16 md:py-24 flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        <div
          className="placeholder-block w-full md:w-[35%] aspect-[4/3] shrink-0"
          aria-hidden="true"
        />
        <div className="flex-1">
          <h1 className="font-display text-h1 text-ink mb-4">{title}</h1>
          <p className="text-body text-ink/80">{description}</p>
        </div>
      </div>
    </section>
  );
}
