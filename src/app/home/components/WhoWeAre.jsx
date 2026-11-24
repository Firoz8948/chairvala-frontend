'use client';

import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import { resolveCardImages } from '@/components/ColorSwatches/ColorSwatches';
import productService from '@/lib/services/products';
import { BRAND, BRAND_DOMAIN, CONTACT, LEGACY_BRAND, POWERED_BY_TAGLINE } from '@/lib/seo';
import styles from '../home.module.css';

const PHONE_HREF = `tel:${CONTACT.phone.replace(/\s+/g, '')}`;

/** 1:1 tiles — set gridColumn / gridRow on a 6×6 grid (line-based spans). */
const COLLAGE_SLOTS = [
  { id: 1, gridColumn: '1 / 4', gridRow: '1 / 4' },
  { id: 2, gridColumn: '4 / 6', gridRow: '1 / 3' },
  { id: 3, gridColumn: '6 / 7', gridRow: '1 / 2' },
  { id: 4, gridColumn: '6 / 7', gridRow: '2 / 3' },
  { id: 5, gridColumn: '4 / 6', gridRow: '3 / 5' },
  { id: 6, gridColumn: '1 / 3', gridRow: '4 / 6' },
  { id: 7, gridColumn: '4 / 6', gridRow: '5 / 7' },
];

const COLLAGE_SLOT_COUNT = COLLAGE_SLOTS.length;

const resolveImageUrl = (url) => {
  if (!url) return null;
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
  return `${baseUrl}${url.startsWith('/') ? '' : '/'}${url}`;
};

const productMainImage = (product) => {
  const gallery = resolveCardImages(product);
  const primary = gallery[0];
  return primary ? resolveImageUrl(primary) : null;
};

const shuffle = (items) => {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
};

export default function WhoWeAre() {
  const [collageImages, setCollageImages] = useState([]);
  const cellBorderAccents = useMemo(
    () => COLLAGE_SLOTS.map(() => (Math.random() < 0.5 ? 'blue' : 'maroon')),
    []
  );

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        let products = [];
        try {
          const featured = await productService.getFeaturedProducts();
          if (Array.isArray(featured) && featured.length > 0) {
            products = featured;
          }
        } catch {
          /* use catalog list */
        }

        if (products.length < COLLAGE_SLOT_COUNT) {
          const page = await productService.getProducts({ page: 1, page_size: 48 });
          const catalog = Array.isArray(page?.items) ? page.items : [];
          const seen = new Set(products.map((p) => p.id));
          for (const p of catalog) {
            if (p?.id != null && seen.has(p.id)) continue;
            if (p?.id != null) seen.add(p.id);
            products.push(p);
          }
        }

        const imageUrls = shuffle(
          products.map(productMainImage).filter(Boolean)
        ).slice(0, COLLAGE_SLOT_COUNT);

        if (mounted) setCollageImages(imageUrls);
      } catch {
        if (mounted) setCollageImages([]);
      }
    };

    load();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className={`${styles.section} ${styles.aboutSection}`}>
      <div className={styles.aboutGrid}>
        <div className={styles.aboutCollage} aria-hidden="true">
          {COLLAGE_SLOTS.map((slot, index) => (
            <div
              key={slot.id}
              className={`${styles.aboutCollageCell} ${
                cellBorderAccents[index] === 'blue'
                  ? styles.aboutCollageCellBlue
                  : styles.aboutCollageCellMaroon
              }`}
              style={{
                gridColumn: slot.gridColumn,
                gridRow: slot.gridRow,
              }}
              data-collage-slot={slot.id}
            >
              {collageImages[index] ? (
                <img src={collageImages[index]} alt="" loading="lazy" decoding="async" />
              ) : null}
            </div>
          ))}
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>WHO WE ARE</h2>
            <p className={styles.sectionSubtitle}>
              {BRAND_DOMAIN} · {POWERED_BY_TAGLINE}
            </p>
          </div>

          <p className={styles.aboutText}>
            {BRAND} brings plastic chairs, stools, tables and everyday plastic household items
            together with steel furniture, racks and steel products — for homes, shops, offices
            and events.
          </p>
          <p className={styles.aboutText}>
            Need a single piece or a bulk order? We offer retail and wholesale pricing on quality
            checked products from trusted manufacturers.
          </p>
          <p className={styles.aboutText}>
            Visit our {LEGACY_BRAND} store or order on {BRAND_DOMAIN} for delivery across India.
          </p>

          <div className={styles.aboutActions}>
            <CTAButton href="/shop">
              Shop now <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </CTAButton>
            <CTAButton href={PHONE_HREF}>
              <Phone size={16} strokeWidth={2} aria-hidden="true" /> Call now
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}