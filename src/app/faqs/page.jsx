'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './faqs.module.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import PageHeroBanner from '@/components/PageHeroBanner/PageHeroBanner';
import { FAQ_GROUPS } from '@/lib/faqContent';

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.faqItem} ${open ? styles.faqItemOpen : ''}`}>
      <button
        type="button"
        className={styles.faqQuestion}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <ChevronDown
          size={18}
          className={`${styles.faqChevron} ${open ? styles.faqChevronOpen : ''}`}
        />
      </button>
      <div className={`${styles.faqAnswer} ${open ? styles.faqAnswerOpen : ''}`}>
        <p className={styles.faqAnswerText}>{a}</p>
      </div>
    </div>
  );
}

export default function FAQsPage() {
  return (
    <div className={styles.container}>
      <Header />
      <PageHeroBanner
        title="Frequently Asked Questions"
        subtitle="Have questions? Here are quick answers to the most common inquiries about orders, payments, and more."
      />

      <main className={styles.main}>
        {FAQ_GROUPS.map((group, gi) => (
          <section key={gi} className={styles.faqGroup}>
            <h2 className={styles.groupTitle}>{group.group}</h2>
            <div className={styles.faqList}>
              {group.items.map((faq, fi) => (
                <FAQItem key={fi} q={faq.q} a={faq.a} />
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}