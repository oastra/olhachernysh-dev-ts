'use client';

import ProcessStep from '../temp/process/ProcessStep';

interface TextCardProps {
  number: string;
  title: string;
  bullets: string[];
  side?: 'left' | 'right';
}

export default function TextCard({
  number,
  title,
  bullets,
  side,
}: TextCardProps) {
  return (
    <div className="overflow-hidden flex-shrink-0 w-[520px] h-[400px]">
      <div className="h-full w-full overflow-hidden px-8 py-10">
        <ProcessStep
          number={number}
          title={title}
          bullets={bullets}
          side={side}
        />
      </div>
    </div>
  );
}
