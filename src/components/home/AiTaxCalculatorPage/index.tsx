"use client";

import { N8nChatEmbed } from "../N8nChatEmbed";
import { useSiteLocale } from "../site-locale-context";
import shared from "../shared/SharedLayout.module.scss";
import styles from "./AiTaxCalculatorPage.module.scss";

export function AiTaxCalculatorPage() {
  const { content } = useSiteLocale();
  const { aiTaxCalculator } = content;

  return (
    <>
      <main id="top" className={styles.main}>
        <section className={`${shared.section} ${shared.sectionLight}`}>
          <div className={shared.container}>
            <h1 className={styles.title}>{aiTaxCalculator.title}</h1>
            <p className={styles.subtitle}>{aiTaxCalculator.subtitle}</p>
            <p className={styles.lead}>{aiTaxCalculator.lead}</p>
            <div className={styles.chat}>
              <N8nChatEmbed initialMessages={aiTaxCalculator.initialMessages} />
            </div>
            <p className={styles.disclaimer}>{aiTaxCalculator.disclaimer}</p>
          </div>
        </section>
        
      </main>

    </>
  );
}
