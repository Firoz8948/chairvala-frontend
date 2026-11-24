import {
  Plus_Jakarta_Sans,
  Lora,
  Poppins,
  Montserrat,
  Outfit,
  Playfair_Display,
  DM_Serif_Display,
  Caveat,
} from 'next/font/google';

export const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

// Heading font options. The active one is chosen by --font-family-heading in globals.css;
// browsers only download a font that is actually used, so unused options cost nothing.
// next/font needs literal option objects, so options can't be shared via spread.
const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
  preload: false,
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  preload: false,
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  preload: false,
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: false,
});

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif',
  display: 'swap',
  preload: false,
});

/** Simple cursive accent for hero banners */
export const fontCursive = Caveat({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-cursive',
  display: 'swap',
  preload: false,
});

export const fontVariables = [
  fontSans,
  lora,
  poppins,
  montserrat,
  outfit,
  playfair,
  dmSerif,
  fontCursive,
]
  .map((font) => font.variable)
  .join(' ');
