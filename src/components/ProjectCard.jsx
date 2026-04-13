// src/components/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';

const ProjectCard = ({ project, onViewDetails }) => {
  const { title, description, techStack, impact, liveDemo, github } = project;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="glass-card overflow-hidden group cursor-pointer transition-all duration-300"
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{description}</p>
        
        <div className="mb-3">
          <div className="text-xs text-purple-400 font-semibold mb-1">Key Impact:</div>
          <p className="text-sm text-gray-300">{impact}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.slice(0, 3).map((tech, idx) => (
            <span key={idx} className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <div className="flex gap-3">
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={18} />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={18} />
            </a>
          </div>
          <button
            onClick={onViewDetails}
            className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            <Eye size={16} />
            Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;