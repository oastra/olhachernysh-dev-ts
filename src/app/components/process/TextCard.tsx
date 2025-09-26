'use client';

import ProcessStep from '../process/ProcessStep';

interface TextCardProps {
  number: string;
  title: string;
  bullets: string[];
  layout?: 'desktop' | 'tablet' | 'mobile'; // Changed from 'side'
}

export default function TextCard({
  number,
  title,
  bullets,
  layout = 'desktop', // Default to desktop
}: TextCardProps) {
  return (
    <div className="overflow-hidden flex-shrink-0 w-[520px] h-[400px]">
      <div className="h-full w-full overflow-hidden px-8 py-10">
        <ProcessStep
          number={number}
          title={title}
          bullets={bullets}
          layout={layout} // Pass layout instead of side
        />
      </div>
    </div>
  );
}
