import Link from "next/link";

export function Nav() {
  return (
    <nav className="relative z-20 flex items-center justify-between px-6 py-6 md:px-10">
      <Link
        href="/"
        className="font-display text-sm font-semibold uppercase tracking-widest2 text-fg hover:text-accent transition-colors"
      >
        Ahko
      </Link>
      <ul className="flex items-center gap-6 text-xs uppercase tracking-widest2 text-muted">
        <li>
          <Link href="/" className="hover:text-fg transition-colors">
            Music
          </Link>
        </li>
        <li>
          <Link href="/dj" className="hover:text-fg transition-colors">
            DJ
          </Link>
        </li>
      </ul>
    </nav>
  );
}
