'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-grotesk font-bold text-white">
              Let's <span className="text-cyan">Connect</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-electric-blue to-cyan mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 py-12">
            <motion.a
              variants={fadeInUp}
              href="mailto:aamnaxyz84@gmail.com"
              className="group p-6 rounded-xl border-2 border-dark-secondary hover:border-cyan/50 bg-dark-secondary/30 hover:bg-cyan/5 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <Mail size={24} className="text-cyan group-hover:text-electric-blue transition-colors" />
                <ArrowRight size={20} className="text-gray-400 group-hover:text-cyan transition-colors" />
              </div>
              <h3 className="text-lg font-grotesk font-bold text-white mb-2">
                Email
              </h3>
              <p className="text-gray-400 text-sm">
                aamnaxyz84@gmail.com
              </p>
            </motion.a>

            <motion.a
              variants={fadeInUp}
              href="https://github.com/AmnaAmir429"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl border-2 border-dark-secondary hover:border-cyan/50 bg-dark-secondary/30 hover:bg-cyan/5 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <Github size={24} className="text-cyan group-hover:text-electric-blue transition-colors" />
                <ArrowRight size={20} className="text-gray-400 group-hover:text-cyan transition-colors" />
              </div>
              <h3 className="text-lg font-grotesk font-bold text-white mb-2">
                GitHub
              </h3>
              <p className="text-gray-400 text-sm">
                github.com/AmnaAmir429
              </p>
            </motion.a>

            <motion.a
              variants={fadeInUp}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl border-2 border-dark-secondary hover:border-cyan/50 bg-dark-secondary/30 hover:bg-cyan/5 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <Linkedin size={24} className="text-cyan group-hover:text-electric-blue transition-colors" />
                <ArrowRight size={20} className="text-gray-400 group-hover:text-cyan transition-colors" />
              </div>
              <h3 className="text-lg font-grotesk font-bold text-white mb-2">
                LinkedIn
              </h3>
              <p className="text-gray-400 text-sm">
                Connect with me
              </p>
            </motion.a>
          </div>

          <motion.div
            variants={fadeInUp}
            className="text-center pt-8 border-t border-dark-secondary/50"
          >
            <p className="text-gray-400 text-sm">
              © 2024 Amna Amir. Built with React, Next.js, and Tailwind CSS.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
