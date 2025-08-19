'use client';

import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';
import PricingCard from '../cards/PricingCard';
import { pricingPlans } from '@/data/pricing';

export default function PricingSection() {
  return (
    <SectionWrapper id="pricing">
      <SectionTitle right="All packages include professional UI/UX design handled by an expert designer, followed by custom-coded development.">
        Pricing{' '}
      </SectionTitle>
      <div className="grid gap-8 md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.id} {...plan} />
        ))}
      </div>
    </SectionWrapper>
  );
}
