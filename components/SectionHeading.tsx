type Props = {
  eyebrow?: string;
  title: string;
};

export function SectionHeading({ eyebrow, title }: Props) {
  return (
    <div className="mb-10 flex items-baseline gap-4">
      {eyebrow ? (
        <span className="font-display text-xs uppercase tracking-widest2 text-accent">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-2xl font-medium text-fg md:text-3xl">
        {title}
      </h2>
    </div>
  );
}
