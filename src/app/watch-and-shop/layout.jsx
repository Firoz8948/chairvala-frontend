import { notFound } from 'next/navigation';
import { FEATURES } from '@/lib/features';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Watch & Shop | Chairvala.com',
  description:
    'Watch short videos of our plastic chairs, plastic products and steel items, then shop instantly at affordable prices.',
  path: '/watch-and-shop',
});

export default function WatchAndShopLayout({ children }) {
  if (!FEATURES.watchAndShop) notFound();
  return children;
}
