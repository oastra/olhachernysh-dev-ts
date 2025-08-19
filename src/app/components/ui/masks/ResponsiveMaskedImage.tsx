// components/common/ResponsiveMaskedImage.tsx
'use client';

import { motion } from 'framer-motion';
import Image, { ImageProps } from 'next/image';
import { useMemo } from 'react';
import clsx from 'clsx';

export type MaskSource =
  | { dataUri: string; width: number; height: number }
  | { viewBox: string; d: string; width: number; height: number };

export type BreakpointMasks = {
  desktop?: MaskSource;
  tablet?: MaskSource;
  mobile?: MaskSource;
};

function toDataUri(mask: MaskSource) {
  if ('dataUri' in mask) return mask.dataUri;
  const { width, height, viewBox, d } = mask;
  // white = visible (luminance masking)
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${viewBox}"><path d="${d}" fill="white"/></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

type Props = {
  src: ImageProps['src'];
  alt: string;
  masks: BreakpointMasks;
  className?: string;
  priority?: boolean;
  animated?: boolean;
  sizes?: string;
};

export default function ResponsiveMaskedImage({
  src,
  alt,
  masks,
  className,
  priority,
  animated = true,
  sizes = '(min-width:1024px) 712px, (min-width:744px) 664px, 343px',
}: Props) {
  // Precompute once per prop change (top-level hook usage is valid)
  const mobile = masks.mobile;
  const tablet = masks.tablet;
  const desktop = masks.desktop;

  const mobileUri = useMemo(() => (mobile ? toDataUri(mobile) : ''), [mobile]);
  const tabletUri = useMemo(() => (tablet ? toDataUri(tablet) : ''), [tablet]);
  const desktopUri = useMemo(
    () => (desktop ? toDataUri(desktop) : ''),
    [desktop]
  );

  const Wrapper = (animated ? motion.div : 'div') as React.ElementType;

  const render = (uri: string, mask?: MaskSource, bpClasses = '') => {
    if (!mask || !uri) return null;
    return (
      <div
        className={clsx(
          'relative w-full overflow-hidden',
          bpClasses,
          className
        )}
        style={{
          aspectRatio: `${mask.width} / ${mask.height}`,
          WebkitMaskImage: `url(${uri})`,
          maskImage: `url(${uri})`,
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
          sizes={sizes}
        />
      </div>
    );
  };

  return (
    <Wrapper
      {...(animated
        ? {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: '0px 0px -20% 0px' },
            transition: { duration: 0.5, ease: 'easeOut' },
          }
        : {})}
    >
      {render(mobileUri, mobile, 'block md:hidden')}
      {render(tabletUri, tablet, 'hidden md:block lg:hidden')}
      {render(desktopUri, desktop, 'hidden lg:block')}
    </Wrapper>
  );
}
