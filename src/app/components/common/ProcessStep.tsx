'use client';

import { forwardRef, useImperativeHandle, useRef } from 'react';
import { motion } from 'framer-motion';

export type ProcessStepHandle = { el: HTMLDivElement | null };

type Props = {
  number: string;
  title: string;
  bullets: string[];
};

const ProcessStep = forwardRef<ProcessStepHandle, Props>(
  ({ number, title, bullets }, ref) => {
    const localRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({ el: localRef.current }), []);

    return (
      <motion.article
        ref={localRef}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15% 0% -10% 0%' }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="
          relative rounded-[12px] md:rounded-[14px]
          border border-[#8ED7FF] bg-white
          shadow-[0_1px_0_rgba(0,0,0,0.03)]
          px-4 py-4 md:px-6 md:py-6
        "
      >
        <div className="mb-2 flex items-baseline gap-3">
          <span className="text-[13px] md:text-sm font-medium tracking-wide text-gray-700">
            {number}
          </span>
          <h3 className="text-[22px] md:text-[28px] leading-tight font-semibold text-[#0E1522]">
            {title}
          </h3>
        </div>

        <ul className="pl-8 list-disc text-[13.5px] md:text-[15px] text-[#2D3A4A] space-y-1.5 md:space-y-2 marker:text-gray-400">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </motion.article>
    );
  }
);

ProcessStep.displayName = 'ProcessStep';
export default ProcessStep;
