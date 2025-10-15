'use client';

import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';

interface Props {
  label: string;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export default function CtaButton({ label, href, className, onClick }: Props) {
  const baseStyles =
    'group inline-flex items-center justify-center px-8 py-4 text-[18px] leading-[19.8px] font-display font-normal text-white rounded-full bg-main-blue hover:bg-main-gradient transition-all duration-300 focus:outline-none';

  const combinedClass = clsx(baseStyles, className);
  const content = <>{label}</>;

  return href ? (
    <Link href={href} onClick={onClick} className={combinedClass}>
      {content}
    </Link>
  ) : (
    <button onClick={onClick} className={combinedClass}>
      {content}
    </button>
  );
}
