'use client';

import ProcessStep from './ProcessStep';
import SnakeOverlay from './SnakeOverlay';
import { processSteps } from '@/data/processSteps';

// Following the EXACT desktop pattern
const CARD_HEIGHT = 258; // Height for each card on mobile
const GAP_HEIGHT = 16; // Gap between cards (where snake runs)
const NUM_SECTIONS = 6;
const NUM_GAPS = 5;

// Calculate SVG scaling to match our card + gap layout
const SVG_VIEWBOX_HEIGHT = 1613;
const SVG_VIEWBOX_WIDTH = 375;

// Total desired height = cards + gaps
const TOTAL_CONTENT_HEIGHT = CARD_HEIGHT * NUM_SECTIONS + GAP_HEIGHT * NUM_GAPS;
const SCALE_FACTOR = TOTAL_CONTENT_HEIGHT / SVG_VIEWBOX_HEIGHT;
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
            d="M1.5 1.5H365C370.523 1.5 375 5.97715 375 11.5V214.5C375 220.023 370.523 224.5 365 224.5H11.5C5.97719 224.5 1.5 228.977 1.5 234.5V420C1.5 425.523 5.97715 430 11.5 430H365C370.523 430 375 434.477 375 440V678C375 683.523 370.523 688 365 688H11.5C5.97719 688 1.5 692.477 1.5 698V894C1.5 899.523 5.97715 904 11.5 904H365C370.523 904 375 908.414 375 913.896V1134.4C375 1139.96 370.523 1144.5 365 1144.5H11.5C5.97719 1144.5 1.5 1148.98 1.5 1154.5V1377.5C1.5 1383.02 5.97715 1387.5 11.5 1387.5H150"
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

            // Use GAP_HEIGHT / 2 for top/bottom padding to create 16px total gap
            const paddingY = GAP_HEIGHT / 2;

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
                <div className="w-full">
                  <ProcessStep
                    number={step.number}
                    title={step.title}
                    bullets={step.bullets}
                    layout="mobile"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
