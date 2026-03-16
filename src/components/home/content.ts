import siteContentJson from "@/content/site-content.json";
import type { Language, SiteContentPayload } from "./types";

const siteContent = siteContentJson as SiteContentPayload;

export const contentDate = siteContent.contentDate;
export const organizationSchema = siteContent.organizationSchema;
export const localizedContent = siteContent.locales;

export const languageOptions: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "hy", label: "ARM" },
  { code: "ru", label: "RU" },
];
