import { BRAND, BRAND_DOMAIN, HOME_DESCRIPTION } from '@/lib/seo';

export default function manifest() {
  return {
    name: BRAND_DOMAIN,
    short_name: BRAND,
    description: HOME_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#4a2c17',
    icons: [
      {
        src: '/images/brand/chairvala.png',
        sizes: '2172x724',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
