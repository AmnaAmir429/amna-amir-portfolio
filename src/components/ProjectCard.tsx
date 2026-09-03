'use client';

import { motion } from 'framer-motion';
import { Project } from '@/types';
import { Github, ExternalLink } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="relative h-full rounded-xl border-2 border-dark-secondary bg-dark-secondary/30 hover:border-cyan/50 transition-all duration-300 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative p-6 space-y-4 h-full flex flex-col">
          <div className="flex items-start justify-between">
            <div className="text-4xl">{project.image}</div>
            <div className="flex gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-dark-secondary hover:bg-electric-blue/20 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github size={18} className="text-cyan" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-dark-secondary hover:bg-electric-blue/20 transition-colors duration-300"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={18} className="text-cyan" />
                </a>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-grotesk font-bold text-white group-hover:text-cyan transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.category.slice(0, 2).map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 text-xs rounded-full bg-electric-blue/10 text-electric-blue border border-electric-blue/30"
              >
                {cat}
              </span>
            ))}
            {project.category.length > 2 && (
              <span className="px-3 py-1 text-xs rounded-full bg-cyan/10 text-cyan border border-cyan/30">
                +{project.category.length - 2}
              </span>
            )}
          </div>

          <div className="mt-auto pt-4 border-t border-dark-secondary/50">
            <div className="flex flex-wrap gap-1">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-gray-400 bg-dark-secondary px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs text-gray-400 bg-dark-secondary px-2 py-1 rounded">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
