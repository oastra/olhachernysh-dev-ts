'use client';

import ProcessStep from './ProcessStep';
import SnakeOverlay from './SnakeOverlay';
import { processSteps } from '@/data/processSteps';

const SECTION_HEIGHT = 231;
const SVG_VIEWBOX_HEIGHT = 1613;
const SVG_VIEWBOX_WIDTH = 523;

const SCALE_FACTOR = (SECTION_HEIGHT * 6) / SVG_VIEWBOX_HEIGHT;
const CONTAINER_HEIGHT = SVG_VIEWBOX_HEIGHT * SCALE_FACTOR;
const CONTAINER_WIDTH = SVG_VIEWBOX_WIDTH;

export default function ProcessTablet() {
  const sectionPositions = [
    { top: 11.5, bottom: 214.5 },
    { top: 234.5, bottom: 440 },
    { top: 460, bottom: 678 },
    { top: 698, bottom: 914 },
    { top: 933.896, bottom: 1154.4 },
    { top: 1174.5, bottom: 1397.5 },
  ];

  return (
    <div className="hidden md:block lg:hidden w-full">
      <div
        className="w-full mx-auto relative"
        style={{
          maxWidth: `${CONTAINER_WIDTH}px`,
          aspectRatio: `${CONTAINER_WIDTH} / ${CONTAINER_HEIGHT}`,
        }}
      >
        {/* Snake Overlay with better animation settings */}
        <div className="absolute inset-0 w-full h-full">
          <SnakeOverlay
            viewBox={`0 0 ${SVG_VIEWBOX_WIDTH} ${SVG_VIEWBOX_HEIGHT}`}
            d="M1.5 1.5H513C518.523 1.5 523 5.97715 523 11.5V214.5C523 220.023 518.523 224.5 513 224.5H11.5C5.97719 224.5 1.5 228.977 1.5 234.5V440C1.5 445.523 5.97715 450 11.5 450H513C518.523 450 523 454.477 523 460V678C523 683.523 518.523 688 513 688H11.5C5.97719 688 1.5 692.477 1.5 698V914C1.5 919.523 5.97715 924 11.5 924H513C518.523 924 523 928.414 523 933.896V1154.4C523 1159.96 518.523 1164.5 513 1164.5H11.5C5.97719 1164.5 1.5 1168.98 1.5 1174.5V1397.5C1.5 1403.02 5.97715 1407.5 11.5 1407.5H200C205.523 1407.5 210 1411.98 210 1417.5V1611"
            strokeWidth={3}
            animationDuration={4}
            animationDelay={0.1}
          />
        </div>

        {/* Content with better spacing */}
        <div className="relative z-10 w-full h-full px-4">
          {processSteps.map((step, index) => {
            const section = sectionPositions[index];
            const topPercent = (section.top / SVG_VIEWBOX_HEIGHT) * 100;
            const heightPercent =
              ((section.bottom - section.top) / SVG_VIEWBOX_HEIGHT) * 100;

            return (
              <div
                key={step.id}
                className="absolute w-full flex items-center"
                style={{
                  top: `${topPercent}%`,
                  height: `${heightPercent}%`,
                  paddingTop: '2%',
                  paddingBottom: '2%',
                }}
              >
                <ProcessStep
                  number={step.number}
                  title={step.title}
                  bullets={step.bullets}
                  layout="tablet"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
