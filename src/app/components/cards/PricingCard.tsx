import type { PricingPlan } from '@/data/pricing';

import DoneIcon from '../common/DoneIcon';
import GlassButton from '../ui/buttons/GlassButton';

export default function PricingCard({
  title,
  priceLabel,
  summary,
  features,
  ctaHref = '#contact',
  ctaText = 'Contact Me',
}: PricingPlan) {
  return (
    <div className=" w-auto h-auto lg:w-[420px] lg:h-[652px] bg-white rounded-[20px] flex flex-col items-start py-[32px] px-[24px] ">
      {/* Title + Price */}
      <div className="flex flex-col items-start gap-[6px] mb-[16px] w-full">
        <h3 className="text-h1-mobile text-main-blue">{title}</h3>
        <div className="text-h4-mobile-subheading font-bold text-ink">
          {priceLabel}
        </div>
      </div>

      {/* Summary */}
      <p className="text-h5 text-ink font-normal mb-[20px] w-full">{summary}</p>
      {/* Gray Divider */}
      <div className="w-full h-[1px] bg-gray-custom/30 mb-6"></div>

      {/* Features */}
      <ul className="flex flex-col gap-[16px] w-full mb-auto">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-[12px]">
            {/* Custom check icon with proper styling from design system */}
            <span className="w-[21px] h-[21px] flex items-center justify-center bg-[rgba(95,160,255,0.37)] rounded-full flex-shrink-0 mt-1">
              <DoneIcon className="mr-[-6px] mb-[4px]" />
            </span>
            <span className="text-body-mobile text-ink font-normal leading-[24px]">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <div className="mt-auto pt-[20px] w-full flex justify-center">
        <GlassButton label={ctaText} href={ctaHref} />
      </div>
    </div>
  );
}
