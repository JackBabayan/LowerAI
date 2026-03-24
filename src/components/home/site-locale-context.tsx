"use client";

import { createContext, useContext } from "react";
import type { Language, LocalizedContent } from "./types";

type SiteLocaleValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  content: LocalizedContent;
};

const SiteLocaleContext = createContext<SiteLocaleValue | null>(null);

export function useSiteLocale(): SiteLocaleValue {
  const ctx = useContext(SiteLocaleContext);
  if (!ctx) {
    throw new Error("useSiteLocale must be used within SiteShell");
  }
  return ctx;
}

export { SiteLocaleContext };
