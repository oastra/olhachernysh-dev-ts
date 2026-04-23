import { ReactNode } from 'react';
import clsx from 'clsx';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';

type Props = {
  /** Section heading, rendered as the main-page h2 style. */
  label: string;
  /** Optional id for deep-linking. */
  id?: string;
  /** Kept for backward compatibility; no longer rendered. */
  index?: string;
  /** Optional lede rendered on the right of the title row. */
  lede?: ReactNode;
  /** Tonal background — "muted" gets a light-gray wash. */
  tone?: 'default' | 'muted';
  children: ReactNode;
};

export default function CaseStudySection({
  label,
  id,
  lede,
  tone = 'default',
  children,
}: Props) {
  return (
    <SectionWrapper
      id={id}
      size="default"
      className={clsx(tone === 'muted' && 'bg-ink/[0.03]')}
    >
      <SectionTitle right={lede}>{label}</SectionTitle>
      {children}
    </SectionWrapper>
  );
}
