'use client';

import ProcessStep from './ProcessStep';
import SnakeOverlay from './SnakeOverlay';
import { processSteps } from '@/data/processSteps';

const SVG_VIEWBOX_HEIGHT = 1400;
const SVG_VIEWBOX_WIDTH = 320;

export default function ProcessMobile() {
  const orderedSteps = [...processSteps];

  // SVG path - zigzag connecting the cards
  const mobilePath = `
    M 305 60
    L 305 160
    Q 305 185 280 185
    L 40 185
    Q 15 185 15 210
    L 15 320
    Q 15 345 40 345
    L 280 345
    Q 305 345 305 370
    L 305 480
    Q 305 505 280 505
    L 40 505
    Q 15 505 15 530
    L 15 640
    Q 15 665 40 665
    L 280 665
    Q 305 665 305 690
    L 305 800
    Q 305 825 280 825
    L 40 825
    Q 15 825 15 850
    L 15 960
    Q 15 985 40 985
    L 280 985
    Q 305 985 305 1010
    L 305 1120
    Q 305 1145 280 1145
    L 40 1145
    Q 15 1145 15 1170
    L 15 1280
    Q 15 1305 40 1305
    L 160 1305
  `;

  // Card positions matching SVG
  const sectionPositions = [
    { top: 50, bottom: 180 }, // Card 1
    { top: 195, bottom: 340 }, // Card 2
    { top: 355, bottom: 500 }, // Card 3
    { top: 515, bottom: 660 }, // Card 4
    { top: 675, bottom: 820 }, // Card 5
    { top: 835, bottom: 980 }, // Card 6
  ];

  return (
    <div className="md:hidden">
      {/* Container with fixed dimensions */}
      <div
        className="relative w-full mx-auto"
        style={{
          maxWidth: `${SVG_VIEWBOX_WIDTH}px`,
          height: `${SVG_VIEWBOX_HEIGHT}px`,
        }}
      >
        {/* Snake Overlay - Behind cards */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <SnakeOverlay
            viewBox={`0 0 ${SVG_VIEWBOX_WIDTH} ${SVG_VIEWBOX_HEIGHT}`}
            d={mobilePath}
            strokeWidth={2.5}
            animationDuration={5}
            animationDelay={0.3}
            ease="ease-in-out"
          />
        </div>

        {/* Content Cards - Above overlay */}
        <div className="relative z-20 w-full h-full">
          {orderedSteps.map((step, index) => {
            const section = sectionPositions[index];
            const topPx = section.top;
            const heightPx = section.bottom - section.top;

            return (
              <div
                key={step.id}
                className="absolute w-full px-3 z-20"
                style={{
                  top: `${topPx}px`,
                  height: `${heightPx}px`,
                }}
              >
                {/* Card without border - plain white */}
                <div
                  className="
                    relative
                    h-full w-full 
                    rounded-lg
                    bg-white
                    p-4
                    flex items-center
                  "
                >
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
