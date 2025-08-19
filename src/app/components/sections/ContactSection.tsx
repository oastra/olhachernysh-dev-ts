// components/sections/ContactSection.tsx
'use client';

import SectionWrapper from '../common/SectionWrapper';
import ContactForm from '../common/ContactForm';
import SectionFooter from '../common/SectionFooter';

export default function ContactSection() {
  return (
    <SectionWrapper
      as="section"
      id="contact"
      aria-labelledby="contact-title"
      className="!pt-0 !pb-0"
    >
      <div className="bg-[#0E2C73] rounded-[36px] md:rounded-[48px] text-white px-6 py-10 md:px-12 md:py-14">
        <header className="grid md:grid-cols-2 gap-10 md:gap-16">
          <h2
            id="contact-title"
            className="text-[28px] md:text-[36px] font-semibold leading-tight"
          >
            Ready to bring your website idea to life? <br /> Get in touch.
          </h2>
          <ContactForm />
        </header>

        <div className="my-8 h-px bg-white/20" />

        {/* This footer belongs to the CONTACT section (not site-wide) */}
        <SectionFooter />
      </div>
    </SectionWrapper>
  );
}
