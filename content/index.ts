/**
 * SITE CONTENT — edit this file to update what shows on the site.
 *
 *   1. SITE              — name, motto, about, booking email, socials
 *   2. SONG OF THE MOMENT — track on repeat (DJ page)
 *   3. DJ SETS            — recorded sets (DJ page)
 *   4. RELEASES           — discography (Music page)
 *
 * After editing: `git add . && git commit -m "update content" && git push`.
 * Vercel auto-redeploys in ~90s.
 */

// ───────────────────────────────────────────────────────────────────
// 1. SITE
// ───────────────────────────────────────────────────────────────────

export const site = {
  artistName: "Ahko",
  motto: "Music from the past to the future.",
  about:
    "Synth-led electronic — disco grooves, funk basslines, late-night textures. Built for rooms that stay open late.",
  bookingEmail: "ahkosound@gmail.com",
  socials: {
    spotify:
      "https://open.spotify.com/intl-fr/artist/3a8tOnhS6onOhPS63erIiu",
    appleMusic: "https://music.apple.com/us/artist/ahko/1557927533",
    bandcamp: "https://ahkosound.bandcamp.com/",
    youtube: "https://www.youtube.com/@ahkosound",
    instagram: "https://www.instagram.com/ahkosound",
    soundcloud: "https://soundcloud.com/ahko26",
  },
};

// ───────────────────────────────────────────────────────────────────
// 2. SONG OF THE MOMENT
//    Swap this whenever you want to feature a new track.
//    `youtubeId` is the part after `v=` in the YouTube URL.
// ───────────────────────────────────────────────────────────────────

export type SongOfTheMoment = {
  title: string;
  artist: string;
  youtubeId: string;
  note?: string;
};

export const songOfTheMoment: SongOfTheMoment = {
  title: "Dance On (Young Marco Remix)",
  artist: "Cassius",
  youtubeId: "21LAUFSjlhI",
  note: undefined,
};

// ───────────────────────────────────────────────────────────────────
// 3. DJ SETS
//    Newest first. Add a new entry at the top each time you record one.
// ───────────────────────────────────────────────────────────────────

export type DJSet = {
  title: string;
  subtitle?: string;
  platform: "soundcloud" | "mixcloud" | "youtube";
  url: string;
};

export const sets: DJSet[] = [
  {
    title: "AHKO — Demo DJ Set",
    subtitle: "UKG, HOUSE, GROOVE",
    platform: "soundcloud",
    url: "https://soundcloud.com/ahko26/ukg-house-groove",
  },
];

// ───────────────────────────────────────────────────────────────────
// 4. RELEASES
//    Newest first. Order of platforms inside `links` controls the order
//    of the platform pills shown under each release.
// ───────────────────────────────────────────────────────────────────

export type Platform =
  | "spotify"
  | "appleMusic"
  | "bandcamp"
  | "youtube"
  | "soundcloud";

export type Release = {
  title: string;
  kind: "album" | "ep" | "single";
  year: number;
  coverUrl?: string;
  links: Partial<Record<Platform, string>>;
};

export const releases: Release[] = [
  {
    title: "Soft Mechanica",
    kind: "ep",
    year: 2025,
    coverUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/33/00/76/330076ab-1726-83a9-307c-01bf227c70df/artwork.jpg/1200x1200bb.jpg",
    links: {
      spotify: "https://open.spotify.com/album/1ugaLqxjoWxxTILapG3Ap4",
      appleMusic:
        "https://music.apple.com/us/album/soft-mechanica-ep/1839257343",
      bandcamp: "https://ahkosound.bandcamp.com/album/soft-mechanica",
      youtube: "https://www.youtube.com/@ahkosound/releases",
    },
  },
  {
    title: "Cycle",
    kind: "album",
    year: 2021,
    coverUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/67/85/b2/6785b2c2-24a7-7f03-a04b-4479028359e8/artwork.jpg/1200x1200bb.jpg",
    links: {
      spotify: "https://open.spotify.com/album/5yK6WyxsxkFpdoYRgboCS8",
      appleMusic: "https://music.apple.com/us/album/cycle/1577623903",
      bandcamp: "https://ahkosound.bandcamp.com/album/cycle",
      youtube: "https://www.youtube.com/@ahkosound/releases",
    },
  },
  {
    title: "Shellcut",
    kind: "single",
    year: 2021,
    coverUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/14/1e/91/141e9136-6278-44eb-c81a-72c93dec0134/artwork.jpg/1200x1200bb.jpg",
    links: {
      spotify: "https://open.spotify.com/track/27jAfDYkTK24mu5tqRBu8B",
      appleMusic: "https://music.apple.com/us/album/shellcut/1564421515",
      bandcamp: "https://ahkosound.bandcamp.com/track/shellcut",
      youtube: "https://www.youtube.com/@ahkosound/releases",
    },
  },
  {
    title: "Thumbtack",
    kind: "single",
    year: 2021,
    coverUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/b1/34/dc/b134dc9d-7869-ea07-634c-c2954b9486bb/artwork.jpg/1200x1200bb.jpg",
    links: {
      spotify: "https://open.spotify.com/track/6f8HEro6sUXjYFHjcdYmbZ",
      appleMusic: "https://music.apple.com/us/album/thumbtack/1557939325",
      bandcamp: "https://ahkosound.bandcamp.com/track/thumbtack",
      youtube: "https://www.youtube.com/@ahkosound/releases",
    },
  },
];
