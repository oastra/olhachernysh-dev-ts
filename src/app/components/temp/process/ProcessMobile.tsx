'use client';

import { useRef } from 'react';
import useContainerWidth from './useContainerWidth';
import SnakeOverlay from '../../process/SnakeOverlay';
import TextCard from '../../process/TextCard';
import { processSteps } from '@/data/processSteps';
import { SNAKE_MOBILE, FIGMA_CONSTANTS, CARD_TOPS } from './constants';

export default function ProcessMobile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerWidth = useContainerWidth(containerRef);
  const scale = containerWidth
    ? containerWidth / FIGMA_CONSTANTS.mobile.artW
    : 1;

  const scaledCard = {
    width: FIGMA_CONSTANTS.mobile.cardW * scale,
    height: FIGMA_CONSTANTS.mobile.cardH * scale,
  };

  return (
    <div
      ref={containerRef}
      className="relative block md:hidden mx-auto w-full max-w-[375px]"
      style={{
        aspectRatio: `${FIGMA_CONSTANTS.mobile.artW} / ${FIGMA_CONSTANTS.mobile.artH}`,
      }}
    >
      <SnakeOverlay viewBox={SNAKE_MOBILE.viewBox} d={SNAKE_MOBILE.d} />

      <div className="relative z-10 h-full">
        {processSteps.map((step, index) => {
          const topPosition = CARD_TOPS.mobile[index];

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
                paddingX={16}
                paddingY={16}
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
