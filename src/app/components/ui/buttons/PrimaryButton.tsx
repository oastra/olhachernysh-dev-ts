'use client';

import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';

interface Props {
  label: string;
  href?: string;
  className?: string;
  // set true when you place it inside the collage
  fixedCollageSize?: boolean;
}

export default function PrimaryButton({
  label,
  href,
  className = '',
  fixedCollageSize = false,
}: Props) {
  // mobile & tablet (same sizing)
  const base =
    'group inline-flex items-center justify-center font-["FixelDisplay"] font-normal text-white ' +
    'bg-main-gradient rounded-[20px] ' +
    'px-4 py-4 text-[18px] leading-[110%] tracking-[-0.58px] ' +
    'transition-all duration-300 focus:outline-none';

  // desktop stays unchanged
  const desktop = fixedCollageSize
    ? ' lg:w-[338px] lg:h-[135px] lg:rounded-[35px] lg:text-[24px] lg:leading-[26.4px]'
    : ' lg:rounded-[35px] lg:text-[24px] lg:leading-[26.4px] 4xl:px-10 4xl:py-5';

  const classes = `${base} ${desktop} ${className}`;

  const content = (
    <>
      {label}
      <IconArrowRight
        size={27}
        stroke={2}
        className="ml-2 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:transform-none"
      />
    </>
  );

  return href ? (
    <Link href={href} className={classes} aria-label={label}>
      {content}
    </Link>
  ) : (
    <button className={classes} aria-label={label}>
      {content}
    </button>
  );
}
