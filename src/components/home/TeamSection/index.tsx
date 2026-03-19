import Image from "next/image";
import shared from "../shared/SharedLayout.module.scss";
import type { LocalizedContent } from "../types";
import styles from "./TeamSection.module.scss";

type TeamSectionProps = {
  content: LocalizedContent;
};

export function TeamSection({ content }: TeamSectionProps) {
  return (
    <section id="team" className={`${shared.section} ${shared.sectionLight}`}>
      <div className={shared.container}>
        <h2>{content.team.title}</h2>
        <div className={styles.teamGrid}>
          {content.team.members.map((member) => (
            <article key={member.name} className={styles.teamCard}>
              <div className={styles.teamPhoto}>
                <Image
                  src={member.photo || "/file.svg"}
                  alt={member.name}
                  fill
                  className={styles.teamPhotoImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3>{member.name}</h3>
              <p className={styles.teamRole}>{member.role}</p>
              <p>{member.bio}</p>
              <a href={member.linkedin} target="_blank" rel="noreferrer">
                {content.labels.linkedin}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
