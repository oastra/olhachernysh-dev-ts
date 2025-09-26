'use client';

interface SnakeOverlayProps {
  viewBox: string;
  d: string;
  className?: string;
  strokeWidth?: number;
}

export default function SnakeOverlay({
  viewBox,
  d,
  className = '',
  strokeWidth = 3,
}: SnakeOverlayProps) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 z-0 ${className}`}
      width="100%"
      height="100%"
      viewBox={viewBox}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="processSnakeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#000924" />
          <stop offset="35%" stopColor="#092B79" />
          <stop offset="97.6%" stopColor="#00D4FF" />
        </linearGradient>
      </defs>
      <path
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
