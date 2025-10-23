'use client';
import * as React from 'react';

type Item = { value: string; label: string };
type Size = 'desktop' | 'tablet' | 'mobile';

interface Props {
  className?: string;
  items?: [Item, Item, Item, Item];
  size?: Size;
  labelWidthOverrides?: [number?, number?, number?, number?];
  /** Make the card scale with its hero canvas. */
  fluidFromCanvas?: boolean;
  /** Base canvas width (px) to scale from. Desktop hero is 1356. */
  fluidBase?: number;
}

/* Defaults */
const DEFAULT_ITEMS: [Item, Item, Item, Item] = [
  { value: '15+ ', label: 'Developed Projects' },
  { value: '35+ ', label: 'Increased conversions' },
  { value: '13+ ', label: 'Happy Clients' },
  { value: ' 2+ ', label: 'Years\nExperience' },
];

/** Figma bases per size */
const BASE = {
  desktop: {
    W: 473,
    H: 233,
    INNER_W: 434,
    PAD: { x: 19, y: 33 },
    GAP: { r1: 28, r2: 46 },
    radius: 25,
  },
  tablet: {
    W: 353,
    H: 138,
    INNER_W: 311,
    PAD: { x: 22, y: 25 },
    GAP: { r1: 16, r2: 36 },
    radius: 20,
  },
  mobile: {
    W: 353,
    H: 138,
    INNER_W: 311,
    PAD: { x: 22, y: 25 },
    GAP: { r1: 16, r2: 36 },
    radius: 20,
  },
};

export default function KpiCard({
  className = '',
  items = DEFAULT_ITEMS,
  size = 'desktop',
  labelWidthOverrides,
  fluidFromCanvas = false,
  fluidBase = 1356,
}: Props) {
  const S = BASE[size];
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [k, setK] = React.useState(1); // numeric scale

  // Observe the nearest hero canvas (marked with data-hero-canvas)
  React.useLayoutEffect(() => {
    if (!fluidFromCanvas) return;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const canvas =
      wrapper.closest<HTMLElement>('[data-hero-canvas]') ??
      (wrapper.parentElement as HTMLElement);

    if (!canvas) return;

    const ro = new ResizeObserver(() => {
      const w = canvas.clientWidth || fluidBase;
      setK(w / fluidBase);
    });
    ro.observe(canvas);
    return () => ro.disconnect();
  }, [fluidFromCanvas, fluidBase]);

  const Inner = () => (
    <div
      className="flex flex-col gap-[4px]"
      style={{ padding: `${S.PAD.y}px ${S.PAD.x}px`, width: S.INNER_W }}
    >
      {/* row 1 */}
      <div className="flex items-center" style={{ gap: S.GAP.r1 }}>
        <Kpi
          value={items[0].value}
          label={items[0].label}
          variant={size}
          labelWidth={labelWidthOverrides?.[0]}
        />
        <Kpi
          value={items[1].value}
          label={items[1].label}
          variant={size}
          labelWidth={labelWidthOverrides?.[1]}
        />
      </div>
      {/* row 2 */}
      <div className="flex items-center" style={{ gap: S.GAP.r2 }}>
        <Kpi
          value={items[2].value}
          label={items[2].label}
          variant={size}
          labelWidth={labelWidthOverrides?.[2]}
        />
        <Kpi
          value={items[3].value}
          label={items[3].label}
          variant={size}
          labelWidth={labelWidthOverrides?.[3]}
        />
      </div>
    </div>
  );

  if (fluidFromCanvas) {
    // layout box scales, inner card scales with a numeric transform
    return (
      <div
        ref={wrapperRef}
        className={className}
        style={{ width: S.W * k, height: S.H * k, position: 'relative' }}
      >
        <div
          className="relative overflow-hidden bg-main-blue"
          style={{
            width: S.W,
            height: S.H,
            transform: `scale(${k})`,
            transformOrigin: 'top left',
            borderRadius: S.radius,
          }}
        >
          <Inner />
        </div>
      </div>
    );
  }

  // non-fluid fallback
  return (
    <div
      className="relative overflow-hidden bg-main-blue"
      style={{ width: S.W, height: S.H, borderRadius: S.radius }}
    >
      <Inner />
    </div>
  );
}

function Kpi({
  value,
  label,
  variant,
  labelWidth,
}: {
  value: string;
  label: string;
  variant: Size;
  labelWidth?: number;
}) {
  const isDesktop = variant === 'desktop';
  const defaultLabelW = 99;

  return (
    <div className="flex items-center gap-1">
      <div
        className={[
          'text-gray-custom font-medium text-center whitespace-pre',
          isDesktop
            ? 'text-[54px] leading-[81px]'
            : 'text-[28px] leading-[42px]',
        ].join(' ')}
      >
        {value}
      </div>
      <div
        className={[
          'text-gray-custom font-normal whitespace-pre-line',
          isDesktop
            ? 'text-[16px] leading-[17.6px]'
            : 'text-[14px] leading-[15.4px]',
        ].join(' ')}
        style={{ width: (labelWidth ?? defaultLabelW) + 'px' }}
      >
        {label}
      </div>
    </div>
  );
}
