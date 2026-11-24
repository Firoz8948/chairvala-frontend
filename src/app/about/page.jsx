import Image from 'next/image';
import styles from './about.module.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import PageHeroBanner from '@/components/PageHeroBanner/PageHeroBanner';
import { Store, PackageCheck, BadgeCheck, Wallet } from 'lucide-react';
import WhyChooseUs from '@/app/home/components/WhyChooseUs';
import BrandTagline from '@/components/BrandTagline/BrandTagline';
import {
  BRAND,
  BRAND_DOMAIN,
  BRAND_LOGO,
  BRAND_LOGO_HEIGHT,
  BRAND_LOGO_WIDTH,
  LEGACY_BRAND,
  POWERED_BY_TAGLINE,
  pageMetadata,
} from '@/lib/seo';

export const metadata = pageMetadata({
  title: `About Us | ${BRAND}`,
  description: `${BRAND_DOMAIN} is the online store for plastic chairs, plastic products, steel furniture and steel items at affordable prices. ${POWERED_BY_TAGLINE}.`,
  path: '/about',
});

const WHY_POINTS = [
  {
    icon: Store,
    title: 'See It Before You Buy',
    desc: 'Visit our retail store and choose plastic or steel products in person when you prefer to buy offline.',
  },
  {
    icon: PackageCheck,
    title: 'Retail & Wholesale',
    desc: 'One piece for your home or large bulk orders for shops and events — wholesale rates available.',
  },
  {
    icon: BadgeCheck,
    title: 'Trusted Quality',
    desc: 'Plastic and steel products from reliable manufacturers, checked by our team before dispatch.',
  },
  {
    icon: Wallet,
    title: 'Pay Your Way',
    desc: 'Cash on delivery, UPI, cards or net banking, all through a secure checkout.',
  },
];

const WHY_STATS = [
  { value: '5.0★', label: 'Google rating' },
  { value: '100+', label: 'Happy reviews' },
  { value: '10–7', label: 'Open Mon–Sat' },
];

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <Header />
      <PageHeroBanner
        title={`About ${BRAND_DOMAIN}`}
        subtitle={`${POWERED_BY_TAGLINE} — plastic chairs, plastic products & steel items at affordable prices.`}
      />

      <main className={styles.main}>
        <section className={styles.storySection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>OUR STORY</h2>
            <p className={styles.sectionSubtitle}>Plastic & Steel for Every Need</p>
          </div>

          <div className={styles.storyContent}>
            <div className={styles.storyMedia}>
              <Image
                src={BRAND_LOGO}
                alt={`${BRAND} logo`}
                width={BRAND_LOGO_WIDTH}
                height={BRAND_LOGO_HEIGHT}
                sizes="(max-width: 900px) 100vw, 720px"
                className={styles.storyImage}
                unoptimized
              />
              <BrandTagline className={styles.storyTagline} />
              <div className={styles.legacyBrandBlock}>
                <p className={styles.legacyBrandLabel}>{POWERED_BY_TAGLINE}</p>
                <p className={styles.legacyBrandName}>{LEGACY_BRAND}</p>
              </div>
            </div>
            <div className={styles.storyText}>
              <p className={styles.paragraph}>
                {BRAND_DOMAIN} is the online home for quality plastic and steel products at honest
                prices.
                From plastic chairs and stools to household plastic items, steel racks and steel
                furniture — we keep everyday essentials under one roof.
              </p>
              <p className={styles.paragraph}>
                Our catalog and fulfilment are backed by <strong>{LEGACY_BRAND}</strong>, a trusted
                retail and wholesale name serving homes, shops, offices, restaurants and events
                with the same quality you expect in store.
              </p>
            </div>
          </div>
        </section>

        <div className={styles.valuesWrap}>
          <WhyChooseUs title="OUR VALUES" subtitle="What We Stand For" />
        </div>

        <section className={styles.whySection}>
          <div className={styles.whyCard}>
            <div className={styles.whyIntro}>
              <h2 className={styles.whyTitle}>WHY {BRAND.toUpperCase()}</h2>
              <p className={styles.whySubtitle}>Your plastic & steel supplier, online and offline</p>
              <p className={styles.whyLead}>
                From a few plastic chairs to steel racks for a shop or warehouse, we make buying
                simple, honest and quick — with delivery across India.
              </p>
              <ul className={styles.whyStats}>
                {WHY_STATS.map((stat) => (
                  <li key={stat.label} className={styles.whyStat}>
                    <strong className={styles.whyStatValue}>{stat.value}</strong>
                    <span className={styles.whyStatLabel}>{stat.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <ul className={styles.whyGrid}>
              {WHY_POINTS.map(({ icon: Icon, title, desc }) => (
                <li key={title} className={styles.whyItem}>
                  <span className={styles.whyIcon}>
                    <Icon size={24} strokeWidth={1} absoluteStrokeWidth aria-hidden="true" />
                  </span>
                  <h3 className={styles.whyItemTitle}>{title}</h3>
                  <p className={styles.whyItemDesc}>{desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
