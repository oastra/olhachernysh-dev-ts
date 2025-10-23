'use client';

import ProcessStep from '../process/ProcessStep';

interface TextCardProps {
  number: string;
  title: string;
  bullets: string[];
  layout?: 'desktop' | 'tablet' | 'mobile';
  onHoverChange?: (hovered: boolean) => void; // new
}

export default function TextCard({
  number,
  title,
  bullets,
  layout = 'desktop',
  onHoverChange,
}: TextCardProps) {
  return (
    <div
      className="overflow-hidden flex-shrink-0 max-w-[603px] "
      onMouseEnter={() => onHoverChange?.(true)}
      onMouseLeave={() => onHoverChange?.(false)}
    >
      <div className="h-full w-full overflow-hidden ">
        <ProcessStep
          number={number}
          title={title}
          bullets={bullets}
          layout={layout}
        />
      </div>
    </div>
  );
}
