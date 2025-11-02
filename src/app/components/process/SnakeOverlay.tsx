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
  forceOnMount?: boolean; // force right away, but still only once
}

export default function SnakeOverlay({
  viewBox,
  d,
  className = '',
  strokeWidth = 3,
  animationDuration = 5,
  animationDelay = 0.3,
  ease = 'ease-in-out',
  forceOnMount = false,
}: SnakeOverlayProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const runAnimation = () => {
      if (!path) return;
      const pathLength = path.getTotalLength();

      // initial hidden
      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${pathLength}`;

      setTimeout(() => {
        path.style.transition = `stroke-dashoffset ${animationDuration}s ${ease}`;
        path.style.strokeDashoffset = '0';

        // keep line
        setTimeout(() => {
          path.style.strokeDasharray = 'none';
        }, animationDuration * 1000);
      }, animationDelay * 1000);

      setHasAnimated(true);
    };

    // 1) forced mode → run once on mount
    if (forceOnMount && !hasAnimated) {
      runAnimation();
      return;
    }

    // 2) normal: wait until visible
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            runAnimation();
            // stop observing after first time
            obs.disconnect();
          }
        });
      },
      {
        threshold: 0.15, // be a bit stricter so it runs only when really on screen
        rootMargin: '100px 0px 100px 0px',
      },
    );

    observer.observe(path);

    return () => {
      observer.disconnect();
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
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
