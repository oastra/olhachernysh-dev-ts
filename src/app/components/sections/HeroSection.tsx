'use client';

import SectionWrapper from '../common/SectionWrapper';
import HeroCollage from '../ui/heroCollage/HeroCollage';

export default function HeroSection() {
  return (
    <SectionWrapper id="hero">
      {/* Title block */}
      <div className="mx-auto flex flex-col items-center gap-[21px] text-center">
        <h1
          className="
            text-h1 text-ink
            
          "
        >
          Websites That Work.
          <br />
          C-C for Your Business
        </h1>

        <p
          className="
            text-gray-custom
          text-h4-mobile-subheading
            md:text-h3-subheding
          "
        >
          Unique selling proposition&nbsp;&nbsp; developer, clean code, no
          templates
        </p>
      </div>

      {/* Spacing between title block and collage (≈45px on desktop) */}
      <div className="mt-10 lg:mt-11" />

      {/* Collage */}
      <HeroCollage />
    </SectionWrapper>
  );
}
