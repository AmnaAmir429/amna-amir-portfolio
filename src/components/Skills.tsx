'use client';

import { motion } from 'framer-motion';
import { skillsData } from '@/data/skills';
import SkillCard from './SkillCard';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-grotesk font-bold text-white">
              Skills & <span className="text-cyan">Technologies</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-electric-blue to-cyan mx-auto" />
          </motion.div>

          <div className="space-y-12">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                variants={fadeInUp}
                className="space-y-4"
              >
                <h3 className="text-xl font-grotesk font-bold text-cyan uppercase tracking-wider">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard
                      key={skill}
                      name={skill}
                      index={categoryIndex * 10 + skillIndex}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
