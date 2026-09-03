'use client';

import { motion } from 'framer-motion';

const HeroVisual = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="absolute w-80 h-80 rounded-full border-2 border-electric-blue/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full border-2 border-cyan/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full border-2 border-violet/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="relative w-32 h-32 rounded-full bg-gradient-to-br from-electric-blue to-cyan flex items-center justify-center shadow-glow-lg"
        animate={{
          boxShadow: [
            '0 0 20px rgba(0, 128, 255, 0.5), 0 0 40px rgba(0, 217, 255, 0.3)',
            '0 0 30px rgba(0, 128, 255, 0.7), 0 0 60px rgba(0, 217, 255, 0.5)',
            '0 0 20px rgba(0, 128, 255, 0.5), 0 0 40px rgba(0, 217, 255, 0.3)'
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <motion.div
          className="w-24 h-24 rounded-full bg-dark-bg flex items-center justify-center border border-cyan/50"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="text-3xl">⚙️</div>
        </motion.div>
      </motion.div>
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan rounded-full"
          style={{
            left: `${Math.cos((i / 6) * Math.PI * 2) * 140}px`,
            top: `${Math.sin((i / 6) * Math.PI * 2) * 140}px`
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity
          }}
        />
      ))}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-0.5 bg-gradient-to-r from-electric-blue/50 to-transparent"
          style={{
            width: `${100 + i * 40}px`,
            transform: `rotate(${i * 120}deg)`,
            transformOrigin: 'left center',
            left: '50%',
            top: '50%'
          }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4 + i, repeat: Infinity }}
        />
      ))}
    </div>
  );
};

export default HeroVisual;
