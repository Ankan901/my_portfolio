import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Users } from 'lucide-react';
import profilePhoto from '../assets/1000134044.png';

const About = () => {
  const stats = [
    { icon: Award, value: '10+', label: 'Projects Delivered' },
    { icon: TrendingUp, value: '50%', label: 'Efficiency Gain' },
    { icon: Users, value: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center order-2 lg:order-1"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden glass-card p-2">
                <img 
                  src={profilePhoto} 
                  alt="Ankan Karmakar - Data Analyst Professional" 
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-purple-600/20 text-purple-400 text-sm font-medium">
                About Ankan Karmakar
              </span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              I'm <span className="text-purple-400 font-semibold">Ankan Karmakar</span>, a passionate Data Analyst and Power Platform Developer with a proven track record of transforming complex business challenges into streamlined, data-driven solutions. 
              My expertise bridges the gap between raw data and actionable insights, delivering scalable applications that drive real business impact.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With hands-on experience in Power BI, Power Apps, Power Automate, and SharePoint, I've helped organizations reduce operational costs, 
              improve decision-making speed, and automate repetitive tasks. I believe in creating solutions that not only work but also empower teams to achieve more.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx} 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;