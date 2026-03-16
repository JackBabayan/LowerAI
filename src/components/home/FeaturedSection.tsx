import styles from "@/app/page.module.scss";
import type { LocalizedContent } from "./types";

type FeaturedSectionProps = {
  content: LocalizedContent;
};

export function FeaturedSection({ content }: FeaturedSectionProps) {
  return (
    <section
      id="featured"
      className={`${styles.section} ${styles.sectionDark} ${styles.featured}`}
    >
      <div className={styles.container}>
        <div className={styles.featuredCard}>
          <span className={styles.badge}>{content.featured.badge}</span>
          <h2>{content.featured.title}</h2>
          <p>{content.featured.description}</p>
          <div className={styles.mockup}>
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    </section>
  );
}
