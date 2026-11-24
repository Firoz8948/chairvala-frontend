import { BRAND, HOME_TITLE, fetchApi } from '@/lib/seo';
import { isBundledDefaultHero, resolveBannerUrl } from '@/lib/banners';
import HomeHeroLayout from './HomeHeroLayout';

async function getSlides(device) {
  const { data } = await fetchApi(`/banners/?device=${device}`, { revalidate: 30 });
  if (!Array.isArray(data)) return [];
  return data
    .filter((slide) => slide.image_url)
    .map((slide) => {
      const imageUrl = slide.image_url || '';
      return {
        id: slide.id,
        src: resolveBannerUrl(imageUrl),
        alt: slide.title || `${BRAND} – plastic & steel products online`,
        href: slide.link_url || '',
        isDefaultHero: isBundledDefaultHero(device, imageUrl),
      };
    });
}

export default async function HomeBanner() {
  const [desktopSlides, mobileSlides] = await Promise.all([
    getSlides('desktop'),
    getSlides('mobile'),
  ]);

  return (
    <HomeHeroLayout
      homeTitle={HOME_TITLE}
      desktopSlides={desktopSlides}
      mobileSlides={mobileSlides}
    />
  );
}
