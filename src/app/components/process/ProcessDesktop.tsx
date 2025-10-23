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
  '/lottie/step6.lottie',
  '/lottie/step6.lottie',
];

// SVG Path Analysis (viewBox="0 0 1265 1613"):
// Section 1: y=11.5 to y=214.5   (height: 203 units)
// Gap:       y=224.5 to y=234.5  (10 units)
// Section 2: y=234.5 to y=440    (height: 205.5 units)
// Gap:       y=450 to y=460      (10 units)
// Section 3: y=460 to y=678      (height: 218 units)
// Gap:       y=688 to y=698      (10 units)
// Section 4: y=698 to y=914      (height: 216 units)
// Gap:       y=924 to y=933.896  (~10 units)
// Section 5: y=933.896 to y=1154.4 (height: 220.5 units)
// Gap:       y=1164.5 to y=1174.5 (10 units)
// Section 6: y=1174.5 to y=1397.5 (height: 223 units)

// These sections need to scale to your desired 236px per section
// SVG total height = 1613 units
// Desired height = 236px * 6 sections + gaps between
// Let's calculate with proper gaps

const SECTION_HEIGHT = 236; // Desired height for each section
const SVG_VIEWBOX_HEIGHT = 1613;
const SVG_VIEWBOX_WIDTH = 1265;

// Calculate scale factor to make sections 236px
// Average section in SVG ≈ 214 units
// We want 236px, so scale = 236 / (1613 / 6) ≈ 0.88

const SCALE_FACTOR = (SECTION_HEIGHT * 6) / SVG_VIEWBOX_HEIGHT;
const CONTAINER_HEIGHT = SVG_VIEWBOX_HEIGHT * SCALE_FACTOR; // Should be ~1416px
const CONTAINER_WIDTH = SVG_VIEWBOX_WIDTH; // 1265px

export default function ProcessDesktop() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Calculate position for each section based on SVG coordinates
  // These are the Y positions in the SVG where content should be
  const sectionPositions = [
    { top: 11.5, bottom: 214.5 }, // Section 1
    { top: 234.5, bottom: 440 }, // Section 2
    { top: 460, bottom: 678 }, // Section 3
    { top: 698, bottom: 914 }, // Section 4
    { top: 933.896, bottom: 1154.4 }, // Section 5
    { top: 1174.5, bottom: 1397.5 }, // Section 6
  ];

  return (
    <div
      className="hidden lg:block w-full mx-auto relative"
      style={{
        width: `${CONTAINER_WIDTH}px`,
        height: `${CONTAINER_HEIGHT}px`,
      }}
    >
      {/* Snake Overlay - scales to fit container */}
      <div className="absolute inset-0 w-full h-full">
        <SnakeOverlay
          viewBox={`0 0 ${SVG_VIEWBOX_WIDTH} ${SVG_VIEWBOX_HEIGHT}`}
          d="M1.5 1.5H1253.5C1259.02 1.5 1263.5 5.97715 1263.5 11.5V214.5C1263.5 220.023 1259.02 224.5 1253.5 224.5H11.5C5.97719 224.5 1.5 228.977 1.5 234.5V440C1.5 445.523 5.97715 450 11.5 450H1253.5C1259.02 450 1263.5 454.477 1263.5 460V678C1263.5 683.523 1259.02 688 1253.5 688H11.5C5.97719 688 1.5 692.477 1.5 698V914C1.5 919.523 5.97715 924 11.5 924H1251.1C1256.59 924 1261.05 928.414 1261.1 933.896L1263.39 1154.4C1263.45 1159.96 1258.96 1164.5 1253.4 1164.5H11.5C5.97719 1164.5 1.5 1168.98 1.5 1174.5V1397.5C1.5 1403.02 5.97715 1407.5 11.5 1407.5H687C692.523 1407.5 697 1411.98 697 1417.5V1611"
          strokeWidth={3}
        />
      </div>

      {/* Content - positioned absolutely to match SVG sections */}
      <div className="relative z-10 w-full max-w-[1100px] mx-auto h-full">
        {processSteps.map((step, index) => {
          const section = sectionPositions[index];
          const topPx = section.top * SCALE_FACTOR;
          const heightPx = (section.bottom - section.top) * SCALE_FACTOR;
          const paddingY = 16;
          const contentHeight = heightPx - paddingY * 2;

          return (
            <div
              key={step.id}
              className="absolute w-full flex items-center justify-between"
              style={{
                top: `${topPx}px`,
                height: `${heightPx}px`,
                paddingTop: `${paddingY}px`,
                paddingBottom: `${paddingY}px`,
              }}
            >
              {index % 2 === 0 ? (
                <>
                  {/* Animation LEFT */}
                  <div
                    className="flex items-center justify-between flex-shrink-0 ml-10"
                    style={{ width: '180px', height: `${contentHeight}px` }}
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
                    className=" flex items-center pl-8"
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
                    className="flex items-center justify-end "
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
                    className="flex items-center justify-center flex-shrink-0 pr-[50px]"
                    style={{ width: '180px', height: `${contentHeight}px` }}
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
  );
}
