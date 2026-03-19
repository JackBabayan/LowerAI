"use client";

import { useMemo, useState } from "react";
import { AboutSection } from "../AboutSection";
import { ContactSection } from "../ContactSection";
import { languageOptions, localizedContent, organizationSchema } from "../content";
import { FeaturedSection } from "../FeaturedSection";
import { Header } from "../Header";
import { HeroSection } from "../HeroSection";
import { ProductsSection } from "../ProductsSection";
import { SiteFooter } from "../SiteFooter";
import { TeamSection } from "../TeamSection";
import type { Language } from "../types";
import styles from "./HomePageClient.module.scss";

export function HomePageClient() {
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

  return (
    <div className={styles.page}>
      <Header
        language={language}
        content={content}
        onLanguageChange={setLanguage}
        languageButtons={languageButtons}
      />

      <main id="top">
        <HeroSection content={content} />
        <FeaturedSection content={content} />
        <AboutSection content={content} />
        <ProductsSection content={content} />
        <TeamSection content={content} />
        <ContactSection content={content} />
      </main>

      <SiteFooter content={content} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </div>
  );
}
