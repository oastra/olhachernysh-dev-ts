'use client';

import { useEffect, useRef, useState } from 'react';

interface SnakeOverlayProps {
  viewBox: string;
  d: string;
  className?: string;
  strokeWidth?: number;
  animationDuration?: number;
  animationDelay?: number;
  ease?: string;
  /** NEW: use this on mobile to always animate */
  forceOnMount?: boolean;
}

export default function SnakeOverlay({
  viewBox,
  d,
  className = '',
  strokeWidth = 3,
  animationDuration = 3.5,
  animationDelay = 0.2,
  ease = 'ease-in-out',
  forceOnMount = false,
}: SnakeOverlayProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const path = pathRef.current;
    if (!path || hasAnimated) return;

    const animate = () => {
      const pathLength = path.getTotalLength();
      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${pathLength}`;

      // delay before draw
      setTimeout(() => {
        path.style.transition = `stroke-dashoffset ${animationDuration}s ${ease}`;
        path.style.strokeDashoffset = '0';

        // keep the line
        setTimeout(() => {
          path.style.strokeDasharray = 'none';
        }, animationDuration * 1000);
      }, animationDelay * 1000);

      setHasAnimated(true);
    };

    // 🔒 1) if we explicitly force it (mobile)
    if (forceOnMount) {
      animate();
      return;
    }

    // 🔍 2) normal behavior with IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animate();
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: '150px 0px 150px 0px', // a bit more generous
      },
    );

    observer.observe(path);

    // 🛟 3) fallback: if observer never fires (some mobile Safari cases)
    const timeoutId = setTimeout(() => {
      if (!hasAnimated) {
        animate();
      }
    }, 1200);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [hasAnimated, animationDuration, animationDelay, ease, forceOnMount]);

  return (
    <svg
      className={`pointer-events-none absolute inset-0 z-0 ${className}`}
      width="100%"
      height="100%"
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient
          id="processSnakeGrad"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#000924" />
          <stop offset="35%" stopColor="#092B79" />
          <stop offset="97.6%" stopColor="#00D4FF" />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        d={d}
        fill="none"
        stroke="url(#processSnakeGrad)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
