// components/common/SectionFooter.tsx
'use client';

import Link from 'next/link';
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react';

export default function SectionFooter() {
  return (
    <footer
      role="contentinfo"
      aria-label="Contact section footer"
      className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/85"
    >
      <div>
        <p className="font-medium">OlhaChernysh</p>
        <p className="mt-2 text-xs leading-relaxed">
          We acknowledge the Traditional Owners of Country throughout Australia
          and acknowledge their continuing connection to land, waters and
          community. We pay our respects to the people, the cultures and Elders
          past and present.
        </p>
      </div>

      <div>
        <p>
          <span className="font-medium">Location:</span> Pyrmont, Sydney, NSW,
          Australia.
        </p>
        <p>
          <span className="font-medium">ABN:</span> 52 699 655 692
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium">Link:</span>{' '}
          <IconBrandGithub size={16} />
          <IconBrandLinkedin size={16} />
          <IconBrandInstagram size={16} />
        </p>
      </div>

      <nav
        aria-label="Footer navigation"
        className="flex flex-col items-start md:items-end gap-2"
      >
        <Link href="#">Home</Link>
        <Link href="#">About Me</Link>
        <Link href="#">Works</Link>
        <Link href="#">Services</Link>
        <Link href="#">Prices</Link>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
          <span>© All rights reserved, 2025</span>
          <Link href="#">Privacy Policy</Link>
        </div>
      </nav>
    </footer>
  );
}
