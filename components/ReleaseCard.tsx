import type { Platform, Release } from "@/content/releases";

const platformLabel: Record<Platform, string> = {
  spotify: "Spotify",
  appleMusic: "Apple Music",
  youtube: "YouTube",
  bandcamp: "Bandcamp",
  soundcloud: "SoundCloud",
};

const kindLabel: Record<Release["kind"], string> = {
  album: "Album",
  ep: "EP",
  single: "Single",
};

export function ReleaseCard({ release }: { release: Release }) {
  const entries = (Object.entries(release.links) as Array<[Platform, string]>)
    .filter(([, url]) => Boolean(url));

  const primary = entries[0];

  return (
    <article className="group flex flex-col gap-4">
      <a
        href={primary?.[1]}
        target="_blank"
        rel="noreferrer"
        aria-label={`Listen to ${release.title} on ${primary ? platformLabel[primary[0]] : ""}`}
        className="relative block aspect-square overflow-hidden rounded-sm bg-elev"
      >
        {release.coverUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={release.coverUrl}
            alt={`${release.title} cover art`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-elev via-bg to-accent/20">
            <span className="font-display text-3xl font-semibold uppercase tracking-widest2 text-muted">
              {release.title
                .split(" ")
                .map((w) => w[0])
                .join("")
                .slice(0, 2)}
            </span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </a>

      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-lg font-medium text-fg">
          {release.title}
        </h3>
        <span className="shrink-0 font-display text-xs uppercase tracking-widest2 text-muted">
          {kindLabel[release.kind]} · {release.year}
        </span>
      </div>

      {entries.length > 0 ? (
        <ul className="flex flex-wrap gap-2">
          {entries.map(([platform, url]) => (
            <li key={platform}>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-line px-3 py-1 text-[11px] uppercase tracking-widest2 text-muted transition-colors hover:border-accent hover:text-accent"
              >
                {platformLabel[platform]}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
