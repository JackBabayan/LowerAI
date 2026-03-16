import styles from "@/app/page.module.scss";
import type { LocalizedContent } from "./types";

type HeroSectionProps = {
  content: LocalizedContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className={`${styles.section} ${styles.hero}`}>
      <div className={styles.container}>
        <h1>
          {content.hero.titlePrefix} <span>{content.hero.titleEmphasis}</span>{" "}
          {content.hero.titleSuffix}
        </h1>
        <p>{content.hero.subtitle}</p>
        <a className={styles.scrollIndicator} href="#featured">
          {content.labels.learnMore}
        </a>
      </div>
    </section>
  );
}
