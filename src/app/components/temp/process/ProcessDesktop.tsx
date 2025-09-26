'use client';

import { useRef } from 'react';
import useContainerWidth from './useContainerWidth';
import SnakeOverlay from '../../process/SnakeOverlay';
import TextCard from '../../process/TextCard';
import GifBox from '../../process/GifBox';
import { processSteps } from '@/data/processSteps';
import { SNAKE_DESKTOP, FIGMA_CONSTANTS, CARD_TOPS } from './constants';

export default function ProcessDesktop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerWidth = useContainerWidth(containerRef);
  const scale = containerWidth
    ? containerWidth / FIGMA_CONSTANTS.desktop.artW
    : 1;

  const scaledCard = {
    width: FIGMA_CONSTANTS.desktop.cardW * scale,
    height: FIGMA_CONSTANTS.desktop.cardH * scale,
  };

  const scaledGif = {
    width: FIGMA_CONSTANTS.desktop.gifW * scale,
    height: FIGMA_CONSTANTS.desktop.gifH * scale,
  };

  const scaledGutter = FIGMA_CONSTANTS.desktop.gutter * scale;

  return (
    <div
      ref={containerRef}
      className="relative hidden lg:block mx-auto w-full max-w-[1040px]"
      style={{
        aspectRatio: `${FIGMA_CONSTANTS.desktop.artW} / ${FIGMA_CONSTANTS.desktop.artH}`,
      }}
    >
      <SnakeOverlay viewBox={SNAKE_DESKTOP.viewBox} d={SNAKE_DESKTOP.d} />

      <div className="relative z-10 h-full">
        {processSteps.map((step, index) => {
          const isLeftSide = index % 2 === 0;
          const topPosition = CARD_TOPS.desktop[index];

          return (
            <div
              key={step.id}
              className="absolute inset-x-0 flex items-center"
              style={{
                top: `${topPosition}%`,
                height: `${scaledCard.height}px`,
              }}
            >
              {isLeftSide ? (
                // Left side layout: GIF | gap | Card
                <>
                  <GifBox width={scaledGif.width} height={scaledGif.height} />

                  <div style={{ width: scaledGutter }} />

                  <TextCard
                    width={scaledCard.width}
                    height={scaledCard.height}
                    paddingX={24}
                    paddingY={20}
                    number={step.number}
                    title={step.title}
                    bullets={step.bullets}
                  />
                </>
              ) : (
                // Right side layout: Card | gap | GIF
                <>
                  <div className="flex-1" />

                  <TextCard
                    width={scaledCard.width}
                    height={scaledCard.height}
                    paddingX={24}
                    paddingY={20}
                    number={step.number}
                    title={step.title}
                    bullets={step.bullets}
                  />

                  <div style={{ width: scaledGutter }} />

                  <GifBox width={scaledGif.width} height={scaledGif.height} />
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
