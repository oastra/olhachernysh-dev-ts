// components/common/SectionFooter.tsx
'use client';

import Link from 'next/link';
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react';

export default function SectionFooter() {
  const linksNav = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Me' },
    { href: '#projects', label: 'Works' },
    { href: '#services', label: 'Services' },
    { href: '#pricing', label: 'Prices' },
  ];

  const socialLinks = [
    {
      href: 'https://github.com/oastra',
      icon: IconBrandGithub,
      label: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/olha-chernysh-933889284/',
      icon: IconBrandLinkedin,
      label: 'LinkedIn',
    },
    {
      href: 'https://instagram.com/yourusername',
      icon: IconBrandInstagram,
      label: 'Instagram',
    },
  ];

  return (
    <footer
      role="contentinfo"
      aria-label="Contact section footer"
      className="flex flex-col items-center w-full text-white/85 gap-[40px] md:gap-[56px] lg:gap-[83px]"
    >
      {/* Top Row */}
      <div
        className="
          w-full
          flex flex-col lg:flex-row
          items-center lg:items-start
          justify-between
          gap-10
        "
      >
        {/* Left Column - Brand and Acknowledgment (unchanged on lg+) */}
        <div className="w-full lg:w-[564px] flex flex-col gap-[16px] items-center lg:items-start">
          <div className="font-['Poppins'] text-[24px] text-white tracking-[-0.5818px]">
            OlhaChernysh
          </div>
          <p className="font-['Fixel_Text'] text-[12px] text-white leading-[1.3] w-full max-w-[335px] text-center lg:text-left">
            We acknowledge the Traditional Owners of Country throughout
            Australia and acknowledge their continuing connection to land,
            waters and community. We pay our respects to the people, the
            cultures and Elders past and present.
          </p>
        </div>

        {/* Right Columns (nav first on mobile/tablet, contact left + nav right on lg+) */}
        <div
          className="
            w-full lg:w-[505px]
            flex flex-col-reverse lg:flex-row
            items-center lg:items-start
            justify-between
            gap-8
            text-center lg:text-left
          "
        >
          {/* Contact Info (left on lg+) */}
          <div className="flex flex-col gap-4 text-h5 pt-1">
            <div>
              <span className="font-semibold">Location: </span>
              <span className="font-normal">
                Pyrmont, Sydney, NSW, Australia.
              </span>
            </div>
            <div>
              <span className="font-semibold">ABN:</span>
              <span className="font-normal"> 52 699 655 692</span>
              <div className="flex gap-4 pt-4 items-center justify-center lg:justify-start">
                <span className="font-semibold">Links:</span>
                <div className="flex gap-4 items-center">
                  {socialLinks.map(({ href, icon: Icon, label }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-white hover:text-white/80 transition-colors"
                    >
                      <Icon size={24} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation (right on lg+, first on mobile due to flex-col-reverse) */}
          <nav aria-label="Footer navigation" className="flex flex-col gap-4">
            {linksNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  relative inline-block py-1
                  text-white/85 hover:text-white
                  transition-colors
                  group
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded
                "
              >
                {link.label}
                <span
                  aria-hidden
                  className="
                    pointer-events-none
                    absolute left-0 -bottom-0.5 h-[2px] w-0
                    bg-white/90
                    transition-all duration-200
                    group-hover:w-full
                  "
                />
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom Row */}
      <div
        className="
          w-full
          flex flex-col items-center gap-4
          lg:flex-row lg:items-center lg:justify-between
          text-h5
          text-center lg:text-left
        "
      >
        <div>Created by Olha Chernysh</div>

        <div>
          <Link href="/privacy" className="hover:underline underline-offset-2">
            Privacy Policy
          </Link>
          <span className="mx-2 hidden lg:inline">|</span>
          <Link
            href="/terms"
            className="hover:underline underline-offset-2 hidden lg:inline"
          >
            Terms of Service
          </Link>
        </div>

        <div className="flex items-center">
          &copy; All right reserved, {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
