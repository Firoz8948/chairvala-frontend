'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { FOOTER_FAQ_ITEMS } from '@/lib/faqContent';
import homeStyles from '@/app/home/home.module.css';
import styles from './footerFaq.module.css';

function FaqRow({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.item} ${open ? styles.itemOpen : ''}`}>
      <button
        type="button"
        className={styles.question}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <ChevronDown
          size={18}
          strokeWidth={1.75}
          className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
          aria-hidden="true"
        />
      </button>
      <div className={`${styles.answer} ${open ? styles.answerOpen : ''}`}>
        <p className={styles.answerText}>{a}</p>
      </div>
    </div>
  );
}

export default function FooterFaq() {
  const pathname = usePathname();
  if (
    pathname === '/faqs' ||
    pathname === '/checkout' ||
    pathname?.startsWith('/checkout/') ||
    pathname?.startsWith('/policy')
  ) {
    return null;
  }

  return (
    <section className={styles.section} aria-labelledby="footer-faq-heading">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="footer-faq-heading" className={homeStyles.sectionTitle}>
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className={homeStyles.sectionSubtitle}>
            Quick answers on orders, delivery, payments, returns and bulk orders.
          </p>
        </header>

        <div className={styles.list}>
          {FOOTER_FAQ_ITEMS.map((faq) => (
            <FaqRow key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>

        <div className={styles.ctaRow}>
          <Link href="/faqs" className={styles.ctaLink}>
            View all FAQs <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}