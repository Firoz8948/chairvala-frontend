import Link from 'next/link';
import FooterFaq from '@/components/FooterFaq/FooterFaq';
import Logo from '@/components/Logo/Logo';
import { FEATURES } from '@/lib/features';
import SocialLinks from '@/components/SocialLinks/SocialLinks';
import { BRAND, BRAND_DOMAIN, CONTACT, POWERED_BY_TAGLINE } from '@/lib/seo';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <>
      <FooterFaq />
      <footer className={styles.footer}>
        <div className={styles.inner}>
          <div className={styles.brandCol}>
            <Logo size="lg" showTagline className={styles.brandLogoWrap} />
            <p className={`${styles.gstin} ${styles.gstBelowTagline}`}>
              GST - {CONTACT.gstin}
            </p>
            <p className={styles.brandDesc}>
              {BRAND_DOMAIN} — plastic chairs, plastic stools & tables, household plastic items,
              steel furniture, racks and steel products at affordable prices — delivered across
              India. {POWERED_BY_TAGLINE}.
            </p>
            <SocialLinks className={styles.socialRow} />
          </div>

          <div className={styles.quickCol}>
            <h3 className={styles.colTitle} data-brand-split="off">
              Quick Links
            </h3>
            <div className={styles.linkList}>
              <Link href="/shop" className={styles.link}>
                Shop Collection
              </Link>
              {FEATURES.watchAndShop && (
                <Link href="/watch-and-shop" className={styles.link}>
                  Watch &amp; Shop
                </Link>
              )}
              <Link href="/about" className={styles.link}>
                About Us
              </Link>
              <Link href="/contact-us" className={styles.link}>
                Contact Us
              </Link>
              <Link href="/faqs" className={styles.link}>
                FAQs
              </Link>
            </div>
          </div>

          <div className={styles.policyCol}>
            <h3 className={styles.colTitle}>Policies</h3>
            <div className={styles.linkList}>
              <Link href="/policy/privacy-policy" className={styles.link}>
                Privacy Policy
              </Link>
              <Link href="/policy/terms-and-conditions" className={styles.link}>
                Terms &amp; Conditions
              </Link>
              <Link href="/policy/shipping-policy" className={styles.link}>
                Shipping Policy
              </Link>
              <Link href="/policy/refund-policy" className={styles.link}>
                Returns &amp; Refunds
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyrightLine}>
            © {new Date().getFullYear()} {BRAND}. All rights reserved. {POWERED_BY_TAGLINE}.
          </p>
        </div>
      </footer>
    </>
  );
}
