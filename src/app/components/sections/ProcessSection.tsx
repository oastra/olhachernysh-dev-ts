'use client';

import { useRef, useMemo } from 'react';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';
import { processSteps } from '@/data/processSteps';
import ScrollLine from '../common/ScrollLine';
import ProcessStep, { ProcessStepHandle } from '../common/ProcessStep';

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useMemo(
    () =>
      Array.from(
        { length: processSteps.length },
        () => ({ current: null } as unknown as ProcessStepHandle)
      ),
    []
  );

  return (
    <SectionWrapper id="process">
      <SectionTitle right="Step‑by‑step: from discovery to launch (with clean hand‑off and support).">
        Process
      </SectionTitle>

      <div
        ref={containerRef}
        className="relative mx-auto max-w-[980px] md:max-w-[1040px]"
      >
        {/* Top rule from Figma */}
        <div className="h-[2px] w-full bg-gray-200/80 mb-8" />

        {/* Gradient path that auto-routes around cards */}
        <ScrollLine
          containerRef={containerRef}
          stepRefs={stepRefs}
          className="pointer-events-none absolute inset-0"
          gradient={['#6EC1FF', '#6A5CFF']}
        />

        <ol className="relative z-10 space-y-8 md:space-y-10">
          {processSteps.map((s, i) => (
            <li key={s.id} className="px-2 md:px-0">
              <ProcessStep
                ref={stepRefs[i]}
                number={s.number}
                title={s.title}
                bullets={s.bullets}
              />
            </li>
          ))}
        </ol>
      </div>
    </SectionWrapper>
  );
}
