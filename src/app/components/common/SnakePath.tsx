'use client';

import React from 'react';
import { SNAKE_DESKTOP, SNAKE_TABLET, SNAKE_MOBILE } from '@/utils/masks';

type Props = { breakpoint: 'desktop' | 'tablet' | 'mobile' };

export default function SnakePath({ breakpoint }: Props) {
  const snake = {
    desktop: SNAKE_DESKTOP,
    tablet: SNAKE_TABLET,
    mobile: SNAKE_MOBILE,
  }[breakpoint];

  return (
    <svg
      className="w-full h-auto"
      viewBox={snake.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={snake.d} stroke="currentColor" strokeWidth={3} />
    </svg>
  );
}
