'use client';

import { forwardRef, useImperativeHandle, useRef } from 'react';
import { motion } from 'framer-motion';

export type ProcessStepHandle = { el: HTMLDivElement | null };

type Props = {
  number: string;
  title: string;
  bullets: string[];
  /** only used for semantic alternation; no sizing/layout side effects */
  side?: 'left' | 'right';
};

const ProcessStep = forwardRef<ProcessStepHandle, Props>(
  ({ number, title, bullets, side = 'left' }, ref) => {
    const localRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => ({ el: localRef.current }), []);

    return (
      <motion.article
        ref={localRef}
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15% 0% -10% 0%' }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        /**
         * IMPORTANT:
         * - h/w are 100% so the parent (TextCard) defines size
         * - no padding/margins here (TextCard provides padding)
         * - min-w-0 to allow proper wrapping inside fixed width
         */
        className="h-full w-full min-w-0 overflow-hidden"
      >
        {/* header row */}
        <div className="mb-2 flex items-baseline gap-3">
          <span className="text-h6 md:text-h4-mobile-subheading font-medium tracking-wide text-ink/80">
            {number}
          </span>
          <h3 className="text-h3-subheading md:text-h3-desktop leading-tight font-semibold text-ink">
            {title}
          </h3>
        </div>

        {/* bullets */}
        <ul className="m-0 list-disc pl-5 text-body text-ink/74 space-y-1.5 md:space-y-2 marker:text-gray-400">
          {bullets.map((b, i) => (
            <li key={i} className="break-words">
              {b}
            </li>
          ))}
        </ul>
      </motion.article>
    );
  }
);

ProcessStep.displayName = 'ProcessStep';
export default ProcessStep;
