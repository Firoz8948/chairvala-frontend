import { Suspense } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { BRAND, pageMetadata } from '@/lib/seo';
import SearchScreen from './SearchScreen';
import styles from './search.module.css';

export const metadata = pageMetadata({
  title: `Search Products | ${BRAND}`,
  description: `Search plastic chairs, plastic products and steel items on ${BRAND}.`,
  path: '/search',
});

export default function SearchPage() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Suspense
          fallback={
            <div className={styles.content}>
              <p className={styles.hint}>Loading search…</p>
            </div>
          }
        >
          <SearchScreen />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
