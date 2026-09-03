'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface InfiniteMarqueeProps {
  text: string;
  direction?: 'left' | 'right';
  speed?: 'slow' | 'medium' | 'fast';
  separator?: string;
}

const InfiniteMarquee = ({
  text,
  direction = 'left',
  speed = 'medium',
  separator = '✦'
}: InfiniteMarqueeProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  const speedMap = {
    slow: 80,
    medium: 60,
    fast: 40
  };

  const duration = speedMap[speed];
  const fullText = `${text} ${separator} `;
  const displayText = Array(3).fill(fullText).join('');

  if (prefersReducedMotion) {
    return (
      <div className="w-full overflow-hidden py-6 bg-dark-secondary/50 border-y border-cyan/10">
        <div className="text-center text-gray-300 font-grotesk font-semibold text-lg px-4">
          {text}
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full overflow-hidden py-6 bg-dark-secondary/50 border-y border-cyan/10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: direction === 'left' ? [-100, -100 - 100] : [0, 100]
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
          paused: isPaused
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="text-gray-300 font-grotesk font-semibold text-lg md:text-xl px-12 flex items-center space-x-12"
          >
            {displayText}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteMarquee;
