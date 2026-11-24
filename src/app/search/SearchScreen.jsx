'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import toast from 'react-hot-toast';
import ProductCard from '@/components/ProductCard/ProductCard';
import productService from '@/lib/services/products';
import { useCart } from '@/context/CartContext';
import shopStyles from '@/app/shop/shop.module.css';
import styles from './search.module.css';

const formatPrice = (value) => {
  const num = Number(value);
  if (Number.isNaN(num)) return '—';
  return `₹${num.toLocaleString('en-IN')}`;
};

export default function SearchScreen() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const inputRef = useRef(null);
  const { addItem } = useCart();

  const [query, setQuery] = useState('');
  const [activeQuery, setActiveQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const q = searchParams.get('q') || '';
    setQuery(q);
    setActiveQuery(q.trim());
  }, [searchParams]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const runSearch = useCallback(async (term) => {
    const trimmed = term.trim();
    if (!trimmed) {
      setProducts([]);
      setTotal(0);
      return;
    }
    try {
      setLoading(true);
      const data = await productService.getProducts({
        page: 1,
        page_size: 48,
        search: trimmed,
        sort: 'newest',
      });
      const items = Array.isArray(data?.items) ? data.items : [];
      setProducts(items);
      setTotal(data?.total ?? items.length);
    } catch (err) {
      toast.error(err.message || 'Search failed');
      setProducts([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    runSearch(activeQuery);
  }, [activeQuery, runSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    const qs = trimmed ? `?q=${encodeURIComponent(trimmed)}` : '';
    router.replace(`/search${qs}`, { scroll: false });
    setActiveQuery(trimmed);
  };

  const handleAddToBag = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, { quantity: 1 });
    toast.success(`${product.name} added to cart`);
    router.push('/cart');
  };

  return (
    <div className={styles.content}>
      <form className={styles.searchBar} onSubmit={handleSubmit} role="search">
        <label htmlFor="search-page-input" className={styles.srOnly}>
          Search products
        </label>
        <input
          id="search-page-input"
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search plastic chairs, steel items…"
          className={styles.searchBarInput}
          autoComplete="off"
          enterKeyHint="search"
        />
        <button type="submit" className={styles.searchSubmit} aria-label="Search">
          <Search size={22} strokeWidth={1.5} />
        </button>
      </form>

      {!activeQuery ? (
        <p className={styles.hint}>Type a product name and press search.</p>
      ) : null}

      {activeQuery && !loading ? (
        <p className={styles.resultMeta}>
          {total} result{total === 1 ? '' : 's'} for &ldquo;{activeQuery}&rdquo;
        </p>
      ) : null}

      {loading ? (
        <div className={shopStyles.productGrid}>
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className={`${shopStyles.productCard} ${shopStyles.productSkeleton}`} />
          ))}
        </div>
      ) : activeQuery && products.length === 0 ? (
        <div className={styles.empty}>
          <h2>No products found</h2>
          <p>Try different keywords.</p>
        </div>
      ) : products.length > 0 ? (
        <div className={shopStyles.productGrid}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              styles={shopStyles}
              formatPrice={formatPrice}
              onAddToBag={handleAddToBag}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
