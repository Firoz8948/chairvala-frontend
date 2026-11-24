import { BRAND, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `FAQs | ${BRAND}`,
  description: `Answers about buying plastic chairs, plastic products and steel items from ${BRAND} – orders, delivery, bulk orders, returns and payments.`,
  path: '/faqs',
});

export default function FaqsLayout({ children }) {
  return children;
}
