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
            I&apos;m Olha Chernysh, a Sydney-based Software Developer
            who builds fast, accessible, and visually engaging websites.
            Together with a dedicated UI/UX designer, I create custom-coded
            solutions tailored to each client&apos;s needs — no templates,
            no page builders.
          </p>

          <p className="mt-6">
            Every project gets a tailored approach, whether it&apos;s a
            one-page landing site or a full-scale web application. My goal
            is to help businesses communicate their brand online and deliver
            an experience their users actually enjoy.
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
