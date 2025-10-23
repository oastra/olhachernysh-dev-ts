'use client';

import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';

interface Props {
  label: string;
  href?: string;
  className?: string;
  /** Set true when placing inside the collage with a sized wrapper (it will fill w/h). */
  fixedCollageSize?: boolean;
}

export default function PrimaryButton({
  label,
  href,
  className = '',
  fixedCollageSize = false,
}: Props) {
  const base =
    'group inline-flex items-center justify-center font-["FixelDisplay"] font-normal text-white ' +
    'bg-main-gradient rounded-[20px] transition-all duration-300 focus:outline-none';

  // Regular button: paddings + responsive desktop sizes
  const regularSizing =
    'px-4 py-4 text-[18px] leading-[110%] tracking-[-0.58px] ' +
    'lg:rounded-[35px] lg:text-[24px] lg:leading-[26.4px] 4xl:px-10 4xl:py-5';

  // Collage mode: fill the parent and scale typography with the canvas width (cqw)
  const collageSizing =
    'w-full h-full p-0 rounded-[35px] text-[clamp(16px,1.75cqw,24px)] leading-[1.1]';

  const classes = [
    base,
    fixedCollageSize ? collageSizing : regularSizing,
    className,
  ].join(' ');

  const content = (
    <>
      {label}
      <IconArrowRight
        className="ml-2 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
        style={{ width: '1.1em', height: '1.1em' }}
        stroke={2}
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
