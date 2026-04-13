import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative flex flex-col md:flex-row gap-8 mb-8"
    >
      {/* Circle icon in the middle - properly positioned */}
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block z-10">
        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 ring-4 ring-purple-900/50"></div>
      </div>
      
      {/* Left side for even items, right side for odd items */}
      <div className={`flex-1 ${isEven ? 'md:text-right md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
        <div className="glass-card p-6 hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          <p className="text-purple-400 text-sm mb-2">{item.period}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {item.tools.map((tool, idx) => (
              <span key={idx} className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300">
                {tool}
              </span>
            ))}
          </div>
          <p className="text-gray-300 text-sm mb-2">
            <span className="text-purple-400 font-semibold">Problem: </span>
            {item.problem}
          </p>
          <p className="text-gray-300 text-sm mb-2">
            <span className="text-purple-400 font-semibold">Solution: </span>
            {item.solution}
          </p>
          <div className="mt-3 pt-2 border-t border-white/10">
            <span className="text-purple-400 text-sm font-semibold">Impact: </span>
            <span className="text-gray-300 text-sm">{item.impact}</span>
          </div>
        </div>
      </div>
      
      {/* Empty div for spacing on the other side */}
      <div className="flex-1 hidden md:block"></div>
    </motion.div>
  );
};

export default TimelineItem;