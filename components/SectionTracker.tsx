"use client";

import { useEffect, useState } from "react";

type Section = { id: string; label: string };

export function SectionTracker({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    if (sections.length === 0) return;

    // Scrollspy: active section is the last one whose top has crossed a
    // trigger line 40% down the viewport. Robust to short sections, which
    // an "intersection ratio" approach mis-handles when neighbors are tall.
    const compute = () => {
      // When the user has scrolled to the very bottom, short trailing sections
      // (like Bookings) may never cross the trigger line — pin to the last.
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (nearBottom) {
        setActive(sections[sections.length - 1].id);
        return;
      }
      const trigger = window.innerHeight * 0.4;
      let current = sections[0].id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - trigger <= 0) {
          current = id;
        }
      }
      setActive(current);
    };

    compute();
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        compute();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [sections]);

  return (
    <aside
      aria-label="Sections"
      className="fixed left-6 top-1/2 z-10 hidden -translate-y-1/2 lg:block"
    >
      <ul className="flex flex-col gap-4">
        {sections.map((s) => {
          const isActive = s.id === active;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="group flex items-center gap-3"
                aria-current={isActive ? "true" : undefined}
              >
                <span
                  className={`block h-px transition-all duration-300 ${
                    isActive
                      ? "w-10 bg-accent"
                      : "w-5 bg-muted/40 group-hover:w-8 group-hover:bg-muted"
                  }`}
                />
                <span
                  className={`font-display text-[10px] uppercase tracking-widest2 transition-colors ${
                    isActive
                      ? "text-accent"
                      : "text-muted/60 group-hover:text-muted"
                  }`}
                >
                  {s.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
