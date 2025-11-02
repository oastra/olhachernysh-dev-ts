'use client';

import ProcessStep from './ProcessStep';
import SnakeOverlay from './SnakeOverlay';
import { processSteps } from '@/data/processSteps';

const SECTION_HEIGHT = 258;
const SVG_VIEWBOX_HEIGHT = 1669;
const SVG_VIEWBOX_WIDTH = 360;

const SCALE_FACTOR = (SECTION_HEIGHT * 6) / SVG_VIEWBOX_HEIGHT;
const CONTAINER_HEIGHT = SVG_VIEWBOX_HEIGHT * SCALE_FACTOR;
const CONTAINER_WIDTH = SVG_VIEWBOX_WIDTH;

// Figma positions
const sectionPositions = [
  { top: 11.5, bottom: 266.249 },
  { top: 286.249, bottom: 544.079 },
  { top: 564.079, bottom: 837.309 },
  { top: 857.309, bottom: 1075 },
  { top: 1095, bottom: 1319.5 },
  { top: 1339.5, bottom: 1520.5 },
];

export default function ProcessMobile() {
  return (
    <div className="md:hidden w-full">
      {/* outer padding = space from viewport + sticky header */}
      <div
        className="relative mx-auto w-full px-4" // 👈 left/right space from viewport
        style={{
          maxWidth: `${CONTAINER_WIDTH}px`,
          aspectRatio: `${CONTAINER_WIDTH} / ${CONTAINER_HEIGHT}`,
          paddingTop: '4.75rem',
          paddingBottom: '4rem',
        }}
      >
        {/* SNAKE */}
        <div
          className="absolute inset-y-0 left-2 right-2 w-auto h-full" // 👈 inset-x, not 0
        >
          <SnakeOverlay
            viewBox={`0 0 ${SVG_VIEWBOX_WIDTH} ${SVG_VIEWBOX_HEIGHT}`}
            d="M15 1.5H345C350.523 1.5 355 5.97715 355 11.5V266.249C355 271.772 350.523 276.249 345 276.249H25C19.4772 276.249 15 280.726 15 286.249V544.079C15 549.602 19.4772 554.079 25 554.079H345C350.523 554.079 355 558.556 355 564.079V837.309C355 842.832 350.523 847.309 345 847.309H25C19.4772 847.309 15 851.786 15 857.309V1075C15 1080.52 19.4772 1085 25 1085H345C350.523 1085 355 1089.48 355 1095V1319.5C355 1325.02 350.523 1329.5 345 1329.5H25C19.4772 1329.5 15 1333.98 15 1339.5V1520.5C15 1526.02 19.4772 1530.5 25 1530.5H185C190.523 1530.5 195 1534.98 195 1540.5V1667"
            strokeWidth={3}
            animationDuration={3.5}
            animationDelay={0.2}
            forceOnMount
          />
        </div>

        {/* CONTENT */}
        <div className="absolute inset-y-0 left-2 right-2 w-auto h-full">
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
