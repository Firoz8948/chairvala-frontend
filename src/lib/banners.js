export const BANNER_SIZES = {
  desktop: { width: 2048, height: 768, label: 'Desktop' },
  mobile: { width: 1080, height: 1080, label: 'Mobile' },
};

/** Bundled heroes — seeded in DB for Admin → Banners. */
export const DEFAULT_DESKTOP_BANNER_IMAGE = '/images/banners/chairvala-first-banner.png';
export const DEFAULT_MOBILE_BANNER_IMAGE = '/images/banners/chairvala-mobile-banner.png';

export const isBundledDefaultHero = (device, imageUrl) => {
  const dev = (device || '').toLowerCase();
  const url = (imageUrl || '').trim();
  if (dev === 'desktop') {
    return url === DEFAULT_DESKTOP_BANNER_IMAGE || url.endsWith('chairvala-first-banner.png');
  }
  if (dev === 'mobile') {
    return url === DEFAULT_MOBILE_BANNER_IMAGE || url.endsWith('chairvala-mobile-banner.png');
  }
  return false;
};

export const isProtectedDefaultBanner = (banner) => {
  if (!banner) return false;
  if (banner.is_protected) return true;
  return isBundledDefaultHero(banner.device, banner.image_url);
};

/** @deprecated use isProtectedDefaultBanner */
export const isDefaultDesktopHeroBanner = isProtectedDefaultBanner;

export const isStaticStorefrontAsset = (url) =>
  typeof url === 'string' && (url.startsWith('/images/') || url.startsWith('/assets/'));

export const resolveBannerUrl = (url) => {
  if (!url) return '';
  if (/^https?:\/\//i.test(url)) return url;
  if (isStaticStorefrontAsset(url)) return url;
  const base = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000').replace(/\/+$/, '');
  return `${base}${url.startsWith('/') ? '' : '/'}${url}`;
};
