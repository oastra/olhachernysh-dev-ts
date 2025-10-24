'use client';

import ProcessStep from './ProcessStep';
import SnakeOverlay from './SnakeOverlay';
import { processSteps } from '@/data/processSteps';

const SVG_VIEWBOX_HEIGHT = 1450;
const SVG_VIEWBOX_WIDTH = 620;

export default function ProcessTablet() {
  const orderedSteps = [...processSteps];

  // SVG path - zigzag connecting the cards
  const tabletPath = `
    M 595 70
    L 595 185
    Q 595 215 565 215
    L 55 215
    Q 25 215 25 245
    L 25 365
    Q 25 395 55 395
    L 565 395
    Q 595 395 595 425
    L 595 545
    Q 595 575 565 575
    L 55 575
    Q 25 575 25 605
    L 25 725
    Q 25 755 55 755
    L 565 755
    Q 595 755 595 785
    L 595 905
    Q 595 935 565 935
    L 55 935
    Q 25 935 25 965
    L 25 1085
    Q 25 1115 55 1115
    L 565 1115
    Q 595 1115 595 1145
    L 595 1265
    Q 595 1295 565 1295
    L 55 1295
    Q 25 1295 25 1325
    L 25 1430
  `;

  // Card positions matching SVG
  const sectionPositions = [
    { top: 60, bottom: 200 }, // Card 1
    { top: 220, bottom: 380 }, // Card 2
    { top: 400, bottom: 560 }, // Card 3
    { top: 580, bottom: 740 }, // Card 4
    { top: 760, bottom: 920 }, // Card 5
    { top: 940, bottom: 1100 }, // Card 6
  ];

  return (
    <div className="hidden md:block lg:hidden">
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
            d={tabletPath}
            strokeWidth={3}
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
                className="absolute w-full px-4 z-20"
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
                    rounded-xl 
                    bg-white
                    p-6
                    flex items-center
                  "
                >
                  <ProcessStep
                    number={step.number}
                    title={step.title}
                    bullets={step.bullets}
                    layout="tablet"
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
