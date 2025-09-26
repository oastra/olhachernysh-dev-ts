'use client';

import ProcessStep from '../temp/process/ProcessStep';

interface TextCardProps {
  width: number;
  height: number;
  paddingX: number;
  paddingY: number;
  number: string;
  title: string;
  bullets: string[];
  side?: 'left' | 'right';
}

export default function TextCard({
  width,
  height,
  paddingX,
  paddingY,
  number,
  title,
  bullets,
  side,
}: TextCardProps) {
  return (
    <div className="overflow-hidden flex-shrink-0" style={{ width, height }}>
      <div
        className="h-full w-full overflow-hidden"
        style={{
          paddingLeft: paddingX,
          paddingRight: paddingX,
          paddingTop: paddingY,
          paddingBottom: paddingY,
        }}
      >
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
