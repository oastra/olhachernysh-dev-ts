'use client';

import GifBox from './GifBox';
import TextCard from './TextCard';
import { processSteps } from '@/data/processSteps';

export default function ProcessDesktop() {
  return (
    <div className="hidden lg:flex flex-col gap-12 w-full max-w-[1040px] mx-auto">
      {processSteps.map((step, index) => (
        <div
          key={step.id}
          className="flex w-full items-center justify-between gap-8"
        >
          {index % 2 === 0 ? (
            <>
              <GifBox />
              <TextCard
                number={step.number}
                title={step.title}
                bullets={step.bullets}
              />
            </>
          ) : (
            <>
              <TextCard
                number={step.number}
                title={step.title}
                bullets={step.bullets}
              />
              <GifBox />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
