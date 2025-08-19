'use client';

import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';

interface Props {
  label: string;
  href?: string;
}

export default function GlassButton({ label, href }: Props) {
  const className =
    'group inline-flex items-center justify-center px-8 py-4 text-[18px] leading-[19.8px] font-display font-normal text-[#091A84] rounded-[35px] bg-[rgba(95,160,255,0.37)] hover:bg-main-gradient hover:text-white transition-all duration-300 focus:outline-none';

  const content = (
    <>
      {label}
      <IconArrowRight
        size={20}
        stroke={2}
        className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
      />
    </>
  );

  return href ? (
    <Link href={href} className={className}>
      {content}
    </Link>
  ) : (
    <button className={className}>{content}</button>
  );
}
