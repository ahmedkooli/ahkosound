"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { BookDialog } from "./BookDialog";

type Ctx = { open: () => void; close: () => void };

const BookDialogContext = createContext<Ctx | null>(null);

export function useBookDialog(): Ctx {
  const ctx = useContext(BookDialogContext);
  if (!ctx) {
    throw new Error("useBookDialog must be used inside <BookDialogProvider>");
  }
  return ctx;
}

export function BookDialogProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <BookDialogContext.Provider value={{ open, close }}>
      {children}
      <BookDialog open={isOpen} onClose={close} />
    </BookDialogContext.Provider>
  );
}
