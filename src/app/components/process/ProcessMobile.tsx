'use client';

import ProcessStep from './ProcessStep';
import SnakeOverlay from './SnakeOverlay';
import { processSteps } from '@/data/processSteps';

// Following the EXACT desktop pattern
const SECTION_HEIGHT = 258; // Height for each card on mobile
const SVG_VIEWBOX_HEIGHT = 1669;
const SVG_VIEWBOX_WIDTH = 330;

// Calculate scale and container dimensions (same as desktop approach)
const SCALE_FACTOR = (SECTION_HEIGHT * 6) / SVG_VIEWBOX_HEIGHT;
const CONTAINER_HEIGHT = SVG_VIEWBOX_HEIGHT * SCALE_FACTOR;
const CONTAINER_WIDTH = SVG_VIEWBOX_WIDTH;

export default function ProcessMobile() {
  // Section positions matching SVG path (from your SVG file)
  const sectionPositions = [
    { top: 11.5, bottom: 266.249 }, // Section 1
    { top: 286.249, bottom: 544.079 }, // Section 2
    { top: 564.079, bottom: 837.309 }, // Section 3
    { top: 857.309, bottom: 1075 }, // Section 4
    { top: 1095, bottom: 1319.5 }, // Section 5
    { top: 1339.5, bottom: 1520.5 }, // Section 6
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
            d="M1.5 1.5H318.5C324.023 1.5 328.5 5.97715 328.5 11.5V266.249C328.5 271.772 324.023 276.249 318.5 276.249H11.5C5.97716 276.249 1.5 280.726 1.5 286.249V544.079C1.5 549.602 5.97715 554.079 11.5 554.079H318.5C324.023 554.079 328.5 558.556 328.5 564.079V837.309C328.5 842.832 324.023 847.309 318.5 847.309H11.5C5.97716 847.309 1.5 851.786 1.5 857.309V1075C1.5 1080.52 5.97715 1085 11.5 1085L318.5 1085C324.023 1085 328.5 1089.48 328.5 1095V1319.5C328.5 1325.02 324.023 1329.5 318.5 1329.5L11.5 1329.5C5.97716 1329.5 1.5 1333.98 1.5 1339.5V1520.5C1.5 1526.02 5.97715 1530.5 11.5 1530.5L171.713 1530.5C177.236 1530.5 181.713 1534.98 181.713 1540.5V1667"
            strokeWidth={3}
            animationDuration={5}
            animationDelay={0.3}
          />
        </div>

        {/* Content - absolutely positioned like desktop */}
        <div className="relative z-10 w-full max-w-[305px] mx-auto h-full px-4">
          {processSteps.map((step, index) => {
            const section = sectionPositions[index];
            const topPx = section.top * SCALE_FACTOR;
            const heightPx = (section.bottom - section.top) * SCALE_FACTOR;
            const paddingY = 8;

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
