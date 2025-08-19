'use client';

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { IconMenu3, IconMinus } from '@tabler/icons-react';
import Logo from './Logo';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import HeaderBar from './HeaderBar';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shellRef = useRef<HTMLDivElement>(null);

  /* Show pill ONLY after a small scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close on hash change / back-forward */
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('hashchange', close);
    window.addEventListener('popstate', close);
    return () => {
      window.removeEventListener('hashchange', close);
      window.removeEventListener('popstate', close);
    };
  }, []);

  /* Close on Esc */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  /* Close when switching to desktop (>= lg: 1024px) */
  useEffect(() => {
    const closeIfDesktop = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    closeIfDesktop();
    window.addEventListener('resize', closeIfDesktop);
    window.addEventListener('orientationchange', closeIfDesktop);
    return () => {
      window.removeEventListener('resize', closeIfDesktop);
      window.removeEventListener('orientationchange', closeIfDesktop);
    };
  }, []);

  /* Lock body scroll when menu is open */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? 'hidden' : prev || '';
    return () => {
      document.body.style.overflow = prev || '';
    };
  }, [open]);

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'sticky top-3 lg:top-6 max-w-[312px] md:max-w-[632px] lg:max-w-[912spx] xl:max-w-[1172px] place-self-center'
          : 'relative'
      }`}
    >
      <div className="mx-auto max-w-[1440px] ">
        <div ref={shellRef}>
          <HeaderBar scrolled={scrolled}>
            <Logo size="md" href="/" />

            <nav className="hidden lg:flex w-[388px] items-center justify-between">
              <DesktopMenu />
            </nav>

            <div className="hidden lg:block">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full
                           font-display text-[18px] leading-[19.8px] text-white
                           bg-main-blue hover:bg-main-gradient transition-colors duration-300"
              >
                Get a Free Quote
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? (
                <IconMinus size={32} stroke={2} className="text-black-custom" />
              ) : (
                <IconMenu3 size={32} stroke={2} className="text-black-custom" />
              )}
            </button>
          </HeaderBar>
        </div>
      </div>

      {/* Full-screen overlay that covers header */}
      {open && <MobileMenu id="mobile-menu" onClose={() => setOpen(false)} />}
    </header>
  );
}
