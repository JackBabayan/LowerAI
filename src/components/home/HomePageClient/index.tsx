"use client";

import { AboutSection } from "../AboutSection";
import { ContactSection } from "../ContactSection";
import { FeaturedSection } from "../FeaturedSection";
import { HeroSection } from "../HeroSection";
import { ProductsSection } from "../ProductsSection";
import { useSiteLocale } from "../site-locale-context";
import { TeamSection } from "../TeamSection";

export function HomePageClient() {
  const { content } = useSiteLocale();

  return (
    <main id="top">
      <HeroSection content={content} />
      <FeaturedSection content={content} />
      <AboutSection content={content} />
      <ProductsSection content={content} />
      <TeamSection content={content} />
      <ContactSection content={content} />
    </main>
  );
}
