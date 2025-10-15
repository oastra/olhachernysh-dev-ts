'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  scrolled: boolean;
  isVisible: boolean; // Add this prop to control visibility based on scroll direction
  children: React.ReactNode;
};

export default function HeaderBar({
  scrolled,
  isVisible = true,
  children,
}: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <motion.div
      className="relative"
      initial={false}
      animate={{
        y: isVisible ? 0 : -100, // Hide header when scrolling down
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {/* Animated pill background */}
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

      {/* Content row: animates padding so the size change is silky */}
      <motion.div
        className="relative z-10 flex items-center justify-between"
        initial={false}
        animate={{
          paddingLeft: scrolled ? 32 : 24,
          paddingRight: scrolled ? 32 : 24,
          paddingTop: scrolled ? (isMobile ? 4 : 16) : 24, // 4px mobile, 16px desktop when scrolled
          paddingBottom: scrolled ? (isMobile ? 4 : 16) : 24, // 4px mobile, 16px desktop when scrolled
        }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
