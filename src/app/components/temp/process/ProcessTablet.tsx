'use client';

import { useRef } from 'react';
import useContainerWidth from './useContainerWidth';
import SnakeOverlay from '../../process/SnakeOverlay';
import TextCard from '../../process/TextCard';
import { processSteps } from '@/data/processSteps';
import { SNAKE_TABLET, FIGMA_CONSTANTS, CARD_TOPS } from './constants';

export default function ProcessTablet() {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerWidth = useContainerWidth(containerRef);
  const scale = containerWidth
    ? containerWidth / FIGMA_CONSTANTS.tablet.artW
    : 1;

  const scaledCard = {
    width: FIGMA_CONSTANTS.tablet.cardW * scale,
    height: FIGMA_CONSTANTS.tablet.cardH * scale,
  };

  return (
    <div
      ref={containerRef}
      className="relative hidden md:block lg:hidden mx-auto w-full max-w-[744px]"
      style={{
        aspectRatio: `${FIGMA_CONSTANTS.tablet.artW} / ${FIGMA_CONSTANTS.tablet.artH}`,
      }}
    >
      <SnakeOverlay viewBox={SNAKE_TABLET.viewBox} d={SNAKE_TABLET.d} />

      <div className="relative z-10 h-full">
        {processSteps.map((step, index) => {
          const topPosition = CARD_TOPS.tablet[index];

          return (
            <div
              key={step.id}
              className="absolute inset-x-0 flex justify-center items-center"
              style={{
                top: `${topPosition}%`,
                height: `${scaledCard.height}px`,
              }}
            >
              <TextCard
                width={scaledCard.width}
                height={scaledCard.height}
                paddingX={20}
                paddingY={18}
                number={step.number}
                title={step.title}
                bullets={step.bullets}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
