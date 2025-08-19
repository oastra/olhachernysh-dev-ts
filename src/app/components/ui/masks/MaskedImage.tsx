import Image from 'next/image';
import { cn } from '@/utils/cn';

type PathMask = { viewBox: string; d: string };
type Ratios = { mobile?: string; tablet?: string; desktop?: string };

export type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string; // width / alignment only
  mobileMask: string | PathMask;
  tabletMask: string | PathMask;
  desktopMask: string | PathMask;
  ratios?: Ratios; // aspect per breakpoint
};

const toDataUri = (m: string | PathMask) =>
  typeof m === 'string'
    ? m
    : `data:image/svg+xml;utf8,${encodeURIComponent(
        `<svg viewBox="${m.viewBox}" xmlns="http://www.w3.org/2000/svg"><path d="${m.d}" fill="black"/></svg>`
      )}`;

const maskStyle = (uri: string): React.CSSProperties => ({
  WebkitMaskImage: `url(${uri})`,
  maskImage: `url(${uri})`,
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
  WebkitMaskSize: '100% 100%',
  maskSize: '100% 100%',
});

export default function MaskedImage({
  src,
  alt,
  priority,
  className,
  mobileMask,
  tabletMask,
  desktopMask,
  ratios,
}: Props) {
  const m = toDataUri(mobileMask);
  const t = toDataUri(tabletMask);
  const d = toDataUri(desktopMask);

  return (
    <div className={cn('w-full', className)}>
      {/* mobile */}
      <div
        className={cn('relative block md:hidden', ratios?.mobile)}
        style={maskStyle(m)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
        />
      </div>

      {/* tablet */}
      <div
        className={cn('relative hidden md:block xl:hidden', ratios?.tablet)}
        style={maskStyle(t)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
        />
      </div>

      {/* desktop */}
      <div
        className={cn('relative hidden xl:block', ratios?.desktop)}
        style={maskStyle(d)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
        />
      </div>
    </div>
  );
}
