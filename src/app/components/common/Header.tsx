'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { IconMenu3, IconMinus } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './Logo';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import HeaderBar from './HeaderBar';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  // Scroll state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close on hashchange / back/forward
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('hashchange', close);
    window.addEventListener('popstate', close);
    return () => {
      window.removeEventListener('hashchange', close);
      window.removeEventListener('popstate', close);
    };
  }, []);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Close if resizing to desktop
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

  // Body scroll lock while menu open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? 'hidden' : prev || '';
    return () => {
      document.body.style.overflow = prev || '';
    };
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    toggleBtnRef.current?.focus();
  };

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'sticky top-3 lg:top-6 max-w-[312px] md:max-w-[632px] lg:max-w-[912px] xl:max-w-[1172px] place-self-center'
          : 'relative'
      }`}
    >
      <div className="mx-auto max-w-[1440px]">
        <HeaderBar scrolled={scrolled} pinUntilId="technology-stack">
          <Logo size="md" href="/" />

          <nav className="hidden xl:flex w-[388px] items-center justify-between">
            <DesktopMenu />
          </nav>

          <div className="hidden xl:block">
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
            ref={toggleBtnRef}
            className="xl:hidden"
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

      {/* Mobile menu with enter/exit animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            // Only fade — no y translate (no transform)
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <MobileMenu id="mobile-menu" onClose={handleClose} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
