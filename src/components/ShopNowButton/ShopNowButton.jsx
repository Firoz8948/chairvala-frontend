'use client';

import { ArrowRight } from 'lucide-react';
import CTAButton from '@/components/CTAButton';

export default function ShopNowButton({
  children,
  text = 'Shop now',
  href,
  onClick,
  as,
  size = 'lg',
  variant = 'onDark',
  className = '',
  showArrow = true,
  iconSize,
  fullWidth = false,
  disabled = false,
  type = 'button',
  ...rest
}) {
  const content = children || text;
  const computedIconSize = iconSize || (size === 'sm' ? 14 : size === 'md' ? 16 : 18);
  const ctaVariant = variant === 'onLight' ? 'light' : 'dark';
  const compact = size === 'sm' || size === 'md';

  const inner = (
    <>
      {content}
      {showArrow ? <ArrowRight size={computedIconSize} strokeWidth={2} aria-hidden="true" /> : null}
    </>
  );

  const common = {
    variant: ctaVariant,
    block: fullWidth,
    compact,
    className,
    disabled,
    ...rest,
  };

  if (as === 'span') {
    return (
      <CTAButton {...common} onClick={onClick} type="button">
        {inner}
      </CTAButton>
    );
  }

  if (as === 'button' || (!href && (onClick || as === undefined))) {
    return (
      <CTAButton {...common} onClick={onClick} type={type}>
        {inner}
      </CTAButton>
    );
  }

  if (href) {
    return (
      <CTAButton {...common} href={href} onClick={onClick}>
        {inner}
      </CTAButton>
    );
  }

  return (
    <CTAButton {...common} onClick={onClick} type="button">
      {inner}
    </CTAButton>
  );
}
