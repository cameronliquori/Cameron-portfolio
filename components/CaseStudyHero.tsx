export default function CaseStudyHero({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="bg-sage-400">
      <div className="max-w-page mx-auto px-6 md:px-10 py-16 md:py-24">
        <h1 className="font-display text-h1 text-ink mb-4">{title}</h1>
        <p className="text-body text-ink/80 max-w-reading">{description}</p>
      </div>
    </section>
  );
}
