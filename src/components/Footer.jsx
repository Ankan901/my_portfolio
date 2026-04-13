import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400 text-sm flex items-center justify-center gap-1">
          Made with <Heart size={14} className="text-blue-500 fill-blue-500" /> by <span className="text-purple-400">Ankan Karmakar</span>
        </p>
        <p className="text-gray-500 text-xs mt-2">© 2026 Ankan Karmakar | Data Analyst & Power Platform Developer</p>
      </div>
    </footer>
  );
};

export default Footer;