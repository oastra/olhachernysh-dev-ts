'use client';
import { useEffect } from 'react';

export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = locked ? 'hidden' : prev || '';
    return () => {
      document.body.style.overflow = prev || '';
    };
  }, [locked]);
}
