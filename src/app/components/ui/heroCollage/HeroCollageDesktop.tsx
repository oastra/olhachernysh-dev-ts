'use client';

import * as React from 'react';
import KpiCard from '../../cards/KpiCard';
import PrimaryButton from '../buttons/PrimaryButton';
import {
  svgPathToDataUri,
  HERO_1_DESKTOP_MASK_PATH, // Vector 1 (native 809×537)
  HERO_2_DESKTOP_MASK_PATH, // Vector 2 (native 543×380)
} from '@/utils/masks';

/* --- Base Figma canvas --- */
const BASE = { W: 1356, H: 535 };

/* Helpers to convert Figma px → % of canvas */
const pxW = (px: number) => `${(px / BASE.W) * 100}%`;
const pxH = (px: number) => `${(px / BASE.H) * 100}%`;

/* --- Figma numbers (pixels) --- */
const BIG = { w: 798, h: 535, left: 5, top: 0 }; // Vector 1
const TILE = { w: 535, h: 378, left: 626, top: 157 }; // Vector 2
const PHONE = { w: 179, h: 535, left: 1177, top: 0 }; // right strip
const CTA = { w: 338, h: 135, left: 823, top: 0 }; // CTA pill
const KPI = { left: 0, top: 0 }; // KPI card (top-left)

/* --- White CSS masks (white = visible) --- */
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

export default function HeroCollageDesktop() {
  return (
    <div className="mx-auto w-full px-4 md:px-6 xl:px-0">
      {/* Responsive collage canvas (fixed aspect, container queries enabled) */}
      <div
        data-hero-canvas="desktop"
        className="
          relative isolate mx-auto
          w-full max-w-[1356px]
          aspect-[1356/535]
          overflow-hidden
          [container-type:inline-size]
        "
      >
        {/* ========= UNDERLAY ========= */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Vector 1 — big S */}
          <div
            className="absolute"
            style={
              {
                left: pxW(BIG.left),
                top: pxH(BIG.top),
                width: pxW(BIG.w),
                height: pxH(BIG.h),
                backgroundImage: 'url(/images/hero/hero-img-1.webp)',
                backgroundSize: 'cover',
                backgroundPosition: '60% 50%',
                WebkitMaskImage: `url(${BIG_MASK_URI})`,
                maskImage: `url(${BIG_MASK_URI})`,
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskSize: '100% 100%',
                maskSize: '100% 100%',
                borderRadius: 'calc(40px * (100cqw / 1356))',
              } as React.CSSProperties
            }
          />

          {/* Vector 2 — right tile */}
          <div
            className="absolute"
            style={
              {
                left: pxW(TILE.left),
                top: pxH(TILE.top),
                width: pxW(TILE.w),
                height: pxH(TILE.h),
                backgroundImage: 'url(/images/hero/hero-img-2.webp)',
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%',
                WebkitMaskImage: `url(${TILE_MASK_URI})`,
                maskImage: `url(${TILE_MASK_URI})`,
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskSize: '100% 100%',
                maskSize: '100% 100%',
                borderRadius: 'calc(24px * (100cqw / 1356))',
              } as React.CSSProperties
            }
          />
        </div>

        {/* ========= FOREGROUND ========= */}

        {/* KPI — scales numerically with the hero canvas width (fluidBase=1356) */}
        <div
          className="absolute z-20"
          style={{ left: pxW(KPI.left), top: pxH(KPI.top) }}
        >
          <KpiCard size="desktop" fluidFromCanvas fluidBase={1356} />
        </div>

        {/* CTA — wrapper defines size; button fills and scales via cqw */}
        <div
          className="absolute z-20 flex items-start justify-end"
          style={{
            left: pxW(CTA.left),
            top: pxH(CTA.top),
            width: pxW(CTA.w),
            height: pxH(CTA.h),
          }}
        >
          <PrimaryButton
            label="View My Work"
            href="#projects"
            fixedCollageSize
            className="rounded-[35px]"
          />
        </div>

        {/* Phone strip — no rotation */}
        <div
          className="absolute z-20 overflow-hidden rounded-[35px]"
          style={{
            left: pxW(PHONE.left),
            top: pxH(PHONE.top),
            width: pxW(PHONE.w),
            height: pxH(PHONE.h),
            borderRadius: 'calc(35px * (100cqw / 1356))',
          }}
        >
          <img
            src="/images/hero/hero-img-3.webp"
            alt="Phone preview"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
