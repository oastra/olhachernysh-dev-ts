'use client';

import Link from 'next/link';
import clsx from 'clsx';

type LogoProps = {
  href?: string; // set to "/" (default) or undefined to render a <div>
  className?: string; // extra classes (e.g., for sizing/layout)
  label?: string; // accessible label for screen readers
  size?: 'sm' | 'md' | 'lg'; // quick typography presets
};

const SIZES: Record<NonNullable<LogoProps['size']>, string> = {
  sm: 'text-[14px] md:text-[18px]',
  md: 'text-[14px] md:text-[24px]',
  lg: 'text-[20px] md:text-[32px]',
};

export default function Logo({
  href = '/',
  className,
  label = 'Olha Chernysh — Home',
  size = 'md',
}: LogoProps) {
  const content = (
    <span
      className={clsx(
        'inline-flex items-center font-logo leading-[110%]',
        SIZES[size],
        className
      )}
      aria-label={label}
      title="Olha Chernysh"
    >
      <span className="text-ink">Olha</span>
      <span className="text-main-gradient inline-block">Chernysh</span>
    </span>
  );

  // Link if href provided, plain span/div otherwise (e.g., footer h1, 404)
  return href ? <Link href={href}>{content}</Link> : content;
}
