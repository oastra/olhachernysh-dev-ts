'use client';

import * as React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type Handle = { el: HTMLDivElement | null };

// Accept both createRef and useRef styles, with nullable current
type ContainerRef =
  | React.RefObject<HTMLDivElement>
  | React.MutableRefObject<HTMLDivElement | null>;

type StepRef = React.RefObject<Handle> | React.MutableRefObject<Handle | null>;

// NEW: can be a handle itself or a ref to a handle
type StepInput = StepRef | Handle;

type Props = {
  containerRef: ContainerRef;
  stepRefs: StepInput[]; // <— changed
  className?: string;
  gradient?: [string, string];
};

function buildSmoothPath(container: HTMLElement, steps: HTMLElement[]) {
  const cardLeft = 16;
  const cardRightOffset = 12;
  const cornerR = 12;
  const topRuleOffset = 8;

  const cw = container.getBoundingClientRect().width;
  const xLeft = cardLeft;
  const xRight = cw - cardRightOffset;

  const points = steps.map((el) => {
    const yTop = el.offsetTop;
    const yBottom = yTop + el.offsetHeight;
    return { yTop, yBottom };
  });

  let d = '';
  d += `M ${xLeft} ${topRuleOffset} `;
  d += `L ${xRight} ${topRuleOffset} `;

  points.forEach(({ yTop, yBottom }, idx) => {
    const toY = yTop - 10;
    d += `L ${xRight} ${toY} `;
    d += `Q ${xRight} ${toY + cornerR} ${xRight - cornerR} ${toY + cornerR} `;
    const downY = yBottom + 10;
    d += `L ${xRight - cornerR} ${downY - cornerR} `;
    d += `Q ${xRight - cornerR} ${downY} ${xRight} ${downY} `;
    if (idx === points.length - 1) {
      d += `L ${xRight} ${downY + 60} `;
      d += `Q ${xRight} ${downY + 72} ${xRight - 12} ${downY + 72} `;
    }
  });

  return d;
}

// helper: normalize StepInput -> HTMLElement | null
function getElFromStep(step: StepInput): HTMLElement | null {
  if (step && typeof step === 'object' && 'current' in step) {
    return (step.current?.el ?? null) as HTMLElement | null;
  }
  // it's a plain Handle
  return (step as Handle).el ?? null;
}

export default function ScrollLine({
  containerRef,
  stepRefs,
  className,
  gradient = ['#6EC1FF', '#6A5CFF'],
}: Props) {
  const pathRef = React.useRef<SVGPathElement>(null);
  const [length, setLength] = React.useState(1);
  const [d, setD] = React.useState('M0 0');

  // Recompute path on layout changes
  React.useLayoutEffect(() => {
    const container = containerRef.current;
    const steps = stepRefs.map(getElFromStep).filter(Boolean) as HTMLElement[];

    if (!container || steps.length === 0) return;

    const render = () => {
      setD(buildSmoothPath(container, steps));
      requestAnimationFrame(() => {
        if (pathRef.current) setLength(pathRef.current.getTotalLength() || 1);
      });
    };

    render();

    const ro = new ResizeObserver(render);
    ro.observe(container);
    steps.forEach((s) => ro.observe(s));
    return () => ro.disconnect();
  }, [containerRef, stepRefs]);

  // Draw on scroll — cast to HTMLElement ref to satisfy framer-motion typing
  const { scrollYProgress } = useScroll({
    target: containerRef as unknown as React.RefObject<HTMLElement>,
    offset: ['start 80%', 'end start'],
  });

  const dashOffset = useTransform(scrollYProgress, [0, 1], [length, 0]);

  // Compute an svg viewBox big enough to cover the container
  const [vb, setVb] = React.useState({ w: 100, h: 1000 });
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setVb({
      w: Math.max(100, r.width),
      h: Math.max(800, el.scrollHeight + 120),
    });
  }, [containerRef, d]);

  return (
    <svg
      className={className}
      width="100%"
      height={vb.h}
      viewBox={`0 0 ${vb.w} ${vb.h}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="proc-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={gradient[0]} />
          <stop offset="100%" stopColor={gradient[1]} />
        </linearGradient>
      </defs>

      {/* Track */}
      <path
        d={d}
        stroke="rgba(14,21,34,0.08)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Animated gradient line */}
      <motion.path
        ref={pathRef}
        d={d}
        stroke="url(#proc-grad)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeDasharray={length}
        style={{ strokeDashoffset: dashOffset as unknown as number }}
      />
    </svg>
  );
}
