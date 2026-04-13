import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help transform your ideas into reality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:shadow-lg transition-shadow"
              >
                <Send size={18} />
                Send Message
              </motion.button>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center text-sm"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/ankan901/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-purple-600/20 group-hover:bg-purple-600/30 transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <span>linkedin.com/in/ankan901</span>
                </a>
                <a
                  href="https://github.com/Ankan901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-purple-600/20 group-hover:bg-purple-600/30 transition-colors">
                    <Github size={20} />
                  </div>
                  <span>github.com/Ankan901</span>
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="p-2 rounded-lg bg-purple-600/20">
                    <Mail size={20} />
                  </div>
                  <span>ankan.karmakar@outlook.com</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Availability</h3>
              <p className="text-gray-300 mb-2">📍 Available for freelance and remote projects</p>
              <p className="text-gray-300">⚡ Quick response within 24 hours</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;