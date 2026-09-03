'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const Experience = () => {
  const experiences = [
    {
      title: 'AI Research Assistant',
      organization: 'Fatima Jinnah Women University',
      period: '2024 - Present',
      description: 'Conducting research on autonomous systems and machine learning applications in robotics. Published papers on gesture recognition and pathfinding algorithms.'
    },
    {
      title: 'Robotics Project Lead',
      organization: 'FJWU Robotics Club',
      period: '2023 - 2024',
      description: 'Led a team of 5 students in developing autonomous navigation robots. Managed project timeline, mentored junior members, and presented at regional robotics competitions.'
    },
    {
      title: 'Machine Learning Intern',
      organization: 'Tech Innovation Lab',
      period: '2023',
      description: 'Developed computer vision models for gesture recognition. Optimized neural networks for mobile deployment and created data annotation pipelines.'
    },
    {
      title: 'Full Stack Developer (Freelance)',
      organization: 'Independent Projects',
      period: '2022 - Present',
      description: 'Built 8+ web applications using React, Next.js, and Node.js. Worked with clients on IoT dashboards, data visualization platforms, and automation tools.'
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
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
              Experience & <span className="text-cyan">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-electric-blue to-cyan mx-auto" />
          </motion.div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative pl-8 border-l-2 border-cyan/30 hover:border-cyan transition-colors duration-300"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-electric-blue to-cyan rounded-full transform -translate-x-2.5 shadow-glow" />
                
                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-xl font-grotesk font-bold text-white">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-cyan font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-electric-blue font-semibold">
                    {exp.organization}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 p-6 rounded-xl border-2 border-cyan/30 bg-cyan/5"
          >
            <h3 className="text-xl font-grotesk font-bold text-white mb-4">
              Education
            </h3>
            <div className="space-y-2">
              <p className="text-lg text-gray-300">
                <span className="text-cyan font-semibold">Bachelor of Science in Robotics & AI</span>
              </p>
              <p className="text-gray-400">
                Fatima Jinnah Women University, Rawalpindi, Pakistan
              </p>
              <p className="text-gray-400">
                Expected Graduation: 2025
              </p>
              <p className="text-sm text-electric-blue mt-3">
                GPA: 3.8/4.0 | Dean's List | Robotics Competition Winner
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
