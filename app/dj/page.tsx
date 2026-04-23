import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionTracker } from "@/components/SectionTracker";
import { SoundCloudEmbed } from "@/components/SoundCloudEmbed";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { sets } from "@/content/sets";
import { site } from "@/content/site";
import { songOfTheMoment } from "@/content/song-of-the-moment";

export const metadata: Metadata = {
  title: "DJ",
  description: `${site.artistName} — DJ sets and current rotation.`,
};

const sections = [
  { id: "intro", label: "Intro" },
  { id: "song", label: "Song of the moment" },
  { id: "sets", label: "Sets" },
  { id: "book", label: "Bookings" },
];

export default function DjPage() {
  return (
    <>
      <SectionTracker sections={sections} />

      <section id="intro" className="px-6 pb-10 pt-6 md:px-10 md:pb-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-display text-xs uppercase tracking-widest2 text-accent">
            {site.motto}
          </p>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-fg md:text-7xl">
            DJ
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            A running log of what I&apos;m playing — the track that&apos;s on
            repeat, and the sets I&apos;ve recorded.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#sets"
              className="inline-flex items-center rounded-full bg-accent px-5 py-2 text-xs font-medium uppercase tracking-widest2 text-bg transition-colors hover:bg-accent-bright"
            >
              DJ sets
            </a>
            <a
              href="/"
              className="inline-flex items-center rounded-full border border-line px-5 py-2 text-xs font-medium uppercase tracking-widest2 text-fg transition-colors hover:border-accent hover:text-accent"
            >
              Listen
            </a>
            <a
              href="#book"
              className="inline-flex items-center rounded-full border border-line px-5 py-2 text-xs font-medium uppercase tracking-widest2 text-fg transition-colors hover:border-accent hover:text-accent"
            >
              Book
            </a>
          </div>
        </div>
      </section>

      <section id="song" className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="On repeat" title="Song of the moment" />
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
            <div className="w-full md:w-[420px] md:shrink-0">
              <YouTubeEmbed
                videoId={songOfTheMoment.youtubeId}
                title={`${songOfTheMoment.title} — ${songOfTheMoment.artist}`}
              />
            </div>
            <div className="md:flex-1">
              <h3 className="font-display text-xl font-medium text-fg md:text-2xl">
                {songOfTheMoment.title}
              </h3>
              <p className="mt-2 font-display text-xs uppercase tracking-widest2 text-muted">
                {songOfTheMoment.artist}
              </p>
              {songOfTheMoment.note ? (
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                  {songOfTheMoment.note}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section id="sets" className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Recorded" title="Sets" />
          <div className="grid grid-cols-1 gap-12">
            {sets.map((set) => (
              <article key={set.url} className="flex flex-col gap-4">
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-medium text-fg md:text-2xl">
                      {set.title}
                    </h3>
                    {set.subtitle ? (
                      <p className="mt-1 font-display text-xs uppercase tracking-widest2 text-muted">
                        {set.subtitle}
                      </p>
                    ) : null}
                  </div>
                  <a
                    href={set.url}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 font-display text-xs uppercase tracking-widest2 text-muted hover:text-accent transition-colors"
                  >
                    Open ↗
                  </a>
                </div>
                {set.platform === "soundcloud" ? (
                  <SoundCloudEmbed url={set.url} title={set.title} />
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Gigs" title="Book a set" />
          <div className="flex flex-wrap gap-3">
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-xs font-medium uppercase tracking-widest2 text-bg transition-colors hover:bg-accent-bright"
            >
              DM on Instagram
            </a>
            <a
              href={`mailto:${site.bookingEmail}?subject=Booking%20request%20—%20Ahko`}
              className="inline-flex items-center rounded-full border border-line px-5 py-2.5 text-xs font-medium uppercase tracking-widest2 text-fg transition-colors hover:border-accent hover:text-accent"
            >
              Send me an email
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
