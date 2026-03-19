import Image from "next/image";
import styles from "@/app/page.module.scss";
import type { LocalizedContent } from "./types";

type SiteFooterProps = {
  content: LocalizedContent;
  contentDate: string;
};

export function SiteFooter({ content, contentDate }: SiteFooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
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
          <p>Content date: {contentDate}</p>
          <div>
            <a href="#">{content.labels.privacy}</a>
            <a href="#">{content.labels.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
