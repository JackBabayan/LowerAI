import Image from "next/image";
import shared from "../shared/SharedLayout.module.scss";
import type { Language, LocalizedContent } from "../types";
import styles from "./Header.module.scss";

type HeaderProps = {
  language: Language;
  content: LocalizedContent;
  onLanguageChange: (language: Language) => void;
  languageButtons: { code: Language; label: string; ariaLabel: string }[];
};

export function Header({
  language,
  content,
  onLanguageChange,
  languageButtons,
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={`${shared.container} ${styles.headerInner}`}>
        <a className={styles.logo} href="/" aria-label="Noctua Tech home">
          <Image
            src="/Logo_Noctua_Tech.svg"
            alt="Noctua Tech logo"
            width={30}
            height={30}
            className={styles.logoImage}
            priority
          />
          <span>Noctua Tech</span>
        </a>

        <nav className={styles.desktopNav} aria-label={content.labels.primaryNav}>
          {content.navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.langSwitch} aria-label={content.labels.languageSwitch}>
          {languageButtons.map((button) => (
            <button
              key={button.code}
              type="button"
              aria-label={button.ariaLabel}
              onClick={() => onLanguageChange(button.code)}
              className={language === button.code ? styles.langActive : ""}
            >
              {button.label}
            </button>
          ))}
        </div>

        <details className={styles.mobileMenu}>
          <summary aria-label={content.labels.toggleMenu}>
            <span />
            <span />
            <span />
          </summary>
          <nav aria-label={content.labels.mobileNav}>
            {content.navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
