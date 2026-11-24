import './globals.css';
import { Toaster } from 'react-hot-toast';
import { fontSans, fontVariables } from '@/lib/fonts';
import Providers from '@/components/Providers';
import JsonLd from '@/components/Seo/JsonLd';
import {
  BRAND,
  BRAND_DOMAIN,
  DEFAULT_OG_IMAGE,
  HOME_DESCRIPTION,
  HOME_TITLE,
  SITE_KEYWORDS,
  SITE_URL,
  buildOrganizationJsonLd,
  buildWebsiteJsonLd,
} from '@/lib/seo';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s | ${BRAND}`,
  },
  description: HOME_DESCRIPTION,
  applicationName: BRAND_DOMAIN,
  keywords: SITE_KEYWORDS,
  icons: {
    icon: [{ url: '/images/brand/chairvala.png', type: 'image/png', sizes: '2172x724' }],
    shortcut: '/images/brand/chairvala.png',
    apple: [{ url: '/images/brand/chairvala.png', sizes: '2172x724', type: 'image/png' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: BRAND,
    locale: 'en_IN',
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={fontVariables}>
      <body className={fontSans.className}>
        <JsonLd data={[buildOrganizationJsonLd(), buildWebsiteJsonLd()]} />
        <Providers>
          <Toaster position="top-right" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
