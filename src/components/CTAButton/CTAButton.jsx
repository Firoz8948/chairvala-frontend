import Link from 'next/link';
import styles from './ctaButton.module.css';

const VARIANTS = {
  light: styles.ctaLight,
  dark: styles.ctaDark,
};

export default function CTAButton({
  href,
  variant = 'light',
  block = false,
  compact = false,
  className = '',
  children,
  type = 'button',
  ...rest
}) {
  const cls = [
    styles.cta,
    VARIANTS[variant] || VARIANTS.light,
    block ? styles.ctaBlock : '',
    compact ? styles.ctaCompact : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    const useNativeAnchor =
      /^https?:\/\//i.test(href) || /^(mailto:|tel:)/i.test(href);
    if (useNativeAnchor) {
      return (
        <a
          href={href}
          className={cls}
          {...( /^https?:\/\//i.test(href) ? { rel: 'noopener noreferrer' } : {})}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} {...rest}>
      {children}
    </button>
  );
}
