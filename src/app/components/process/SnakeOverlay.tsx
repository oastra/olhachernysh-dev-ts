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
  forceOnMount?: boolean;
}

export default function SnakeOverlay({
  viewBox,
  d,
  className = '',
  strokeWidth = 3,
  animationDuration = 3.5, // 👈 match desktop
  animationDelay = 0.2, // 👈 match desktop
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
      // initial (hidden)
      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${pathLength}`;

      setTimeout(() => {
        path.style.transition = `stroke-dashoffset ${animationDuration}s ${ease}`;
        path.style.strokeDashoffset = '0';

        // keep the line after draw
        setTimeout(() => {
          path.style.strokeDasharray = 'none';
        }, animationDuration * 1000);
      }, animationDelay * 1000);

      setHasAnimated(true);
    };

    // mobile / forced
    if (forceOnMount) {
      animate();
      return;
    }

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
        rootMargin: '150px 0px 150px 0px',
      },
    );

    observer.observe(path);

    // fallback for iOS
    const id = setTimeout(() => {
      if (!hasAnimated) animate();
    }, 1200);

    return () => {
      observer.disconnect();
      clearTimeout(id);
    };
  }, [hasAnimated, animationDuration, animationDelay, ease, forceOnMount]);

  return (
    <svg
      className={`pointer-events-none absolute inset-0 z-0 ${className}`}
      width="100%"
      height="100%"
      viewBox={viewBox}
      // this keeps proportions like desktop
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
        // important on mobile to keep stroke width consistent
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
