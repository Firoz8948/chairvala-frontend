import { ArrowRight } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import ctaStyles from '@/components/CTAButton/ctaButton.module.css';
import styles from './banner.module.css';

const COPY = {
  headline: 'Where Design Meets Durability',
  subtitle:
    'Elevate your spaces with beautifully crafted furniture that blends modern aesthetics with exceptional durability',
};

export default function BannerHeroCopy({ href = '/shop', variant = 'desktop' }) {
  const isMobile = variant === 'mobile';
  const ctaLabel = isMobile ? 'Shop now' : 'Shop collection';

  if (isMobile) {
    return (
      <div className={`${styles.heroCopy} ${styles.heroCopyMobile}`}>
        <div className={styles.heroCopyMobileInner}>
          <CTAButton
            href={href}
            variant="dark"
            className={ctaStyles.ctaMobileHero}
          >
            {ctaLabel} <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </CTAButton>
          <p className={styles.heroByline}>By Shree Ram Steel</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.heroCopy} ${styles.heroCopyDesktop}`}>
      <div className={styles.heroCopyPanel}>
        <div className={styles.heroCopyInner}>
          <h2 className={styles.heroHeadline}>{COPY.headline}</h2>
          <p className={styles.heroSubtitle}>{COPY.subtitle}</p>
          <CTAButton href={href} variant="dark">
            {ctaLabel} <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </CTAButton>
          <p className={styles.heroByline}>By Shree Ram Steel</p>
        </div>
      </div>
    </div>
  );
}
