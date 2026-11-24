'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import styles from './header.module.css';

export default function HeaderSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState('');

  useEffect(() => {
    setQuery(searchParams.get('q') || '');
  }, [searchParams]);

  const submit = useCallback(
    (e) => {
      e.preventDefault();
      const trimmed = query.trim();
      if (!trimmed) {
        router.push('/shop');
        return;
      }
      router.push(`/shop?q=${encodeURIComponent(trimmed)}`);
    },
    [query, router]
  );

  return (
    <>
      <Link
        href="/search"
        className={`${styles.iconBtn} ${styles.searchMobileOnly}`}
        aria-label="Search products"
      >
        <Search size={20} strokeWidth={1.5} />
      </Link>

      <form
        className={`${styles.searchWrap} ${styles.searchDesktopOnly}`}
        onSubmit={submit}
        role="search"
      >
        <button type="submit" className={styles.iconBtn} aria-label="Search products">
          <Search size={20} strokeWidth={1.5} />
        </button>
        <label htmlFor="header-search" className={styles.srOnly}>
          Search products
        </label>
        <input
          id="header-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products…"
          className={styles.searchInput}
          autoComplete="off"
          enterKeyHint="search"
        />
      </form>
    </>
  );
}
