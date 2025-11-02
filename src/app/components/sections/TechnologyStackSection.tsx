'use client';

import SectionWrapper from '../common/SectionWrapper';
import SkillsMarquee from '../ui/SkillsMarquee';

export default function TechnologyStackSection() {
  return (
    <SectionWrapper id="technology-stack" size="tight" className="w-full">
      {/* running logos */}
      <div className="mb-8 md:mb-16 lg:mb-[93px]">
        <SkillsMarquee />
      </div>

      {/* quote */}
      <blockquote className="text-h3 text-ink/80">
        “People use site builders and get generic websites that perform poorly.
        Custom code creates faster, unique websites that rank higher and scale
        without limits.”
      </blockquote>
    </SectionWrapper>
  );
}
