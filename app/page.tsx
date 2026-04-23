import Image from "next/image";
import { ReleaseCard } from "@/components/ReleaseCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionTracker } from "@/components/SectionTracker";
import { releases } from "@/content/releases";
import { site } from "@/content/site";

const sections = [
  { id: "intro", label: "Intro" },
  { id: "releases", label: "Releases" },
  { id: "book", label: "Bookings" },
];

export default function ArtistPage() {
  return (
    <>
      <SectionTracker sections={sections} />

      <section
        id="intro"
        className="relative overflow-hidden px-6 pb-24 pt-6 md:px-10 md:pb-32"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <div className="order-2 md:order-1">
            <p className="font-display text-xs uppercase tracking-widest2 text-accent">
              {site.motto}
            </p>
            <h1 className="mt-6 font-display text-6xl font-semibold leading-[0.95] tracking-tight text-fg md:text-8xl">
              {site.artistName}
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted md:text-lg">
              {site.about}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#releases"
                className="inline-flex items-center rounded-full bg-accent px-5 py-2 text-xs font-medium uppercase tracking-widest2 text-bg transition-colors hover:bg-accent-bright"
              >
                Listen
              </a>
              <a
                href="/dj"
                className="inline-flex items-center rounded-full border border-line px-5 py-2 text-xs font-medium uppercase tracking-widest2 text-fg transition-colors hover:border-accent hover:text-accent"
              >
                DJ sets
              </a>
              <a
                href="#book"
                className="inline-flex items-center rounded-full border border-line px-5 py-2 text-xs font-medium uppercase tracking-widest2 text-fg transition-colors hover:border-accent hover:text-accent"
              >
                Book
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="grain glow relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-sm bg-elev">
              <Image
                src="/hero.jpg"
                alt="Ahko"
                fill
                priority
                sizes="(min-width: 768px) 420px, 90vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section id="releases" className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="01" title="Releases" />
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {releases.map((release) => (
              <ReleaseCard key={release.title} release={release} />
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="02" title="Bookings" />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              Available for DJ gigs — clubs, bars, listening rooms, private
              events. Reach out with dates, venue, and a quick vibe check.
            </p>
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
        </div>
      </section>
    </>
  );
}
