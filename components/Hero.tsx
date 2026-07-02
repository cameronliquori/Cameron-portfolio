import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="max-w-page mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-0">
      <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
        <div className="flex-1 max-w-reading">
          <h1 className="font-display text-h1 text-ink mb-6">
            Hi! I&apos;m Cameron
          </h1>
          <p className="text-body text-ink-muted mb-10 max-w-[480px]">
            I&apos;m an L4 content designer with five years of experience
            translating complex concepts and products into intuitive user
            experiences.
          </p>
          <Button href="#contact" variant="primary">
            Contact me
          </Button>
        </div>

        {/* Placeholder for hero illustration — swap with real asset later */}
        <div
          className="hidden md:flex w-[180px] h-[180px] rounded-full border border-ink/15 items-center justify-center text-ink-muted text-small shrink-0"
          aria-hidden="true"
        >
          Illustration
        </div>
      </div>

      <img
        src="/homepage-vector.svg"
        alt=""
        aria-hidden="true"
        className="w-full mt-10"
      />
    </section>
  );
}

