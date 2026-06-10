'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import {
  IconTargetArrow,
  IconUsers,
  IconArrowLeft,
  IconArrowRight,
} from '@tabler/icons-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, A11y } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper/types';

import 'swiper/css';

import type {
  ProgressBlueprint as Blueprint,
  BlueprintPage,
} from '@/types/project';

type Props = {
  blueprint: Blueprint;
};

function PageCard({ page }: { page: BlueprintPage }) {
  return (
    <article className="flex h-full flex-col rounded-[20px] border border-ink/12 bg-white p-6 md:p-7">
      <header className="flex flex-col gap-3 border-b border-ink/10 pb-5">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-h3-subheading font-semibold text-ink">
            {page.name}
          </h3>
          {page.level && (
            <span className="inline-flex items-center rounded-full bg-ink/[0.06] px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.08em] text-ink/55">
              {page.level}
            </span>
          )}
        </div>
        {(page.audience || page.keyAction) && (
          <div className="flex flex-wrap gap-x-6 gap-y-1.5">
            {page.audience && (
              <span className="inline-flex items-center gap-1.5 text-h6 text-ink/65">
                <IconUsers size={15} stroke={2} className="text-main-blue/70" />
                {page.audience}
              </span>
            )}
            {page.keyAction && (
              <span className="inline-flex items-center gap-1.5 text-h6 text-ink/65">
                <IconTargetArrow
                  size={15}
                  stroke={2}
                  className="text-main-blue/70"
                />
                {page.keyAction}
              </span>
            )}
          </div>
        )}
      </header>

      <ol className="mt-5 flex flex-col gap-2.5">
        {page.sections.map((section, i) => (
          <li key={section} className="flex items-start gap-2.5">
            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-main-blue/10 text-[11px] font-semibold text-main-blue">
              {i + 1}
            </span>
            <span className="text-body text-ink/75">{section}</span>
          </li>
        ))}
      </ol>
    </article>
  );
}

export default function ProgressBlueprint({ blueprint }: Props) {
  const { intro, principles, pages } = blueprint;
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const total = pages.length;

  return (
    <div className="flex flex-col gap-8">
      {intro && <p className="max-w-[760px] text-body text-ink/80">{intro}</p>}

      {principles && principles.length > 0 && (
        <ul className="flex flex-wrap gap-2.5">
          {principles.map((principle) => (
            <li
              key={principle}
              className="inline-flex items-center rounded-full border border-main-blue/30 bg-main-blue/[0.04] px-3.5 py-1.5 text-h6 font-medium text-main-blue"
            >
              {principle}
            </li>
          ))}
        </ul>
      )}

      {/* Controls */}
      <div className="mx-auto flex w-full max-w-[760px] items-center justify-between gap-4">
        <span className="text-h6 font-medium text-ink/55">
          <span className="text-main-blue">
            {String(active + 1).padStart(2, '0')}
          </span>
          <span className="mx-1.5 text-ink/30">/</span>
          {String(total).padStart(2, '0')} — swipe through the plan
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous page"
            onClick={() => swiper?.slidePrev()}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-main-blue/30 text-main-blue transition-colors hover:bg-main-blue hover:text-white"
          >
            <IconArrowLeft size={18} stroke={2} />
          </button>
          <button
            type="button"
            aria-label="Next page"
            onClick={() => swiper?.slideNext()}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-main-blue/30 text-main-blue transition-colors hover:bg-main-blue hover:text-white"
          >
            <IconArrowRight size={18} stroke={2} />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <Swiper
        modules={[Autoplay, Keyboard, A11y]}
        onSwiper={setSwiper}
        onSlideChange={(s) => setActive(s.realIndex)}
        keyboard={{ enabled: true }}
        loop
        autoplay={
          reducedMotion
            ? false
            : {
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
        }
        spaceBetween={20}
        slidesPerView={1.05}
        breakpoints={{
          744: { slidesPerView: 1.08, spaceBetween: 24 },
          1024: { slidesPerView: 1, spaceBetween: 24 },
        }}
        className="mx-auto w-full max-w-[760px]"
      >
        {pages.map((page) => (
          <SwiperSlide key={page.name} className="!h-auto">
            <PageCard page={page} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dots */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {pages.map((page, i) => (
          <button
            key={page.name}
            type="button"
            aria-label={`Go to ${page.name}`}
            aria-current={i === active}
            onClick={() => swiper?.slideToLoop(i)}
            className={clsx(
              'h-2 rounded-full transition-all',
              i === active
                ? 'w-6 bg-main-blue'
                : 'w-2 bg-ink/15 hover:bg-ink/30',
            )}
          />
        ))}
      </div>
    </div>
  );
}
