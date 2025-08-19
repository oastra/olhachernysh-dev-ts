import type { PricingPlan } from '@/data/pricing';
import PricingFeature from '../common/PricingFeature';

export default function PricingCard({
  title,
  priceLabel,
  summary,
  features,
  ctaHref = '#contact',
  ctaText = 'Contact Me',
}: PricingPlan) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col h-full">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-lg font-bold">{priceLabel}</p>
      <p className="text-gray-600 mt-2 mb-4">{summary}</p>
      <ul className="space-y-2 flex-1">
        {features.map((f, i) => (
          <PricingFeature key={i} text={f} />
        ))}
      </ul>
      <a
        href={ctaHref}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700 transition"
      >
        {ctaText} →
      </a>
    </div>
  );
}
