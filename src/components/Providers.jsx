'use client';

import { CartProvider } from '@/context/CartContext';
import BrandHeadingEnhancer from '@/components/BrandHeadingEnhancer';

export default function Providers({ children }) {
  return (
    <CartProvider>
      <BrandHeadingEnhancer />
      {children}
    </CartProvider>
  );
}
