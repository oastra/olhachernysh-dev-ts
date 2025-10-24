'use client';

import ProcessStep from './ProcessStep';
import SnakeOverlay from './SnakeOverlay';
import { processSteps } from '@/data/processSteps';

// Following the EXACT desktop pattern
const SECTION_HEIGHT = 170; // Height for each card section on mobile
const SVG_VIEWBOX_HEIGHT = 1613;
const SVG_VIEWBOX_WIDTH = 375;

// Calculate scale and container dimensions
const SCALE_FACTOR = (SECTION_HEIGHT * 6) / SVG_VIEWBOX_HEIGHT;
const CONTAINER_HEIGHT = SVG_VIEWBOX_HEIGHT * SCALE_FACTOR;
const CONTAINER_WIDTH = SVG_VIEWBOX_WIDTH;

export default function ProcessMobile() {
  // Section positions matching SVG path (same as desktop)
  const sectionPositions = [
    { top: 11.5, bottom: 214.5 }, // Section 1
    { top: 234.5, bottom: 440 }, // Section 2
    { top: 460, bottom: 678 }, // Section 3
    { top: 698, bottom: 914 }, // Section 4
    { top: 933.896, bottom: 1154.4 }, // Section 5
    { top: 1174.5, bottom: 1397.5 }, // Section 6
  ];

  return (
    <div className="md:hidden">
      <div
        className="w-full mx-auto relative"
        style={{
          width: `${CONTAINER_WIDTH}px`,
          height: `${CONTAINER_HEIGHT}px`,
        }}
      >
        {/* Snake Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <SnakeOverlay
            viewBox={`0 0 ${SVG_VIEWBOX_WIDTH} ${SVG_VIEWBOX_HEIGHT}`}
            d="M1.5 1.5H365C370.523 1.5 375 5.97715 375 11.5V214.5C375 220.023 370.523 224.5 365 224.5H11.5C5.97719 224.5 1.5 228.977 1.5 234.5V440C1.5 445.523 5.97715 450 11.5 450H365C370.523 450 375 454.477 375 460V678C375 683.523 370.523 688 365 688H11.5C5.97719 688 1.5 692.477 1.5 698V914C1.5 919.523 5.97715 924 11.5 924H365C370.523 924 375 928.414 375 933.896V1154.4C375 1159.96 370.523 1164.5 365 1164.5H11.5C5.97719 1164.5 1.5 1168.98 1.5 1174.5V1397.5C1.5 1403.02 5.97715 1407.5 11.5 1407.5H150"
            strokeWidth={2.5}
            animationDuration={5}
            animationDelay={0.3}
          />
        </div>

        {/* Content - absolutely positioned like desktop */}
        <div className="relative z-10 w-full max-w-[350px] mx-auto h-full px-4">
          {processSteps.map((step, index) => {
            const section = sectionPositions[index];
            const topPx = section.top * SCALE_FACTOR;
            const heightPx = (section.bottom - section.top) * SCALE_FACTOR;
            const paddingY = 10;

            return (
              <div
                key={step.id}
                className="absolute w-full flex items-center"
                style={{
                  top: `${topPx}px`,
                  height: `${heightPx}px`,
                  paddingTop: `${paddingY}px`,
                  paddingBottom: `${paddingY}px`,
                }}
              >
                <ProcessStep
                  number={step.number}
                  title={step.title}
                  bullets={step.bullets}
                  layout="mobile"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
