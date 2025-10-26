'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

type Props = {
  width?: number;
  height?: number;
  lottieSrc?: string;
  isActive?: boolean;
  loop?: boolean;
};

export default function GifBox({
  width,
  height,
  lottieSrc,
  isActive = false,
  loop = true,
}: Props) {
  if (!isActive || !lottieSrc) {
    return <div style={{ width, height }} />;
  }

  return (
    <div style={{ width, height, minWidth: width }}>
      <DotLottieReact
        src={lottieSrc}
        autoplay
        loop={loop}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
