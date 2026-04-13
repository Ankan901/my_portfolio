// src/components/ServiceCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, features }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="glass-card p-6 group cursor-pointer transition-all duration-300"
    >
      <div className="mb-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-purple-400" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, idx) => (
          <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
            {feature}
          </li>
        ))}
      </ul>
      <div className="flex items-center text-purple-400 text-sm font-medium gap-1 group-hover:gap-2 transition-all">
        Learn more <ArrowRight size={14} />
      </div>
    </motion.div>
  );
};

export default ServiceCard;