'use client';

import ProcessStep from './ProcessStep';
import { processSteps } from '@/data/processSteps';

export default function ProcessMobile() {
  // For mobile, use normal order (01, 02, 03, 04, 05, 06)
  const orderedSteps = [...processSteps];

  return (
    <div className="md:hidden">
      {/* Process Steps */}
      <div className="flex flex-col gap-[24px] w-full">
        {orderedSteps.map((step, index) => (
          <ProcessStep
            key={step.id}
            number={step.number}
            title={step.title}
            bullets={step.bullets}
            layout="mobile"
          />
        ))}
      </div>
    </div>
  );
}
