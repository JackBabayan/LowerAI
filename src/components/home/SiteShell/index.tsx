"use client";

import { useMemo, useState, type ReactNode } from "react";
import { languageOptions, localizedContent, organizationSchema } from "../content";
import { Header } from "../Header";
import { SiteFooter } from "../SiteFooter";
import { SiteLocaleContext } from "../site-locale-context";
import type { Language } from "../types";
import styles from "./SiteShell.module.scss";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const [language, setLanguage] = useState<Language>("en");
  const content = localizedContent[language];

  const languageButtons = useMemo(
    () => [
      {
        code: "en" as const,
        label: languageOptions[0].label,
        ariaLabel: content.labels.languageEnglish,
      },
      {
        code: "hy" as const,
        label: languageOptions[1].label,
        ariaLabel: content.labels.languageArmenian,
      },
      {
        code: "ru" as const,
        label: languageOptions[2].label,
        ariaLabel: content.labels.languageRussian,
      },
    ],
    [
      content.labels.languageArmenian,
      content.labels.languageEnglish,
      content.labels.languageRussian,
    ]
  );

  const localeValue = useMemo(
    () => ({ language, setLanguage, content }),
    [language, content]
  );

  return (
    <SiteLocaleContext.Provider value={localeValue}>
      <div className={styles.shell}>
        <Header
          language={language}
          content={content}
          onLanguageChange={setLanguage}
          languageButtons={languageButtons}
        />
        {children}
        <SiteFooter content={content} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </div>
    </SiteLocaleContext.Provider>
  );
}
