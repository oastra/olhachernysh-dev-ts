'use client';

import { motion } from 'framer-motion';

export default function StepHoverAnimation() {
  return (
    <>
      {/* Gradient sweep underline */}
      <motion.span
        className="absolute left-6 right-6 bottom-3 h-[2px] rounded-full"
        initial={{ scaleX: 0, opacity: 0 }}
        whileHover={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        style={{
          transformOrigin: 'left center',
          background:
            'linear-gradient(90deg, rgba(110,193,255,1) 0%, rgba(106,92,255,1) 100%)',
        }}
      />

      {/* Floating bubble on the right */}
      <motion.div
        className="pointer-events-none absolute -right-2 top-1/2 hidden md:block"
        initial={{ opacity: 0, y: 0, scale: 0.9 }}
        whileHover={{ opacity: 1, y: -4, scale: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <div
          className="h-6 w-6 rounded-full"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(110,193,255,0.9), rgba(106,92,255,0.6))',
            boxShadow: '0 6px 18px rgba(106,92,255,0.25)',
          }}
        />
      </motion.div>
    </>
  );
}
