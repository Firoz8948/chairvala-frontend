'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const HEADING_SELECTOR = 'h1, h2, h3, h4, h5, h6';

function shouldSkipHeading(el) {
  if (!(el instanceof HTMLElement)) return true;
  if (el.dataset.brandSplit === 'off') return true;
  if (el.closest('.heroCopy')) return true;
  if (el.closest('[data-brand-split="off"]')) return true;
  if (el.querySelector('.brandHeadingAccent')) return true;
  return false;
}

function enhanceHeading(el) {
  if (shouldSkipHeading(el)) return;

  const text = el.textContent?.replace(/\s+/g, ' ').trim();
  if (!text) return;

  const words = text.split(' ');
  if (words.length < 2) return;

  const last = words.pop();
  el.textContent = '';
  el.append(`${words.join(' ')} `);
  const accent = document.createElement('span');
  accent.className = 'brandHeadingAccent';
  accent.textContent = last;
  el.appendChild(accent);
}

function enhanceAllHeadings(root = document) {
  root.querySelectorAll(HEADING_SELECTOR).forEach(enhanceHeading);
}

export default function BrandHeadingEnhancer() {
  const pathname = usePathname();

  useEffect(() => {
    enhanceAllHeadings();
    const t = window.setTimeout(() => enhanceAllHeadings(), 400);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return null;
}
