import Image from 'next/image';
import Link from 'next/link';
import BrandTagline from '@/components/BrandTagline/BrandTagline';
import { BRAND, BRAND_LOGO, BRAND_LOGO_HEIGHT, BRAND_LOGO_WIDTH } from '@/lib/seo';
import styles from './logo.module.css';

export default function Logo({
  size = 'md',
  className = '',
  onClick,
  showTagline = false,
  centered = false,
  nav = false,
}) {
  return (
    <div
      className={`${styles.wrap} ${styles[size] || ''} ${nav ? styles.nav : ''} ${showTagline ? styles.withTagline : ''} ${centered ? styles.centered : ''} ${className}`.trim()}
    >
      <Link
        href="/"
        className={styles.logo}
        aria-label={`${BRAND} Home`}
        onClick={onClick}
      >
        <Image
          src={BRAND_LOGO}
          alt={`${BRAND} logo`}
          width={BRAND_LOGO_WIDTH}
          height={BRAND_LOGO_HEIGHT}
          unoptimized
          priority={size === 'lg'}
          className={styles.image}
        />
      </Link>
      {showTagline ? <BrandTagline className={styles.tagline} /> : null}
    </div>
  );
}
