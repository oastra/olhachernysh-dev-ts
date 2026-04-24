'use client';

import { useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import clsx from 'clsx';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';
import { FAQS, type FaqItem } from '@/data/faq';

type ColumnProps = {
  items: FaqItem[];
  openIndex: number | null;
  onToggle: (i: number) => void;
  idPrefix: string;
  startNumber: number;
};

function FaqColumn({
  items,
  openIndex,
  onToggle,
  idPrefix,
  startNumber,
}: ColumnProps) {
  return (
    <ul className="divide-y divide-main-blue/10">
      {items.map((faq, i) => {
        const open = openIndex === i;
        const number = String(startNumber + i).padStart(2, '0');
        return (
          <li key={faq.question}>
            <button
              type="button"
              onClick={() => onToggle(i)}
              aria-expanded={open}
              aria-controls={`${idPrefix}-${i}`}
              className={clsx(
                'group grid w-full grid-cols-[auto_1fr_auto] items-start gap-x-3 py-3.5 md:py-4 text-left',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main-blue/60 rounded-[6px]',
              )}
            >
              <span
                aria-hidden="true"
                className="text-h6 md:text-h5 text-ink/80 leading-none pt-[3px]"
              >
                {number}
              </span>

              <span
                className={clsx(
                  'text-[15px] md:text-[17px] leading-snug font-display transition-colors',
                  open
                    ? 'text-main-gradient'
                    : 'text-ink group-hover:text-main-gradient',
                )}
              >
                {faq.question}
              </span>

              <IconChevronDown
                size={20}
                stroke={2}
                aria-hidden="true"
                className={clsx(
                  'shrink-0 mt-[2px] text-main-blue transition-transform duration-200',
                  open && 'rotate-180',
                )}
              />
            </button>

            <div
              id={`${idPrefix}-${i}`}
              hidden={!open}
              className="pb-4 md:pb-5 -mt-1 pl-[32px] md:pl-[36px] pr-8"
            >
              <p className="text-[14px] md:text-[15px] leading-relaxed text-ink/70">
                {faq.answer}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default function FaqSection() {
  const half = Math.ceil(FAQS.length / 2);
  const leftItems = FAQS.slice(0, half);
  const rightItems = FAQS.slice(half);

  const [openLeft, setOpenLeft] = useState<number | null>(0);
  const [openRight, setOpenRight] = useState<number | null>(null);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <SectionWrapper id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SectionTitle right="Everything clients usually ask before getting started — pricing, timelines, ownership and working remotely.">
        Have a question?
      </SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 xl:gap-x-16">
        <FaqColumn
          items={leftItems}
          openIndex={openLeft}
          onToggle={(i) => setOpenLeft(openLeft === i ? null : i)}
          idPrefix="faq-l"
          startNumber={1}
        />
        <FaqColumn
          items={rightItems}
          openIndex={openRight}
          onToggle={(i) => setOpenRight(openRight === i ? null : i)}
          idPrefix="faq-r"
          startNumber={half + 1}
        />
      </div>
    </SectionWrapper>
  );
}
