import { BRAND_DOMAIN, POWERED_BY_TAGLINE } from '@/lib/seo';
import styles from './brandTagline.module.css';

export default function BrandTagline({ className = '', showDomain = true }) {
  return (
    <p className={`${styles.tagline} ${className}`.trim()}>
      {showDomain ? (
        <>
          <span className={styles.domain}>{BRAND_DOMAIN}</span>
          <span className={styles.sep} aria-hidden="true">
            ·
          </span>
        </>
      ) : null}
      <span className={styles.powered}>{POWERED_BY_TAGLINE}</span>
    </p>
  );
}
