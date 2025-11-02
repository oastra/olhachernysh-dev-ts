'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  scrolled: boolean; // you already send this from your scroll hook
  /** id of the section after which header should start hiding */
  pinUntilId?: string; // e.g. "#process" or "process"
  children: React.ReactNode;
};

export default function HeaderBar({
  scrolled,
  pinUntilId = 'process', // fallback
  children,
}: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pinnedUntilPx = useRef(0);

  // detect mobile
  useEffect(() => {
    const checkScreenSize = () => {
      if (typeof window === 'undefined') return;
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // measure the section that "unlocks" the auto-hide
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const id = pinUntilId.startsWith('#') ? pinUntilId.slice(1) : pinUntilId;
    const target = document.getElementById(id);

    if (target) {
      const rect = target.getBoundingClientRect();
      // rect.top is relative to viewport, add scroll to get absolute
      pinnedUntilPx.current = rect.top + window.scrollY - 40; // small offset
    } else {
      // if not found, just pin to 300px
      pinnedUntilPx.current = 300;
    }
  }, [pinUntilId]);

  // scroll logic: show until pinnedUntilPx, then show on up, hide on down
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const onScroll = () => {
      const current = window.scrollY;
      const unlockAt = pinnedUntilPx.current;

      // 1) before second section → always visible
      if (current < unlockAt) {
        setIsVisible(true);
      } else {
        // 2) after second section → smart header
        if (current > lastScrollY.current + 4) {
          // scrolling down
          setIsVisible(false);
        } else if (current < lastScrollY.current - 4) {
          // scrolling up
          setIsVisible(true);
        }
      }

      lastScrollY.current = current;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.div
      className="relative"
      initial={false}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.28, ease: 'easeInOut' }}
    >
      {/* glass pill */}
      <AnimatePresence initial={false}>
        {scrolled && (
          <motion.div
            key="pill"
            aria-hidden
            className="absolute inset-0 rounded-full bg-white/30 backdrop-blur-[40px]
                       shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_1px_10px_rgba(0,0,0,0.06)]"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          />
        )}
      </AnimatePresence>

      {/* content */}
      <motion.div
        className="relative z-10 flex items-center justify-between"
        initial={false}
        animate={{
          paddingLeft: scrolled ? 32 : 24,
          paddingRight: scrolled ? 32 : 24,
          paddingTop: scrolled ? (isMobile ? 4 : 16) : 24,
          paddingBottom: scrolled ? (isMobile ? 4 : 16) : 24,
        }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
