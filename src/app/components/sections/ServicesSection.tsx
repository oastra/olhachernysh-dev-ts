'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionWrapper from '@/app/components/common/SectionWrapper';
import SectionTitle from '@/app/components/common/SectionTitle';
import ServiceRow from '../services/ServiceRow';
import ServiceMaskedImage from '../services/ServiceMaskedImage';
import { SERVICES } from '@/data/services.data';

export default function ServicesSection() {
  // first item open on all viewports
  const [active, setActive] = useState<number>(1);

  // (Optional) re-assert #1 on desktop hydration if you like
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(min-width:1024px)').matches
    ) {
      setActive(1);
    }
  }, []);

  const activeItem = SERVICES.find((s) => s.index === active);

  return (
    <SectionWrapper id="services">
      <SectionTitle>My Services</SectionTitle>

      <div className="overflow-x-hidden gap-4 px-0px-1 lg:px-0 lg:grid lg:grid-cols-[503px_1fr] lg:gap-12">
        {/* LEFT: 503×712 image, desktop only, not sticky */}
        <div className="hidden lg:block w-[503px] h-[712px]">
          <AnimatePresence mode="wait">
            {activeItem?.image && (
              <motion.div
                key={activeItem.index}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="h-full w-full"
              >
                <ServiceMaskedImage
                  src={activeItem.image.src}
                  alt={activeItem.image.alt}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* RIGHT: accordion list (scrollable on desktop only) */}
        <div className="space-y-8 lg:space-y-12 pl-0 w-full lg:h-[712px] lg:overflow-y-auto lg:pl-8">
          {SERVICES.map((s) => (
            <ServiceRow
              key={s.index}
              index={s.index}
              title={s.title}
              summary={s.summary}
              bullets={s.bullets}
              isActive={active === s.index}
              onActivate={() => setActive(s.index)}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
