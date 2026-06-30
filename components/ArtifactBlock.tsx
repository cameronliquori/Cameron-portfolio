export default function ArtifactBlock({
  caption,
  aspect = "aspect-[4/3]",
}: {
  caption?: string;
  aspect?: string;
}) {
  return (
    <figure>
      <div className={`placeholder-block w-full ${aspect}`} aria-hidden="true" />
      {caption && (
        <figcaption className="text-small text-ink-muted mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
