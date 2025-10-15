'use client';
import React from 'react';
import { IconMinus } from '@tabler/icons-react';
import NavLinks from './NavLinks';
import Logo from './Logo';
import CtaButton from '../ui/buttons/CtaButton';

type MobileMenuProps = { onClose: () => void; id?: string };

export default function MobileMenu({ onClose, id }: MobileMenuProps) {
  return (
    <div
      id={id}
      className="
        fixed inset-0 z-[60]  /* above header (header uses z-50) */
        bg-white/70 backdrop-blur-md lg:hidden
      "
      role="dialog"
      aria-modal="true"
    >
      {/* top row */}
      <div className="flex items-center justify-between px-6 pt-6">
        <Logo size="md" href="/" />
        <button
          aria-label="Close menu"
          onClick={onClose}
          className="p-2 rounded-full"
        >
          <IconMinus size={32} stroke={2} className="text-black-custom" />
        </button>
      </div>

      {/* content */}
      <div className="h-full w-full px-6 pb-10 pt-12 flex flex-col items-center gap-8">
        <NavLinks onClick={onClose} className="text-lg" />
        <CtaButton
          label="Get a Free Quote"
          href="#contact"
          onClick={onClose}
          className="bg-main-blue text-white text-base px-6 py-3 rounded-full font-display"
        />
      </div>
    </div>
  );
}
