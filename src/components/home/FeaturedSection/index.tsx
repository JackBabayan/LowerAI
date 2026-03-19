import { useState } from "react";
import shared from "../shared/SharedLayout.module.scss";
import type { LocalizedContent } from "../types";
import styles from "./FeaturedSection.module.scss";

type FeaturedSectionProps = {
  content: LocalizedContent;
};

export function FeaturedSection({ content }: FeaturedSectionProps) {
  const [activeRoadmapIndex, setActiveRoadmapIndex] = useState(0);
  const roadmapItems = content.featured.roadmap;

  const safeActiveRoadmapIndex =
    roadmapItems.length === 0
      ? 0
      : Math.min(activeRoadmapIndex, roadmapItems.length - 1);
  const activeItem = roadmapItems[safeActiveRoadmapIndex] ?? {
    title: "",
    text: "",
  };

  return (
    <section
      id="featured"
      className={`${shared.section} ${shared.sectionDark} ${styles.featured}`}
    >
      <div className={shared.container}>
        <div className={styles.featuredCard}>
          <span className={styles.badge}>{content.featured.badge}</span>
          <h2>{content.featured.title}</h2>
          <p>{content.featured.description}</p>

          <div className={styles.roadmap}>
            <div className={styles.roadmapTitles}>
              {roadmapItems.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  className={`${styles.roadmapTitleButton} ${
                    safeActiveRoadmapIndex === index
                      ? styles.roadmapTitleButtonActive
                      : ""
                  }`}
                  onClick={() => setActiveRoadmapIndex(index)}
                  aria-pressed={safeActiveRoadmapIndex === index}
                >
                  <span
                    className={`${styles.roadmapIndicator} ${
                      safeActiveRoadmapIndex === index
                        ? styles.roadmapIndicatorActive
                        : ""
                    }`}
                    aria-hidden
                  />
                  <span className={styles.roadmapNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.roadmapTitleText}>{item.title}</span>
                </button>
              ))}
            </div>

            <div className={styles.roadmapContent}>
              <div
                key={activeItem.title || "roadmap-content"}
                className={styles.roadmapContentAnimated}
              >
                <p>{activeItem.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
