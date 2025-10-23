// components/common/ServiceMaskedImage.tsx
'use client';
import ResponsiveMaskedImage from '../ui/masks/ResponsiveMaskedImage';
import { DESKTOP_SERVICES_MASK_PATH } from '@/utils/masks';

export default function ServiceMaskedImage(props: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <ResponsiveMaskedImage
      {...props}
      sizes="503px"
      masks={{
        // only desktop shows an image for services
        desktop: { ...DESKTOP_SERVICES_MASK_PATH, width: 503, height: 662 },
      }}
    />
  );
}
