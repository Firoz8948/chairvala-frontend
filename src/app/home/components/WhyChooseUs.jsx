import { ShieldCheck, Truck, RotateCcw, Package } from 'lucide-react';
import { BRAND } from '@/lib/seo';
import styles from '../home.module.css';

const PRINCIPLES = [
  {
    title: 'Secure payment',
    description: 'Encrypted checkout and trusted payment methods for every order.',
    Icon: ShieldCheck,
  },
  {
    title: 'Fast delivery',
    description: 'Careful packing and dependable shipping so your order arrives on time.',
    Icon: Truck,
  },
  {
    title: 'Easy return',
    description: 'Straightforward returns and support if something is not as expected.',
    Icon: RotateCcw,
  },
  {
    title: 'Bulk order available',
    description: 'Volume orders and dealer enquiries welcome — we scale with your need.',
    Icon: Package,
  },
];

export default function WhyChooseUs({
  title = `WHY ${BRAND.toUpperCase()}`,
  subtitle = 'What we stand by',
}) {
  return (
    <section className={`${styles.section} ${styles.featuresSection}`}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <p className={styles.sectionSubtitle}>{subtitle}</p>
      </div>

      <ul className={styles.principlesList}>
        {PRINCIPLES.map((item) => {
          const Icon = item.Icon;
          return (
            <li key={item.title} className={styles.principleItem}>
              <div className={styles.principleIcon} aria-hidden="true">
                <Icon strokeWidth={1} absoluteStrokeWidth />
              </div>
              <div className={styles.principleCopy}>
                <h3 className={styles.principleTitle} data-brand-split="off">
                  {item.title}
                </h3>
                <p className={styles.principleDesc}>{item.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
