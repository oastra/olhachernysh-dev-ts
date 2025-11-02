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
  animationDuration = 3.5,
  animationDelay = 0.2,
  ease = 'ease-in-out',
  forceOnMount = false,
}: SnakeOverlayProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [jsReady, setJsReady] = useState(false); // to avoid initial flash

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const runAnimation = () => {
      const length = path.getTotalLength();

      // start hidden
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;

      setTimeout(() => {
        path.style.transition = `stroke-dashoffset ${animationDuration}s ${ease}`;
        path.style.strokeDashoffset = '0';

        // after finishing keep the line
        setTimeout(() => {
          path.style.strokeDasharray = 'none';
        }, animationDuration * 1000);
      }, animationDelay * 1000);

      setHasAnimated(true);
    };

    // 1) forced (desktop or your own reason)
    if (forceOnMount && !hasAnimated) {
      setJsReady(true);
      runAnimation();
      return;
    }

    // 2) normal — wait until real visible
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          // we want a GOOD visibility, not 1px
          if (
            entry.isIntersecting &&
            entry.intersectionRatio > 0.25 &&
            !hasAnimated
          ) {
            setJsReady(true);
            runAnimation();
            obs.disconnect();
          }
        });
      },
      {
        // negative top/bottom so it starts a bit LATER (good for tall mobile section)
        rootMargin: '-120px 0px -120px 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
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
        /* 👇 prevent the “already drawn” flash before JS runs */
        style={
          !jsReady && !hasAnimated
            ? {
                strokeDasharray: 1,
                strokeDashoffset: 1,
              }
            : undefined
        }
      />
    </svg>
  );
}
