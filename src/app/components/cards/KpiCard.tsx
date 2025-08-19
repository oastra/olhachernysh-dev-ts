'use client';

type Item = { value: string; label: string };
type Size = 'desktop' | 'tablet' | 'mobile';

interface Props {
  className?: string;
  items?: [Item, Item, Item, Item];
  size?: Size; // 'desktop' | 'tablet' | 'mobile'
  /** Optional: force specific label widths (per item) to match Figma wrapping precisely */
  labelWidthOverrides?: [number?, number?, number?, number?];
}

const DEFAULT_ITEMS: [Item, Item, Item, Item] = [
  { value: '15+ ', label: 'Developed Projects' },
  { value: '35+ ', label: 'Increased conversions' },
  { value: '13+ ', label: 'Happy Clients' },
  { value: ' 2+ ', label: 'Years\nExperience' },
];

export default function KpiCard({
  className = '',
  items = DEFAULT_ITEMS,
  size = 'desktop',
  labelWidthOverrides,
}: Props) {
  const isDesktop = size === 'desktop';
  const isCompact = size === 'tablet' || size === 'mobile';

  return (
    <div
      className={[
        'relative overflow-hidden bg-main-blue',
        isDesktop
          ? 'rounded-[25px] w-[473px] h-[233px]'
          : 'rounded-[20px] w-[353px] h-[138px]',
        className,
      ].join(' ')}
    >
      {/* Padding per Figma: desktop (px=19, py=33), compact (px=22, py=25) */}
      <div
        className={[
          'flex flex-col',
          isDesktop
            ? 'px-[19px] py-[33px] w-[434px] gap-[4px]'
            : 'px-[22px] py-[25px] w-[311px] gap-[4px]',
        ].join(' ')}
      >
        {/* Row 1 — gaps: desktop 28 / compact 17 */}
        <div
          className={[
            'flex items-center',
            isDesktop ? 'gap-[28px]' : 'gap-[16px]',
          ].join(' ')}
        >
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

        {/* Row 2 — gaps: desktop 46 / compact 48 */}
        <div
          className={[
            'flex items-center',
            isDesktop ? 'gap-[46px]' : 'gap-[36px]',
          ].join(' ')}
        >
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
  const defaultLabelW = 99; // Figma default (set 88 via override for “Happy Clients” if you want exact wrap)

  return (
    <div className="flex items-center gap-1">
      {/* Values: desktop 54/81, compact 28/42 */}
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
      {/* Labels: desktop 16/17.6, compact 14/15.4; fixed width to control wrapping */}
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
