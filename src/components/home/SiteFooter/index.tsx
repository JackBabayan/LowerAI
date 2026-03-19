import Image from "next/image";
import shared from "../shared/SharedLayout.module.scss";
import type { LocalizedContent } from "../types";
import styles from "./SiteFooter.module.scss";

type SiteFooterProps = {
  content: LocalizedContent;
};

export function SiteFooter({ content }: SiteFooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={`${shared.container} ${styles.footerInner}`}>
        <div>
          <a className={styles.logo} href="#top" aria-label="Noctua Tech home">
            <Image
              src="/Logo_Noctua_Tech.svg"
              alt="Noctua Tech logo"
              width={24}
              height={24}
              className={styles.logoImage}
            />
            <span>Noctua Tech</span>
          </a>
          <p>{content.footer.tagline}</p>
        </div>
        <div className={styles.footerMeta}>
          <p>{content.footer.copyright}</p>
          <div>
            <a href="#">{content.labels.privacy}</a>
            <a href="#">{content.labels.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
