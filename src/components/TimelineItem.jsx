// src/components/TimelineItem.jsx
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
      className={`relative flex flex-col md:flex-row gap-8 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <div className="flex-1 md:text-right">
        <div className={`glass-card p-6 ${!isEven && 'md:text-left'}`}>
          <div className="absolute left-1/2 transform -translate-x-1/2 -ml-3 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hidden md:block"></div>
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          <p className="text-purple-400 text-sm mb-2">{item.period}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {item.tools.map((tool, idx) => (
              <span key={idx} className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300">
                {tool}
              </span>
            ))}
          </div>
          <p className="text-gray-300 text-sm mb-2">{item.problem}</p>
          <p className="text-gray-400 text-sm">{item.solution}</p>
          <div className="mt-3 pt-2 border-t border-white/10">
            <span className="text-purple-400 text-sm font-semibold">Impact: </span>
            <span className="text-gray-300 text-sm">{item.impact}</span>
          </div>
        </div>
      </div>
      <div className="flex-1"></div>
    </motion.div>
  );
};

export default TimelineItem;