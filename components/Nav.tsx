"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookButton } from "./BookButton";

export function Nav() {
  const pathname = usePathname();
  const isDj = pathname?.startsWith("/dj") ?? false;

  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-bg/80 backdrop-blur">
      <nav className="flex items-center justify-between gap-3 px-4 py-3 md:px-10 md:py-4">
        <Link
          href="/"
          aria-label="Ahko — home"
          className="font-display text-sm font-semibold uppercase tracking-widest2 text-fg transition-colors hover:text-accent"
        >
          Ahko
        </Link>

        <div
          role="tablist"
          aria-label="Section"
          className="relative grid grid-cols-2 rounded-full border border-line p-1"
        >
          <span
            aria-hidden
            className={`absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-accent transition-transform duration-300 ease-out ${
              isDj ? "translate-x-full" : "translate-x-0"
            }`}
          />
          <Link
            href="/"
            role="tab"
            aria-selected={!isDj}
            className={`relative z-10 px-4 py-1 text-center font-display text-[11px] font-medium uppercase tracking-widest2 transition-colors ${
              isDj ? "text-muted hover:text-fg" : "text-bg"
            }`}
          >
            Music
          </Link>
          <Link
            href="/dj"
            role="tab"
            aria-selected={isDj}
            className={`relative z-10 px-4 py-1 text-center font-display text-[11px] font-medium uppercase tracking-widest2 transition-colors ${
              isDj ? "text-bg" : "text-muted hover:text-fg"
            }`}
          >
            DJ
          </Link>
        </div>

        <BookButton variant="nav">Book me</BookButton>
      </nav>
    </header>
  );
}
