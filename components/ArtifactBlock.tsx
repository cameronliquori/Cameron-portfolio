export default function ArtifactBlock({
  src,
  caption,
  aspect = "aspect-[9/19]",
}: {
  src?: string;
  caption?: string;
  aspect?: string;
}) {
  return (
    <figure>
      {src ? (
        <img
          src={src}
          alt={caption || ""}
          className={`w-full ${aspect} object-cover rounded`}
        />
      ) : (
        <div className={`placeholder-block w-full ${aspect}`} aria-hidden="true" />
      )}
      {caption && (
        <figcaption className="text-small text-ink-muted mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
