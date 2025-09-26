import { useLayoutEffect, useState } from 'react';

export default function useContainerWidth<T extends HTMLElement>(
  ref: React.RefObject<T | null>
) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });

    resizeObserver.observe(element);
    return () => resizeObserver.disconnect();
  }, [ref]);

  return width;
}
