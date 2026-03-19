import shared from "../shared/SharedLayout.module.scss";
import type { LocalizedContent } from "../types";
import styles from "./ContactSection.module.scss";

type ContactSectionProps = {
  content: LocalizedContent;
};

export function ContactSection({ content }: ContactSectionProps) {
  return (
    <section id="contact" className={`${shared.section} ${shared.sectionDark}`}>
      <div className={shared.container}>
        <h2>{content.contact.title}</h2>
        <p className={styles.contactLead}>{content.contact.subtitle}</p>
        <a className={styles.contactEmail} href={`mailto:${content.contact.email}`}>
          {content.contact.email}
        </a>

        <form className={styles.contactForm}>
          <label>
            {content.labels.name}
            <input type="text" name="name" placeholder={content.contact.namePlaceholder} />
          </label>
          <label>
            {content.labels.email}
            <input
              type="email"
              name="email"
              placeholder={content.contact.emailPlaceholder}
            />
          </label>
          <label>
            {content.labels.message}
            <textarea
              name="message"
              rows={5}
              placeholder={content.contact.messagePlaceholder}
            />
          </label>
          <button type="submit">{content.labels.submit}</button>
        </form>
      </div>
    </section>
  );
}
