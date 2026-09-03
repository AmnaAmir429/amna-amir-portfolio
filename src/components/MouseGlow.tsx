'use client';

import { useMouseGlow } from '@/hooks/useMouseGlow';
import { useEffect, useState } from 'react';

const MouseGlow = () => {
  const glowRef = useMouseGlow();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  if (prefersReducedMotion) return null;

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed w-96 h-96 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-40"
      style={{
        background: 'radial-gradient(circle, rgba(0, 217, 255, 0.15) 0%, rgba(0, 217, 255, 0) 70%)',
        filter: 'blur(40px)',
        transition: 'all 0.1s ease-out'
      }}
    />
  );
};

export default MouseGlow;
