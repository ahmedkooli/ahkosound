"use client";

import { ReactNode } from "react";
import { useBookDialog } from "./BookDialogProvider";

type Props = {
  variant?: "primary" | "secondary" | "nav";
  children?: ReactNode;
};

const styles: Record<NonNullable<Props["variant"]>, string> = {
  primary:
    "rounded-full bg-accent px-5 py-2 text-xs font-medium uppercase tracking-widest2 text-bg transition-colors hover:bg-accent-bright",
  secondary:
    "rounded-full border border-line px-5 py-2 text-xs font-medium uppercase tracking-widest2 text-fg transition-colors hover:border-accent hover:text-accent",
  nav: "rounded-full bg-accent px-4 py-1.5 font-display text-[11px] font-semibold uppercase tracking-widest2 text-bg transition-colors hover:bg-accent-bright",
};

export function BookButton({ variant = "primary", children = "Book me" }: Props) {
  const { open } = useBookDialog();
  return (
    <button
      type="button"
      onClick={open}
      className={`inline-flex items-center gap-2 ${styles[variant]}`}
    >
      {children}
    </button>
  );
}
