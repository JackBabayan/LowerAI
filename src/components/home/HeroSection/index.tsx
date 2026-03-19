import shared from "../shared/SharedLayout.module.scss";
import type { LocalizedContent } from "../types";
import styles from "./HeroSection.module.scss";

type HeroSectionProps = {
  content: LocalizedContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className={`${shared.section} ${styles.hero}`}>
      <div className={shared.container}>
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
