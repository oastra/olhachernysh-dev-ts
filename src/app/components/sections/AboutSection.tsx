// components/sections/AboutSection.tsx
'use client';

import Script from 'next/script';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';
import AboutMaskedImage from '../common/AboutMaskedImage';

export default function AboutSection() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Olha Chernysh',
    jobTitle: 'Frontend Developer',
    url: 'https://olhachernysh.dev/',
    sameAs: ['https://www.linkedin.com/in/olha-chernysh/'],
  };

  return (
    <SectionWrapper id="about">
      {/* SEO structured data */}
      <Script
        id="about-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SectionTitle>About Me</SectionTitle>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:items-center xl:gap-[74px]">
        {/* Text */}
        <div className="text-body leading-relaxed text-ink">
          <p>
            I am Olha Chernysh, a Sydney-based Software Developer specialising
            in building fast, accessible, and visually engaging websites. I work
            with modern technologies including Next.js, React, TypeScript, and
            Tailwind CSS to create custom-coded solutions tailored to each
            client’s needs — without relying on generic site builders.
          </p>

          <p className="mt-6">
            I believe every project deserves a tailored approach, whether it’s a
            lightweight one-page site or a complex, dynamic application. My goal
            is to help businesses communicate their brand effectively online
            while delivering an intuitive experience for their users.
          </p>
        </div>

        {/* Masked Image (mobile → tablet → desktop masks) */}
        <div className="max-w-[343px] xl:max-w-[712px] lg:max-h-[603px] justify-self-center lg:justify-self-end w-full">
          <AboutMaskedImage
            src="/images/about/olha.jpg"
            alt="Olha Chernysh – Frontend Developer"
            priority
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
