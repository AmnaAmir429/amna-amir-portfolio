'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-grotesk font-bold text-white">
              About <span className="text-cyan">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-electric-blue to-cyan mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a Robotics & AI student at Fatima Jinnah Women University, passionate about building intelligent systems that connect software, automation and real-world problem solving.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Through academic and independent projects, I've been exploring Python, machine learning, robotics, automation and AI-powered applications while continuously expanding my technical skills.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My interests span across artificial intelligence, intelligent systems design, robotics engineering, and the practical applications of automation in solving meaningful problems.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="relative h-96 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-cyan/20 rounded-2xl blur-2xl" />
              <motion.div
                className="relative w-64 h-64 rounded-2xl border-2 border-cyan/50 flex items-center justify-center bg-dark-secondary/50 backdrop-blur-sm"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(0, 217, 255, 0.3)',
                    '0 0 40px rgba(0, 217, 255, 0.5)',
                    '0 0 20px rgba(0, 217, 255, 0.3)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-6xl">🤖</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
