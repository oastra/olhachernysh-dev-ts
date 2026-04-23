'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  src: string;
  alt: string;
  placeholderLabel: string;
  className?: string;
  objectPosition?: 'top' | 'center';
};

export default function SlotImage({
  src,
  alt,
  placeholderLabel,
  className,
  objectPosition = 'center',
}: Props) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setFailed(true);
    }
  }, [src]);

  if (failed) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center text-ink/30 text-h6 gap-1 text-center px-4">
        <span>{placeholderLabel}</span>
        <span className="text-[11px] uppercase tracking-[0.1em] text-ink/25">
          will be here soon
        </span>
      </div>
    );
  }

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={className}
      style={{ objectPosition: objectPosition === 'top' ? 'top' : 'center' }}
      loading="lazy"
    />
  );
}
