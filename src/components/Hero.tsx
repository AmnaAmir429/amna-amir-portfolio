'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import HeroVisual from './HeroVisual';
import { useParallax } from '@/hooks/useParallax';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const Hero = () => {
  const { ref, offset } = useParallax(0.5);

  return (
    <section id="home" className="min-h-screen pt-20 pb-20 flex items-center overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-grotesk font-bold text-white leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-electric-blue to-cyan bg-clip-text text-transparent">Amna Amir</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-grotesk font-semibold text-cyan">
                Robotics & AI Student
              </h2>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-lg text-gray-300 leading-relaxed max-w-xl">
              Building intelligent systems through AI, robotics, programming and automation. Exploring the intersection of intelligent software, robotics and emerging technologies.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="#projects">
                <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-electric-blue to-cyan text-dark-bg font-semibold flex items-center space-x-2 hover:shadow-glow-lg transition-all duration-300 hover:scale-105">
                  <span>Explore My Work</span>
                  <ArrowRight size={20} />
                </button>
              </Link>
              <button className="px-8 py-3 rounded-lg border-2 border-cyan text-cyan font-semibold hover:bg-cyan/10 transition-all duration-300">
                Download CV
              </button>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Connect:</span>
              <a
                href="https://github.com/AmnaAmir429"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-dark-secondary hover:bg-cyan/10 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github size={20} className="text-cyan group-hover:text-electric-blue transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-dark-secondary hover:bg-cyan/10 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-cyan group-hover:text-electric-blue transition-colors" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px)`
            }}
            className="hidden md:block"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
