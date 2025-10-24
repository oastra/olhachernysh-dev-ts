'use client';

import ProcessStep from './ProcessStep';
import SnakeOverlay from './SnakeOverlay';
import { processSteps } from '@/data/processSteps';

// Card and gap dimensions
const CARD_HEIGHT = 258;
const GAP_HEIGHT = 16;
const NUM_SECTIONS = 6;

export default function ProcessMobile() {
  // Calculate positions in actual pixels
  const positions: Array<{ top: number; bottom: number }> = [];
  let currentY = 0;

  for (let i = 0; i < NUM_SECTIONS; i++) {
    positions.push({
      top: currentY,
      bottom: currentY + CARD_HEIGHT,
    });
    currentY += CARD_HEIGHT + GAP_HEIGHT;
  }

  const TOTAL_HEIGHT = currentY - GAP_HEIGHT; // Remove last gap
  const CONTAINER_WIDTH = 375;

  // Create SVG path that zigzags through the gaps
  const createPath = () => {
    const rightX = CONTAINER_WIDTH - 10;
    const leftX = 10;

    let path = `M${rightX} 0`; // Start top-right

    for (let i = 0; i < NUM_SECTIONS; i++) {
      const pos = positions[i];

      if (i % 2 === 0) {
        // Right side - draw down to bottom of card
        path += ` L${rightX} ${pos.bottom}`;

        if (i < NUM_SECTIONS - 1) {
          // Draw through the gap horizontally to left
          const gapY = pos.bottom + GAP_HEIGHT / 2;
          path += ` L${rightX} ${gapY}`;
          path += ` L${leftX} ${gapY}`;
          path += ` L${leftX} ${positions[i + 1].top}`;
        }
      } else {
        // Left side - draw down to bottom of card
        path += ` L${leftX} ${pos.bottom}`;

        if (i < NUM_SECTIONS - 1) {
          // Draw through the gap horizontally to right
          const gapY = pos.bottom + GAP_HEIGHT / 2;
          path += ` L${leftX} ${gapY}`;
          path += ` L${rightX} ${gapY}`;
          path += ` L${rightX} ${positions[i + 1].top}`;
        }
      }
    }

    return path;
  };

  return (
    <div className="md:hidden">
      <div
        className="w-full mx-auto relative"
        style={{
          width: `${CONTAINER_WIDTH}px`,
          height: `${TOTAL_HEIGHT}px`,
        }}
      >
        {/* Snake Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <SnakeOverlay
            viewBox={`0 0 ${CONTAINER_WIDTH} ${TOTAL_HEIGHT}`}
            d={createPath()}
            strokeWidth={2.5}
            animationDuration={5}
            animationDelay={0.3}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[350px] mx-auto h-full px-4">
          {processSteps.map((step, index) => {
            const pos = positions[index];

            return (
              <div
                key={step.id}
                className="absolute w-full flex items-center"
                style={{
                  top: `${pos.top}px`,
                  height: `${CARD_HEIGHT}px`,
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
