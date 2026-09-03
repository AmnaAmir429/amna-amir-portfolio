'use client';

import { motion } from 'framer-motion';
import { projectsData } from '@/data/projects';
import ProjectCard from './ProjectCard';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
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
              Featured <span className="text-cyan">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-electric-blue to-cyan mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
