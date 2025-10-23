'use client';

import { useEffect, useRef, useState } from 'react';

interface SnakeOverlayProps {
  viewBox: string;
  d: string;
  className?: string;
  strokeWidth?: number;
  animationDuration?: number; // in seconds
  animationDelay?: number; // in seconds
  ease?: string; // CSS easing function
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

    // Get the total length of the path
    const pathLength = path.getTotalLength();

    // Set up the initial state - path is hidden
    path.style.strokeDasharray = `${pathLength}`;
    path.style.strokeDashoffset = `${pathLength}`;

    // Create intersection observer
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
              }, animationDuration * 3000);
            }, animationDelay * 1000);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
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
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id="processSnakeGrad"
          x1="1.5"
          y1="806.25"
          x2="1263.5"
          y2="806.25"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#000924" />
          <stop offset="0.35" stopColor="#092B79" />
          <stop offset="0.975962" stopColor="#00D4FF" />
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
