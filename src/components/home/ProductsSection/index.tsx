import shared from "../shared/SharedLayout.module.scss";
import type { LocalizedContent } from "../types";
import styles from "./ProductsSection.module.scss";

type ProductsSectionProps = {
  content: LocalizedContent;
};

export function ProductsSection({ content }: ProductsSectionProps) {
  return (
    <section id="products" className={`${shared.section} ${shared.sectionBeige}`}>
      <div className={shared.container}>
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
