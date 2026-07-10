import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="max-w-page mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-16">
      <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
        <div className="flex-1 max-w-reading">
          <h1 className="font-display text-h1 text-ink mb-6">
            Hi! I&apos;m Cameron ◡̈
          </h1>
          <p className="text-body text-ink-muted mb-10 max-w-[480px]">
            I&apos;m an L4 content designer with five years of experience
            translating complex concepts and products into intuitive, empowering
            user experiences.
          </p>
          <Button href="#contact" variant="primary">
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
}
