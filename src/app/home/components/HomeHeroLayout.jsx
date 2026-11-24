'use client';

import BannerSlider from './BannerSlider';
import styles from './banner.module.css';

export default function HomeHeroLayout({ homeTitle, desktopSlides, mobileSlides }) {
  return (
    <section className={styles.banner} aria-labelledby="home-banner-heading">
      <h1 id="home-banner-heading" className={styles.srOnly}>
        {homeTitle}
      </h1>
      <div className={styles.desktopOnly}>
        <BannerSlider slides={desktopSlides} device="desktop" />
      </div>
      <div className={styles.mobileOnly}>
        <BannerSlider slides={mobileSlides} device="mobile" />
      </div>
    </section>
  );
}
