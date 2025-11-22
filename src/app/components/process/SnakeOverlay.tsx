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
  delayAfterVisibleMs?: number;
}

export default function SnakeOverlay({
  viewBox,
  d,
  className = '',
  strokeWidth = 3,
  animationDuration = 3.5,
  animationDelay = 0.1,
  ease = 'ease-in-out',
  forceOnMount = false,
  delayAfterVisibleMs = 1000,
}: SnakeOverlayProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const svgEl = svgRef.current;
    const path = pathRef.current;
    if (!svgEl || !path) return;

    const prepareHidden = () => {
      const len = path.getTotalLength();
      path.style.strokeDasharray = `${len}`;
      path.style.strokeDashoffset = `${len}`;
    };

    const runAnimation = () => {
      const len = path.getTotalLength();
      path.style.strokeDasharray = `${len}`;
      path.style.strokeDashoffset = `${len}`;

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

    // prep once
    prepareHidden();

    // force
    if (forceOnMount) {
      runAnimation();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting && !hasAnimated) {
          // wait after visible
          timerRef.current = window.setTimeout(() => {
            runAnimation();
            observer.disconnect();
          }, delayAfterVisibleMs);
        } else {
          // scrolled away before timer
          if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
          }
        }
      },
      {
        rootMargin: '60px 0px 60px 0px',
        threshold: 0.08,
      }
    );

    observer.observe(svgEl);

    return () => {
      observer.disconnect();
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
    // 👇 DON'T include hasAnimated here
  }, [
    animationDuration,
    animationDelay,
    ease,
    forceOnMount,
    delayAfterVisibleMs,
  ]);

  return (
    <svg
      ref={svgRef}
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
