'use client';

import KpiCard from '../../cards/KpiCard';
import PrimaryButton from '../buttons/PrimaryButton';
import {
  svgPathToDataUri,
  HERO_1_TABLET_MASK_PATH,
  HERO_1__MOBILE_MASK_PATH,
} from '@/utils/masks';

/* Figma sizes */
const MOBILE = { w: 353, h: 203 };
const TABLET = { w: 659, h: 535 };

/* Masks (white = visible) */
const MOBILE_MASK_URI = svgPathToDataUri({
  width: MOBILE.w,
  height: MOBILE.h,
  fill: 'white',
  ...HERO_1__MOBILE_MASK_PATH,
});
const TABLET_MASK_URI = svgPathToDataUri({
  width: TABLET.w,
  height: TABLET.h,
  fill: 'white',
  ...HERO_1_TABLET_MASK_PATH,
});

export default function HeroCollageCompact() {
  return (
    <div className="mx-auto flex max-w-[659px] flex-col items-center gap-2 md:gap-[19px]">
      {/* ==================== TOP (Hero-1) ==================== */}
      {/* Mobile hero (masked) + CTA top-left */}
      <div
        className="relative md:hidden"
        style={{ width: MOBILE.w, height: MOBILE.h }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/hero/hero-img-1.webp)',
            backgroundSize: 'cover',
            backgroundPosition: '60% 50%',
            WebkitMaskImage: `url(${MOBILE_MASK_URI})`,
            maskImage: `url(${MOBILE_MASK_URI})`,
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskSize: '100% 100%',
            maskSize: '100% 100%',
          }}
        />
        <div className="absolute left-0 top-0">
          <PrimaryButton
            label="View My Work"
            href="#projects"
            className="h-[69px] w-[207px] rounded-[20px] text-[18px] leading-[19.8px]"
          />
        </div>
      </div>

      {/* Tablet hero (masked) + KPI overlay top-left */}
      <div
        className="relative hidden md:block"
        style={{ width: TABLET.w, height: TABLET.h }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/hero/hero-img-1.webp)',
            backgroundSize: 'cover',
            backgroundPosition: '60% 50%',
            WebkitMaskImage: `url(${TABLET_MASK_URI})`,
            maskImage: `url(${TABLET_MASK_URI})`,
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskSize: '100% 100%',
            maskSize: '100% 100%',
          }}
        />
        <div className="absolute left-[0px] top-[0px]">
          <KpiCard size="desktop" className="rounded-[25px]" />
        </div>
      </div>

      {/* KPI (mobile only, below hero) */}
      <div className="w-[353px] md:hidden">
        <KpiCard size="mobile" labelWidthOverrides={[99, 99, 88, 99]} />
      </div>

      {/* ==================== SECOND ROW ==================== */}
      {/* Mobile: glass card + image (unchanged) */}
      <div className="relative md:hidden">
        <div
          className="h-[249.41px] w-[353px] rounded-[45px]"
          style={{ background: 'rgba(95,160,255,0.37)' }}
        />
        <img
          src="/images/hero/hero-img-2.webp"
          alt="Work collage"
          className="absolute inset-0 h-[249.41px] w-[353px] rounded-[45px] object-cover"
        />
      </div>

      {/* Tablet: two images only (rotated phone + big collage), gap = 16px */}
      <div className="hidden w-full items-start md:flex md:flex-row md:gap-4">
        {/* Rotated phone */}
        <div className=" overflow-hidden h-[432px] w-[179px] rounded-[25px] bg-[#F6F6F6]">
          <img
            src="/images/hero/hero-img-3.webp"
            alt="Phone preview"
            className="   object-cover"
          />
        </div>

        {/* Big collage image (no glass) */}
        <div className="rounded-[25px] overflow-hidden">
          <img
            src="/images/hero/hero-img-2.webp"
            alt="Work collage"
            className="h-[432px] w-[490px] object-cover"
          />
        </div>
      </div>

      {/* Tablet CTA (mobile CTA is on the image) */}
      <div className="hidden md:block">
        <PrimaryButton
          label="View My Work"
          href="#projects"
          className="h-[69px] w-[326px] rounded-[20px] text-[18px] leading-[19.8px]"
        />
      </div>
    </div>
  );
}
