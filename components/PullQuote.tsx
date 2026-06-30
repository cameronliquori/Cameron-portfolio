export default function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="max-w-reading mx-auto my-16 border-l-2 border-sage-400 pl-6">
      <p className="font-display italic text-h3 text-ink leading-snug">
        {children}
      </p>
    </blockquote>
  );
}
