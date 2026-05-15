"use client";

import { useEffect } from "react";
import { site } from "@/content";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function BookDialog({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      aria-modal="true"
      role="dialog"
      aria-labelledby="book-dialog-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-6 animate-dialog-backdrop"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-bg/85 backdrop-blur-sm" />
      <div
        className="animate-dialog-card relative w-full max-w-sm rounded-sm border border-line bg-elev p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full text-muted transition-colors hover:bg-line/40 hover:text-fg"
        >
          <span aria-hidden className="text-lg leading-none">
            ×
          </span>
        </button>

        <p className="font-display text-xs uppercase tracking-widest2 text-accent">
          Bookings
        </p>
        <h2
          id="book-dialog-title"
          className="mt-4 font-display text-2xl font-medium text-fg"
        >
          Book a set
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Available for DJ gigs — clubs, bars, listening rooms, private events.
          Reach out with dates, venue, and a quick vibe check.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <a
            href={site.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-accent px-5 py-2.5 text-center font-display text-[11px] font-medium uppercase tracking-widest2 text-bg transition-colors hover:bg-accent-bright"
          >
            DM on Instagram
          </a>
          <a
            href={`mailto:${site.bookingEmail}?subject=Booking%20request%20—%20Ahko`}
            className="rounded-full border border-line px-5 py-2.5 text-center font-display text-[11px] font-medium uppercase tracking-widest2 text-fg transition-colors hover:border-accent hover:text-accent"
          >
            Send me an email
          </a>
        </div>
      </div>
    </div>
  );
}
