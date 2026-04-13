// src/components/SkillCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const SkillCard = ({ category, skills, icon: Icon }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass-card p-6 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-purple-600/20">
          <Icon className="w-6 h-6 text-purple-400" />
        </div>
        <h3 className="text-lg font-semibold text-white">{category}</h3>
      </div>
      <div className="space-y-3">
        {skills.map((skill, idx) => (
          <div key={idx}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-300">{skill.name}</span>
              <span className="text-purple-400">{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;