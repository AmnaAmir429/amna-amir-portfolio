'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface SkillCardProps {
  name: string;
  index: number;
}

const SkillCard = ({ name, index }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div
        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
          isHovered
            ? 'border-cyan bg-cyan/5 shadow-glow'
            : 'border-dark-secondary bg-dark-secondary/50'
        }`}
      >
        <p className="text-gray-200 font-medium text-center">{name}</p>
      </div>
    </motion.div>
  );
};

export default SkillCard;
