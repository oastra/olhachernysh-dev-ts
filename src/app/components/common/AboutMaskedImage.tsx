// components/common/AboutMaskedImage.tsx
'use client';
import ResponsiveMaskedImage from '../ui/masks/ResponsiveMaskedImage';
import {
  MOBILE_ABOUT_MASK_PATH,
  TABLET_ABOUT_MASK_PATH,
  DESKTOP_ABOUT_MASK_PATH,
} from '@/utils/masks';

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  objectPosition?: string;
  objectFit?: 'cover' | 'contain';
};

export default function AboutMaskedImage({
  src,
  alt,
  className,
  priority,
  objectPosition = 'center',
  objectFit = 'cover',
}: Props) {
  return (
    <ResponsiveMaskedImage
      src={src}
      alt={alt}
      className={className}
      priority={priority}
      objectPosition={objectPosition}
      objectFit={objectFit}
      sizes="(min-width:1024px) 712px, 100vw"
      masks={{
        mobile: { ...MOBILE_ABOUT_MASK_PATH, width: 343, height: 345 },
        tablet: { ...TABLET_ABOUT_MASK_PATH, width: 664, height: 345 },
        desktop: { ...DESKTOP_ABOUT_MASK_PATH, width: 712, height: 503 },
      }}
    />
  );
}
