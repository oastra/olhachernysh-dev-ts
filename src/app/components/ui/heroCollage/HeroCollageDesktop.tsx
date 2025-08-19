'use client';

import KpiCard from '../../cards/KpiCard';
import PrimaryButton from '../buttons/PrimaryButton';
import {
  svgPathToDataUri,
  HERO_1_DESKTOP_MASK_PATH, // Vector 1 (native 809×537)
  HERO_2_DESKTOP_MASK_PATH, // Vector 2 (native 543×380)
} from '@/utils/masks';

/* --- Figma numbers (pixels) --- */
const BIG = { w: 798, h: 535, left: 5, top: 0 }; // Vector 1
const TILE = { w: 535, h: 378, left: 626, top: 157 }; // Vector 2
const PHONE = { w: 179, h: 535, left: 1177, top: 0 }; // right strip
const CTA = { w: 338, h: 135, left: 823, top: 0 }; // CTA pill

/* --- Build WHITE CSS masks (white = visible) --- */
const BIG_MASK_URI = svgPathToDataUri({
  width: BIG.w,
  height: BIG.h,
  fill: 'white',
  ...HERO_1_DESKTOP_MASK_PATH,
});
const TILE_MASK_URI = svgPathToDataUri({
  width: TILE.w,
  height: TILE.h,
  fill: 'white',
  ...HERO_2_DESKTOP_MASK_PATH,
});

export default function HeroCollage() {
  return (
    <section className="mx-auto max-w-[1356px] px-4 md:px-6 xl:px-0">
      {/* fixed-size collage canvas (matches your Figma) */}
      <div
        className="
          relative isolate mx-auto
          w-[1356px] h-[535px]
          overflow-hidden
        "
      >
        {/* ========= UNDERLAY (behind everything) ========= */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          {/* Vector 1 — big S */}
          <div
            className="absolute"
            style={
              {
                left: BIG.left,
                top: BIG.top,
                width: BIG.w,
                height: BIG.h,
                backgroundImage: 'url(/images/hero/hero-img-1.webp)',
                backgroundSize: 'cover',
                backgroundPosition: '60% 50%',
                WebkitMaskImage: `url(${BIG_MASK_URI})`,
                maskImage: `url(${BIG_MASK_URI})`,
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskSize: '100% 100%',
                maskSize: '100% 100%',
                borderRadius: 40, // keeps edge AA crisp
              } as React.CSSProperties
            }
          />

          {/* Vector 2 — right tile */}
          <div
            className="absolute"
            style={
              {
                left: TILE.left,
                top: TILE.top,
                width: TILE.w,
                height: TILE.h,
                backgroundImage: 'url(/images/hero/hero-img-2.webp)',
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%',
                WebkitMaskImage: `url(${TILE_MASK_URI})`,
                maskImage: `url(${TILE_MASK_URI})`,
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskSize: '100% 100%',
                maskSize: '100% 100%',
              } as React.CSSProperties
            }
          />
        </div>

        {/* ========= FOREGROUND (on top) ========= */}

        {/* KPI card (separate component) */}
        {/* Desktop */}
        <div className="hidden xl:block">
          <KpiCard size="desktop" />
        </div>

        {/* Tablet */}
        <div className="hidden md:block xl:hidden">
          <KpiCard size="tablet" />
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <KpiCard size="mobile" labelWidthOverrides={[99, 99, 88, 99]} />
        </div>

        {/* CTA (separate component) */}
        <div
          className="absolute z-20 flex items-start justify-end"
          style={{ left: CTA.left, top: CTA.top, width: CTA.w, height: CTA.h }}
        >
          <PrimaryButton
            label="View My Work"
            href="#projects"
            fixedCollageSize
            className="h-[135px] w-[338px] rounded-[35px] text-[24px] leading-[26.4px]"
          />
        </div>

        {/* Phone strip — NO rotation */}
        <div
          className="absolute z-20 rounded-[35px] overflow-hidden"
          style={{
            left: PHONE.left,
            top: PHONE.top,
            width: PHONE.w,
            height: PHONE.h,
          }}
        >
          <img
            src="/images/hero/hero-img-3.webp"
            alt="Phone preview"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
