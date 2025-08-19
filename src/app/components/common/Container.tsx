// src/app/components/common/Container.tsx
import { ReactNode } from 'react';
import clsx from 'clsx';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={clsx(
        // Always centered, responsive horizontal padding
        'mx-auto px-4 md:px-6 lg:px-8',
        // Width adapts to breakpoints
        'max-w-[var(--breakpoint-xl)] 2xl:max-w-[var(--breakpoint-2xl)]',
        className
      )}
    >
      {children}
    </div>
  );
}
