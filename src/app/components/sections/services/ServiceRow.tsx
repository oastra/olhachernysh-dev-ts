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
      className="grid grid-cols-1 gap-8 lg:gap-10 items-start"
      role="region"
      aria-labelledby={`service-${index}`}
    >
      {/* Header: number gutter + content */}
      <button
        onClick={onActivate}
        className="grid w-full text-left focus:outline-none sm:grid-cols-[56px_1fr] sm:gap-4"
        aria-expanded={isActive}
        aria-controls={`service-panel-${index}`}
      >
        {/* Number gutter (stacks above title on very small screens) */}
        <span className="text-[#0A0A1A]/70 text-h5 sm:col-start-1 sm:row-start-1">
          0{index}
        </span>

        {/* Title + summary */}
        <div className="sm:col-start-2 sm:row-start-1">
          <h3
            id={`service-${index}`}
            className={[
              'transition-colors text-h3',
              isActive ? 'text-main-gradient' : 'text-[#0A0A1A]',
            ].join(' ')}
          >
            {title}
          </h3>

          {summary && (
            <p className="mt-2 text-body-mobile md:text-body text-[#0A0A1A]/80">
              {summary}
            </p>
          )}
        </div>
      </button>

      {/* Details: collapsible on ALL breakpoints */}
      <div
        id={`service-panel-${index}`}
        className="sm:grid sm:grid-cols-[56px_1fr] sm:gap-4"
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
          <div className="pt-3">
            {!!bullets?.length && (
              <ul className="space-y-1 text-body list-disc list-outside pl-5 text-[#0A0A1A]/80">
                {bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-[#0A0A1A]/10 mt-6" />
    </div>
  );
}
