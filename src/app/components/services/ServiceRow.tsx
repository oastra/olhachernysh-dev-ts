'use client';

import { motion } from 'framer-motion';

type Props = {
  index: number;
  title: string;
  summary?: string;
  bullets?: string[];
  isActive?: boolean;
  onActivate?: () => void;
};

export default function ServiceRow({
  index,
  title,
  summary,
  bullets,
  isActive = false,
  onActivate,
}: Props) {
  return (
    <div
      className="grid grid-cols-1 items-center"
      role="region"
      aria-labelledby={`service-${index}`}
    >
      <button
        onClick={onActivate}
        className="w-full text-left focus:outline-none"
        aria-expanded={isActive}
        aria-controls={`service-panel-${index}`}
      >
        {/* Mobile: Flex layout for number + title, Desktop: Grid layout */}
        <div className="flex justify-start sm:grid sm:grid-cols-[24px_1fr] gap-1 md:gap-4 md:items-start">
          {/* Number */}
          <span className="flex-shrink-0 w-auto text-h6 md:w-[40px] flex items-center justify-center text-black md:text-h5">
            0{index}
          </span>

          {/* Title */}
          <h3
            id={`service-${index}`}
            className={`transition-colors text-h2 ${
              isActive
                ? 'text-main-gradient'
                : 'text-ink/72 hover:text-ink cursor-pointer'
            }`}
          >
            {title}
          </h3>
        </div>

        {/* Summary - full width on mobile */}
        {summary && (
          <div className="mt-4 pl-0 md:pl-[56px]">
            <p className="text-body-mobile md:text-[20px] text-ink/70">
              {summary}
            </p>
          </div>
        )}
      </button>

      {/* Details: collapsible on ALL breakpoints */}
      <div
        id={`service-panel-${index}`}
        className="grid md:grid-cols-[56px_1fr] gap-2 mt-2"
      >
        <div className="hidden sm:block" /> {/* spacer under number */}
        <motion.div
          initial={false}
          animate={{
            height: isActive ? 'auto' : 0,
            opacity: isActive ? 1 : 0.6,
          }}
          transition={{ duration: 0.32, ease: 'easeOut' }}
          className="overflow-hidden"
          aria-hidden={!isActive}
        >
          <div className="">
            {bullets && bullets.length > 0 && (
              <ul className="space-y-1 text-body list-disc list-outside pl-5 text-ink/72">
                {bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-gray-custom mt-[24px] md:mt-[39px]" />
    </div>
  );
}
