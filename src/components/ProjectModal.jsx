// src/components/ProjectModal.jsx
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, TrendingUp, Code, Target } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative glass-card max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold gradient-text mb-4">{project.title}</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <Target size={18} className="text-purple-400" />
                  Project Overview
                </h3>
                <p className="text-gray-300">{project.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <TrendingUp size={18} className="text-purple-400" />
                  Key Impact
                </h3>
                <p className="text-gray-300">{project.impact}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <Code size={18} className="text-purple-400" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-white/10 text-sm text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.challenge && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Challenge</h3>
                  <p className="text-gray-300">{project.challenge}</p>
                </div>
              )}

              {project.solution && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Solution</h3>
                  <p className="text-gray-300">{project.solution}</p>
                </div>
              )}

              <div className="flex gap-4 pt-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:shadow-lg transition-shadow"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-purple-500/50 text-white font-medium hover:bg-purple-600/20 transition-colors"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;