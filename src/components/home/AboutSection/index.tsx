import shared from "../shared/SharedLayout.module.scss";
import type { LocalizedContent } from "../types";
import styles from "./AboutSection.module.scss";

type AboutSectionProps = {
  content: LocalizedContent;
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section id="about" className={`${shared.section} ${shared.sectionLight}`}>
      <div className={shared.container}>
        <h2>{content.about.title}</h2>
        <p className={styles.lead}>{content.about.lead}</p>

        <div className={styles.columns3}>
          <article className={styles.infoCard}>
            <h3>{content.about.missionTitle}</h3>
            <p>{content.about.missionText}</p>
          </article>
          <article className={styles.infoCard}>
            <h3>{content.about.problemTitle}</h3>
            <p>{content.about.problemText}</p>
          </article>
          <article className={styles.infoCard}>
            <h3>{content.about.approachTitle}</h3>
            <p>{content.about.approachText}</p>
          </article>
        </div>

        <div className={styles.values}>
          {content.about.values.map((value) => (
            <article key={value.title} className={styles.valueCard}>
              <h4>{value.title}</h4>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
