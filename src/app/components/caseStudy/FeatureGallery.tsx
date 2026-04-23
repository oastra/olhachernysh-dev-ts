'use client';

import { useState } from 'react';
import { IconArrowsMaximize } from '@tabler/icons-react';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';
import SlotImage from './SlotImage';

type Props = {
  slug: string;
  id?: string;
  shortTitle: string;
};

const SLOT_COUNT = 3;

export default function FeatureGallery({ slug, id, shortTitle }: Props) {
  const [wideIndex, setWideIndex] = useState(SLOT_COUNT - 1);
  const allIndices = Array.from({ length: SLOT_COUNT }, (_, i) => i);
  const smallIndices = allIndices.filter((i) => i !== wideIndex);

  const renderSlot = (index: number, variant: 'small' | 'wide') => {
    const n = index + 1;

    if (variant === 'wide') {
      return (
        <button
          type="button"
          key={`feature-${n}`}
          onClick={() => setWideIndex(index)}
          aria-label={`${shortTitle} feature ${n} — main view`}
          className="block w-full text-left bg-ink/[0.04] rounded-[28px] md:rounded-[40px] p-4 md:p-6"
        >
          <div className="relative flex items-center justify-center bg-white overflow-hidden rounded-[18px] md:rounded-[24px] shadow-[0_16px_40px_-20px_rgba(0,0,0,0.15)] h-[46vh] min-h-[240px]">
            <SlotImage
              src={`/images/projects/${slug}/feature-${n}.webp`}
              alt={`${shortTitle} — feature ${n}`}
              placeholderLabel={`Feature ${n}`}
              className="max-w-full max-h-full w-auto h-auto object-contain select-none"
            />
          </div>
        </button>
      );
    }

    return (
      <button
        type="button"
        key={`feature-${n}`}
        onClick={() => setWideIndex(index)}
        aria-label={`Switch main view to ${shortTitle} feature ${n}`}
        className="group block w-full text-left bg-portfolio-gradient rounded-[24px] md:rounded-[32px] p-4 md:p-6 shadow-sm overflow-hidden transition-transform duration-300 hover:-translate-y-0.5"
      >
        <div className="relative bg-white overflow-hidden rounded-[12px] md:rounded-[18px] shadow-[0_16px_40px_-20px_rgba(0,0,0,0.15)] h-[20vh] min-h-[130px]">
          <SlotImage
            src={`/images/projects/${slug}/feature-${n}.webp`}
            alt={`${shortTitle} — feature ${n}`}
            placeholderLabel={`Feature ${n}`}
            className="absolute inset-0 w-full h-full object-cover select-none transition-all duration-300 group-hover:blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 btn-circle-cta flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 z-10">
            <IconArrowsMaximize className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={1.4} />
          </div>
        </div>
      </button>
    );
  };

  return (
    <SectionWrapper id={id} size="default">
      <SectionTitle right="Click a thumbnail to bring it into the main view.">
        Gallery
      </SectionTitle>

      <div>{renderSlot(wideIndex, 'wide')}</div>

      <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {smallIndices.map((i) => renderSlot(i, 'small'))}
      </div>
    </SectionWrapper>
  );
}
