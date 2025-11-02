'use client';

import ProcessStep from './ProcessStep';
import SnakeOverlay from './SnakeOverlay';
import { processSteps } from '@/data/processSteps';

/**
 * Original Figma sizes
 */
const SECTION_HEIGHT = 258;
const SVG_VIEWBOX_HEIGHT = 1669;
const SVG_VIEWBOX_WIDTH = 330;

const SCALE_FACTOR = (SECTION_HEIGHT * 6) / SVG_VIEWBOX_HEIGHT;
const CONTAINER_HEIGHT = SVG_VIEWBOX_HEIGHT * SCALE_FACTOR;
const CONTAINER_WIDTH = SVG_VIEWBOX_WIDTH;

/**
 * Extra offset so snake doesn’t sit under mobile navbar / Safari bar
 */
const TOP_OFFSET_PX = 48; // ← move down ~3rem

export default function ProcessMobile() {
  // shift every section down by the same offset
  const sectionPositions = [
    { top: 11.5 + TOP_OFFSET_PX, bottom: 266.249 + TOP_OFFSET_PX },
    { top: 286.249 + TOP_OFFSET_PX, bottom: 544.079 + TOP_OFFSET_PX },
    { top: 564.079 + TOP_OFFSET_PX, bottom: 837.309 + TOP_OFFSET_PX },
    { top: 857.309 + TOP_OFFSET_PX, bottom: 1075 + TOP_OFFSET_PX },
    { top: 1095 + TOP_OFFSET_PX, bottom: 1319.5 + TOP_OFFSET_PX },
    { top: 1339.5 + TOP_OFFSET_PX, bottom: 1520.5 + TOP_OFFSET_PX },
  ];

  return (
    <div className="md:hidden w-full py-10">
      <div
        className="w-full mx-auto relative"
        style={{
          // make it a bit wider for 375px iPhones
          maxWidth: `${CONTAINER_WIDTH}px`,
          aspectRatio: `${CONTAINER_WIDTH} / ${CONTAINER_HEIGHT}`,
        }}
      >
        {/* Snake Overlay (pushed down) */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{ top: 0, transform: `translateY(${TOP_OFFSET_PX}px)` }}
        >
          <SnakeOverlay
            viewBox={`0 0 ${SVG_VIEWBOX_WIDTH} ${SVG_VIEWBOX_HEIGHT}`}
            d="M1.5 1.5H318.5C324.023 1.5 328.5 5.97715 328.5 11.5V266.249C328.5 271.772 324.023 276.249 318.5 276.249H11.5C5.97716 276.249 1.5 280.726 1.5 286.249V544.079C1.5 549.602 5.97715 554.079 11.5 554.079H318.5C324.023 554.079 328.5 558.556 328.5 564.079V837.309C328.5 842.832 324.023 847.309 318.5 847.309H11.5C5.97716 847.309 1.5 851.786 1.5 857.309V1075C1.5 1080.52 5.97715 1085 11.5 1085L318.5 1085C324.023 1085 328.5 1089.48 328.5 1095V1319.5C328.5 1325.02 324.023 1329.5 318.5 1329.5L11.5 1329.5C5.97716 1329.5 1.5 1333.98 1.5 1339.5V1520.5C1.5 1526.02 5.97715 1530.5 11.5 1530.5L171.713 1530.5C177.236 1530.5 181.713 1534.98 181.713 1540.5V1667"
            strokeWidth={3}
            animationDuration={3.5}
            animationDelay={0.2}
            forceOnMount
          />
        </div>

        {/* Content (also uses absolute positions, but with the same offset) */}
        <div className="relative z-10 w-full h-full px-[1.2%]">
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
