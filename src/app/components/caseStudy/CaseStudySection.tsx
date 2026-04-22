import { ReactNode } from 'react';
import clsx from 'clsx';
import SectionWrapper from '../common/SectionWrapper';

type Props = {
  /** Short section label, e.g. "Overview". */
  label: string;
  /** Optional right-aligned line that sits on the divider row. */
  lede?: ReactNode;
  /** Optional id for deep-linking. */
  id?: string;
  /** Kept for backward compatibility; no longer rendered. */
  index?: string;
  children: ReactNode;
};

/**
 * Rhythmic section wrapper used across every case study page.
 * Mirrors SectionTitle's divider pattern but with a quieter, editorial heading size.
 */
export default function CaseStudySection({
  label,
  lede,
  id,
  children,
}: Props) {
  return (
    <SectionWrapper id={id} size="default">
      <div
        className={clsx(
          'flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-10',
          'border-b-2 border-main-blue/10',
          'pb-[22px] lg:pb-[32px] mb-[28px] lg:mb-[48px]',
        )}
      >
        <h2 className="text-h3 text-ink">{label}</h2>

        {lede ? (
          <p className="max-w-[573px] text-h5 lg:text-h4 text-ink/70 leading-tight">
            {lede}
          </p>
        ) : null}
      </div>

      {children}
    </SectionWrapper>
  );
}
