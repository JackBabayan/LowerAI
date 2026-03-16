import styles from "@/app/page.module.scss";
import type { LocalizedContent } from "./types";

type ProductsSectionProps = {
  content: LocalizedContent;
};

export function ProductsSection({ content }: ProductsSectionProps) {
  return (
    <section
      id="products"
      className={`${styles.section} ${styles.sectionBeige} ${styles.products}`}
    >
      <div className={styles.container}>
        <h2>{content.products.title}</h2>
        <div className={styles.productsGrid}>
          {content.products.items.map((product) => (
            <article key={product.title} className={styles.productCard}>
              <span className={styles.badgeSecondary}>{product.status}</span>
              <h3>{product.title}</h3>
              <p>
                <strong>{content.labels.forLabel}:</strong> {product.audience}
              </p>
              <p>{product.description}</p>
              <ul>
                {product.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
