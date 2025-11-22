'use client';

import { useState } from 'react';
import GifBox from './GifBox';
import TextCard from './TextCard';
import SnakeOverlay from './SnakeOverlay';
import { processSteps } from '@/data/processSteps';

// Map each step to its corresponding animation file
const animationPaths = [
  '/lottie/step1.lottie',
  '/lottie/step2.lottie',
  '/lottie/step3.lottie',
  '/lottie/step4.lottie',
  '/lottie/step5-1.lottie',
  '/lottie/step6.lottie',
];

const SECTION_HEIGHT = 236;
const SVG_VIEWBOX_HEIGHT = 1613;
const SVG_VIEWBOX_WIDTH = 1265;

const SCALE_FACTOR = (SECTION_HEIGHT * 6) / SVG_VIEWBOX_HEIGHT;
const CONTAINER_HEIGHT = SVG_VIEWBOX_HEIGHT * SCALE_FACTOR;
const CONTAINER_WIDTH = SVG_VIEWBOX_WIDTH;

export default function ProcessDesktop() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const sectionPositions = [
    { top: 11.5, bottom: 214.5 },
    { top: 234.5, bottom: 440 },
    { top: 460, bottom: 678 },
    { top: 698, bottom: 914 },
    { top: 933.896, bottom: 1154.4 },
    { top: 1174.5, bottom: 1397.5 },
  ];

  return (
    <div className="hidden xl:block w-full">
      <div
        className="w-full mx-auto relative"
        style={{
          maxWidth: `${CONTAINER_WIDTH}px`,
          aspectRatio: `${CONTAINER_WIDTH} / ${CONTAINER_HEIGHT}`,
        }}
      >
        {/* Snake Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <SnakeOverlay
            viewBox={`0 0 ${SVG_VIEWBOX_WIDTH} ${SVG_VIEWBOX_HEIGHT}`}
            d="M1.5 1.5H1253.5C1259.02 1.5 1263.5 5.97715 1263.5 11.5V214.5C1263.5 220.023 1259.02 224.5 1253.5 224.5H11.5C5.97719 224.5 1.5 228.977 1.5 234.5V440C1.5 445.523 5.97715 450 11.5 450H1253.5C1259.02 450 1263.5 454.477 1263.5 460V678C1263.5 683.523 1259.02 688 1253.5 688H11.5C5.97719 688 1.5 692.477 1.5 698V914C1.5 919.523 5.97715 924 11.5 924H1251.1C1256.59 924 1261.05 928.414 1261.1 933.896L1263.39 1154.4C1263.45 1159.96 1258.96 1164.5 1253.4 1164.5H11.5C5.97719 1164.5 1.5 1168.98 1.5 1174.5V1397.5C1.5 1403.02 5.97715 1407.5 11.5 1407.5H687C692.523 1407.5 697 1411.98 697 1417.5V1611"
            strokeWidth={3}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1100px] mx-auto h-full">
          {processSteps.map((step, index) => {
            const section = sectionPositions[index];
            const topPercent = (section.top / SVG_VIEWBOX_HEIGHT) * 100;
            const heightPercent =
              ((section.bottom - section.top) / SVG_VIEWBOX_HEIGHT) * 100;

            // Increase padding for more breathing room
            const totalHeight = (section.bottom - section.top) * SCALE_FACTOR;
            const verticalPadding = 24; // Increased from 16 to 24
            const contentHeight = totalHeight - verticalPadding * 2;

            return (
              <div
                key={step.id}
                className="absolute w-full flex items-center justify-between gap-4 xl:gap-8 px-8"
                style={{
                  top: `${topPercent}%`,
                  height: `${heightPercent}%`,
                  paddingTop: `${verticalPadding}px`,
                  paddingBottom: `${verticalPadding}px`,
                }}
              >
                {index % 2 === 0 ? (
                  <>
                    {/* Animation LEFT */}
                    <div
                      className="flex items-center justify-center ml-[10%]"
                      style={{
                        minWidth: '140px',
                        maxWidth: '180px',
                        width: '180px',
                        height: `${contentHeight}px`,
                      }}
                    >
                      <GifBox
                        width={180}
                        height={140}
                        lottieSrc={animationPaths[index]}
                        isActive={activeIndex === index}
                        loop={false}
                      />
                    </div>
                    {/* Text RIGHT */}
                    <div
                      className="flex items-center flex-1 justify-end"
                      style={{ height: `${contentHeight}px` }}
                    >
                      <TextCard
                        number={step.number}
                        title={step.title}
                        bullets={step.bullets}
                        onHoverChange={(h) => setActiveIndex(h ? index : null)}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Text LEFT */}
                    <div
                      className="flex items-center flex-1"
                      style={{ height: `${contentHeight}px` }}
                    >
                      <TextCard
                        number={step.number}
                        title={step.title}
                        bullets={step.bullets}
                        onHoverChange={(h) => setActiveIndex(h ? index : null)}
                      />
                    </div>
                    {/* Animation RIGHT */}
                    <div
                      className="flex items-center justify-center mr-[10%]"
                      style={{
                        minWidth: '140px',
                        maxWidth: '180px',
                        width: '180px',
                        height: `${contentHeight}px`,
                      }}
                    >
                      <GifBox
                        width={180}
                        height={140}
                        lottieSrc={animationPaths[index]}
                        isActive={activeIndex === index}
                        loop={false}
                      />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
