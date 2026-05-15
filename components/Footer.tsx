import { site } from "@/content";

const socials: Array<[keyof typeof site.socials, string]> = [
  ["spotify", "Spotify"],
  ["appleMusic", "Apple Music"],
  ["bandcamp", "Bandcamp"],
  ["soundcloud", "SoundCloud"],
  ["youtube", "YouTube"],
  ["instagram", "Instagram"],
];

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="font-display text-xs uppercase tracking-widest2 text-muted">
          <p>© {new Date().getFullYear()} Ahko</p>
          <p className="mt-1 text-muted/60">Music from the past to the future</p>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-widest2 text-muted">
          {socials.map(([key, label]) => (
            <li key={key}>
              <a
                href={site.socials[key]}
                target="_blank"
                rel="noreferrer"
                className="hover:text-fg transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
