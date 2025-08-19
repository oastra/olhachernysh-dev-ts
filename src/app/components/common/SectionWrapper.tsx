// src/app/components/common/SectionWrapper.tsx
import { ReactNode } from 'react';
import clsx from 'clsx';
import Container from './Container';

const SPACING = {
  tight: 'py-5 md:py-[35px]',
  default: 'py-8 md:py-[45px] xl:py-[100px]',
  loose: 'py-24 md:py-32',
} as const;

type SectionWrapperProps = {
  id?: string;
  children: ReactNode;
  className?: string; // bg, borders, etc.
  size?: keyof typeof SPACING;
  removeTopPadding?: boolean;
  removeBottomPadding?: boolean;
};

export default function SectionWrapper({
  id,
  children,
  className,
  size = 'default',
  removeTopPadding = false,
  removeBottomPadding = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={clsx(
        SPACING[size],
        removeTopPadding && 'pt-0',
        removeBottomPadding && 'pb-0',
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
