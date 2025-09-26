import React from 'react';
import clsx from 'clsx';

type SectionTitleProps = {
  children: React.ReactNode;
  /** Right-aligned small text that sits on the same divider row */
  right?: React.ReactNode;
  /** Keep the bottom divider? */
  withDivider?: boolean;
  className?: string;
};

export default function SectionTitle({
  children,
  right,
  withDivider = true,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={clsx(
        'flex flex-col md:flex-row md:items-end md:justify-between',
        withDivider && 'border-b-2 border-main-blue/10',
        // spacing around the row
        'pb-[22px] lg:pb-[40px] mb-[32px] lg:mb-[62px]',
        className
      )}
    >
      <h2 className="text-h2 text-ink">{children}</h2>
      {right ? (
        <p className="max-w-[573px] text-h5 pt-3 md:pt-0 lg:text-h4  text-ink/70 leading-tight">
          {right}
        </p>
      ) : null}
    </div>
  );
}
