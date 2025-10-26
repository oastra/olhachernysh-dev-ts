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
}

export default function SnakeOverlay({
  viewBox,
  d,
  className = '',
  strokeWidth = 3,
  animationDuration = 3.5,
  animationDelay = 0.2,
  ease = 'ease-in-out',
}: SnakeOverlayProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const path = pathRef.current;
    if (!path || hasAnimated) return;

    const pathLength = path.getTotalLength();

    // Set up the initial state - path is hidden
    path.style.strokeDasharray = `${pathLength}`;
    path.style.strokeDashoffset = `${pathLength}`;

    // Create intersection observer with mobile-friendly settings
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Start animation after delay
            setTimeout(() => {
              // Animate the drawing
              path.style.transition = `stroke-dashoffset ${animationDuration}s ${ease}`;
              path.style.strokeDashoffset = '0';

              // After animation completes, remove dasharray so line stays visible permanently
              setTimeout(() => {
                path.style.strokeDasharray = 'none';
              }, animationDuration * 1000);
            }, animationDelay * 1000);
          }
        });
      },
      {
        threshold: 0.01, // Reduced from 0.1 for better mobile detection
        rootMargin: '100px 0px 100px 0px', // More generous margin for mobile
      },
    );

    observer.observe(path);

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated, animationDuration, animationDelay, ease]);

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
